<template>
  <BasicLayout>
    <div class="col-7">
      <TopBar />
      <Recently />
      <ContactList />
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
import ContactList from "../components/ContactList.vue";

export default {
  name: "Send",
  components: {
    BasicLayout,
    TopBar,
    CurrentBlance,
    Recently,
    BankingTransaction,
    ContactList,
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