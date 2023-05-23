<template>
  <div
    class="fixed inset-0 z-10 flex items-center justify-center bg-gray-500 bg-opacity-50"
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
              <div v-for="field in fields" :class="getFieldColumnClass(field)">
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
                    :value="field.title"
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
                  <select
                    class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2 select-style"
                    :id="`edit-${field.id}`"
                    v-model="field.selectedChoice"
                  >
                    <option
                      class="relative form-text-color cursor-default select-none py-2 pl-10 pr-4"
                      v-for="choice in field.choice"
                      :value="choice"
                      :key="choice"
                    >
                      <span
                        class="font-normal block truncate text-xs md:text-sm"
                      >
                        {{ choice }}
                      </span>
                    </option>
                  </select>
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
                      :class="getFieldTextareaClass()"
                      class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                      :id="`edit-${field.id}`"
                      :value="field.title"
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
import {
  ref,
  defineComponent,
  onMounted,
  computed,
  onBeforeMount,
  defineProps,
} from 'vue'

export default defineComponent({
  name: 'Modal',
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
  },
  methods: {
    getFieldColumnClass(field) {
      return field.type === 'textarea' ? 'col-span-6' : 'col-span-2'
    },
    getFieldTextareaClass() {
      return 'w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2'
    },
  },
  setup(props, { emit }) {
    console.log(props.fields[1].id)
    const command = ref('')
    const next_command = ref('')
    const file = ref('')
    const newItem = ref(true)
    onMounted(() => {
      if (props.item) {
        command.value = props.item.title
        next_command.value = props.item.description
        file.value = props.item.btn
        newItem.value = false
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
      emit(
        'submitForm',
        props.item,
        command.value,
        next_command.value,
        file.value,
        newItem.value,
      )
    }

    const modalTitle = computed(() => {
      if (props.item == null) {
        return props.title
      } else if (props.item === '') {
        return props.title
      } else {
        return 'Редактирование'
      }
    })

    return {
      file,
      command,
      file,
      submitForm,
      modalTitle,
    }
  },
})
</script>
