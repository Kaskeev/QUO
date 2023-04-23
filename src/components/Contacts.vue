<template>
  <div class="w-full flex">
    <aside
      class="hidden md:block py-8 px-2 sm:px-6 md:col-span-3 xl:col-span-2 md:py-0 md:px-0"
    >
      <nav class="space-y-1 bg-white rounded-md shadow">
        <a
          href="/project/3038/contacts"
          class="hover:bg-gray-200 text-indigo-700 group first:rounded-t-md last:rounded-b-md px-3 py-2 flex items-center text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="text-indigo-700 mr-2 w-5 stroke-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            ></path>
          </svg>
          Контакты
        </a>
        <a
          href="/project/3038/subscriptions"
          class="hover:bg-gray-200 text-gray-600 hover:text-gray-800 group first:rounded-t-md last:rounded-b-md px-3 py-2 flex items-center text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
            class="text-gray-600 mr-2 w-5 stroke-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            ></path>
          </svg>
          Подписки
        </a>
      </nav>
    </aside>
    <div class="gap-4 md:col-span-9 xl:col-span-10 bg-whtie">
      <div class="bg-white px-4 py-2 mb-5 rounded-lg shadow">
        <div class="flex flex-wrap items-center space-y-2">
          <div class="flex-auto">
            <h1 class="text-xl md:text-3xl font-semibold text-gray-900">
              Контакты
            </h1>
          </div>
          <div class="flex sm:mt-0 sm:flex-none">
            <button
              type="button"
              class="inline-flex items-center justify-center px-4 py-1 bg-white border border-zinc-200 rounded-full font-normal text-sm text-zinc-500 hover:shadow-sm hover:text-zinc-700 focus:outline-none active:text-zinc-800 active:bg-gray-50 disabled:opacity-25 transition hover:border-zinc-300 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                class="w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                ></path>
              </svg>
            </button>
            <!--v-if-->
          </div>
        </div>
        <!-- Фильтры -->
        <div
          class="mt-4 relative py-2 w-full divide-gray-200 z-10 border-t border-gray-300"
        >
          <div class="w-full pr-44">
            <div
              data-headlessui-state=""
              class="flex inline-flex text-left mr-1"
            >
              <div
                class="border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400"
              >
                <!--v-if-->
                <button
                  id="headlessui-popover-button-6"
                  class="inline-flex focus:outline-none"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <svg
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
                  ID
                  <!--v-if-->
                </button>
                <!---->
              </div>
              <!--v-if-->
            </div>
            <div
              data-headlessui-state=""
              class="flex inline-flex text-left mr-1"
            >
              <div
                class="border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400"
              >
                <!--v-if-->
                <button
                  id="headlessui-popover-button-9"
                  class="inline-flex focus:outline-none"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <svg
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
                  Имя
                  <!--v-if-->
                </button>
                <!---->
              </div>
              <!--v-if-->
            </div>
            <div
              data-headlessui-state=""
              class="flex inline-flex text-left mr-1"
            >
              <div
                class="border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400"
              >
                <!--v-if-->
                <button
                  id="headlessui-popover-button-12"
                  class="inline-flex focus:outline-none"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <svg
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
                  Фамилия
                  <!--v-if-->
                </button>
                <!---->
              </div>
              <!--v-if-->
            </div>
            <div
              data-headlessui-state=""
              class="flex inline-flex text-left mr-1"
            >
              <div
                class="border-dashed inline-flex mr-1 rounded-full border border-gray-300 p-1 pr-2 text-xs text-gray-400"
              >
                <!--v-if-->
                <button
                  id="headlessui-popover-button-15"
                  class="inline-flex focus:outline-none"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
                >
                  <svg
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
                  Никнейм
                  <!--v-if-->
                </button>
                <!---->
              </div>
              <!--v-if-->
            </div>
            <!--Filter Menu-->
            <div class="absolute bg-white inline-flex right-0 p-1.5 top-2">
              <button
                class="inline-flex ml-4 text-xs text-gray-400"
                id="headlessui-popover-button-6"
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
                class="ml-2 relative flex flex-row-reverse text-left"
              >
                <button
                  class="inline-flex text-xs text-indigo-500 top-3 focus:outline-none"
                  id="headlessui-popover-button-18"
                  type="button"
                  aria-expanded="false"
                  data-headlessui-state=""
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
                      d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                    ></path>
                  </svg>
                  Фильтры
                </button>
                <!---->
                <!---->
              </div>
            </div>
          </div>
        </div>
        <!-- Table -->
        <div>
          <div class="inline-block min-w-full relative">
            <div class="mt-2 grid overflow-auto">
              <table
                class="min-w-full divide-y divide-gray-200 border-t border-gray-200 text-xs lg:text-sm"
              >
                <!-- Table Headers -->

                <!-- Table Content -->
                <tbody>
                  <tr class="border-b border-gray-200">
                    <td colspan="10" class="p-2 whitespace-nowrap text-center">
                      <span class="text-gray-500 flex justify-center">
                        Нет данных
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <nav
          class="flex items-center justify-between bg-white py-3"
          aria-label="Pagination"
        >
          <div class="hidden sm:block">
            <p class="text-xs lg:text-sm text-gray-700">...</p>
          </div>
          <div class="flex flex-1 justify-between sm:justify-end">
            <button
              type="button"
              class="inline-flex items-center justify-center px-4 py-1 bg-white border border-zinc-200 rounded-full font-normal text-sm text-zinc-500 hover:shadow-sm hover:text-zinc-700 focus:outline-none active:text-zinc-800 active:bg-gray-50 disabled:opacity-25 transition hover:border-zinc-300"
              style="display: none;"
            >
              Предыдущая
            </button>
            <button
              type="button"
              class="inline-flex items-center justify-center px-4 py-1 bg-white border border-zinc-200 rounded-full font-normal text-sm text-zinc-500 hover:shadow-sm hover:text-zinc-700 focus:outline-none active:text-zinc-800 active:bg-gray-50 disabled:opacity-25 transition hover:border-zinc-300"
              style="display: none;"
            >
              Следующая
            </button>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contacts',
}
</script>
