<template>
    <div class="col-3 borderLeft">
        <div class="row p-3 borderBottom">
            <div class="col-3 text-center">
                <router-link class="item" to="/notifications"><i class="bi bi-bell"></i></router-link>
                <span>2</span>
            </div>
            <div class="col-9 text-center">
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="p-2"><img :src="user.photoURL" alt="Logo" width="25" height="25"></span>
                        <span>{{ user.displayName || user.email }}</span>
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="/">Mi Cuenta</a></li>
                        <li><a class="dropdown-item" href="#">Idioma</a></li>
                        <li><a class="dropdown-item" @click="logOut">Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row p-3">
            <div class="col-12 text-center">
                <img src="../assets/image.png" alt="image" style="width: 60%;">
            </div>
        </div>
        <hr>
        <div class="row p-3">
            <div class="col-6">
                <h3>Insight</h3>
            </div>
            <div class="col-6">
                <select class="form-select" aria-label="Default select example">
                    <option v-for="(month, index) in months" :key="index" :value="month">{{month}}</option>
                </select>
            </div>
        </div>
        <div class="row p-3">
            <div class="col-12">
                <h3>$109,202.00</h3>
                <small>+ $135.00/last month</small>
            </div>
            <div class="col-12">
                <div class="chartist d-flex justify-content-around flex-wrap-reverse">
                    <Chart percentage="50%" />
                    <Chart percentage="60%" />
                    <Chart percentage="80%" />
                    <Chart percentage="90%" />
                    <Chart percentage="30%" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { auth } from '../utils/firebase';

import Chart from '../components/Chart.vue';
export default {
    name: 'Menu',
    components: {
        Chart,
    },
    setup() {
        const store = useStore();
        const user = computed(() => store.state.user);

        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

        const logOut = () => {
            auth.signOut();
        }
    
        return {
            user,
            logOut,
            months,
        }
    }


}
</script>

<style lang="scss" scoped>

.borderLeft {
    border-left: 1px solid #cecece;
}
.borderBottom {
    border-bottom: 1px solid #cecece;
    margin-top: 30px;
}

.chartist {
    height: 250px;
}
</style>