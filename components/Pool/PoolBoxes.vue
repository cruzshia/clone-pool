<template lang="pug">
  ul.pool-info
    li
      h3 $36.26M
      p Liquidity
    li
      h3 $1.49M
      p Volume (24hr)
    li
      h3 0.15%
      p Swap fee
    li
      h3 0%
      p My pool share
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class PoolBoxes extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

ul.pool-info
  display: flex
  +md
    flex-wrap: wrap
  li
    border: $border
    border-radius: 4px
    padding: 24px 0
    margin: 0 8px 24px 8px
    background-color: $panel-background
    text-align: center
    width: calc(25% - 12px)
    &:first-child
      margin-left: 0
    &:last-child
      margin-right: 0
    +sm
      width: 100%
      border-radius: 0
      margin: 0 0 24px 0
      border-left: 0
      border-right: 0
    h3
      font-size: 20px
    p
      font-size: 14px
</style>
