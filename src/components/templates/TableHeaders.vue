<template>
  <th class="w-48 px-2 py-1 font-normal text-gray-600 truncate">
    <div class="justify-start flex items-center">
      {{ nameHeader }}
      <div class="text-zinc-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="w-4 h-2.5 -mb-1"
        >
          <path
            fill-rule="evenodd"
            d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
            clip-rule="evenodd"
          ></path></svg
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          class="w-4 h-2.5 -mb-0.5"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  </th>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TableHeaders',
  props: {
    nameHeader: {
      type: String,
      required: true,
    },
  },
})
</script>
