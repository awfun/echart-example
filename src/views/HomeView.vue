<script setup>
import chartInfoList from './chart-options.js';

import ChartContainer from '@/components/ChartContainer.vue';
// const chartOptions = ref({
//   xAxis: {
//     type: 'category',
//     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//   },
//   yAxis: {
//     type: 'value'
//   },
//   series: [
//     {
//       data: [820, 932, 901, 934, 1290, 1330, 1320],
//       type: 'line',
//       smooth: true
//     }
//   ]
// });

</script>

<template>
  <main>
    <ChartContainer
      v-for="item in chartInfoList"
      :options="item.options" 
      :title="item.title" 
      :width="item.width" 
      :height="item.height" 
      :key="item.key"
    />
  </main>
</template>

<style lang="scss" scoped>

</style>
