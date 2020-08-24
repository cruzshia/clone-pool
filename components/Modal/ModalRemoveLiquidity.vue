<template lang="pug">
  Modal(:closeModal="toggleRemoveLiquidity")
    ModalForm
      template(slot="header")
        h3 Remove Liquidity

      .remove-liquidity-container
        .liquidity-toggle
          Toggle(
            :value="type",
            :options="toggleOptions",
            @select="handleSelectType"
          )
        .container
          PoolOverview

          .assets-list
            Table
              thead
                tr
                  th.text-left Asset
                  th.text-right(width="150") Wallet Balance
                  th.text-right(width="160") Deposit Amount
              tbody
                tr
                  td.text-left
                    .d-flex
                      Radio(
                        v-if="!isMultiAsset",
                        :checked="true"
                      )
                      Token(
                        url="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
                        text="WETH"
                      )
                  td.text-right
                    .wallet-balance
                      p 0
                      Label Max

                  td.text-right
                    input(
                      class="input text-right pool-input",
                      placeholder="0.0"
                    )

            Table
              tbody
                tr
                  td BPT amount
                  td.text-right 0 BPT

      template(slot="footer")
        Button(
          class="button-primary",
          :disabled="true"
        ) Remove Liquidity
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ModalRemoveLiquidity extends Vue {
  @Prop() toggleRemoveLiquidity!: () => void;

  type: string = "MULTI_ASSET";
  toggleOptions = {
    MULTI_ASSET: "Multi assets",
    SINGLE_ASSET: "Single asset"
  };

  handleSelectType(type: string): void {
    if (type !== this.type) {
      this.type = type;
    }
  }

  get isMultiAsset(): boolean {
    return this.type === "MULTI_ASSET";
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

/deep/
  .modal-form
    .modal-body
      +sm
        height: 100vh
    .remove-liquidity-container
      .liquidity-toggle
        display: flex
        justify-content: center
        margin-bottom: 24px

      .container
        display: flex
        .pool-overview
          width: 25%
          margin-right: 24px
          +sm
            display: none
        .assets-list
          width: 75%
          +sm
            width: 100%
          table
            margin-bottom: 24px
            .wallet-balance
              display: flex
              justify-content: flex-end
              p, .label
                align-self: center
              p
                margin-right: 5px
                color: $white
              .label
                cursor: pointer

    .bottom
      button
        display: block
        margin: auto
</style>
