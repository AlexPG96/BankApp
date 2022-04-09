<template>
    <div class="row py-3 px-3">
      <div class="col-12">
        <div class="d-flex justify-content-between">
            <h3>Last Movements </h3>
            <router-link to="/more-movements">See more</router-link>            
        </div>
    </div>
  </div>
  <div class="infiniteScroll">
    <SingularLastMovement />
    <SingularLastMovement />
    <SingularLastMovement />
    <SingularLastMovement />
    <SingularLastMovement />
    <SingularLastMovement />
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
.infiniteScroll {
    overflow: auto;
    height:350px;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #aeaeae transparent;
    padding-bottom: 0 !important;
}
</style>