<template>
  <div class="p-2 chartBar" :style="{height: percentage}" :class="{currentMonth: currentMonth}">
      <div class="chartNumber">
        <small>{{percentage}}</small>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Chart',
    props: {
        percentage: String,
        currentMonth: Boolean,
    }

}
</script>

<style lang="scss" scoped>
.chartBar {
    position: relative;
    width: 55px;
    background-color: #1B1B1B;
    color: #fff;
    border-radius: 15px;

    .chartNumber {
        position: absolute;
        bottom: 10px;
        right: 12px;
    }
}

.currentMonth {
    background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    color: #1B1B1B;
}
</style>