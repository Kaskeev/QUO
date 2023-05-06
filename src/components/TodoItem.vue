<template>
  <tbody>
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
            class="inline-block text-left flex-shrink-0 relative"
          >
            <button
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

            <!-- <button
              class="ml-auto bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
              @click="$emit('editItem', item)"
            >
              Edit
            </button>
            <button
              class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              @click="$emit('deleteItem', item)"
            >
              Delete
            </button> -->
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
