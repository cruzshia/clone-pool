<template lang="pug">
nav#top-nav
  ModalConnectWallet(
    v-if='showConnectWallet',
    :isConnected='account',
    :accountDisplay='accountDisplay',
    :toggleConnectWallet='toggleConnectWallet',
    @connectWallet='connectWallet',
    @logout='logout'
  )

  .d-flex
    .left-side
      div(@click='onClickNavIcon')
        Icon(name='fa-bars', :size='20')
      nuxt-link.logo(to='/') Cream

    .right-side
      Button.button-primary(v-if='!account', :onClick='onClickConnectWalletButton') Connect wallet

      //- Button(class="button-red") Wrong network

      Button(v-else, :onClick='onClickConnectWalletButton')
        Avatar(:address='account', :size='16')
        span {{ accountDisplay }}
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class TopNav extends Vue {
  @Prop() sidebarIsOpen!: boolean

  @Getter('Auth/account') account!: string
  @Getter('Auth/accountDisplay') accountDisplay!: string
  @Getter('Auth/loginError') loginError!: boolean

  showConnectWallet: boolean = false
  isLoading: boolean = false

  toggleConnectWallet(): void {
    this.showConnectWallet = !this.showConnectWallet
  }

  onClickConnectWalletButton(): void {
    this.toggleConnectWallet()
  }

  mounted(): void {
    this.$store.dispatch('Auth/checkLoginState')
  }

  async connectWallet(wallet: string): Promise<void> {
    switch (wallet) {
      case 'metamask': {
        await this.$store.dispatch('Auth/loginMetamask')
        if (!this.loginError) {
          this.onClickConnectWalletButton()
        }
        break
      }
      case 'walletconnect': {
        await this.$store.dispatch('Auth/loginWalletConnect')
        if (!this.loginError) {
          this.onClickConnectWalletButton()
        }
        break
      }
      case 'coinbase': {
        await this.$store.dispatch('Auth/loginCoinbaseWallet')
        if (!this.loginError) {
          this.onClickConnectWalletButton()
        }
        break
      }
    }
  }

  logout() {
    this.showConnectWallet = false
    this.$store.dispatch('Auth/logout')
  }

  @Emit('onClickNavIcon')
  onClickNavIcon(): boolean {
    return !this.sidebarIsOpen
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

nav#top-nav
  position: fixed
  width: 100%
  z-index: 10
  background-color: $panel-background
  .d-flex
    display: flex
    align-items: center
    height: 78px
    padding: 0 32px
    border-bottom: 1px solid $panel-border
    .left-side
      display: flex
      margin-right: auto
      align-items: center
      i
        margin-right: 15px
        cursor: pointer
        display: none
        @media (max-width: 1280px)
          display: block
      .logo
        position: relative
        display: block
        text-indent: -99999px
        overflow: hidden
        background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQwIDBDMTcuOTA4IDAgMCAxNy45MDggMCA0MHMxNy45MDggNDAgNDAgNDAgNDAtMTcuOTA4IDQwLTQwUzYyLjA5MiAwIDQwIDB6bTMuMjIgNDEuODg0bDE0LjAyOCAxNC4wMjhjMS4xNDQgMS4xNDQgMSAzLjAxNi0uMjcyIDQuMDE2YTI1LjIzOCAyNS4yMzggMCAwMS0xNS42NDQgNS40MDRjLTE0Ljk1MiAwLTI2Ljg4LTEyLjk1Ni0yNS4xNjgtMjguMjU2IDEuMzEyLTExLjcxNiAxMC44NTItMjEuMTIgMjIuNTg0LTIyLjI4NCA2Ljk0NC0uNjg4IDEzLjM4OCAxLjQzMiAxOC4zMjggNS4zNTYgMS4yMjQuOTcyIDEuMjggMi44MjQuMTcyIDMuOTMyTDQzLjIxNiAzOC4xMTJhMi42NjYgMi42NjYgMCAwMC4wMDQgMy43NzJ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+') no-repeat
        background-size: contain
        width: 32px
        min-height: 32px

    .right-side
      /deep/
      button
        .avatar-jazzicon
          margin-right: 8px
</style>
