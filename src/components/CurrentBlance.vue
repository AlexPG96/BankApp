<template>
  <div class="row py-3 px-3">
      <div class="col-6 p-3">
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
      <div class="col-6 py-5 px-3">
          <div class="currentBalance">
              <h2 class="currentMoney">$63,786.00</h2>
              <div class="d-flex justify-content-between">
                  <p class="title">Your Money</p>
                  <span class="money">$94,067</span>
              </div>
              <div class="d-flex justify-content-between">
                  <p class="creditLimit">Credit Limit</p>
                  <span class="creditMoney">$23,000</span>
              </div>
          </div>
          <div class="d-flex justify-content-between align-items-center">
                <div class="text-center">
                    <button class="currentBalanceBtn"><i class="bi bi-snow"></i></button>
                    <p class="textBtn">Freeze</p>
                </div>
                <div class="text-center">
                    <button class="currentBalanceBtn"><i class="bi bi-key"></i></button>
                    <p class="textBtn">Change Pin</p>
                </div>
                <div class="text-center">
                    <button class="currentBalanceBtn"><i class="bi bi-arrow-repeat"></i></button>
                    <p class="textBtn">Replace</p>
                </div>
                <div class="text-center">
                    <button class="currentBalanceBtn"><i class="bi bi-plus"></i></button>
                    <p class="textBtn">Add</p>
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
    height: 100%;
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

}
.currentBalance {
    .currentMoney {
      background: -webkit-linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .title {
        color: #3F4540;        
    }

    .creditLimit {
        color: #3F4540;
    }

}

.currentBalanceBtn {
    width: 50px;
    height: 50px;
    background: #1B1B1B;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    padding: 10px;
    border: none;
    border-radius: 15px;


    &:hover {
        color: #1B1B1B;
        background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    }
}
.textBtn {
    font-size: 0.8rem;
    margin-top: 5px;
}
</style>