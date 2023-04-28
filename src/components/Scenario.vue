<template>
  <div class="bg-white px-4 py-2 mb-5 rounded-lg shadow">
    <div class="flex flex-wrap items-center space-y-2">
      <div class="flex-auto">
        <h1 class="text-xl md:text-3xl font-semibold text-gray-900">
          Сценарий
        </h1>
      </div>
      <div class="flex sm:mt-0 sm:flex-none">
        <button
          type="button"
          class="inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Scenario',

  data() {
    return {
      dates: [
        { id: 1, name: 'Today', func: this.showToday },
        { id: 2, name: 'Tomorrow', func: this.showTomorrow },
        { id: 3, name: 'Next Week', func: this.showNextWeek },
      ],
    }
  },
  methods: {
    showToday() {
      this.currentDate = new Date().toLocaleDateString()
    },
    showTomorrow() {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      this.currentDate = tomorrow.toLocaleDateString()
    },
    showNextWeek() {
      const nextWeek = new Date()
      nextWeek.setDate(nextWeek.getDate() + 7)
      this.currentDate = nextWeek.toLocaleDateString()
    },
  },
}
</script>
