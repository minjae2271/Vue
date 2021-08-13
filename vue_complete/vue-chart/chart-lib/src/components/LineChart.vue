<template>
  <div>
    <canvas ref="LineChart" id="myLineChart"></canvas>
  </div>
</template>

<script>
// import Chart from "chart.js"; -> plugin

export default {
  mounted() {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };
    const config = {
      type: "line",
      data,
      options: {},
    };
    // const ctx = document.getElementById("myLineChart");
    const ctx = this.$refs.LineChart.getContext('2d');

    var myChart = new this.$_Chart(ctx, config);
    console.log(myChart);
  },
};
</script>

<style>
</style>