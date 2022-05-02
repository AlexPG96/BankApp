<template>
    <BasicLayout class="account">
        <div class="col-7">
            <h1>Bienvenido a los ajustes</h1>

            <div class="accountSection">
                <p class="title">Cambiar nombre <span v-if="user.displayName">({{ user.displayName }})</span></p>
                <ChangeName />
            </div>
            <div class="accountSection">
                <p class="title">Cambiar email <span>({{ user.email }})</span></p>
                <ChangeEmail />
            </div>
            <div class="accountSection">
                <p class="title">Cambiar contraseña</p>
                <ChangePassword />
            </div>
        </div>
    </BasicLayout>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import BasicLayout from '../layouts/BasicLayout.vue';
import ChangeName from '../components/Account/ChangeName.vue';
import ChangeEmail from '../components/Account/ChangeEmail.vue';
import ChangePassword from '../components/Account/ChangePassword.vue';

export default {
    name: 'Settings',
    components: {
        BasicLayout,
        ChangeName,
        ChangeEmail,
        ChangePassword,
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
    }

    .accountSection {
            position: relative;
            padding: 10px;
            border: 1px solid #3DC480;
            border-radius: 15px;
            padding-top: 25px;
            margin-top: 40px;

        
        .title {
            position: absolute;
            top: -12px;
            background-color: #3DC480;
            color: #3F4540;
            padding: 2px 10px;
            border-radius: 15px;
        }
    }
}

</style>