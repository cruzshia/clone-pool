<template lang="pug">
  Table
    thead
      tr
        th.text-left Holder
        th.text-right.mobile-hide Balance
        th.text-right.mobile-hide  Value
        th.text-right Shares

    tbody
      tr.hover
        td.text-left
          a(
            class="holder"
            href="https://facebook.com"
            target="_blank",
            rel="noopener noreferrer"
          )
            Avatar(
              address="0x11690B00Fef3091f37Dd0F88e36c838Cd344547f",
              :size="20"
            )
            p 0x15c8...52f3
            Icon(
              name="fa-external-link-alt",
              size="12"
            )
        td.text-right.mobile-hide 707.18 BPT
        td.text-right.mobile-hide  $20.45M
        td.text-right 75.64%
    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PoolHolder extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.holder
  display: inline-flex
  p, i
    color: $white
    align-self: center
  p
    margin: 0 8px
</style>
