<template>
    <div class="row gridBorder">
        <div class="col-12 p-3">
            <div class="d-flex justify-content-between">

                <div>
                    <p class="m-0">Hi, {{ user.displayName}}</p>
                    <h2>Welcome Back</h2>
                </div>
                
                <div class="d-flex justify-content-around align-items-center">
                    <span class="m-2"><i class="bi bi-search"></i></span>
                    <input type="text" class="form-control" placeholder="Search here...">
                </div>
            
            </div>

        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import BasicLayout from "../layouts/BasicLayout";
export default {
  name: "HomeBank",
  components: {
    BasicLayout,
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