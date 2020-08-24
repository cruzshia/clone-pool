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
          p 0x15c8...52f3
          Icon(
            name="fa-external-link-alt",
            size="12"
          )
        Button Log out

      div(
        v-else,
        class="container"
      )
        ul
          li
            Button(class="wallet" :onClick="onClick")
              img(src="https://raw.githubusercontent.com/bonustrack/lock/master/connectors/assets/injected.png")
              p MetaMask
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Fortmatic from 'fortmatic'
import Torus from '@toruslabs/torus-embed'
import Authereum from 'authereum'

@Component
export default class ModalConnectWallet extends Vue {
  @Prop() isConnected!: boolean
  @Prop() toggleConnectWallet!: () => void
  async onClick() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: '9d6ecc41833d434a921bf5de878f834f' // required
        }
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: 'FORTMATIC_KEY' // required
        }
      },
      torus: {
        package: Torus, // required
        options: {
          /*
          networkParams: {
            host: 'https://localhost:8545', // optional
            chainId: 1337, // optional
            networkId: 1337 // optional
          },
          config: {
            buildEnv: 'development' // optional
          }
          */
        }
      },
      authereum: {
        package: Authereum // required
      }
    }

    const web3Modal = new Web3Modal({
      network: 'mainnet', // optional
      cacheProvider: false, // optional
      providerOptions // required
    })

    const provider = await web3Modal.connect()

    const web3 = new Web3(provider)
  }
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
