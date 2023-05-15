<template>
  <div class="mt-4">
    <button
      class="inline-flex items-center justify-center px-4 py-1 bg-indigo-500 hover:bg-indigo-600 text-white border focus:outline-none border-transparent rounded-full font-normal text-xs sm:text-sm disabled:opacity-25 transition"
      @click="exportData"
    >
      {{ title }}
    </button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import exportFromJSON from 'export-from-json'

export default defineComponent({
  name: 'DownloadExcel',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    async function exportData() {
      try {
        const data = []
        for (let i = 0; i < props.items.length; i++) {
          const rowData = []
          rowData.push(props.items[i].title)
          rowData.push(props.items[i].description)
          rowData.push(props.items[i].btn)
          data.push(rowData)
        }

        const fileName = `${props.objectsName || 'exported-data'}.xls`
        const exportType = exportFromJSON.types.xls
        exportFromJSON({ data, fileName, exportType })
      } catch (error) {
        console.error(error)
        throw new Error('Export failed!')
      }
    }
    return {
      exportData,
    }
  },
})
</script>
