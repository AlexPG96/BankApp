<template>
  <BasicLayout>
    <div class="col-7">
        <TopBar />
        <Card />
        <div class="d-flex justify-content-around">
            <div class="text-center">
                <button><i class="bi bi-snow"></i></button>
                <p>Freeze</p>
            </div>
            <div class="text-center">
                <button><i class="bi bi-key"></i></button>
                <p>Change Pin</p>
            </div>
            <div class="text-center">
                <button><i class="bi bi-arrow-repeat"></i></button>
                <p>Replace</p>
            </div>
        </div>
        
    </div>
  </BasicLayout>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import BasicLayout from "../layouts/BasicLayout";
import TopBar from "../components/TopBar.vue";
import Card from "../components/Card.vue";

export default {
  name: "HomeBank",
  components: {
    BasicLayout,
    TopBar,
    Card,
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    
    return {
      user,
    };
  },
};
</script>

<style lang="scss" scoped>
.gridBorder {
  border-bottom: 1px solid #cecece;
}
</style>