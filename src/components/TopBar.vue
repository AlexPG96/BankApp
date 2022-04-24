<template>
    <div class="row gridBorder">
        <div class="col-12 p-3">
            <div class="d-flex justify-content-between">

                <div class="userWelcome">
                    <p class="m-0">Hi, {{ user.displayName}}</p>
                    <h2>Welcome Back</h2>
                </div>
                
                <div class="d-flex justify-content-around align-items-center searchBar">
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
  border-bottom: 1px solid #3F4540;

  .userWelcome {
    
    p {
      color: #3F4540;
    }

    h2 {
      color: #fff;
    }
  }

  .searchBar {

    span {
      color: #3F4540;
    }

    input {
      background-color: #020201;;
      border: 1px solid #020201;;
      border: none;
      color: #3F4540;

      &:placeholder {
        color: #3F4540;
      }

      &::-webkit-input-placeholder { 
        color: #3F4540; 
      } /* WebKit */
      &::-moz-placeholder { 
        color: #3F4540; 
      }

      &:focus {
        box-shadow: 0 0 0 .25rem rgba(63, 69, 64, .25);
      }
    }
  }
}
</style>