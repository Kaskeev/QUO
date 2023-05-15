<template>
  <Table
    :title="title"
    :filters="filters"
    :tableHeaders="tableHeaders"
    :items="items"
  />
</template>

<script>
import { defineComponent } from 'vue'
import Table from './templates/Table.vue'
export default defineComponent({
  name: 'Scenario',
  components: {
    Table,
  },
  setup() {
    const title = 'Сценарий'
    const filters = [
      { name: 'Команда' },
      { name: 'Текст Сообщения' },
      { name: 'Кнопки' },
    ]
    const tableHeaders = [
      { nameHeader: 'Команда' },
      { nameHeader: 'Текст Сообщения' },
      { nameHeader: 'Кнопки' },
      { nameHeader: 'Следующая команда' },
    ]
    const items = [
      { title: 'Lorem', description: 'Ipsum', btn: 'Lorem' },
      { title: 'Ipsum', description: 'Lorem', btn: 'Ipsum' },
    ]
    return {
      title,
      filters,
      tableHeaders,
      items,
    }
  },
})
</script>
