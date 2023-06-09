<template>
  <div>
    <div class="flex relative pr-5 z-10">
      <template v-for="date in dates">
        <div>
          <button
            class="text-gray-500 text-gray-500 outline-none relative transition duration-100 py-2 px-2 text-xs sm:text-sm sm:px-4 cursor-pointer hover:text-indigo-700"
            @click=";(currentTab = `${date.title}`), updateData()"
          >
            {{ date.name }}
          </button>
        </div>
      </template>
      <input
        v-if="currentTab === 'select'"
        type="date"
        v-model="selectedDate"
        @change="onDateChange"
      />
      <DatePicker />
    </div>
    <div>
      <div class="flex flex-wrap place-content-center">
        <div class="rounded-t-lg border-l w-full flex bg-white shadow border-b">
          <div class="mx-auto py-2.5 relative text-xs sm:text-sm">
            <span>{{ currentDate }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-3 h-3 absolute -right-3 top-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
          </div>
        </div>
        <dl
          class="grid w-full grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-b-lg bg-white shadow md:max-w-2xl md:grid-cols-2 md:divide-y-0 lg:max-w-3xl xl:max-w-screen-2xl xl:grid-cols-4"
        >
          <div class="border-l px-4 py-5 sm:p-6">
            <div>
              <!-- Название индикатора -->
              <dt class="text-base font-normal text-gray-900">Подписчики</dt>
              <dd
                class="mt-1 flex items-baseline justify-between md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold text-indigo-600"
                >
                  {{ data }}
                  <span class="ml-2 text-sm font-medium text-gray-500">
                    {{ header }}
                  </span>
                </div>
                <!-- Процент прогресса -->
                <!--v-if-->
                <!--v-if-->
              </dd>
            </div>
          </div>
          <div class="border-l px-4 py-5 sm:p-6">
            <div>
              <!-- Название индикатора -->
              <dt class="text-base font-normal text-gray-900">Заказы</dt>
              <dd
                class="mt-1 flex items-baseline justify-between md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold text-indigo-600"
                >
                  {{ data }}
                  <span class="ml-2 text-sm font-medium text-gray-500">
                    {{ header }}
                  </span>
                </div>
                <!-- Процент прогресса -->
                <!--v-if-->
                <!--v-if-->
              </dd>
            </div>
          </div>
          <div class="border-l px-4 py-5 sm:p-6">
            <div>
              <!-- Название индикатора -->
              <dt class="text-base font-normal text-gray-900">Оплаты</dt>
              <dd
                class="mt-1 flex items-baseline justify-between md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold text-indigo-600"
                >
                  {{ data }}
                  <span class="ml-2 text-sm font-medium text-gray-500">
                    {{ header }}
                  </span>
                </div>
                <!-- Процент прогресса -->
              </dd>
            </div>
          </div>
          <div class="border-l px-4 py-5 sm:p-6">
            <div>
              <!-- Название индикатора -->
              <dt class="text-base font-normal text-gray-900">Доход</dt>
              <dd
                class="mt-1 flex items-baseline justify-between md:block lg:flex"
              >
                <div
                  class="flex items-baseline text-2xl font-semibold text-indigo-600"
                >
                  {{ data }}
                  <span class="ml-2 text-sm font-medium text-gray-500">
                    {{ header }}
                  </span>
                </div>
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </div>
  </div>
  <Charts />
</template>

<script>
import { ref, computed } from 'vue'
import DatePicker from './DataPicker.vue'

export default {
  name: 'Analytics',
  components: {
    DatePicker,
  },

  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
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
  setup() {
    const currentTab = ref('today')
    const selectedDate = ref('')
    const data = ref(0)

    function onDateChange() {
      console.log(`Выбрана дата: ${selectedDate.value}`)
      updateData()
    }

    function updateData() {
      switch (currentTab.value) {
        case 'today':
          data.value = 100
          break
        case 'tomorrow':
          data.value = 200
          break
        case 'week':
          data.value = 300
          break
        case 'month':
          data.value = 500
          break
        case 'year':
          data.value = 700
          break
        default:
          break
      }
    }

    const header = computed(() => {
      switch (currentTab.value) {
        case 'today':
          return 'за сегодня'
        case 'tomorrow':
          return 'завтра'
        case 'week':
          return 'за неделю'
        case 'month':
          return 'за месяц'
        case 'year':
          return 'за год'
        default:
          return 'Выбор даты'
      }
    })

    return {
      currentTab,
      selectedDate,
      data,
      onDateChange,
      updateData,
      header,
      dates: [
        {
          id: 1,
          title: 'today',
          name: 'Сегодня',
        },
        { id: 2, title: 'tomorrow', name: 'Завтра' },
        { id: 3, title: 'week', name: 'Неделя' },
        { id: 4, title: 'month', name: 'Месяц' },
        { id: 5, title: 'year', name: 'Год' },
      ],
    }
  },
}
</script>
