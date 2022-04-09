<template>
    <BasicLayout class="account">
        <div class="col-7">
            <TopBar />
            <AccountCurrentBlance />
            <LastMovements />
        </div>
    </BasicLayout>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BasicLayout from '../layouts/BasicLayout.vue';
import TopBar from '../components/TopBar.vue';
import AccountCurrentBlance from '../components/AccountCurrentBlance.vue';
import LastMovements from '../components/LastMovements.vue';

export default {
    name: 'Account',
    components: {
        BasicLayout,
        TopBar,
        AccountCurrentBlance,
        LastMovements
    },
    setup() {
        const store = useStore();
        const user = computed(() => store.state.user);

        return {
            user,
        }
    }

}
</script>

<style lang="scss" scoped>

.account {
    h1 {
        margin: 50px 0;
        text-align: center;
    }

    &__section {
            position: relative;
            padding: 10px;
            border: 1px solid #16212B;
            padding-top: 25px;
            margin-top: 40px;

        .title {
            position: absolute;
            top: -12px;
            background-color: #16212B;
            color: #fff;
            padding: 2px 10px;
        }
    }
}

</style>