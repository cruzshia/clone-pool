<template lang="pug">
  Modal(:closeModal="toggleConnectWallet")
    ModalForm
      template(slot="header")
        h3 {{ isConnected ? 'Account' : 'Connect wallet' }} 
      div(
        v-if="isConnected",
        class="container"
      )
        Button(class="address")
          Avatar(
            address="xxxxx",
            :size="20"
          )
          p {{ accountDisplay }}
          Icon(
            name="fa-external-link-alt",
            size="12"
          )
        Button(:onClick="() => $emit('logout')") Log out

      div(
        v-else,
        class="container"
      )
        ul
          li(@click="$emit('connectWallet', 'metamask')")
            Button(class="wallet")
              img(src="https://raw.githubusercontent.com/bonustrack/lock/master/connectors/assets/injected.png")
              p MetaMask
          li(@click="$emit('connectWallet', 'walletconnect')")
            Button(class="wallet")
              img(src="https://app.uniswap.org/static/media/walletConnectIcon.8215855c.svg")
              p WalletConnect
          li(@click="$emit('connectWallet', 'coinbase')")
            Button(class="wallet")
              img(src="https://app.uniswap.org/static/media/coinbaseWalletIcon.62578f59.svg")
              p Coinbase Wallet
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ModalConnectWallet extends Vue {
  @Prop() isConnected!: boolean;
  @Prop() accountDisplay!: string;
  @Prop() toggleConnectWallet!: () => void;
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

/deep/
  .shell
    width: 440px !important
    border-radius: 0 0 4px 4px
    +sm
      min-height: auto !important
    +xs
      width: 85% !important
  .modal-form
    .top
      text-align: center
    .modal-body
      border-radius: 0 0 4px 4px
      border-bottom: $border
      .container
        margin: 24px
        button
          display: flex
          justify-content: center
          align-items: center
          width: 100%
          margin-bottom: 8px
          &.wallet
            display: flex
            img, p
              align-self: center
            img
              width: 28px
              height: 28px
            p
              color: $white
              margin-left: 8px
          &.address
            p,i
              color: $white
            p
              margin: 0 8px
</style>
