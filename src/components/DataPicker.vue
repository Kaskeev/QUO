<template>
  <div>
    <Datepicker
      v-model="selectedDates"
      :range="true"
      :locale="locale"
      :popover-class="['date-popover', showCalendar ? 'show' : '']"
      @input="showCalendar = false"
    >
      <template #trigger="{ value }">
        <button
          class="text-gray-500 rounded-bottom-angles bg-white outline-none rounded relative transition duration-100 py-2 px-2 text-xs sm:text-sm sm:px-4 cursor-pointer hover:text-indigo-700"
          @click="showCalendar = !showCalendar"
        >
          {{ formatDateRange(value) || 'Выбрать' }}
        </button>
      </template>
    </Datepicker>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const selectedDates = ref([])
const showCalendar = ref(false)
const locale = {
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  weekdays: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ],
  weekStart: 1,
  format: 'DD.MM.YYYY',
  separator: ' - ',
}

const formatDateRange = (dates) => {
  if (dates.length === 2) {
    const startDate = dates[0]
    const endDate = dates[1]
    return `${startDate} - ${endDate}`
  }
  return null
}

const formattedDateRange = computed(() => formatDateRange(selectedDates))
</script>

<style scoped>
.date-popover {
  display: none;
}

.date-popover.show {
  display: block;
}
</style>
