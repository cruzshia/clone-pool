<template lang="pug">
  div
    BasicContainer
      .home-page
        ListPools(
          title="My liquidity",
          :poolDataList="poolDataList"
        )

        ListPools(
          title="Shared pools",
          :poolDataList="poolDataList"
        )
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation, Action } from "vuex-class";

@Component
export default class NewTemplate extends Vue {
  poolDataList: any = [
    {
      id: "0x57755f7dec33320bca83159c26e93751bfd30fbe",
      displayPoolAddress: "0x5775...30fbe",
      marketCap: "1.52M",
      swapFee: "0.15",
      myLiquidity: "2.01",
      volume: "6.89M",
      tokens: [
        {
          id:
            "0x57755f7dec33320bca83159c26e93751bfd30fbe-0x6b175474e89094c44da98b954eedeac495271d0f",
          address: "0x6b175474e89094c44da98b954eedeac495271d0f",
          balance: "748802.006454267883672135",
          decimals: 18,
          denormWeight: "5",
          symbol: "DAI",
          checksum: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
          weightPercent: 50,
          color: "#5d6872"
        },
        {
          id:
            "0x57755f7dec33320bca83159c26e93751bfd30fbe-0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          balance: "757648.671856",
          decimals: 6,
          denormWeight: "5",
          symbol: "USDC",
          checksum: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
          weightPercent: 50,
          color: "#9d9f7f"
        }
      ]
    }
  ];
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.home-page
  .list-pools
    padding: 24px 0
    &:first-child
      padding-top: 0
</style>
