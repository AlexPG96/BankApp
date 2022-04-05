<template>
  <BasicLayout>
    <div class="col-7">
      <TopBar />
      <CurrentBlance />
      <Recently />
      <BankingTransaction />
    </div>
  </BasicLayout>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import BasicLayout from "../layouts/BasicLayout";
import TopBar from "../components/TopBar.vue";
import CurrentBlance from "../components/CurrentBlance.vue";
import Recently from "../components/Recently.vue";
import BankingTransaction from "../components/BankingTransactions";

export default {
  name: "HomeBank",
  components: {
    BasicLayout,
    TopBar,
    CurrentBlance,
    Recently,
    BankingTransaction,
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