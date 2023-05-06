<template>
  <div>
    <div class="flex justify-end mb-4">
      <button
        class="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        @click="showAddModal = true"
      >
        Add Task
      </button>
    </div>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">
          <TodoItem
            :item="item"
            @deleteItem="deleteItem"
            @editItem="editItem"
          />
        </li>
      </ul>
    </div>
    <AddModal
      :show="showAddModal"
      @closeModal="showAddModal = false"
      @addItem="addItem"
    />
    <EditModal
      :show="showEditModal"
      :item="selectedItem"
      @closeModal="showEditModal = false"
      @editItem="updateItem"
    />
  </div>
</template>

<script>
import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import TodoItem from './TodoItem.vue'
import AddModal from './AddModal.vue'
import EditModal from './EditModal.vue'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    AddModal,
    EditModal,
  },
  setup() {
    const state = reactive({
      items: [
        {
          id: uuidv4(),
          title: 'Learn Vue 3',
          description: 'Learn the basics of Vue 3',
        },
        {
          id: uuidv4(),
          title: 'Build a Todo App',
          description: 'Build a simple Todo app using Vue 3',
        },
      ],
      showAddModal: false,
      showEditModal: false,
      selectedItem: null,
    })

    const addItem = (title, description) => {
      state.items.push({
        id: uuidv4(),
        title,
        description,
      })
      state.showAddModal = false
    }

    const deleteItem = (item) => {
      const index = state.items.indexOf(item)
      state.items.splice(index, 1)
    }

    const editItem = (item) => {
      state.selectedItem = item
      state.showEditModal = true
    }

    const updateItem = (id, title, description) => {
      const index = state.items.findIndex((item) => item.id === id)
      state.items[index].title = title
      state.items[index].description = description
      state.showEditModal = false
    }

    return {
      items: state.items,
      showAddModal: state.showAddModal,
      showEditModal: state.showEditModal,
      selectedItem: state.selectedItem,
      addItem,
      deleteItem,
      editItem,
      updateItem,
    }
  },
}
</script>
