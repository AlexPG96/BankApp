<template>
    <form class="change-name" @submit.prevent="onChangeName">
        <input type="text" placeholder="Nombre y apellidos" v-model="name" :class="{error: formError}">
        <button type="submit" class="customBtn" :class="{loading}">Actualizar</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import * as Yup from 'yup';
import { auth } from '../../utils/firebase';

export default {
    name: 'ChangeName',
    setup() {
        let name = ref('');
        let formError = ref(false);
        let loading = ref(false);

        const store = useStore();

        const schemaForm = Yup.object().shape({ 
            // Va a ser de un mínimo de 6 carácteres
            name: Yup.string().min(6, true).required(),
        })

        const onChangeName = async () => {
            formError.value = false;
            loading.value = true;

            try { 
                await schemaForm.validate({name: name.value}, {abortEarly: false});
                try { 
                    await auth.currentUser.updateProfile({
                        displayName: name.value
                    });
                    store.dispatch('reloadUser');
                } catch (error) {
                    console.log(error);
                }
            } catch (err) {
                err.inner.forEach((error) => {
                    formError.value = error.message;
                })
            }
            loading.value = false;
        };

        return { 
            name,
            onChangeName,
            formError,
            loading,
        
        }

    }
}
</script>

<style lang="scss" scoped>

.change-name {
    text-align: center;

    input {
      background-color: #020201;
      border: 1px solid #3DC480;
      border-radius: 15px;
      padding: 10px;
      color: #fff;

      &:placeholder {
        color: #3F4540;
      }

      &::-webkit-input-placeholder { 
        color: #3F4540; 
      } /* WebKit */
      &::-moz-placeholder { 
        color: #3F4540; 
      }

      &:focus {
        box-shadow: 0 0 0 .25rem rgba(63, 69, 64, .25);
      }
    }
    
    input.error {
        border-color: #faa;
        background-color: #ffeded;
    }

    input.success {
        border-color: #95cb48;
        background-color: #d8efb6;
    }

    .customBtn {
        color: #1B1B1B;
        background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
        border: none;
        border-radius: 15px;
        margin-left: 15px;
        padding: 10px;
        font-weight: 700;
    }
}

</style>