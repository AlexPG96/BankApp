<template>
  <div
    class="custom-select"
    :tabindex="tabindex"
    @blur="open = false"
  >
    <div
      class="selected"
      :class="{open: open}"
      @click="open = !open"
    >
      {{ selected }}
    </div>
    <div
      class="items"
      :class="{selectHide: !open}"
    >
      <div
        class="item"
        v-for="(option, i) of options"
        :key="i"
        @click="selected=option; open=false; $emit('input', option)"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    options:{
      type: Array,
      required: true
    },
    tabindex:{
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted(){
    this.$emit('input', this.selected);
  }
};
</script>

<style lang="scss" scoped>

.custom-select {
    position: relative;
    width: 100px;
    background: linear-gradient(270deg, rgba(46,184,165,1) 0%, rgba(75,207,91,1) 100%);
    padding: 1px;
    border-radius: 6px;
    text-align: left;
    outline: none;
    height: 50px;
    line-height: 40px;
    z-index: 9999;

    .selected {
        background-color: #020201;
        border-radius: 6px;
        padding: 4px;
        color: #ffffff;
        padding-left: 8px;
        cursor: pointer;
        user-select: none;

    }
    .selected.open{
        border: 0px solid #3DC480;
        border-radius: 6px 6px 0px 0px;
    }
    .selected:after {
        position: absolute;
        content: "";
        top: 22px;
        right: 10px;
        width: 0;
        height: 0;
        border: 4px solid transparent;
        border-color: #fff transparent transparent transparent;
    }

    .items {
        color: #ffffff;
        border-radius: 0px 0px 6px 6px;
        overflow: hidden;
        border-right: 1px solid #3DC480;
        border-left: 1px solid #3DC480;
        border-bottom: 1px solid #3DC480;
        position: absolute;
        background-color: #080D0E;
        left: 0;
        right: 0;
        top: 45px;
        height: 150px;
        overflow: auto;
    }

    .item{
        color: #ffffff;
        padding-left: 8px;
        cursor: pointer;
        user-select: none;
    }

    .item:hover{
        background-color: #3DC480;
    }

    .selectHide {
        display: none;
    }

}
</style>

