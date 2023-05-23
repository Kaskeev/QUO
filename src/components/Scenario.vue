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
        { id: 'next__command', title: 'Следующая команда' },
      ],
    }

    const items = [
      {
        command: 'Команда',
      },
      {
        command: 'Lorem',
        next_command: 'Ipsum',
        file: 'Lorem',
        message_type: 'Сообщение',
        question: 'Ipsum',
        buttons: 'Inline',
        message: 'Ipsum',
        menu: 'Ipsum',
      },
    ]
    const modal = {
      title: 'Добавление',
      fields: [
        {
          id: 'command',
          title: 'Команда',
          type: 'input',
        },

        {
          id: 'message_type',
          title: 'Тип сообщения',
          type: 'select',
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
        },
        {
          id: 'next_command',
          title: 'Следующее сообщение',
          type: 'input',
        },
        {
          id: 'file',
          title: 'Файл',
          type: 'input',
        },
        {
          id: 'buttons',
          title: 'Тип кнопок',
          type: 'select',
          choice: ['Inline', 'Обычные', 'Inline_list'],
        },
        {
          id: 'message',
          title: 'Текст сообщения',
          type: 'textarea',
        },
        {
          id: 'menu',
          title: 'Меню',
          type: 'textarea',
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
