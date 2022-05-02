<template>
    <form class="change-password" @submit.prevent="onChangePassword">
        <div class="three fields">
            <div class="field">
                <input type="password" placeholder="Contraseña actual" v-model="formData.password" :class="{error: formError.password}">
            </div>
            <div class="field">
                <input type="password" placeholder="Nueva contraseña" v-model="formData.newPassword" :class="{error: formError.newPassword}">
            </div>
            <div class="field">
                <input type="password" placeholder="Repite la nueva contraseña" v-model="formData.newPasswordRepeat" :class="{error: formError.newPasswordRepeat}">
            </div>
        </div>
        <p v-if="messageError">{{messageError}}</p>
        <button type="submit" class="customBtn" :class="{loading}">Actualizar</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import * as Yup from 'yup';
import { reauthenticate } from '../../utils/firebaseFunction';
import { auth } from '../../utils/firebase';

export default {
    name: 'ChangePassword',
    setup() {
        let formData = {};
        let formError = ref({});
        let messageError = ref('');
        let loading = ref(false);

        const schemaForm = Yup.object().shape({
            password: Yup.string().required(true),
            newPassword: Yup.string().required(),
            newPasswordRepeat: Yup.string().required(true).oneOf([Yup.ref("newPassword")], true),
        });

        const onChangePassword = async () => {
            loading.value = true;
            formError.value = {};
            messageError.value = "";
            // console.log("Cambiando contraseña");
            // console.log(formData);
            try {
                await schemaForm.validate(formData, { abortEarly: false });
                console.log("Todo ok")
                try { 
                    const { password, newPassword } = formData;
                    await reauthenticate(password);
                    await auth.currentUser.updatePassword(newPassword);
                    auth.signOut();
                    console.log("Todo ok")
                } catch(error){
                    //console.log(error);
                    messageError.value = error.message;
                }
            } catch(err) {
                err.inner.forEach((error) => {
                    formError.value[error.path] = error.message;
                })
            }
            loading.value = false;
        };

        return { 
            formData,
            formError,
            messageError,
            onChangePassword,
            loading,
        
        };


    }

}
</script>

<style lang="scss" scoped>

.change-password {
    text-align: center;
    
    input {
        background-color: #020201;
        border: 1px solid #3DC480;
        border-radius: 15px;
        padding: 10px;
        margin-bottom: 10px;
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