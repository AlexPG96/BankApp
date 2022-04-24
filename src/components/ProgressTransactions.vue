<template>
  <div class="row p-3">
    <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
            <div class="iconContainer" :style="{background: color, boxShadow: '0 0 10px 2px' + shadowColor}">
                <i :class="icon"></i>
            </div>
            <div class="movementsInfo">
                <div class="movementTitle">{{movementTitle}}</div>
                <small class="movementDate">{{movementDate}}</small>
            </div>
            <div>
                <div class="progress" :style="{boxShadow: '0 0 10px 2px' + shadowColor}">
                    <div class="progress-bar" :style="{width: percentage + '%', background: background}" role="progressbar" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
            <div>
                <span>{{ movementMoney }}</span>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ProgressTransactions',
    props: {
        icon: String,
        color: String,
        shadowColor: String,
        movementTitle: String,
        movementDate: String,
        movementMoney: String,
        percentage: String,
        background: String
    }
}
</script>

<style lang="scss" scoped>

.iconContainer {

    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;

    i {
        font-size: 1.4rem;
    }
}

.movementsInfo {
    text-align: center;

    .movementTitle {
        font-size: 1.2rem;
    }

    .movementDate {
        font-size: .8rem;
        color: #3F4540;
    }
}
.progress {
    width: 300px;
    background-color: #1B1B1B;
}
</style>