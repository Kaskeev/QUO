<template>
  <div>
    <Listbox v-model="selectedField">
      <div class="relative mt-1">
        <ListboxButton
          class="w-full block relative w-full cursor-default form-text-color rounded-md bg-white h-10 pl-3 pr-3 sm:pr-10 text-left focus:outline-none focus-visible:border-indigo-500 text-xs md:text-sm border border-zinc-300"
        >
          <span class="block truncate">{{ selectedField.name }}</span>
          <span
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
          >
            <ChevronUpDownIcon
              class="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </ListboxButton>

        <transition
          leave-active-class="transition duration-100 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <ListboxOptions
            class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            <ListboxOption
              v-slot="{ active, selected }"
              v-for="select in field"
              :key="select.name"
              :value="select"
              as="template"
            >
              <li
                :class="[
                  active ? 'bg-indigo-100' : 'text-gray-900',
                  'relative cursor-default select-none py-2 pl-10 pr-4',
                ]"
              >
                <span
                  :class="[
                    selected ? 'font-normal' : 'font-normal',
                    'block truncate ',
                  ]"
                >
                  {{ select.name }}
                </span>
                <span
                  v-if="selected"
                  class="absolute inset-y-0 left-0 flex items-center pl-3"
                >
                  <CheckIcon class="h-4 w-4" aria-hidden="true" />
                </span>
              </li>
            </ListboxOption>
          </ListboxOptions>
        </transition>
      </div>
    </Listbox>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'
const props = defineProps(['field'])

const selectedField = ref(props.field[0])
console.log(selectedField.name)
const people = [
  { name: 'Wade Cooper' },
  { name: 'Arlene Mccoy' },
  { name: 'Devon Webb' },
  { name: 'Tom Cook' },
  { name: 'Tanya Fox' },
  { name: 'Hellen Schmidt' },
]
const selectedPerson = ref(people[0])
console.log(selectedPerson)
</script>
