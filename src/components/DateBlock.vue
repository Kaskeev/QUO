<template>
  <div>
    <date @date-changed="updateStatistics" />
    <statistics :date="currentDate" />
  </div>
</template>

<script>
import Date from './Date.vue'
import Statistics from './Statistics.vue'

export default {
  components: {
    Date,
    Statistics,
  },
  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
    }
  },
  methods: {
    updateStatistics(newDate) {
      this.currentDate = newDate
    },
  },
}
</script>
