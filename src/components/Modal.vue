<template>
  <div class="flex flex-col items-center">
    <div class="mt-4">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="showModal = true"
      >
        Add Task
      </button>
    </div>
    <div class="w-full max-w-lg">
      <div
        class="bg-white border-2 border-gray-200 rounded-lg py-2 px-4 mb-2 flex items-center"
        v-for="task in tasks"
        :key="task.id"
      >
        <input type="checkbox" class="mr-2" v-model="task.done" />
        <span :class="{ 'line-through': task.done }">{{ task.text }}</span>
        <button
          class="ml-auto bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
          @click="editTask(task)"
        >
          Edit
        </button>
        <button
          class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
          @click="deleteTask(task)"
        >
          Delete
        </button>
      </div>
    </div>

    <!-- Add Task Modal -->
    <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showModal">
      <div class="flex items-center justify-center min-h-screen">
        <div
          class="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full p-6"
        >
          <h2 class="text-xl font-bold mb-4">Add Task</h2>
          <div class="mb-4">
            <input
              type="text"
              class="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              placeholder="Enter task"
              v-model="newTaskText"
            />
          </div>
          <div class="flex justify-end">
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              @click="showModal = false"
            >
              Cancel
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="addTask"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Edit Task Modal -->
    <div class="fixed z-10 inset-0 overflow-y-auto" v-if="showEditModal">
      <div class="flex items-center justify-center min-h-screen">
        <div
          class="bg-white rounded-lg overflow-hidden shadow-xl max-w-md w-full p-6"
        >
          <h2 class="text-xl font-bold mb-4">Edit Task</h2>
          <div class="mb-4">
            <input
              type="text"
              class="border-2 border-gray-400 rounded-lg py-2 px-4 w-full"
              :value="editedTaskText"
              @input="editedTaskText = $event.target.value"
            />
          </div>
          <div class="flex justify-end">
            <button
              class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
              @click="showEditModal = false"
            >
              Cancel
            </button>
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              @click="saveTask"
            >
              Save Task
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  data() {
    return {
      tasks: [
        { id: 1, text: 'Buy milk', done: false },
        { id: 2, text: 'Do laundry', done: false },
        { id: 3, text: 'Clean room', done: true },
      ],
      newTaskText: '',
      editedTaskText: '',
      editedTaskId: null,
      showModal: false,
      showEditModal: false,
    }
  },
  methods: {
    addTask() {
      if (this.newTaskText.trim() === '') {
        return
      }
      const task = {
        id: Date.now(),
        text: this.newTaskText.trim(),
        done: false,
      }
      this.tasks.push(task)
      this.newTaskText = ''
      this.showModal = false
    },
    editTask(task) {
      this.editedTaskText = task.text
      this.editedTaskId = task.id
      this.showEditModal = true
    },
    saveTask() {
      const task = this.tasks.find((task) => task.id === this.editedTaskId)
      task.text = this.editedTaskText.trim()
      this.editedTaskText = ''
      this.editedTaskId = null
      this.showEditModal = false
    },
    deleteTask(task) {
      const index = this.tasks.indexOf(task)
      this.tasks.splice(index, 1)
    },
  },
}
</script>
