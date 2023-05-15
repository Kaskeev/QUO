<template>
  <div
    class="mt-4 relative py-2 w-full divide-gray-200 z-5 border-t border-gray-300"
  >
    <div class="w-full pr-24">
      <Filter
        v-for="filter in filters"
        :key="filter.title"
        :title="filter.title"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Filter from '../components/templates/Filter.vue'
const filters = ref([
  { title: 'Команда' },
  { title: 'Текст Сообщения' },
  { title: 'Кнопки' },
])
</script>
