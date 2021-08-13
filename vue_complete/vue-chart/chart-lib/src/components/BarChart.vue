<template>
  <div>
    <canvas ref="BarChart" id="myBarChart" width="400" height="400"></canvas>
    <button @click="$emit('clearChart')">클리어</button>
  </div>
</template>

<script>
// import Chart from 'chart.js'; -> plugin

export default {
    props: {
        datasets: {
            type: Array
        }
    },
    methods: {

    },
  mounted() {
    // var ctx = document.getElementById("myBarChart");
    var ctx = this.$refs.BarChart;
    var myChart = new this.$_Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: this.datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
    console.log(myChart);
  },
}
</script>

<style>

</style>