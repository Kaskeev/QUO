<template>
  <div
    class="mt-4 relative py-2 w-full divide-gray-200 z-5 border-t border-gray-300"
  >
    <div class="w-full pr-24">
      <Filters
        v-for="filter in filters"
        :key="filter.title"
        :name="filter.name"
      />
    </div>
  </div>
</template>

<script>
import Filters from '../components/templates/Filters.vue'
export default {
  name: 'Home',
  components: {
    Filters,
  },
  props: {
    filters: {
      type: Array,
      required: true,
    },
  },
}
</script>
