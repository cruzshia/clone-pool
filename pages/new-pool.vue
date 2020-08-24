<template lang="pug">
  div
    BasicContainer
      ModalPoolCreation(
        v-if="showPoolCreation",
        :togglePoolCreation="togglePoolCreation"
      )

      .new-pool
        h3 Create a pool
        h4 Assets
        Table
          thead
            tr
              th.text-left Asset
              th.text-right Weight
              th.text-right.mobile-hide %
              th
                .d-flex.justify-content-flex-end
                  Icon(name="fa-lock", :size="13")
                  p Amount
              th.text-right.tab-hide Price
              th.text-right.tab-hide Total value
              th.tab-hide
          tbody
            tr
              td.text-left
                .d-flex
                  Token(
                    url="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
                    text="Dai"
                  )
                  Button(
                    class="button-primary unclock-button button-sm"
                  ) Unlock

              td.text-right
                input(
                  class="input pool-input text-right"
                )
              td.text-right.mobile-hide 20%
              td.text-right
                input(
                  class="input pool-input text-right"
                )
              td.text-right.tab-hide $1
              td.text-right.tab-hide $0
              td.text-right.tab-hide

            tr
              td.text-left
                .d-flex
                  Token(
                    url="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
                    text="USDC"
                  )
                  Button(
                    class="button-primary unclock-button button-sm"
                  ) Unlock

              td.text-right
                input(
                  class="input pool-input text-right"
                )
              td.text-right.mobile-hide 20%
              td.text-right
                input(
                  class="input pool-input text-right"
                )
              td.text-right.tab-hide $1
              td.text-right.tab-hide $0
              td.text-right.tab-hide
                Icon(class="fa-times white cursor")

        Button Add Token

        .swapfee
          h4 Swap fee (%)
          input(
            class="input pool-input text-right"
            placeholder="0.00"
          )

        Button(
          class="button-primary",
          :onClick="onClickCreateButton"
        ) Create

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation, Action } from "vuex-class";

@Component
export default class NewPool extends Vue {
  showPoolCreation: boolean = false;

  togglePoolCreation(): void {
    this.showPoolCreation = !this.showPoolCreation;
  }

  onClickCreateButton(): void {
    this.togglePoolCreation();
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.new-pool
  h3, h4
    margin-bottom: 16px
    +sm
      padding: 0 24px
  h3
    font-size: 20px
  h4
    font-size: 18px

  .unclock-button
    margin-left: 8px

  > button
    margin: 24px 0
</style>
