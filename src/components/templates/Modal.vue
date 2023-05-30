<template>
  <div
    class="overflow-hidden fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-50"
    v-if="show"
    @click.self="$emit('closeModal')"
  >
    <div
      class="mb-6 transform rounded-lg bg-white shadow-xl transition-all sm:m-auto sm:w-full sm:max-w-2xl"
    >
      <div class="relative px-6 py-4">
        <div class="flex">
          <h2 class="text-zinc-600 text-base md:text-xl">
            {{ modalTitle }}
          </h2>
          <button type="button" @click="$emit('closeModal')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="stroke-1 absolute right-5 top-4 flex-shrink-0 cursor-pointer text-zinc-500 hover:text-zinc-700 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <form @submit.prevent="submitForm">
          <div>
            <div class="grid grid-cols-6 gap-6 mt-4 mb-2">
              <div v-for="field in fields" :class="gridColumns[field.colSpan]">
                <template v-if="field.type === 'input'">
                  <label
                    class="block font-medium text-sm text-gray-700"
                    :for="`edit-${field.id}`"
                  >
                    <span>
                      {{ field.title }}
                    </span>
                  </label>
                  <input
                    class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                    type="text"
                    :id="`edit-${field.id}`"
                    v-model="fieldValues[field.id]"
                    required
                  />
                </template>
                <template v-if="field.type === 'select'">
                  <label
                    class="block font-medium text-sm text-gray-700"
                    :for="`edit-${field.id}`"
                  >
                    <span>
                      {{ field.title }}
                    </span>
                  </label>
                  <Home :field="field.choice" />
                </template>
                <template v-if="field.type === 'textarea'">
                  <label
                    class="block font-medium text-sm text-gray-700"
                    :for="`edit-${field.id}`"
                  >
                    <span>
                      {{ field.title }}
                    </span>
                  </label>
                  <div>
                    <textarea
                      class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-32 focus:ring-0 focus:border-indigo-400 p-2"
                      :id="`edit-${field.id}`"
                      v-model="fieldValues[field.id]"
                      required
                    ></textarea>
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="flex justify-end">
            <slot name="buttons"></slot>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, onMounted, computed, onBeforeMount } from 'vue'
import Home from '../Home.vue'
export default defineComponent({
  name: 'Modal',
  components: {
    Home,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    item: {
      type: Object || null,
      required: true,
    },
    fields: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    fieldsValues: Object,
  },
  methods: {
    handleSubmit() {
      this.$emit('submitForm', this.fieldValues)
    },
    closeModal() {
      this.$emit('closeModal')
    },
  },
  setup(props, { emit }) {
    console.log(props.fields)
    const newItem = ref(true)
    const fieldValues = ref({})
    onMounted(() => {
      if (props.item) {
        props.fields.forEach((field) => {
          fieldValues.value[field.id] = props.item[field.id]
        })
        fieldValues.value.id = props.item.id
        newItem.value = false
      }
    })
    props.fields.forEach((field) => {
      if (field.type === 'select') {
        fieldValues.value[field.id] = field.choice[0]
      }
    })
    onBeforeMount(() => {
      props.fields.forEach((field) => {
        if (field.type === 'select') {
          field.selectedChoice = field.choice[0]
        }
      })
    })
    const submitForm = () => {
      let values = { ...fieldValues.value }
      emit('submitForm', values, newItem.value)
    }

    const modalTitle = computed(() => {
      if (props.title) {
        return props.title
      } else if (props.item === null) {
        return 'Добавление'
      } else {
        return 'Редактирование'
      }
    })
    const gridColumns = {
      2: 'col-span-2',
      6: 'col-span-6',
    }

    return {
      newItem,
      submitForm,
      modalTitle,
      fieldValues,
      gridColumns,
    }
  },
})
</script>
