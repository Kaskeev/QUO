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
          <div class="">
            <div class="w-full flex justify-between flex-wrap align-center">
              <div
                v-for="field in fields"
                class="w-48 mx-2 pt-5"
                :class="{
                  hidden: field.type !== 'input' && field.type !== 'select',
                }"
              >
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
                    v-model="title"
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
                    class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                    :id="`edit-${field.id}`"
                    v-model="field.selectedChoice"
                  >
                    <option
                      v-for="choice in field.choice"
                      :value="choice"
                      :key="choice"
                    >
                      {{ choice }}
                    </option>
                  </select>
                </template>
              </div>
              <div
                v-for="field in fields"
                :class="{ hidden: field.type !== 'textarea' }"
                class="w-full mx-2 pt-5"
              >
                <template v-if="field.type === 'textarea'">
                  <label
                    class="block font-medium text-sm text-gray-700"
                    :for="`edit-${field.id}`"
                  >
                    <span>
                      {{ field.title }}
                    </span>
                  </label>
                  <div class="w-full">
                    <textarea
                      class="h-32 w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                      :id="`edit-${field.id}`"
                      v-model="description"
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
import { ref, defineComponent, onMounted, computed } from 'vue'

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
    titles: {
      type: Object,
      required: true,
    },
  },

  setup(props, { emit }) {
    const title = ref('')
    const description = ref('')
    const btn = ref('')
    const newItem = ref(true)
    console.log(props.titles)
    onMounted(() => {
      if (props.item) {
        title.value = props.item.title
        description.value = props.item.description
        btn.value = props.item.btn
        newItem.value = false
      }
    })
    const submitForm = () => {
      emit(
        'submitForm',
        props.item,
        title.value,
        description.value,
        btn.value,
        newItem.value,
      )
    }

    const modalTitle = computed(() => {
      if (props.item == null) {
        return props.titles.name
      } else {
        return 'Редактирование'
      }
    })

    return {
      title,
      description,
      btn,
      submitForm,
      modalTitle,
    }
  },
})
</script>
