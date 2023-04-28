<template>
  <div
    class="mx-auto mr-0 pl-0 lg:pl-2 px-0 cursor-pointer bg-white rounded-lg lg:shadow shadow-none"
  >
    <div class="ml-0 hidden items-center md:flex">
      <div class="relative h-full items-center flex rounded-lg">
        <div class="truncate">
          <button
            @click="isOpenOption = !isOpenOption"
            type="button"
            id="options-menu"
            aria-haspopup="true"
            :aria-expanded="isOpenOption"
            class="flex max-w-xs cursor-pointer items-center py-1.5 text-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
          >
            {{ selectedOption ? selectedOption.label : '' }}
            <img
              class="h-8 w-8 rounded-full"
              src="https://ui-avatars.com/api/?name=%D0%AD&amp;color=7F9CF5&amp;background=EBF4FF"
              alt=""
            />
            <span
              class="ml-3 md:hidden xl:block xl:max-w-full overflow-x-hidden text-ellipsis whitespace-nowrap text-sm text-gray-700"
            >
              Эльдияр's Team
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              class="mr-2 ml-0.5 mt-0.5 w-4 h-4 flex-shrink-0 text-gray-400 stroke-1"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <transition
            enter-active-class="transition ease-out duration-100 transform"
            enter-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75 transform"
            leave-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-show="isOpenOption"
              class="absolute z-20 mt-4 w-screen max-w-xs -translate-x-1/2 transform px-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div
                class="p-2 bg-white flex flex-col overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                role="none"
              >
                <template v-for="option in options">
                  <a
                    href="#"
                    @click.prevent="selectOption(option)"
                    class="w-1/2 hover:bg-gray-200 text-black flex items-center rounded-lg p-3 transition duration-150 ease-in-out px-4 py-2 text-sm leading-5 text-gray-700 focus:outline-none focus:bg-gray-100 transition active:outline-none"
                    role="menuitem"
                  >
                    <img
                      class="text-gray-600 w-5 h-5 mr-2 stroke-1"
                      :src="option.imagePath"
                    />
                    {{ option.label }}
                  </a>
                </template>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'

export default {
  name: 'Dropdown',

  setup() {
    const isOpenOption = ref(false)
    const selectedOption = ref(null)
    const options = [
      {
        id: 1,
        label: 'Рассылка',
        imagePath: require('@/assets/svg/svg-1.svg'),
      },
      {
        id: 2,
        label: 'Общие',
        imagePath: require('@/assets/svg/settings.svg'),
      },
    ]

    const selectOption = (option) => {
      selectedOption.value = option
      isOpenOption.value = false
    }

    return {
      isOpenOption,
      selectedOption,
      options,
      selectOption,
    }
  },

  data() {
    return {
      isOpen: false,
    }
  },
}
</script>
<style>
.translate-x-full {
  transform: translateX(100%);
}
</style>
