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
            class="inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition"
            @click="exportData"
          >
            Скачать
          </button>
        </div>
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
    <Home />
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
            @addItem="addItem"
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
import { defineComponent, ref, watch } from 'vue'
import TodoItem from './TodoItem.vue'
import AddModal from './AddModal.vue'
import EditModal from './EditModal.vue'
import exportFromJSON from 'export-from-json'
import Home from './Home.vue'
export default defineComponent({
  name: 'Scenario',
  components: {
    TodoItem,
    AddModal,
    EditModal,
    Home,
  },

  setup() {
    const objectsName = 'table'
    const items = ref([
      { title: 'sdf', description: 'dsf', btn: 'sdf' },
      { title: 'sdf', description: 'dsf', btn: 'sdf' },
    ])
    const showAddModal = ref(false)
    const showEditModal = ref(false)
    const selectedItem = ref(null)

    async function exportData() {
      try {
        const data = []
        for (let i = 0; i < items.length; i++) {
          const rowData = []
          rowData.push(items[i].title)
          rowData.push(items[i].description)
          rowData.push(items[i].btn)
          data.push(rowData)
        }

        const fileName = `${objectsName || 'exported-data'}.xls`
        const exportType = exportFromJSON.types.xls
        exportFromJSON({ data, fileName, exportType })
      } catch (error) {
        console.error(error)
        throw new Error('Export failed!')
      }
    }

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
    const selectedOption = ref('')
    const inputValue = ref('')
    const applyButton = ref(null)
    const selectedOptionBtn = ref('Select an option')
    const selectedOptionText = ref('Select an option')

    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        isOpen.value = false
        isOpenText.value = false
        isOpenBtn.value = false
      }
    }
    watch(isOpenText, (newValue) => {
      if (newValue) {
        isOpen.value = false
        isOpenBtn.value = false
      }
    })
    watch(isOpen, (newValue) => {
      if (newValue) {
        isOpenText.value = false
        isOpenBtn.value = false
      }
    })
    watch(isOpenBtn, (newValue) => {
      if (newValue) {
        isOpen.value = false
        isOpenText.value = false
      }
    })
    const selectOption = () => {
      selectedOption.value = inputValue.value
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
      inputValue,
      applyButton,
      objectsName,
      items,
      exportData,
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
