<template>
    <div class="row py-3 px-3">
      <div class="col-12">
        <div class="d-flex justify-content-between">
            <h3>Today</h3>
            <div class="d-flex align-items-center">
                <div class="me-3">
                    <i class="bi bi-calendar me-1"></i>
                    <input type="date" v-model="form.date">
                </div>
                <div>
                    <button>
                        <i class="bi bi-filter"></i>
                    </button>
                </div>
            </div>

            
        </div>
    </div>
  </div>
  <div class="infiniteScroll">
    <ProgressTransactions />
    <ProgressTransactions />
    <ProgressTransactions />
    <ProgressTransactions />
  </div>
</template>

<script>
import moment from "moment";

import ProgressTransactions from "../components/ProgressTransactions.vue";
export default {
    name: 'BankingTransaction',
    components: {
        ProgressTransactions,
    },
    setup() {
        const filters = ['Today', 'Weekly', 'Monthly', 'Yearly'];
        const date = new Date();
        const form = {
            date: moment(date).format('DD-MMM-YYYY'),
        }

        return {
            filters,
            form,
        }
    }

}
</script>

<style lang="scss" scoped>
.infiniteScroll {
    overflow: auto;
    height:190px;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #aeaeae transparent;
    padding-bottom: 0 !important;
}
</style>