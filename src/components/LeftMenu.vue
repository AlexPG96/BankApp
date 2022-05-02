<template>
    <div class="col-2 borderRight">
        <div class="row borderBottom">
            <div class="col-12 p-3">
                <div class="p-3">
                    <router-link class="item" to="/overview"><img src="../assets/Ginko.png" alt="Logo"> </router-link>
                </div>
            </div>
        </div>
        <div class="row mt-3 mb-5">
            <div class="col-12 p-3 mx-auto">
                <router-link to="/account" class="containerItem active">
                    <div class="borderGradient">
                        <i class="me-2 bi bi-person"></i>
                        <span class="item">Account</span>
                    </div>
                </router-link>
                <router-link to="/overview" class="containerItem">
                    <div class="borderGradient">
                        <i class="me-2 bi bi-bar-chart"></i>
                        <span class="item">Overview</span>
                    </div>
                </router-link>
                <router-link to="/send" class="containerItem">
                    <div class="borderGradient">
                        <i class="me-2 bi bi-arrow-up-right"></i>
                        <span class="item">Send</span>
                    </div>
                </router-link>
                <router-link to="/receive" class="containerItem">
                    <div class="borderGradient">
                        <i class="me-2 bi bi-arrow-down-left"></i>
                        <span class="item">Receive</span>
                    </div>
                </router-link>
                <router-link to="/swap" class="containerItem">
                    <div class="borderGradient">
                        <i class="me-2 bi bi-arrow-left-right"></i>
                        <span class="item">Swap</span>
                    </div>
                </router-link>
                <router-link to="/cards" class="containerItem">
                    <div class="borderGradient">
                        <i class="me-2 bi bi-credit-card"></i>
                        <span class="item">Cards</span>
                    </div>
                </router-link>
                <router-link to="/settings" class="containerItem">
                    <div class="borderGradient">
                        <i class="me-2 bi bi-gear"></i>
                        <span class="item">Settings</span>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="row pt-4">
            <div class="col-12 p-3">
                <div class="ps-5 p-1">
                    <span class="item" to="/">Deposits</span>
                </div>
                <div class="ps-5 p-1">
                    <span class="item" to="/">Loyalty Program</span>
                </div>
                <div class="ps-5 p-1">
                    <span class="item" to="/">Loans</span>
                </div>
            </div>
        </div>
        <hr class="mt-4 mb-4">
        <div class="row">
            <div class="col-12 p-3">
                <div class="ps-5 p-1">
                    <span class="item" to="/">Ginko Bank</span>
                </div>
                <div class="ps-5 p-1">
                    <span class="item" to="/">2022 Ginkobank Licenes</span>
                </div>
                <div class="ps-5 p-1">
                    <span class="item" to="/">#05 From 10.01. 2022</span>
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
    border-right: 1px solid #3F4540;

    a {
        color: #fff;
        text-decoration: none;
    }
    .containerItem {
        display: flex;
        justify-content: start;
        width: 80%;
        margin: 15px auto;
        border-radius: 8px;
        position: relative;
        padding: 1px;

        .borderGradient {
            background: #020201;
            color: white;
            padding: .8rem 1.5rem;
            width: 100%;
            border-radius: 8px;

        }

        &:hover {
            background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
        }

    }
    .router-link-active, .router-link-exact-active {
        background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    }
}   

hr {
    background: #fff;
}
.borderBottom {
    border-bottom: 1px solid #3F4540;
    margin-top: 2px;
}

</style>