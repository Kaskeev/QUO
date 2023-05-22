<template>
  <tr
    class="border-b border-gray-200 text-gray-500 whitespace-nowrap overflow-x-hidden text-ellipsis"
  >
    <td class="text-start px-2 py-1 truncate last:border-b">
      <div class="w-48">
        <span class="text-gray-900">{{ item.title }}</span>
      </div>
    </td>
    <td class="text-start px-2 py-1 truncate last:border-b">
      <div class="w-48">
        <span class="text-gray-900">{{ item.description }}</span>
      </div>
    </td>
    <td class="text-start px-2 py-1 truncate last:border-b">
      <div class="w-96">
        <span
          class="inline-flex rounded-full text-[#4f46e5] px-2 mr-2 text-xs font-normal leading-5 bg-[#ebf4ff]"
        >
          {{ item.btn }}
        </span>
      </div>
    </td>
    <!-- Меню для действия с элементом -->
    <td
      class="text-right absolute right-0 pr-0 border-t border-gray-200 -mt-px"
    >
      <div class="block group bg-white border border-white">
        <div
          data-headlessui-state=""
          class="relative inline-block text-left flex-shrink-0 relative"
        >
          <button
            @click="isOpen = !isOpen"
            id="headlessui-menu-button-19"
            type="button"
            aria-haspopup="true"
            aria-expanded="false"
            data-headlessui-state=""
            class="rounded-r-md items-center border border-white group-hover:border-gray-300 bg-white px-1.5 font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 ring-0 group-hover:text-indigo-600 my-auto mt-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              ></path>
            </svg>
          </button>
          <section
            v-if="isOpen"
            @click="isOpen = false"
            aria-labelledby="headlessui-menu-button-85"
            id="headlessui-menu-items-86"
            role="menu"
            tabindex="0"
            data-headlessui-state="open"
            class="origin-top-right z-20 absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-zinc-100 focus:outline-none"
          >
            <div role="none">
              <div role="none"><!--v-if--></div>
              <div role="none">
                <a
                  href="#"
                  class="text-zinc-500 group flex items-center px-4 py-2"
                  disabled="false"
                  id="headlessui-menu-item-115"
                  role="menuitem"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <PencilIcon class="h-6 w-6 text-blue-500" />
                  Редактировать
                </a>
              </div>
              <div role="none" @click="$emit('editItem', item)">
                <a
                  href="#"
                  class="text-zinc-500 group flex items-center px-4 py-2"
                  disabled="false"
                  id="headlessui-menu-item-116"
                  role="menuitem"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v12m6-6H6"
                    ></path>
                  </svg>
                  Добавить
                </a>
              </div>
              <div role="none">
                <a
                  href="#"
                  class="text-zinc-500 group flex items-center px-4 py-2"
                  disabled="false"
                  id="headlessui-menu-item-117"
                  role="menuitem"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    ></path>
                  </svg>
                  Копировать
                </a>
              </div>
              <div role="none">
                <a
                  href="#"
                  class="text-zinc-500 group flex items-center px-4 py-2"
                  disabled="false"
                  id="headlessui-menu-item-117"
                  role="menuitem"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="h-4 w-4 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    ></path>
                  </svg>
                  Вверх
                </a>
              </div>
              <div role="none">
                <a
                  href="#"
                  class="text-zinc-500 group flex items-center px-4 py-2"
                  disabled="false"
                  id="headlessui-menu-item-117"
                  role="menuitem"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <BeakerIcon class="h-6 w-6 text-blue-500" />
                  Вниз
                </a>
              </div>
              <div role="none" @click="$emit('deleteItem', index)">
                <a
                  href="#"
                  class="text-zinc-500 group flex items-center px-4 py-2"
                  disabled="false"
                  id="headlessui-menu-item-117"
                  role="menuitem"
                  tabindex="-1"
                  data-headlessui-state=""
                >
                  <ArrowUpIcon class="h-6 w-6 text-blue-500" />
                  Удалить
                </a>
              </div>
            </div>
          </section>
          <span class="hidden group-hover:block">
            <button
              type="button"
              @click="$emit('editItem', item)"
              class="rounded-l-md absolute top-0 right-7 items-center border border-gray-300 bg-white px-1.5 font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 ring-0 hover:text-indigo-600 mt-0.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                ></path>
              </svg>
            </button>
          </span>
        </div>
      </div>
    </td>
  </tr>
</template>

<script>
import { BeakerIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const isOpen = ref(false)
    const selectedOption = ref('Select an option')

    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        isOpen.value = false
      }
    }

    const selectOption = (option) => {
      selectedOption.value = option
      isOpen.value = false
    }

    window.addEventListener('click', handleClickOutside)

    return {
      isOpen,
      selectedOption,
      selectOption,
    }
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
}
</script>
