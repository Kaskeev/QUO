<template>
  <header class="hidden md:block xl:block 2xl:block bg-gray-100 px-5">
    <nav
      class="mx-auto pt-2 max-w-screen-xl md:max-w-2xl lg:max-w-3xl xl:max-w-screen-xl"
    >
      <div
        class="flex w-full items-center justify-between md:bg-white lg:bg-inherit md:rounded-lg md:shadow lg:shadow-none"
      >
        <div
          class="hidden items-center lg:rounded-lg md:rounded-l-lg bg-white pr-0 px-1.5 py-1 lg:border lg:border-zinc-300 md:flex"
        >
          <router-link
            to="/"
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
          </router-link>
          <template v-for="link in links">
            <router-link
              :to="`${link.path}`"
              class="hover:bg-gray-200 text-gray-600 hover:text-gray-800 text-sm py-2 rounded-md cursor-pointer"
            >
              <span class="text-sm px-1.5 xl:px-3">{{ link.label }}</span>
            </router-link>
          </template>
          <div class="relative inline-block text-left">
            <div>
              <button
                @click="toggleDropdown"
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
                @click="menuClick"
                v-if="isOpenOption"
                class="absolute lg:left-1/2 z-20 mt-4 w-screen max-w-md -translate-x-1/2 transform px-2"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div
                  class="p-2 bg-white border border-zinc-300 flex flex-wrap overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
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
        <div
          class="mx-auto mr-0 pl-0 lg:pl-2 px-0 cursor-pointer bg-white rounded-lg lg:border lg:border-zinc-300 shadow-none"
        >
          <div class="ml-0 hidden items-center md:flex">
            <div class="relative h-full items-center flex rounded-lg">
              <div class="truncate">
                <button
                  @click="toggleDropdownLeft"
                  type="button"
                  id="options-menu"
                  aria-haspopup="true"
                  :aria-expanded="isOpenOptionLeft"
                  class="flex max-w-xs cursor-pointer items-center py-1.5 text-sm focus:outline-none focus:ring-0 focus:ring-offset-0"
                >
                  {{ selectedOptionLeft ? selectedOptionLeft.label : '' }}
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
                    v-show="isOpenOptionLeft"
                    v-if="isOpenOptionLeft"
                    class="absolute z-50 mt-2 rounded-md shadow-sm border border-zinc-300 origin-top-right -right-px"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div
                      class="p-2 bg-white flex flex-col overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
                      role="none"
                    >
                      <template v-for="option in optionsLeft">
                        <a
                          href="#"
                          @click.prevent="selectOptionLeft(option)"
                          class="w-52 hover:bg-gray-200 text-black flex items-center rounded-lg p-3 transition duration-150 ease-in-out px-4 py-2 text-sm leading-5 text-gray-700 focus:outline-none focus:bg-gray-100 transition active:outline-none"
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
        Eldiyar's Team
      </span>
      <ResponsiveMenu
        :optionsLeft="optionsLeft"
        :links="links"
        :options="options"
      />
    </div>
  </div>
</template>
<script>
import {
  DocumentTextIcon,
  UserIcon,
  ShoppingCartIcon,
  CubeIcon,
} from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import { defineComponent } from 'vue'
import ResponsiveMenu from '../components/templates/ResponsiveMenu.vue'
export default defineComponent({
  name: 'Header',
  components: {
    ResponsiveMenu,
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeDropdown)
  },
  methods: {
    closeDropdown(event) {
      if (this.$el.contains(event.target)) {
        return
      }

      this.isOpenOption = false
    },
  },
  setup() {
    const isOpenOption = ref(false)
    const selectedOption = ref(null)
    const isOpenOptionLeft = ref(false)
    const selectedOptionLeft = ref(null)
    const handleClickOutside = (event) => {
      if (!event.target.closest('.relative')) {
        isOpenOption.value = false
        isOpenOptionLeft.value = false
      }
    }

    const toggleDropdownLeft = () => {
      isOpenOptionLeft.value = !isOpenOptionLeft.value
      isOpenOption.value = false
    }
    const toggleDropdown = () => {
      isOpenOption.value = !isOpenOption.value
      isOpenOptionLeft.value = false
    }
    const optionsLeft = ref([
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
    ])

    const selectOptionLeft = (option) => {
      selectedOptionLeft.value = option
      isOpenOptionLeft.value = false
    }
    const options = ref([
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
    ])

    const selectOption = (option) => {
      selectedOption.value = option
      isOpenOption.value = false
    }
    window.addEventListener('click', handleClickOutside)

    return {
      isOpenOption,
      selectedOption,
      options,
      selectOption,
      isOpenOptionLeft,
      selectedOptionLeft,
      optionsLeft,
      selectOptionLeft,
      toggleDropdown,
      toggleDropdownLeft,
    }
  },
  beforeUnmount() {
    window.removeEventListener('click', this.handleClickOutside)
  },
  data() {
    return {
      links: ref([
        {
          id: 1,
          label: 'Сценарий',
          path: 'scenario',
          icon: DocumentTextIcon,
        },
        { id: 2, label: 'Заказы', path: 'scenario', icon: ShoppingCartIcon },
        { id: 3, label: 'Контакты', path: 'contacts', icon: UserIcon },
        { id: 4, label: 'Продукты', path: 'scenario', icon: CubeIcon },
        { id: 5, label: 'Маркетинг', path: 'scenario' },
        { id: 6, label: 'Аналитика', path: 'analytics' },
      ]),
    }
  },
})
</script>
