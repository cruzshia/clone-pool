<template lang="pug">
  .pool-overview
    h5 POOL OVERVIEW
    p 0xf7c3...0593
    p My share: 0%
    p Swap fee: 0.3%
    ul
      li 12.5% BAT
      li 12.5% REP
      li 12.5% REN
      li 12.5% DZAR

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PoolOverview extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.pool-overview
  padding: 24px
  border: $border
  border-radius: 4px
  height: 500px
  h5
    font-size: 13px
    font-weight: 500
    letter-spacing: 1px
    margin-bottom: 24px
  p
    font-size: 14px
    color: $white
  ul
    display: flex
    flex-direction: column
    align-items: center
    margin-top: 8px
    li
      margin-top: 4px
      font-size: 14px
      color: $white
</style>
