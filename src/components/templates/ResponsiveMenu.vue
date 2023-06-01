<template>
  <div>
    <button
      @click="openModal"
      class="m-1 -mr-1 inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-offset-0"
    >
      <Bars3Icon class="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex pl-10 min-h-full items-center justify-center text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full h-screen max-w-md py-6 transform overflow-hidden bg-white text-left align-middle shadow-xl transition-all"
            >
              <div class="px-4 pb-2 border-b border-zinc-200">
                <div class="flex items-start justify-between">
                  <DialogTitle
                    as="h2"
                    class="text-lg font-medium text-zinc-900"
                  >
                    Эльдияр
                  </DialogTitle>
                  <XCircleIcon
                    @click="closeModal"
                    class="h-6 w-6 stroke-1"
                    aria-hidden="true"
                  />
                </div>
                <p class="text-sm text-zinc-500">Эльдияр's Team</p>

                <div
                  target="props.target"
                  class="flex items-center py-3 rounded-lg text-sm leading-5 text-zinc-600 hover:text-indigo-600 focus:text-indigo-600 focus:outline-noneactive:outline-none"
                >
                  <ArrowsRightLeftIcon class="h-6 w-6 mr-2" />

                  <span class="text-sm group-hover:text-indigo-600">
                    Сменить проект
                  </span>
                </div>
              </div>
              <nav
                class="grid gap-y-6 px-4 py-4 bg-white grid-cols-2 gap-x-8 border-b border-zinc-200"
              >
                <div v-for="option in linksOption">
                  <ul role="list" class="space-y-4">
                    <li class="flow-root">
                      <a
                        class="text-zinc-600 -m-3 p-3 flex items-center rounded-lg text-sm hover:bg-zinc-100 transition ease-in-out duration-150 group cursor-pointer hover:text-indigo-700"
                        href="#"
                      >
                        <component
                          :is="option.icon"
                          class="text-zinc-400 flex-shrink-0 h-6 w-6 stroke-1 group-hover:text-indigo-700"
                        />
                        <span class="ml-4 group-hover:text-indigo-600">
                          {{ option.label }}
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <!-- <div>
                  <ul role="list" class="space-y-4">
                    <li class="flow-root">
                      <a
                        class="text-zinc-600 -m-3 p-3 flex items-center rounded-lg text-sm hover:bg-zinc-100 transition ease-in-out duration-150 group cursor-pointer hover:text-indigo-700"
                        href="/project/3038/dashboard"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                          class="text-zinc-400 flex-shrink-0 h-6 w-6 stroke-1 group-hover:text-indigo-700"
                        >
                          <path
                            d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"
                          ></path>
                          <path
                            d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"
                          ></path>
                        </svg>
                        <span class="ml-4 group-hover:text-indigo-600">
                          Главная
                        </span>
                      </a>
                    </li>
                    <li class="flow-root">
                      <a
                        class="text-indigo-600 -m-3 p-3 flex items-center rounded-lg text-sm hover:bg-zinc-100 transition ease-in-out duration-150 group cursor-pointer hover:text-indigo-700"
                        href="/project/3038/botcommands"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          class="text-indigo-600 flex-shrink-0 h-6 w-6 stroke-1 group-hover:text-indigo-700"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          ></path>
                        </svg>
                        <span class="ml-4 group-hover:text-indigo-600">
                          Сценарий
                        </span>
                      </a>
                    </li>
                  </ul>
                </div> -->
              </nav>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import {
  Bars3Icon,
  XCircleIcon,
  ArrowsRightLeftIcon,
} from '@heroicons/vue/24/outline'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const props = defineProps({
  optionsLeft: {
    type: Array,
  },
  options: {
    type: Array,
  },
  links: {
    type: Array,
  },
})
// const listOptions = ref(props.options)
const linksOption = ref(props.links)
// const mergedArray = ref([])
// mergedArray.value = [...listOptions.value, ...linksOption.value]
// console.log(mergedArray)

const isOpen = ref(false)
function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>
