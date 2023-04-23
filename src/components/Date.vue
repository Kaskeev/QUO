<template>
    <div>
      <div class="date">{{ currentDate }}</div>
      <div class="buttons">
        <button @click="changeDate(0)">Сегодня</button>
        <button @click="changeDate(1)">Завтра</button>
        <button @click="changeDate(7)">Неделя</button>
        <!-- другие кнопки для изменения даты -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentDate: new Date().toLocaleDateString(),
      };
    },
    methods: {
      changeDate(days) {
        const newDate = new Date();
        // логика изменения даты, например, добавление указанного количества дней
        newDate.setDate(newDate.getDate() + days);
        this.currentDate = newDate.toLocaleDateString();
        this.$emit('date-changed', this.currentDate);
      },
    },
  };
  </script>
  
  <style>
  .buttons {
    display: flex;
    gap: 1rem;
  }
  </style>