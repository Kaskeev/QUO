<template>
  <div class="bg-white px-4 py-2 mb-5 rounded-lg shadow">
    <div class="flex flex-wrap items-center space-y-2">
      <div class="flex-auto">
        <h1 class="text-xl md:text-3xl font-semibold text-gray-900">
          Сценарий
        </h1>
      </div>
      <div class="flex sm:mt-0 sm:flex-none">
        <div class="mt-4">
          <button
            type="button"
            class="inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition"
            @click="showAddModal = true"
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
          <AddModal
            :show="showAddModal"
            @closeModal="showAddModal = false"
            @addItem="addItem"
          />
        </div>
      </div>
    </div>
    <div
      class="mt-4 relative py-2 w-full divide-gray-200 z-5 border-t border-gray-300"
    >
      <div class="w-full pr-24">
        <div data-headlessui-state="" class="flex inline-flex text-left mr-1">
          <div
            class="relative border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400 w-max my-0.5"
          >
            <button
              @click="isOpen = !isOpen"
              class="inline-flex focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-4 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Команда
              <!-- {{ selectedOption }} -->
            </button>
            <div
              v-if="isOpen"
              class="absolute top-8 z-10 w-64 bg-white text-gray-600 shadow-sm p-2 rounded-md border border-gray-100 text-xs"
            >
              <span class="text-left">Фильтр по "Команда"</span>
              <div class="my-2 flex items-center">
                <input
                  class="block w-full h-7 text-xs focus:border-gray-400 active:border-gray-400 focus:ring-0 p-0.5 text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                  itemstitle="value"
                  itemsvalue="id"
                  translate="false"
                />
                <!--v-if-->
              </div>
              <button
                type="submit"
                class="p-1 w-full inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition focus:outline-none focus-visible:border-indigo-600"
                @click="selectOption('Option 1')"
              >
                Применить
              </button>
            </div>
          </div>
          <div
            class="relative border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400 w-max my-0.5"
          >
            <button
              @click="isOpenText = !isOpenText"
              class="inline-flex focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-4 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Текст сообщения
              <!-- {{ selectedOption }} -->
            </button>
            <div
              v-if="isOpenText"
              class="absolute top-8 z-10 w-64 bg-white text-gray-600 shadow-sm p-2 rounded-md border border-gray-100 text-xs"
            >
              <span class="text-left">Фильтр по "Текст сообщения"</span>
              <div class="my-2 flex items-center">
                <input
                  class="block w-full h-7 text-xs focus:border-gray-400 active:border-gray-400 focus:ring-0 p-0.5 text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                  itemstitle="value"
                  itemsvalue="id"
                  translate="false"
                />
                <!--v-if-->
              </div>
              <button
                type="submit"
                class="p-1 w-full inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition focus:outline-none focus-visible:border-indigo-600"
                @click="selectOptionText('Option 1')"
              >
                Применить
              </button>
            </div>
          </div>
          <div
            class="relative border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400 w-max my-0.5"
          >
            <button
              @click="isOpenBtn = !isOpenBtn"
              class="inline-flex focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                class="w-4 mr-1"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Кнопки
              <!-- {{ selectedOption }} -->
            </button>
            <div
              v-if="isOpenBtn"
              class="absolute top-8 z-10 w-64 bg-white text-gray-600 shadow-sm p-2 rounded-md border border-gray-100 text-xs"
            >
              <span class="text-left">Фильтр по "Кнопки"</span>
              <div class="my-2 flex items-center">
                <input
                  class="block w-full h-7 text-xs focus:border-gray-400 active:border-gray-400 focus:ring-0 p-0.5 text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                  itemstitle="value"
                  itemsvalue="id"
                  translate="false"
                />
                <!--v-if-->
              </div>
              <button
                type="submit"
                class="p-1 w-full inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition focus:outline-none focus-visible:border-indigo-600"
                @click="selectOptionBtn('Option 1')"
              >
                Применить
              </button>
            </div>
          </div>
        </div>
        <!--Filter Menu-->
        <div
          class="absolute bg-white block sm:inline-flex right-0 p-1.5 pb-0.5 top-1 rounded-md"
        >
          <button
            class="inline-flex ml-1 text-xs text-gray-400"
            id="headlessui-popover-button-6"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="w-4"
            >
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Очистить
          </button>
          <div
            data-headlessui-state=""
            class="relative flex flex-row-reverse text-left"
          >
            <!--v-if-->
            <!---->
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block min-w-full relative">
      <div class="mt-2 grid overflow-auto">
        <table
          class="min-w-full divide-y divide-gray-200 border-t border-gray-200 text-xs lg:text-sm"
        >
          <thead>
            <th class="w-48 px-2 py-1 font-normal text-gray-600 truncate">
              <div class="justify-start flex items-center">
                Команда
                <div class="text-gray-400">
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
                    ></path>
                  </svg>
                  <svg
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
              </div>
            </th>
            <th class="w-56 px-2 py-1 font-normal text-gray-600 truncate">
              <div class="justify-start flex items-center">
                Текст сообщения
                <!--v-if-->
              </div>
            </th>
            <th class="w-96 px-2 py-1 font-normal text-gray-600 truncate">
              <div class="justify-start flex items-center">
                Кнопки
                <!--v-if-->
              </div>
            </th>
            <th class="px-2 py-1 font-normal text-gray-600 truncate">
              <div class="justify-start flex items-center">
                Следующая команда
                <!--v-if-->
              </div>
            </th>
            <th class="py-2.5 pl-3 pr-6 bg-white sticky right-0"></th>
          </thead>
          <TodoItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @deleteItem="deleteItem"
            @editItem="editItem"
          />
          <EditModal
            :show="showEditModal"
            :item="selectedItem"
            @closeModal="showEditModal = false"
            @updateItem="updateItem"
          />
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import TodoItem from './TodoItem.vue'
import AddModal from './AddModal.vue'
import EditModal from './EditModal.vue'

export default defineComponent({
  name: 'Scenario',
  components: {
    TodoItem,
    AddModal,
    EditModal,
  },
  setup() {
    const items = ref([])
    const showAddModal = ref(false)
    const showEditModal = ref(false)
    const selectedItem = ref(null)

    const addItem = (title, description, btn) => {
      const newItem = {
        id: Math.floor(Math.random() * 100000),
        title,
        description,
        btn,
      }
      items.value.push(newItem)
      showAddModal.value = false
    }

    const deleteItem = (id) => {
      const index = items.value.findIndex((item) => item.id === id)
      items.value.splice(index, 1)
    }

    const editItem = (item) => {
      selectedItem.value = item
      showEditModal.value = true
    }

    const updateItem = (item, title, description, btn) => {
      item.title = title
      item.description = description
      item.btn = btn
      selectedItem.value = null
      showEditModal.value = false
    }
    const isOpen = ref(false)
    const isOpenBtn = ref(false)
    const isOpenText = ref(false)
    const selectedOption = ref('Select an option')
    const selectedOptionBtn = ref('Select an option')
    const selectedOptionText = ref('Select an option')

    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        isOpen.value = false
        isOpenText.value = false
        isOpenBtn.value = false
      }
    }

    const selectOption = (option) => {
      selectedOption.value = option
      isOpen.value = false
    }
    const selectOptionText = (option) => {
      selectedOptionText.value = option
      isOpenText.value = false
    }
    const selectOptionBtn = (option) => {
      selectedOptionBtn.value = option
      isOpenBtn.value = false
    }

    // Add event listener to handle clicks outside the component
    window.addEventListener('click', handleClickOutside)

    return {
      items,
      showAddModal,
      showEditModal,
      selectedItem,
      addItem,
      deleteItem,
      editItem,
      updateItem,
      isOpen,
      isOpenBtn,
      isOpenText,
      selectedOption,
      selectedOptionBtn,
      selectedOptionText,
      selectOption,
      selectOptionText,
      selectOptionBtn,
    }
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
})
</script>
<style>
body {
  background-color: #f7fafc;
}
</style>
