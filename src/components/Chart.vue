<template>
  <div class="p-2 pepito" :style="{height: percentage}">
      <div class="manolito">
        <small>{{percentage}}</small>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Chart',
    props: {
        percentage: String,
    }

}
</script>

<style lang="scss" scoped>
.pepito {
    position: relative;
    width: 55px;
    background-color: #000;
    color: #fff;
    border-radius: 15px;

    .manolito {
        position: absolute;
        bottom: 10px;
        right: 12px;
    }
}
</style>