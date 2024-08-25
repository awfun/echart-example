<template>
  <div class="chart-wrapper">
    <div class="title">{{  title }}</div>
    <div :style="style">
      <div ref="chartRef" class="chart-container"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartContainer',
  props: {
    title: {
      type: String,
      default: 'Chart',
    },
    options: {
      type: Object,
      required: true,
    },
    width: {
      type: [Number, String],
      default: '100%',
    },
    height: {
      type: [Number, String],
      default: '100%',
    },
  },
  computed: {
    style() {
      return {
        height: Number.isNaN(Number(this.height)) ? this.height : `${this.height}px`,
        width: Number.isNaN(Number(this.width)) ? this.width : `${this.width}px`,
      }
    }
  },
  watch: {
    options() {
      this.initChart();
    },
  },
  mounted() {
    this.initChart();
    this.onResizeCharts();
  },
  methods: {
    initChart() {
      this.chartInstance = echarts.init(this.$refs.chartRef);
      this.chartInstance.setOption(this.options);
    },
    resizeCharts() {
      this.chartInstance && this.chartInstance.resize();
    },
    onResizeCharts() {
      this.resizeCharts();
      window.addEventListener('resize', this.resizeCharts);
    },
    removeResizeCharts() {
      window.removeEventListener('resize', this.resizeCharts);
    },
  },
};
</script>

<style lang="scss" scoped>
.chart-wrapper {
  margin: 16px;
  padding: 16px 24px;
  background-color: #fff;
  display: inline-block;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.05);
}
.title {
  margin-bottom: 12px;
  text-align: center;
  font-weight: bold;
}
.chart-container {
  width: 100%;
  height: 100%;
}
</style>
