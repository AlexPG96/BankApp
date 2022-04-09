<template>
  <div class="row p-3">
    <div class="col-12">
        <div class="d-flex justify-content-around align-items-center">
            <div class="icon">
                <i class="bi bi-arrow-left-circle-fill"></i>
            </div>
            <div>
                <div>Texto de la transacción</div>
                <small>10 Feb 2022 at 10:20 pm</small>
            </div>
            <div>
                <span>+$12.959,00</span>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'SingularLastMovement',
}
</script>

<style lang="scss" scoped>
.icon {

    i {
        font-size: 1.8rem;
    }
}
</style>