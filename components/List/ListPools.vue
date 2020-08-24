<template lang="pug">
  .list-pools
    .title
      h3 {{ title }}

    Table
      thead
        tr
          th.text-left.tab-hide Pool address
          th.text-left  Assets
          th.text-right.mobile-hide Swap fee
          th.text-right Market cap
          th.text-right.tab-hide My liquidity
          th.text-right.tab-hide Volume (24h)
      tbody
        tr(
          v-for="(data, index) in poolDataList",
          :key="index"
          class="cursor hover"
          @click="toSinglePoolPage"
        )
          td.text-left.tab-hide  {{ data.displayPoolAddress }}
          td.text-left.asset-container
            ListPoolPie(
              :tokens="data.tokens",
              :size="30"
            )
            .tokens
              .token(
                v-for='(token, index) in data.tokens',
                :key='index'
              )
                Icon(
                  class="fa-circle",
                  size="5",
                  :style="`color: ${token.color}`"
                )
                p {{ token.weightPercent }}%
                p {{ token.symbol }}

          td.text-right.mobile-hide {{ data.swapFee }}%
          td.text-right ${{ data.marketCap }}
          td.text-right.tab-hide  ${{ data.myLiquidity }}
          td.text-right.tab-hide  ${{ data.volume }}



</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ListPools extends Vue {
  @Prop() title!: string;
  @Prop() poolDataList: any;

  toSinglePoolPage(): void {
    this.$router.push("/pool/2");
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.list-pools
  .title
    margin-bottom: 16px
    +sm
      padding: 0 24px
    h3
      font-size: 20px
      color: $white

  .asset-container
    display: flex
    .pie, .tokens
      align-self: center
    .pie
      margin-right: 8px
    .tokens
      display: flex
      flex-wrap: wrap
      .token
        display: flex
        margin-right: 8px
        p, i
          align-self: center
        p
          font-size: 14px
          color: $white
          margin-left: 5px
</style>
