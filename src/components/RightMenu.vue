<template>
    <div class="col-3 borderLeft">
        <div class="row p-3 borderBottom">
            <div class="col-3 text-center">
                <div class="notificationBtn">
                    <router-link class="item" to="/notifications"><i class="bi bi-bell"></i></router-link>
                    <span class="notificationNum">2</span>
                </div>
            </div>
            <div class="col-9 text-center">
                <div class="dropdown userDropdown">
                    <a class="dropdownButton dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class="p-2">
                            <img class="userImage" :src="user.photoURL" alt="Logo" width="25" height="25">
                        </span>
                        <span class="me-2">{{ user.displayName || user.email }}</span>
                    </a>
                        <div class="userRole">Admin</div>

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
                <Select 
                    :options="fivelastmonths"
                    />
            </div>
        </div>
        <div class="row p-3">
            <div class="col-12">
                <h3>$109,202.00</h3>
                <small>+ $135.00/last month</small>
            </div>
            <div class="col-12">
                <div class="chartist d-flex justify-content-around flex-wrap-reverse">
                    <Chart percentage="50%" :currentMonth="false" />
                    <Chart percentage="60%" :currentMonth="false" />
                    <Chart percentage="80%" :currentMonth="true" />
                    <Chart percentage="90%" :currentMonth="false" />
                    <Chart percentage="30%" :currentMonth="false" />
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
import Select from '../components/Select.vue';
export default {
    name: 'Menu',
    components: {
        Chart,
        Select
    },
    setup() {
        const store = useStore();
        const user = computed(() => store.state.user);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const fivelastmonths = [];

        const lastMonths = () => {
            let i;
            let date = new Date();
            for (let step = 0; step < 5; step++) {
                // Se ejecuta 5 veces, con valores del paso 0 al 4.
                console.log('Camina un paso hacia el este');
            }
            let todayMonth = date.getMonth();
            let month = date.getMonth() - todayMonth;
            for(let i = 0; i < 5; i++) {
                let monthNum = month + i;
                fivelastmonths.push(months[monthNum]);
            }
            return fivelastmonths;
        }

        lastMonths();


        const logOut = () => {
            auth.signOut();
        }
    
        return {
            user,
            logOut,
            months,
            lastMonths,
            fivelastmonths
        }
    }


}
</script>

<style lang="scss" scoped>

.borderLeft {
    border-left: 1px solid #3F4540;
}
.borderBottom {
    border-bottom: 1px solid #3F4540;
    margin-top: 15px;

    .notificationBtn {
        position: relative;
        background: #1B1B1B;
        padding: 15px;
        border-radius: 25px;
        font-size: 1.2rem;
        height: 55px;
        width: 55px;
        cursor: pointer;

        i {
            color: #fff;
            font-weight: 700;
        }
    
        .notificationNum {
            position: absolute;
            background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
            color: #1B1B1B;
            top: -10px;
            right: -10px;
            width: 30px;
            height: 30px;
            padding: 5px;
            border-radius: 15px;
            font-size: .8rem;
        }


        &:hover {
        }
    
    }

    .userDropdown {
        height: 50px;
        .dropdownButton {
            position: relative;
            background: none;
            color: #fff;
            text-decoration: none;

            .userImage {
                display: inline;
                width: 50px;
                height: 50px;
                border-radius: 25px;
                border: 2px solid #3DC480;
            }
        }
        .userRole {
            position: absolute;
            left: 75px;
            font-size: .8rem;
            color: #3F4540;
            top: 35px;
        }

        .dropdown-menu {
            background: #1B1B1B;
            border: 1px solid #3DC480;

            .dropdown-item {
                color: #fff;

                &:hover {
                    background: #3DC480;
                }
            }

        }
    }

}

hr {
    background: #FFF;
}

.chartist {
    height: 250px;
}
</style>