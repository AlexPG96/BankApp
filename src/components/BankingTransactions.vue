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
    <ProgressTransactions icon="bi bi-arrow-down-left" color="#9280FD" shadowColor="#9280FD" background="#9280FD" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00" percentage="75" />
    <ProgressTransactions icon="bi bi-arrow-up-right" color="#3C71FC" shadowColor="#3C71FC" background="#3C71FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00" percentage="45" />
    <ProgressTransactions icon="bi bi-calendar-event" color="#50D3FC" shadowColor="#50D3FC" background="#50D3FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00" percentage="30" />
    <ProgressTransactions icon="bi bi-arrow-down-left" color="#9280FD" shadowColor="#9280FD" background="#9280FD" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00" percentage="25" />
    <ProgressTransactions icon="bi bi-arrow-up-right" color="#3C71FC" shadowColor="#3C71FC" background="#3C71FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00" percentage="80" />
    <ProgressTransactions icon="bi bi-calendar-event" color="#50D3FC" shadowColor="#50D3FC" background="#50D3FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00" percentage="90" />
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