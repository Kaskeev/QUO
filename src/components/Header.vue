<template>
  <header class="hidden md:block xl:block 2xl:block bg-gray-100 px-5">
    <nav
      class="mx-auto pt-2 max-w-screen-xl md:max-w-2xl lg:max-w-3xl xl:max-w-screen-xl"
    >
      <div
        class="flex w-full items-center justify-between md:bg-white lg:bg-inherit md:rounded-lg md:shadow lg:shadow-none"
      >
        <div
          class="hidden items-center lg:rounded-lg md:rounded-l-lg bg-white pr-0 px-1.5 py-1 lg:shadow md:flex"
        >
          <a
            href="/project/3038/dashboard"
            class="hover:bg-gray-200 text-indigo-700 text-sm py-2 rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="w-5 h-5 stroke-1 mx-1.5 xl:mx-2"
            >
              <path
                d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
              ></path>
              <path
                d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
              ></path>
            </svg>
          </a>
          <a
            v-for="link in links"
            :key="link.id"
            class="hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-sm py-2 rounded-md cursor-pointer"
          >
            <span class="text-sm px-1.5 xl:px-3">{{ link.title }}</span>
          </a>
          <div class="relative inline-block text-left">
            <div>
              <button
                @click="isOpenOption = !isOpenOption"
                type="button"
                class="hover:bg-gray-200 text-gray-600 hover:text-gray-800 group inline-flex items-center text-sm pr-1 lg:pr-1.5 px-3 py-2 rounded-md focus:outline-none focus:ring-0 focus:ring-offset-0 lg:mr-2"
                id="options-menu"
                aria-haspopup="true"
                :aria-expanded="isOpenOption"
              >
                {{ selectedOption ? selectedOption.label : 'Другое' }}
                <svg
                  class="ml-0.5 w-4 h-4 mt-0.5 transition text-gray-400 duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>
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
                class="absolute lg:left-1/2 z-20 mt-4 w-screen max-w-md -translate-x-1/2 transform px-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  class="p-2 flex flex-wrap overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
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
        <Dropdown />
      </div>
    </nav>
  </header>

  <div
    class="relative flex h-14 max-w-screen-xl items-center bg-gray-100 md:hidden"
  >
    <div
      class="absolute inset-y-0 right-5 flex items-center px-2 bg-white shadow rounded-lg mt-2"
    >
      <img
        class="h-8 w-8 rounded-full"
        src="https://ui-avatars.com/api/?name=%D0%AD&amp;color=7F9CF5&amp;background=EBF4FF"
      />
      <span
        class="ml-3 lg:max-w-[68px] xl:max-w-full overflow-x-hidden text-ellipsis whitespace-nowrap text-sm font-medium text-gray-700 md:hidden lg:flex"
      >
        Eldiyar Team
      </span>
      <button
        class="m-1 -mr-1 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-offset-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
          class="block h-6 w-6 stroke-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import Dropdown from './Dropdown.vue'

export default {
  name: 'Header',
  components: {
    Dropdown,
  },

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
      {
        id: 3,
        label: 'Моя команда',
        imagePath: require('@/assets/svg/team.svg'),
      },
      {
        id: 4,
        label: 'Подключения',
        imagePath: require('@/assets/svg/host.svg'),
      },
      {
        id: 5,
        label: 'Группы и каналы',
        imagePath: require('@/assets/svg/wifi.svg'),
      },
      {
        id: 6,
        label: 'Уведомления',
        imagePath: require('@/assets/svg/uvedom.svg'),
      },
      {
        id: 7,
        label: 'Услуги',
        imagePath: require('@/assets/svg/service.svg'),
      },
      {
        id: 8,
        label: 'Оплата сервиса',
        imagePath: require('@/assets/svg/cost.svg'),
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
      links: [
        { id: 1, title: 'Сценарий' },
        { id: 2, title: 'Заказы' },
        { id: 3, title: 'Контакты' },
        { id: 4, title: 'Продукты' },
        { id: 5, title: 'Маркетинг' },
        { id: 6, title: 'Аналитика' },
      ],
    }
  },
}
</script>
