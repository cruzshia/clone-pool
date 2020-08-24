<template lang="pug">
  Table
    thead
      tr
        th.text-left.tab-hide Time
        th.text-left Trade In
        th.text-left Trade Out
        th.text-right.mobile-hide Transaction
        th.text-right.tab-hide Swap fee

    tbody
      tr.hover
        td.text-left.tab-hide August 22, 2020, 4:27 PM
        td.text-left
          Token(
            url="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
            text="41.221 WETH"
          )
        td.text-left
          Token(
            url="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xba100000625a3754423978a60c9317c58a424e3D/logo.png"
            text="765.04 BAL"
          )
        td.text-right.mobile-hide
          a(
            class="transaction"
            href="https://facebook.com"
            target="_blank",
            rel="noopener noreferrer"
          )
            p 0x15c8...52f3
            Icon(
              name="fa-external-link-alt",
              size="12"
            )
        td.text-right.tab-hide $24.06
    
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PoolSwaps extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.transaction
  display: inline-flex
  justify-content: flex-end
  p, i
    color: $white
    align-self: center
  p
    margin-right: 8px
</style>
