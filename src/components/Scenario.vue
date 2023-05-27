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
    const tableHeaders = {
      names: [
        { id: 'command', title: 'Команда', bool: true, width: 48 },
        { id: 'text__message', title: 'Текст Сообщения', width: 48 },
        { id: 'button', title: 'Кнопки', width: 48 },
        { id: 'next_command', title: 'Следующая команда', width: 48 },
      ],
    }

    const items = [
      {
        command: 'Команда',
        id: 1,
      },
      {
        command: 'Lorem',
        message: 'Ipsum',
        buttons: 'Кнопки',
        next_command: 'Следующее сообщение',
        id: 2,
      },
    ]
    const modal = {
      fields: [
        {
          id: 'command',
          title: 'Команда',
          type: 'input',
          colSpan: 2,
        },

        {
          id: 'message_type',
          title: 'Тип сообщения',
          type: 'select',
          colSpan: 2,
          choice: [
            'Сообщение',
            'Фото',
            'Видео',
            'Медиа',
            'Файл',
            'GIF',
            'Карусель',
            'Аудио',
            'Телефон',
            'Локация',
          ],
        },
        {
          id: 'question',
          title: 'Вопрос',
          type: 'input',
          colSpan: 2,
        },
        {
          id: 'next_command',
          title: 'Следующее сообщение',
          type: 'input',
          colSpan: 2,
        },
        {
          id: 'file',
          title: 'Файл',
          type: 'input',
          colSpan: 2,
        },
        {
          id: 'buttons',
          title: 'Тип кнопок',
          type: 'select',
          choice: ['Inline', 'Обычные', 'Inline_list'],
          colSpan: 2,
        },
        {
          id: 'message',
          title: 'Текст сообщения',
          type: 'textarea',
          colSpan: 6,
        },
        {
          id: 'menu',
          title: 'Меню',
          type: 'textarea',
          colSpan: 6,
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
