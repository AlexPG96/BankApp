<template>
    <div class="row py-3 px-3">
      <div class="col-12">
        <div class="d-flex justify-content-between">
            <h3>Last Movements </h3>
            <div class="containerLink">
                <router-link to="/overview" class="moreLink">See more</router-link>            
            </div>
        </div>
    </div>
  </div>
  <div class="infiniteScroll">
    <SingularLastMovement icon="bi bi-arrow-down-left" color="#9280FD" shadowColor="#9280FD" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00"/>
    <SingularLastMovement icon="bi bi-arrow-up-right" color="#3C71FC" shadowColor="#3C71FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="-$12.959,00"/>
    <SingularLastMovement icon="bi bi-calendar-event" color="#50D3FC" shadowColor="#50D3FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00"/>
    <SingularLastMovement icon="bi bi-arrow-down-left" color="#9280FD" shadowColor="#9280FD" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00"/>
    <SingularLastMovement icon="bi bi-arrow-up-right" color="#3C71FC" shadowColor="#3C71FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="-$12.959,00"/>
    <SingularLastMovement icon="bi bi-calendar-event" color="#50D3FC" shadowColor="#50D3FC" movementTitle="Texto de la transacción" movementDate="10 Feb 2022 at 10:20 pm" movementMoney="+$12.959,00"/>
  </div>
</template>

<script>
import moment from "moment";

import SingularLastMovement from "../components/SingularLastMovement.vue";
export default {
    name: 'LastMovements',
    components: {
        SingularLastMovement,
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

.containerLink {
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    border-radius: 6px;
    padding: 1px;
    .moreLink {
        background: #020201;
        color: #3F4540;
        text-decoration: none;
        border-radius: 6px;
        padding: 10px;
        transition: .2s;
    
        &:hover {
            background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
            color: #1B1B1B;
        }
    }

}
.infiniteScroll {
    overflow: auto;
    height:350px;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #aeaeae transparent;
    padding-bottom: 0 !important;
}
</style>