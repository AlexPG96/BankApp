<template>
  <div class="row p-3">
    <div class="col-12">
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <i class="bi bi-filter"></i>
            </div>
            <div>
                <div>Alejandro perez gonzalez</div>
                <small>10 Feb 2022 at 10:20 pm</small>
            </div>
            <div>
                <div class="progress">
                    <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
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
    name: 'ProgressTransactions',
}
</script>

<style lang="scss" scoped>
.progress {
    width: 300px;
}
</style>