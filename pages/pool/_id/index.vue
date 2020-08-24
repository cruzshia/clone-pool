<template lang="pug">
  Table
    thead
      tr
        th.text-left Token
        th.text-right Weight
        th.text-right Pool balance
        th.text-right.tab-hide My balance
        th.text-right.tab-hide My asset value
    tbody
      tr(
        class="cursor hover",
        @click="searchToken('0xba100000625a3754423978a60c9317c58a424e3D')"
      )
        td.text-left
          Token(
            url="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
            text="ETH"
          )
        td.text-right 80%
        td.text-right 1.46M
        td.text-right.tab-hide 0
        td.text-right.tab-hide $0
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PoolBalance extends Vue {
  searchToken(token: string): void {
    this.$router.push(`/?token=${token}&filter=1`);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/grid.sass'

table
  border-radius: 0 4px 4px 4px !important
  +sm
    border-radius: 0 !important
</style>
