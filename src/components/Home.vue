<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      class="border border-gray-300 p-2 rounded-md"
    >
      {{ selectedOption }}
      <svg
        class="w-4 h-4 ml-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10 12.586l4.95-4.95a1 1 0 011.414 1.414l-5.657 5.657a1 1 0 01-1.414 0L3.636 9.05a1 1 0 111.414-1.414L10 12.586z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <div
      v-if="isOpen"
      class="absolute z-10 bg-white border border-gray-300 mt-2 py-2 w-48 rounded-md shadow-lg"
    >
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        @click="selectOption('Option 1')"
      >
        Option 1
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        @click="selectOption('Option 2')"
      >
        Option 2
      </a>
      <a
        href="#"
        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
        @click="selectOption('Option 3')"
      >
        Option 3
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Home',
  setup() {
    const isOpen = ref(false)
    const selectedOption = ref('Select an option')

    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        isOpen.value = false
      }
    }

    const selectOption = (option) => {
      selectedOption.value = option
      isOpen.value = false
    }

    // Add event listener to handle clicks outside the component
    window.addEventListener('click', handleClickOutside)

    return {
      isOpen,
      selectedOption,
      selectOption,
    }
  },

  // Cleanup: remove event listener when the component is destroyed
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
}
</script>
