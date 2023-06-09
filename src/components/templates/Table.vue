<template>
  <div class="bg-white px-4 py-2 mb-5 rounded-lg border border-zinc-300">
    <div class="flex flex-wrap items-center space-y-2">
      <div class="flex-auto">
        <h1 class="text-xl md:text-3xl font-semibold text-gray-900">
          {{ title }}
        </h1>
      </div>
      <div class="flex sm:mt-0 sm:flex-none">
        <DownloadExcel :title="myTitle" :items="items" />
        <div class="mt-4">
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition"
            @click="showModal = true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="w-6 pr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>
            </svg>
            Добавить
          </button>
          <Modal
            v-if="showModal"
            :show="showModal"
            @submitForm="submitForm"
            @closeModal="closeModal"
            :item="selectedItem"
            :title="modal.title"
            :fields="modal.fields"
          >
            <template #buttons>
              <button
                class="inline-flex items-center rounded-md border border-transparent bg-indigo-400 px-4 py-2 text-sm font-normal text-white transition hover:bg-indigo-500 focus:outline-none disabled:opacity-25"
                @click="$emit('submitForm', fieldsValues, true)"
              >
                Сохранить
              </button>
            </template>
          </Modal>
        </div>
      </div>
    </div>

    <div
      class="mt-4 relative py-2 w-full divide-gray-200 z-5 border-t border-gray-300"
    >
      <div class="w-full pr-24">
        <Filter />
      </div>
    </div>
    <div class="inline-block min-w-full relative">
      <div class="mt-2 grid overflow-auto">
        <table
          class="min-w-full divide-y divide-gray-200 border-t border-gray-200 text-xs lg:text-sm"
        >
          <thead>
            <th
              v-for="name in tableHeaders.names"
              class="w-48 px-2 py-1 font-normal text-gray-600 truncate"
            >
              <div class="justify-start flex items-center">
                <template v-if="name.bool === true">
                  <span>{{ name.title }}</span>
                  <div class="text-zinc-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-4 h-2.5 -mb-1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                        clip-rule="evenodd"
                      ></path></svg
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                      class="w-4 h-2.5 -mb-0.5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </template>
                <template v-else="name.type == undefined || null">
                  <span>{{ name.title }}</span>
                </template>
              </div>
            </th>
          </thead>
          <TodoItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @deleteItem="deleteItem"
            @editItem="editItem"
            @addItem="addItem"
          />
        </table>
      </div>
    </div>
    <nav
      class="flex items-center justify-between bg-white py-3"
      aria-label="Pagination"
    >
      <div class="hidden sm:block">
        <p class="text-xs lg:text-sm text-zinc-700">
          Показано с
          <span class="font-medium">
            {{ displayRangeStart }}
          </span>
          по
          <span class="font-medium">
            {{ displayRangeEnd }}
          </span>
          из
          <span class="font-medium">{{ items.length }}</span>
          результатов
        </p>
      </div>
      <div>
        <button
          v-if="currentPage > 1"
          type="button"
          class="inline-flex items-center justify-center px-4 py-1 bg-white border border-zinc-200 rounded-full font-normal text-xs ring-0 sm:text-sm text-zinc-500 hover:shadow-sm hover:text-zinc-700 focus:outline-none active:text-zinc-800 active:bg-gray-50 disabled:opacity-25 transition hover:border-zinc-300 focus-visible:border-indigo-500 ml-3 !py-px"
          @click="previousPage"
          :disabled="currentPage === 1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-6 stroke-1 text-zinc-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            ></path>
          </svg>
        </button>
        <button
          v-if="currentPage < totalPages"
          type="button"
          class="inline-flex items-center justify-center px-4 py-1 bg-white border border-zinc-200 rounded-full font-normal text-xs ring-0 sm:text-sm text-zinc-500 hover:shadow-sm hover:text-zinc-700 focus:outline-none active:text-zinc-800 active:bg-gray-50 disabled:opacity-25 transition hover:border-zinc-300 focus-visible:border-indigo-500 ml-3 !py-px"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="w-6 stroke-1 text-zinc-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<script>
import { defineComponent, ref, watch } from 'vue'
import TodoItem from './TodoItem.vue'
import Modal from './Modal.vue'
import Filter from './Filter.vue'
import DownloadExcel from './DownloadExcel.vue'
import { computed } from 'vue'

export default defineComponent({
  name: 'Table',
  props: {
    title: String,
    wrap: String,
    tableHeaders: Object,
    items: Array,
    modal: Array,
    Filters: Array,
  },
  components: {
    TodoItem,
    Modal,
    DownloadExcel,
    Filter,
  },

  setup(props) {
    const objectsName = 'table'
    const showModal = ref(false)
    const selectedItem = ref(null)
    const currentPage = ref(1)
    const itemsPerPage = 4
    const totalPages = computed(() =>
      Math.ceil(props.items.length / itemsPerPage),
    )
    const paginatedItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      console.log(startIndex, endIndex, props.items.slice(startIndex, endIndex))
      return props.items.slice(startIndex, endIndex)
    })
    const displayRangeStart = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage + 1
      const totalItems = props.items.length
      return Math.min(startIndex, totalItems)
    })
    const displayRangeEnd = computed(() => {
      const endIndex = currentPage.value * itemsPerPage
      const totalItems = props.items.length
      return Math.min(endIndex, totalItems)
    })

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1
      }
    }

    const previousPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1
      }
    }
    const fieldsValues = ref({})
    const myTitle = 'Скачать'

    const addItem = (fieldsValues) => {
      if (props.items) {
        const newItem = {
          id: Math.floor(Math.random() * 100000),
          fieldsValues,
        }
        props.items.push(newItem)
        showModal.value = false
      }
    }
    const deleteItem = (id) => {
      const index = props.items.findIndex((item) => item.id === id)
      if (index !== -1) {
        props.items.splice(index, 1)
      }
    }
    const editItem = (item) => {
      selectedItem.value = item
      showModal.value = true
    }
    const closeModal = () => {
      selectedItem.value = null
      showModal.value = false
    }

    const updateItem = (fieldsValues) => {
      item.fieldsValues = fieldsValues
      console.log(fieldsValues)
      selectedItem.value = null
      showModal.value = false
    }

    const submitForm = (fieldsValues, newItem = true) => {
      if (!newItem) {
        const index = props.items.findIndex(
          (item) => item.id === fieldsValues.id,
        )
        if (index !== -1) {
          props.items[index] = {
            ...props.items[index],
            ...fieldsValues,
          }
        }
      } else {
        const newArr = props.items.map((item) => {
          if (item.id === fieldsValues.id) {
            return fieldsValues
          }
          return item
        })
        console.warn(newArr)
        props.items = [...newArr]
      }
      closeModal()
    }
    submitForm(fieldsValues, false)
    const applyButton = ref(null)
    return {
      currentPage,
      paginatedItems,
      showModal,
      selectedItem,
      addItem,
      deleteItem,
      editItem,
      updateItem,
      applyButton,
      objectsName,
      myTitle,
      nextPage,
      previousPage,
      totalPages,
      itemsPerPage,
      displayRangeStart,
      displayRangeEnd,
      closeModal,
      submitForm,
      fieldsValues,
    }
  },
})
</script>
<style>
body {
  background-color: #f7fafc;
}
</style>
