<template>
  <div class="container-fluid">
    <div class="row">
      <LeftMenu />
        <slot />
      <RightMenu />
    </div>
  </div>
</template>

<script>
import RightMenu from '../components/RightMenu.vue';
import LeftMenu from '../components/LeftMenu.vue';

export default {
  name: 'BasicLayout',
  components: {
    RightMenu,
    LeftMenu
  }
}
</script>

<style>

.container-fluid {
  background: #020201;
  color: #fff;
}

</style>