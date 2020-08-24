<template lang="pug">
  .radio
    input(
      type="radio"
      name="radio-input"
      :checked="checked"
    )
    .background
      .circle
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class NewTemplate extends Vue {
  @Prop() checked!: boolean;
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.radio
  padding: 6px
  display: inline-block
  position: relative
  flex: 0 0 auto
  box-sizing: content-box
  width: 18px
  height: 18px
  cursor: pointer
  input
    position: absolute
    margin: 0
    padding: 0
    opacity: 0
    cursor: inherit
    z-index: 1
    top: 0px
    right: 0px
    left: 0px
    width: 30px
    height: 30px
    &:enabled:checked + div div
      background: #ffffff
      border: 4px solid #8c9eff
    &:enabled:not(:checked) + div div
      border: 1.5px solid #41476b

  .background
    display: inline-block
    position: relative
    box-sizing: border-box
    width: 18px
    height: 18px
    &:before
      position: absolute
      transform: scale(0, 0)
      border-radius: 50%
      opacity: 0
      pointer-events: none
      content: ''
    .circle
      position: absolute
      top: 0
      left: 0
      box-sizing: border-box
      width: 100%
      height: 100%
      border-style: solid
      border-radius: 50%
</style>
