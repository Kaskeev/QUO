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
          <h2 class="text-zinc-600 text-base md:text-xl">Добавить</h2>
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
          <div class="grid grid-cols-2 gap-2 pt-5">
            <div class="col-span-2">
              <label
                class="block font-medium text-sm text-gray-700"
                for="add-title"
              >
                <span>
                  Добавить команду
                </span>
              </label>
              <input
                class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                type="text"
                id="add-title"
                v-model="title"
                required
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-2 pt-5">
            <div class="col-span-2">
              <label
                class="block font-medium text-sm text-gray-700"
                for="add-description"
              >
                <span>
                  Текст сообщения
                </span>
              </label>
              <textarea
                class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                id="add-description"
                v-model="description"
                required
              ></textarea>
            </div>
          </div>
          <div class="mb-4">
            <div class="col-span-2">
              <label
                class="block font-medium text-sm text-gray-700"
                for="add-btn"
              >
                Добавить кнопку
              </label>
              <textarea
                class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                id="add-btn"
                v-model="btn"
                required
              ></textarea>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              class="inline-flex items-center rounded-md border border-transparent bg-indigo-400 px-4 py-2 text-sm font-normal text-white transition hover:bg-indigo-500 focus:outline-none disabled:opacity-25"
              type="submit"
            >
              Добавить
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AddModal',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const title = ref('')
    const description = ref('')
    const btn = ref('')

    const submitForm = () => {
      emit('addItem', title.value, description.value, btn.value)
      title.value = ''
      description.value = ''
      btn.value = ''
    }

    return {
      title,
      description,
      btn,
      submitForm,
    }
  },
}
</script>
