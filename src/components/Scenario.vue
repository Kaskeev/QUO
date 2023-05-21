<template>
  <Table
    :title="title"
    :filters="filters"
    :tableHeaders="tableHeaders"
    :items="items"
    :modal="modal"
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
      { nameHeaderFirst: 'Команда' },
      { nameHeaderSecond: 'Текст Сообщения' },
      { nameHeaderThird: 'Кнопки' },
      { nameHeaderFourth: 'Следующая команда' },
    ]
    const items = [
      { title: 'Lorem', description: 'Ipsum', btn: 'Lorem' },
      { title: 'Ipsum', description: 'Lorem', btn: 'Ipsum' },
      { title: 'Lorem', description: 'Ipsum', btn: 'Lorem' },
      { title: 'Ipsum', description: 'Lorem', btn: 'Ipsum' },
      { title: 'Lorem', description: 'Ipsum', btn: 'Lorem' },
      { title: 'Ipsum', description: 'Lorem', btn: 'Ipsum' },
      { title: 'Ipsum', description: 'Lorem', btn: 'Ipsum' },
    ]
    const modal = {
      titles: [
        {
          id: 'add',
          title: 'Добавить',
        },
        {
          id: 'edit',
          title: 'Изменить',
        },
      ],
      fields: [
        {
          id: 'command',
          title: 'Команда',
          type: 'input',
        },
        {
          id: 'message',
          title: 'Текст сообщения',
          type: 'textarea',
        },
        {
          id: 'message_type',
          title: 'Тип сообщения',
          type: 'select',
          choice: [1, 2, 3, 4],
        },
        {
          id: 'next_command',
          title: 'Следующее сообщение',
          type: 'input',
        },
      ],
    }
    return {
      title,
      filters,
      tableHeaders,
      items,
      modal,
    }
  },
})
</script>
