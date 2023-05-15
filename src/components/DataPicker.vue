<template>
  <div>
    <Datepicker v-model="date" :locale="locale">
      <template #trigger>
        <button
          class="text-gray-500 rounded-bottom-angles bg-white outline-none rounded relative transition duration-100 py-2 px-2 text-xs sm:text-sm sm:px-4 cursor-pointer hover:text-indigo-700"
          @click="showCalendar = true"
        >
          Выбрать
        </button>
      </template>
    </Datepicker>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref()
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
</script>
