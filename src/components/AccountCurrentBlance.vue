<template>
  <div class="row py-3 px-3">
      <div class="col-12 py-5 px-3">
        <div class="d-flex justify-content-around">
            <div class="text-center">
                <div class="containerBtn">
                    <button class="currentBalanceBtn"><i class="bi bi-snow"></i></button>
                </div>
                <p class="textBtn">Planet</p>
            </div>
            <div class="text-center">
                <div class="containerBtn">
                    <button class="currentBalanceBtn"><i class="bi bi-key"></i></button>
                </div>
                <p class="textBtn">Planet</p>
            </div>
            <div class="text-center">
                <div class="containerBtn">
                    <button class="currentBalanceBtn"><i class="bi bi-arrow-repeat"></i></button>
                </div>
                <p class="textBtn">Planet</p>
            </div>
            <div class="text-center">
                <div class="containerBtn">
                    <button class="currentBalanceBtn"><i class="bi bi-plus"></i></button>
                </div>
                <p class="textBtn">Planet</p>
            </div>
        </div>
      </div>
      <div class="col-12 py-5 px-3">
            <h3>Resume</h3>
          <div class="py-4 px-5">
              <h2 class="currentMoney">$63,786.00</h2>
              <div class="d-flex justify-content-between">
                  <p class="moneyTitle">Your Money</p>
                  <span>$94,067</span>
              </div>
              <div class="d-flex justify-content-between">
                  <p class="moneyTitle">Credit Limit</p>
                  <span>$23,000</span>
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

.containerBtn {

    background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    border-radius: 50px;
    padding: 3px;

    .currentBalanceBtn {
        width: 80px;
        height: 80px;
        background: #1B1B1B;
        color: #fff;
        font-size: 1.6rem;
        font-weight: 700;
        padding: 10px;
        border: none;
        border-radius: 50px;
    
    
        &:hover {
            color: #1B1B1B;
            background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
        }
    }
}
.textBtn {
    font-size: 0.8rem;
    margin-top: 5px;
}

.currentMoney {
    background: -webkit-linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.moneyTitle  {
    color: #3F4540;        
}
</style>