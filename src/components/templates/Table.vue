<template>
  <div class="bg-white px-4 py-2 mb-5 rounded-lg shadow">
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
        <Filters
          v-for="filter in filters"
          :key="filter.name"
          :name="filter.name"
        />
      </div>
    </div>
    <div class="inline-block min-w-full relative">
      <div class="mt-2 grid overflow-auto">
        <table
          class="min-w-full divide-y divide-gray-200 border-t border-gray-200 text-xs lg:text-sm"
        >
          <thead>
            <TableHeaders
              v-for="tableHeader in tableHeaders"
              :key="tableHeader.nameHeader"
              :nameHeader="tableHeader.nameHeader"
            />
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
import TodoItem from '../TodoItem.vue'
import AddModal from '../AddModal.vue'
import EditModal from '../EditModal.vue'
import DownloadExcel from './DownloadExcel.vue'
import Filters from './Filters.vue'
import TableHeaders from './TableHeaders.vue'

export default defineComponent({
  name: 'Table',
  props: {
    title: {
      type: String,
      required: true,
    },
    wrap: {
      type: String,
      required: true,
    },
    filters: {
      type: Array,
      required: true,
    },
    tableHeaders: {
      type: Array,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    TodoItem,
    AddModal,
    EditModal,
    Filters,
    DownloadExcel,
    TableHeaders,
  },

  setup(props) {
    const objectsName = 'table'
    const showAddModal = ref(false)
    const showEditModal = ref(false)
    const selectedItem = ref(null)

    const myTitle = 'Скачать'

    const addItem = (title, description, btn) => {
      if (props.items && Array.isArray(props.items)) {
        const newItem = {
          id: Math.floor(Math.random() * 100000),
          title,
          description,
          btn,
        }
        props.items.push(newItem)
        showAddModal.value = false
      }
    }
    const deleteItem = (id) => {
      const index = props.items.findIndex((item) => item.id === id)
      props.items.splice(index, 1)
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
    const applyButton = ref(null)

    return {
      showAddModal,
      showEditModal,
      selectedItem,
      addItem,
      deleteItem,
      editItem,
      updateItem,
      applyButton,
      objectsName,
      myTitle,
    }
  },
})
</script>
<style>
body {
  background-color: #f7fafc;
}
</style>
