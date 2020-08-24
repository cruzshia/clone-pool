<template lang="pug">
  table
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Table extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

table
  width: 100%
  background-color: $panel-background
  border-collapse: separate
  border-spacing: 0
  border-radius: 4px
  border: $border
  border-bottom: 0
  overflow: hidden
  +sm
    border-radius: 0
    border-left: 0
    border-right: 0
  th, td
    padding: 16px 24px
    vertical-align: middle
  .d-flex
    display: flex
  .justify-content-flex-end
    justify-content: flex-end
  .hover
    &:hover
      background-color: $panel-border
  .text-left
    text-align: left
  .text-center
    text-align: center
  .text-right
    text-align: right
  .cursor
    cursor: pointer
  .tab-hide
    +md
      display: none
  .mobile-hide
    +md
      display: none

  thead
    tr
      th
        font-size: 14px
        border-bottom: $border
        p,i
          align-self: center
        i
          margin: 0 8px

  tbody
    tr
      &:last-child
        td:first-child
          border-radius: 0 0 0 4px
          +md
            border-radius: 0
        td:last-child
          border-radius: 0 0 4px 0
          +md
            border-radius: 0
      td
        font-size: 14px
        color: $white
        border-bottom: $border
</style>
