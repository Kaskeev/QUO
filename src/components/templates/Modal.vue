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
            {{ titles[0].title }}
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
          <div class="grid grid-cols-2 gap-2 pt-5">
            <div v-for="field in fields" class="col-span-2">
              <label
                class="block font-medium text-sm text-gray-700"
                for="edit-title"
              >
                <span>
                  {{ field.title }}
                </span>
              </label>
              <template v-if="field.type === 'input'">
                <input
                  class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                  type="text"
                  id="edit-title"
                  v-model="title"
                  required
                />
              </template>
              <template v-if="field.type === 'textarea'">
                <textarea
                  class="w-full text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                  id="edit-description"
                  v-model="description"
                  required
                ></textarea>
              </template>
              <template v-if="field.type === 'select'">
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
          </div>
          <div class="flex justify-end">
            <button
              class="inline-flex items-center rounded-md border border-transparent bg-indigo-400 px-4 py-2 text-sm font-normal text-white transition hover:bg-indigo-500 focus:outline-none disabled:opacity-25"
              type="submit"
            >
              sgd
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect, defineComponent, onMounted } from 'vue'

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
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const title = ref('')
    const description = ref('')
    const btn = ref('')
    const newItem = ref(true)
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

    watchEffect(() => {
      if (props.item) {
        title.value = props.item.title
        description.value = props.item.description
        btn.value = props.item.description
      }
    })

    return {
      title,
      description,
      btn,
      submitForm,
    }
  },
})
</script>
