<template class="relative">
  <div
    v-for="(filter, index) in filters"
    :key="index"
    class="flex inline-flex text-left mr-1"
  >
    <div
      class="relative border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400 w-max my-0.5"
    >
      <Listbox>
        <div class="relative mt-1">
          <ListboxButton
            v-model="filter.value"
            v-slot="{ open }"
            class="inline-flex focus:outline-none"
          >
            <svg
              v-if="filter.value"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="text-indigo-400 w-4 mr-1 cursor-pointer"
              @click="clearFilterValue(filter)"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="w-4 mr-1"
            >
              <path
                fill-rule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                clip-rule="evenodd"
              ></path>
            </svg>

            {{ filter.name }}
            <span class="text-indigo-500">
              {{ filter.value ? ': ' + filter.value : '' }}
            </span>
          </ListboxButton>

          <transition
            v-if="!filter.preventOpen"
            enter-active-class="transition duration-200 ease-in"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform translate-y-0 scale-100 opacity-100"
            leave-active-class="transition duration-200 ease-out"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ListboxOptions
              class="absolute top-8 z-10 w-64 bg-white text-gray-600 shadow-sm p-2 rounded-md border border-gray-100 text-xs"
            >
              <ListboxOption>
                <li>
                  <span class="text-left">Фильтр по {{ filter.name }}</span>
                  <input
                    v-model="filter.inputValue"
                    @click.stop
                    class="block my-2 w-full h-7 text-xs focus:border-gray-400 active:border-gray-400 focus:ring-0 p-0.5 text-sm border border-zinc-300 form-text-color rounded-md focus:outline-none h-10 focus:ring-0 focus:border-indigo-400 p-2"
                  />

                  <button
                    @click="applyFilter(filter)"
                    type="submit"
                    class="p-1 w-full inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition focus:outline-none focus-visible:border-indigo-600"
                  >
                    Применить
                  </button>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
  </div>
  <div
    class="absolute bg-white block sm:inline-flex right-0 p-1.5 pb-0.5 top-1 rounded-md"
  >
    <button
      @click="clearAllFilters"
      class="inline-flex ml-1 text-xs text-gray-400"
      type="button"
      aria-expanded="false"
      data-headlessui-state=""
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        class="w-4"
      >
        <path
          fill-rule="evenodd"
          d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
          clip-rule="evenodd"
        ></path>
      </svg>
      Очистить
    </button>
    <div
      data-headlessui-state=""
      class="relative flex flex-row-reverse text-left"
    ></div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import {
  Listbox,
  ListboxLabel,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

export default {
  name: 'Filter',
  components: {
    Listbox,
    ListboxLabel,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },
  setup() {
    const filters = reactive([
      { name: 'Команда', value: '', inputValue: '' },
      { name: 'Текст Сообщения', value: '', inputValue: '' },
      { name: 'Кнопки', value: '', inputValue: '' },
    ])

    const inputData = ref('')
    const applyFilter = (filter) => {
      filter.value = filter.inputValue
    }

    const clearAllFilters = () => {
      filters.forEach((filter) => {
        filter.value = ''
        filter.inputValue = ''
      })
    }
    const clearFilterValue = (filter) => {
      if (filter.value) {
        filter.value = ''
        filter.preventOpen = false // Установка значения false
      } else {
        filter.preventOpen = true
      }
    }
    console.log(inputData)
    return {
      clearAllFilters,
      clearFilterValue,
      filters,
      applyFilter,
    }
  },
}
</script>
