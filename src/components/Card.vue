<template>
  <div class="row py-3 px-3">
      <div class="col-6 p-3">
          <small>Current Card</small>
          <div class="cardContainer">
            <div class="currentCard"></div>
            <div class="currentMoneyCard">
                <small>Current Balance</small>
                <h2 class="mt-2">$63,786.00</h2>
            </div>
            <div class="cardInfo">
                <div class="infoBalance">
                    <p class="infoCategory">Num</p>
                    <p class="categoryValue">5679 ****</p>
                </div>
                <div class="infoBalance">
                    <p class="infoCategory">Exp.</p>
                    <p class="categoryValue">08/23</p>
                </div>
            </div>
            <div class="cardBtn">
                <button>Add money</button>
            </div>

          </div>
      </div>
      <div class="col-6 p-3">
          <small>Secondary Card</small>
          <div class="cardContainer">
            <div class="secondCard"></div>
            <div class="secondMoneyCard">
                <small>Current Balance</small>
                <h2 class="mt-2">$5,786.00</h2>
            </div>
            <div class="secondcardInfo">
                <div class="secondinfoBalance">
                    <p class="secondinfoCategory">Num</p>
                    <p class="secondcategoryValue">6498 ****</p>
                </div>
                <div class="secondinfoBalance">
                    <p class="secondinfoCategory">Exp.</p>
                    <p class="secondcategoryValue">07/26</p>
                </div>
            </div>
            <div class="secondcardBtn">
                <button>Add money</button>
            </div>

          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "CurrentBlance",


}
</script>

<style lang="scss" scoped>

.cardContainer {
    position: relative;
    width: 100%;
    height: 300px;
    color: #020201;
    font-weight: 500;
    .currentCard {
        width: 100%;
        height: 115%;
        background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
        // original sin bordes clip-path: polygon(47% 10%, 54% 18%, 100% 18%, 100% 69%, 90% 69%, 86% 76%, 44% 76%, 36% 68%, 0 68%, 0 10%);
        // cambiado con bordes
        clip-path: polygon(47% 10%, 48.81% 10.31%, 50.42% 11.55%, 52.96% 14.65%, 55.34% 16.76%, 58.02% 17.69%, 96.51% 17.69%, 97.31% 18%, 98.92% 19.04%, 100% 21.66%, 100% 24.9%, 99.73% 65.28%, 99.73% 67.42%, 99.46% 68.11%, 98.66% 68.8%, 96.78% 69.01%, 91.08% 69%, 90.07% 69.38%, 89.2% 69.83%, 87.85% 71.59%, 86.27% 75.07%, 86% 75.52%, 84.66% 76.28%, 82.77% 76.42%, 44% 76.31%, 42.66% 75.83%, 41.31% 74.42%, 40.77% 73.63%, 38.16% 70.17%, 37.34% 69.38%, 36.28% 68.9%, 35.2% 68.73%, 7px 68.31%, 2px 67.24%, 0px 64.93%, 0px 11.86%, 2px 10.62%, 5px 10.17%);
    }

    .secondCard {
        width: 100%;
        height: 115%;
        background: linear-gradient(90deg, rgba(202,114,77,1) 2%, rgba(233,177,101,1) 88%);
        // original sin bordes clip-path: polygon(47% 10%, 54% 18%, 100% 18%, 100% 69%, 90% 69%, 86% 76%, 44% 76%, 36% 68%, 0 68%, 0 10%);
        // cambiado con bordes
        clip-path: polygon(47% 10%, 48.81% 10.31%, 50.42% 11.55%, 52.96% 14.65%, 55.34% 16.76%, 58.02% 17.69%, 96.51% 17.69%, 97.31% 18%, 98.92% 19.04%, 100% 21.66%, 100% 24.9%, 99.73% 65.28%, 99.73% 67.42%, 99.46% 68.11%, 98.66% 68.8%, 96.78% 69.01%, 91.08% 69%, 90.07% 69.38%, 89.2% 69.83%, 87.85% 71.59%, 86.27% 75.07%, 86% 75.52%, 84.66% 76.28%, 82.77% 76.42%, 44% 76.31%, 42.66% 75.83%, 41.31% 74.42%, 40.77% 73.63%, 38.16% 70.17%, 37.34% 69.38%, 36.28% 68.9%, 35.2% 68.73%, 7px 68.31%, 2px 67.24%, 0px 64.93%, 0px 11.86%, 2px 10.62%, 5px 10.17%);
    }

    .currentMoneyCard {
        position: absolute;
        top: 50px;
        left: 30px;
        text-align: left;

        h2 {
            font-weight: 700;
            font-size: 2.2rem;
        }
    }

    .secondMoneyCard {
        position: absolute;
        top: 50px;
        left: 30px;
        text-align: left;
        color: #fff;

        h2 {
            font-weight: 700;
            font-size: 2.2rem;
        }
    }
    .cardInfo {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 70px;
        left: 30px;
        text-align: left;

        .infoBalance {
            width: 80px;

            .infoCategory {
                font-size: .8rem;
                margin: 0;
            }

            .categoryValue {
                font-size: .9rem;
                font-weight: 700;
            }
        }
    }

    .secondcardInfo {
        display: flex;
        justify-content: space-between;
        position: absolute;
        bottom: 70px;
        left: 30px;
        text-align: left;
        color: #fff;

        .secondinfoBalance {
            width: 80px;

            .secondinfoCategory {
                font-size: .8rem;
                margin: 0;
            }

            .secondcategoryValue {
                font-size: .9rem;
                font-weight: 700;
            }
        }
    }

    .cardBtn {
        position: absolute;
        bottom: 50px;
        right: 60px;
        width: 150px;
        background: #020201;
        border-radius: 15px;
        padding: 10px;
        text-align: center;
        cursor: pointer;

        button {
            border: none;
            background: -webkit-linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

        }
        
        &:hover {
            background-color: #1B1B1B;
        }
    }

    .secondcardBtn {
        position: absolute;
        bottom: 50px;
        right: 60px;
        width: 150px;
        background: #fff;
        border-radius: 15px;
        padding: 10px;
        text-align: center;
        cursor: pointer;

        button {
            border: none;
            background: -webkit-linear-gradient(90deg, rgba(202,114,77,1) 2%, rgba(233,177,101,1) 88%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;

        }
        
        &:hover {
            background-color: #cecece;
        }
    }

}
</style>