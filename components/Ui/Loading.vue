<template lang="pug">
  span.loading
    span
      svg(xmlns='http://www.w3.org/2000/svg', width='50', height='50', viewBox='0 0 50 50')
        path(d='M25,5A20.14,20.14,0,0,1,45,22.88a2.51,2.51,0,0,0,2.49,2.26h0A2.52,2.52,0,0,0,50,22.33a25.14,25.14,0,0,0-50,0,2.52,2.52,0,0,0,2.5,2.81h0A2.51,2.51,0,0,0,5,22.88,20.14,20.14,0,0,1,25,5Z')
          animatetransform(attributeName='transform', type='rotate', from='0 25 25', to='360 25 25', dur='0.5s', repeatCount='indefinite')

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Loading extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.loading
  text-align: center
  display: flex
  flex-direction: column
  align-items: center
  justify-content: center
  animation: rotateAnimations .6s infinite linear
  transform-origin: center
  @keyframes rotateAnimations
    0%
      transform: rotate(0deg)
    100%
      transform: rotate(360deg)
  span
    width: 100%

  &.big
    svg
      width: 34px
      height: 34px


  svg
    display: inline-block
    vertical-align: middle
    width: 20px
    height: 20px

    path
      fill: white

  &.overlay
    position: fixed
    text-align: center
    display: flex
    align-items: center
    align-content: center
    top: 0
    bottom: 80px
    left: 0
    right: 0
    width: 100%
</style>
