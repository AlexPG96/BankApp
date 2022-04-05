<template>
    <div class="col-2 borderRight">
        <div class="row borderBottom">
            <div class="col-12 p-3">
                <div class="p-3">
                    <router-link class="item" to="/"><img src="../assets/Ginko.png" alt="Logo"> </router-link>
                </div>
            </div>
        </div>
        <div class="row mt-3 mb-5">
            <div class="col-12 p-3 mx-auto">
                <router-link to="/account" class="containerItem p-3">
                    <i class="me-2 bi bi-person"></i>
                    <span class="item">Account</span>
                </router-link>
                <router-link to="/account" class="containerItem p-3">
                    <i class="me-2 bi bi-bar-chart"></i>
                    <span class="item">Overview</span>
                </router-link>
                <router-link to="/account" class="containerItem p-3">
                    <i class="me-2 bi bi-arrow-up-right"></i>
                    <span class="item">Send</span>
                </router-link>
                <router-link to="/account" class="containerItem p-3">
                    <i class="me-2 bi bi-arrow-down-left"></i>
                    <span class="item">Reveive</span>
                </router-link>
                <router-link to="/account" class="containerItem p-3">
                    <i class="me-2 bi bi-arrow-left-right"></i>
                    <span class="item">Swap</span>
                </router-link>
                <router-link to="/account" class="containerItem p-3">
                    <i class="me-2 bi bi-credit-card"></i>
                    <span class="item">Cards</span>
                </router-link>
                <router-link to="/account" class="containerItem p-3">
                    <i class="me-2 bi bi-gear"></i>
                    <span class="item">Settings</span>
                </router-link>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 p-3">
                <div class="ps-5 p-1">
                    <router-link class="item" to="/account">Deposits</router-link>
                </div>
                <div class="ps-5 p-1">
                    <router-link class="item" to="/account">Loyalty Program</router-link>
                </div>
                <div class="ps-5 p-1">
                    <router-link class="item" to="/account">Loans</router-link>
                </div>
            </div>
        </div>
        <hr class="mt-4 mb-4">
        <div class="row">
            <div class="col-12 p-3">
                <div class="ps-5 p-1">
                    <router-link class="item" to="/account">Ginko Bank</router-link>
                </div>
                <div class="ps-5 p-1">
                    <router-link class="item" to="/account">2022 Ginkobank Licenes</router-link>
                </div>
                <div class="ps-5 p-1">
                    <router-link class="item" to="/account">#05 From 10.01. 2022</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { auth } from '../utils/firebase';

export default {
    name: 'Menu',
    setup() {
        const store = useStore();
        const user = computed(() => store.state.user);

        const logOut = () => {
            auth.signOut();
        }
    
        return {
            user,
            logOut,
        }
    }


}
</script>

<style lang="scss" scoped>

.borderRight {
    border-right: 1px solid #cecece;

    .containerItem {
        display: flex;
        justify-content: start;
        width: 80%;
        margin: 10px auto;
        border: 1.5px solid #cecece;
        border-radius: 15px;
    }
}   
.borderBottom {
    border-bottom: 1px solid #cecece;
    margin-top: 2px;
}

</style>