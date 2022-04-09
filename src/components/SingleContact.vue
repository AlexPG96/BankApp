<template>
    <div class="col-4 py-3 px-3" data-bs-toggle="modal" data-bs-target="#contactModal">
        <div class="d-flex align-items-center p-2 contactCard">
            <div class="m-2">
                <img v-if="icon" class="contactIcon" :src="require(`../assets/${icon}`)" alt="contactIcon">
            </div>
            <div class="contactInfo">
                <p class="m-0">{{name}}</p>
                <small>{{account}}</small>
            </div>
        </div>
    </div>

    <div class="modal fade" id="contactModal" tabindex="-1" aria-labelledby="contactModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 v-if="receive" class="modal-title" id="contactModalLabel">Receive to {{name}}</h5>
                <h5 v-else class="modal-title" id="contactModalLabel">Send to {{name}}</h5>

                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="clear('C')"></button>
            </div>
            <div class="modal-body">
                <div class="d-flex align-items-center p-2 contactCard">
                    <div class="m-2">
                        <img v-if="icon" class="contactIcon" :src="require(`../assets/${icon}`)" alt="contactIcon">
                    </div>
                    <div class="contactInfo">
                        <p class="m-0">{{name}}</p>
                        <small>{{account}}</small>
                    </div>
                </div>
                
                <div class="p-3">
                    <div v-if="selectedNum" class="viewer">{{ selectedNum }}€</div>
                    <div v-else class="viewer">0€</div>
                    <div id="calculator" class="calculator">

                        <button class="num" @click="keyPressed('7')">7</button>
                        <button class="num" @click="keyPressed('8')">8</button>
                        <button class="num" @click="keyPressed('9')">9</button>

                        <button class="num" @click="keyPressed('4')">4</button>
                        <button class="num" @click="keyPressed('5')">5</button>
                        <button class="num" @click="keyPressed('6')">6</button>

                        <button class="num" @click="keyPressed('1')">1</button>
                        <button class="num" @click="keyPressed('2')">2</button>
                        <button class="num" @click="keyPressed('3')">3</button>

                        <button class="num" @click="keyPressed('0')">0</button>
                        <button class="num" @click="keyPressed('.')">.</button>
                        <button class="num" @click="clear('C')"><i class="bi bi-backspace-fill"></i></button>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="clear('C')">Send money</button>
            </div>
            </div>
        </div>
    </div>

</template>

<script>
import { ref } from "vue";
export default {
    name: 'SingleContact',
    props: {
        icon: String,
        name: String,
        account: String,
        receive: Boolean,
    },
    setup() {
    const selectedNum = ref("");

    const keyPressed = (input) => {
      selectedNum.value = selectedNum.value + input;
    };

    const clear = () => {
      selectedNum.value = "";
    };

    return {
      selectedNum,
      keyPressed,
      clear,
    };
  },

}
</script>

<style lang="scss" scoped>

.contactCard {

    border-radius: 15px;
    .contactIcon {
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }

    .contactInfo {

        p {
            color: #fff;
            font-size: 0.8rem;
            font-weight: 700;
        }

        small {
            color: #3F4540;
        }
    }

    &:hover {
        background-color: #1B1B1B;
    }
}

.modal-body {
    background: #000;

    .viewer {
        text-align: center;
        color: #fff;
        font-size: 2.5rem;
        font-weight: 700;
        margin-right: 10px;
    }
    .calculator {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-column-gap: 0px;
        width: 50%;
        margin: 0 auto;
    
        .num {
            width: 50px;
            height: 50px;
            margin: 5px;
            border-radius: 15px;
            background: none;
            border: none;
            color: #fff;
            font-weight: 700;
    
            &:hover {
                color: #1B1B1B;
                background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
            }
        }
    
    }
}
</style>