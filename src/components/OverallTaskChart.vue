<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'vue-chartjs';

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ['Complete', 'Overdue', 'Unscheduled'],
  datasets: [
    {
      backgroundColor: ['#D4DFE7', '#FF9800', '#0796E5'],
      data: [25, 25, 50],
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
    <Pie
      :data="chartData"
      :options="chartOptions"
      :style="{
        height: '420px',
      }"
    />
  </div>
</template>

<style scoped></style>
