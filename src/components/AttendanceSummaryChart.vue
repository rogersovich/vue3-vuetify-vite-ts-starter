<script setup lang="ts">
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
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
      label: 'Clock In',
      backgroundColor: '#0796E5',
      borderRadius: 6,
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
    },
    {
      label: 'Clock Out',
      backgroundColor: '#E53935',
      borderRadius: 6,
      data: [11, 3, 6, 7, 56, 5, 3, 40, 13, 17, 7, 3],
    },
  ],
};

const chartOptions = {
  responsive: true,
};
</script>
<template>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" :style="{
      height: '430px',
      width: '100%',

    }" />
  </div>
</template>

<style scoped></style>
