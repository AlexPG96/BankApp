<template>
  <div class="row p-3">
    <div class="col-12">
        <div class="d-flex justify-content-around align-items-center">
            <div class="iconContainer" :style="{background: color, boxShadow: '0 0 10px 2px' + shadowColor}">
                <i :class="icon"></i>
            </div>
            <div class="movementsInfo">
                <div class="movementTitle">{{movementTitle}}</div>
                <small class="movementDate">{{movementDate}}</small>
            </div>
            <div>
                <span>{{movementMoney}}</span>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SingularLastMovement',
    props: {
        icon: String,
        color: String,
        shadowColor: String,
        movementTitle: String,
        movementDate: String,
        movementMoney: String,
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
</style>