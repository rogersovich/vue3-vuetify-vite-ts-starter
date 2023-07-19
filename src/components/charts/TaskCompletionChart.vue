<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const chartData = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Complete',
      borderColor: '#0796E5',
      backgroundColor: 'rgba(7, 150, 229, 0.2)',
      data: [40, 20, 12, 39, 10, 40, 39, 75, 40, 20, 12, 11],
      tension: 0.3,
      fill: true,
    },
    {
      label: 'Created Task',
      borderColor: '#FF9800',
      backgroundColor: 'rgba(255, 152, 0, 0.2)',
      data: [10, 30, 17, 20, 55, 12, 19, 31, 25, 14, 31, 20],
      tension: 0.3,
      fill: true,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
<template>
  <div>
    <Line
      :data="chartData"
      :options="chartOptions"
      :style="{
        height: '350px',
      }"
    />
  </div>
</template>

<style scoped></style>
