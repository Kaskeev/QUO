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
        { id: 'command', title: 'Команда', bool: true },
        { id: 'text__message', title: 'Текст Сообщения' },
        { id: 'button', title: 'Кнопки' },
        { id: 'next_command', title: 'Следующая команда' },
      ],
    }

    const items = [
      {
        command: 'Команда',
      },
      {
        command: 'Lorem',
        message: 'Ipsum',
        buttons: 'Кнопки',
        next_command: 'Следующее сообщение',
      },
    ]
    const modal = {
      title: 'Команда',
      fields: [
        {
          id: 'command',
          title: 'Команда',
          type: 'input',
          col: '2',
        },

        {
          id: 'message_type',
          title: 'Тип сообщения',
          type: 'select',
          col: '2',
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
          col: '2',
        },
        {
          id: 'next_command',
          title: 'Следующее сообщение',
          type: 'input',
          col: '2',
        },
        {
          id: 'file',
          title: 'Файл',
          type: 'input',
          col: '2',
        },
        {
          id: 'buttons',
          title: 'Тип кнопок',
          type: 'select',
          choice: ['Inline', 'Обычные', 'Inline_list'],
          col: '2',
        },
        {
          id: 'message',
          title: 'Текст сообщения',
          type: 'textarea',
          col: '6',
        },
        {
          id: 'menu',
          title: 'Меню',
          type: 'textarea',
          col: '6',
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
