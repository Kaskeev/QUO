<!-- <template>
  <div class="mx-auto h-full w-full py-4 pr-0">
    <div
      class="col-span-full flex flex-col rounded-lg border border-zinc-300 bg-white xl:col-span-8"
    >
      <div class="flex items-center border-b border-gray-200 px-5 py-4">
        <span v-if="title" class="text-2xl font-semibold text-gray-800">
          {{ localize(title) }}
        </span>
      </div>

      <div class="w-full">
        <div class="py-1">
          <div
            class="grid grid-cols-2 md:grid-cols-4 pl-2 divide-x divide-gray-200"
          >
            <div
              v-for="item in indicators"
              :key="item.name"
              class="flex items-center py-2"
            >
              <div class="px-4 xl:px-3">
                <div class="flex items-center">
                  <div
                    class="mr-2 text-2xl sm:text-3xl font-bold text-gray-800"
                  >
                    {{ item.value }}
                  </div>
                </div>
                <div class="text-sm text-gray-500">
                  {{ localize(item.name) }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-grow">
        <Line
          :chart-options="chart_options"
          :chart-data="chart_data"
          chart-id="bar-chart"
          dataset-id-key="label"
          :width="800"
          :height="300"
          :borderWidth="1"
          displayColors="false"
          mode="nearest"
          intersect="false"
          position="nearest"
          caretSize="0"
          caretPadding="20"
          cornerRadius="4"
          padding="8"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import localize from '@/../lang/localize.js'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  TimeScale,
  Filler,
} from 'chart.js'
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  TimeScale,
  Filler,
)

const props = defineProps({
  dataX: Array, // Данные по оси X
  dataY: Array, // Значения по оси Y
  indicators: Array, // Индиакторы, [{name, value}]
  title: String, // Заголовок графика
  captionX: String, // Подпись к оси X
})

// Стандартные настройки для графиков
const defaultsOptions = {
  graph: {
    color: ['#6366f1', '#cbd5e1'],
    background: ['#3b82f614', '#cbd5e1'],
  },
}

// Собираем данные для линий
const chart_data = ref({
  labels: props.dataX,
  datasets: props.dataY.map((item, index) => {
    return {
      data: item.data,
      label: localize('project.analytics.' + item.label),
      borderColor: !_.isEmpty(item.color)
        ? item.data
        : defaultsOptions.graph.color[index],
      backgroundColor: !_.isEmpty(item.background)
        ? item.data
        : defaultsOptions.graph.background[index],
      fill: item.fill ? item.fill : false,
      borderWidth: 2,
      tension: 0,
      pointRadius: 0,
      pointHoverRadius: 3,
      pointBackgroundColor: !_.isEmpty(item.color)
        ? item.data
        : defaultsOptions.graph.color[index],
    }
  }),
})

// Опции для визуального отображения графиков
const chart_options = ref({
  layout: {
    padding: 20,
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        drawBorder: false,
      },
      ticks: {
        precision: 0,
        callback: (value) => formatThousands(value),
      },
      suggestedMax: 5,
    },

    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        autoSkipPadding: 48,
        maxRotation: 0,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      callbacks: {
        title: () => false,
        label: (context) => ' ' + props.dataX[context.parsed.x],
        afterLabel: (context) => ' ' + formatThousands(context.parsed.y),
      },
    },
  },
  interaction: {
    intersect: false,
    mode: 'nearest',
  },

  maintainAspectRatio: false,
  responsive: true,
})
// Функция, которая приводит числа к нужному значению
const formatThousands = (value) =>
  Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value)
</script> -->
