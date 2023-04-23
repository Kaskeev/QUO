<template>
  <div class="statistics">
    {{ statisticsData }}
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      statisticsData: null,
    }
  },
  watch: {
    date(newDate) {
      // логика обновления статистики при изменении даты
      this.statisticsData = getStatisticsData(newDate)
    },
  },
  mounted() {
    // инициализация статистики при загрузке компонента
    this.statisticsData = getStatisticsData(this.date)
  },
  methods: {
    getStatisticsData(date) {
      // логика получения статистики для указанной даты
    },
  },
}
</script>
