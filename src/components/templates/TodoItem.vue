<template>
  <tr
    class="border-b border-gray-200 text-gray-500 whitespace-nowrap overflow-x-hidden text-ellipsis"
  >
    <td class="text-start px-2 py-1 truncate last:border-b">
      <div class="w-48">
        <span class="text-gray-900">{{ item.command }}</span>
      </div>
    </td>
    <td class="text-start px-2 py-1 truncate last:border-b">
      <div class="w-48">
        <span class="text-gray-900">{{ item.message }}</span>
      </div>
    </td>
    <td class="text-start px-2 py-1 truncate last:border-b">
      <div class="w-48">
        <span
          class="inline-flex rounded-full text-[#4f46e5] px-2 mr-2 text-xs font-normal leading-5 bg-[#ebf4ff]"
        >
          {{ item.next_command }}
        </span>
      </div>
    </td>
    <td class="text-start px-2 py-1 truncate last:border-b">
      <div class="w-48">
        <span class="text-gray-900">{{ item.buttons }}</span>
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
          <Listbox>
            <div class="relative inline-block text-left flex-shrink-0 relative">
              <ListboxButton
                v-slot="{ open }"
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
              </ListboxButton>

              <transition
                enter-active-class="transition duration-200 ease-in"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform translate-y-0 scale-100 opacity-100"
                leave-active-class="transition duration-200 ease-out"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <ListboxOptions
                  class="origin-top-right z-20 absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-zinc-100 focus:outline-none"
                >
                  <ListboxOption class="cursor">
                    <a
                      class="cursor text-zinc-500 group flex items-center px-4 py-2"
                    >
                      <PencilIcon
                        class="h-4 w-4 text-gray-500 mr-1"
                        aria-hidden="true"
                      />
                      Редактировать
                    </a>
                    <a class="text-zinc-500 group flex items-center px-4 py-2">
                      <PlusIcon
                        class="h-4 w-4 text-gray-500 mr-1"
                        aria-hidden="true"
                      />
                      Добавить
                    </a>
                    <a class="text-zinc-500 group flex items-center px-4 py-2">
                      <DocumentDuplicateIcon
                        class="h-4 w-4 text-gray-500 mr-1"
                        aria-hidden="true"
                      />
                      Копировать
                    </a>
                    <a class="text-zinc-500 group flex items-center px-4 py-2">
                      <ArrowUpIcon
                        class="h-4 w-4 text-gray-500 mr-1"
                        aria-hidden="true"
                      />
                      Вверх
                    </a>
                    <a class="text-zinc-500 group flex items-center px-4 py-2">
                      <ArrowDownIcon
                        class="h-4 w-4 text-gray-500 mr-1"
                        aria-hidden="true"
                      />
                      Вниз
                    </a>
                    <a class="text-zinc-500 group flex items-center px-4 py-2">
                      <TrashIcon
                        class="h-4 w-4 text-gray-500 mr-1"
                        aria-hidden="true"
                      />
                      Удалить
                    </a>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
          <span class="hidden group-hover:block">
            <button
              type="button"
              @click="$emit('editItem', item)"
              class="rounded-l-md absolute top-0 right-7 items-center border border-gray-300 bg-white px-1.5 font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 ring-0 hover:text-indigo-600 mt-0.5"
            >
              <PencilIcon class="h-4 w-4" aria-hidden="true" />
            </button>
          </span>
        </div>
      </div>
    </td>
  </tr>
</template>

<script setup>
import {
  PencilIcon,
  PlusIcon,
  DocumentDuplicateIcon,
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/vue/24/outline'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
<style scoped>
button {
  z-index: 1000;
}
</style>
