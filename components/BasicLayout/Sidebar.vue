<template lang="pug">
  #sidebar(:class="sidebarIsOpen ? 'active' : null")
    nav
      ul
        li(
          v-for="(sidebar, index) in sideBarList"
          :key="index"
        )
          nuxt-link(
            :to="sidebar.router",
            :exact="sidebar.exact"
            @click.native="closeSidebar"
          )
            span {{ sidebar.name }}
            span(v-if="sidebar.badger") {{ sidebar.badger }}

    .my-wallet
      h4 MY WALLET
      .text-white Connect wallet to see balances
      
      .text-white
        .currency-list
          .currency
            Token(
              url="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png"
              text="ETH",
              :size="20"
            )
            .amount 1,494.85

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
interface SideBarList {
  name: string;
  router: string;
  exact: boolean;
  badger: string;
}

@Component
export default class Sidebar extends Vue {
  @Prop() sidebarIsOpen!: boolean;
  @Prop() onClickNavIcon!: (isClick: boolean) => boolean;

  sideBarList: SideBarList[] = [
    {
      name: "Shared pools",
      router: "/",
      exact: true,
      badger: "300"
    },
    {
      name: "Create a pool",
      router: "new-pool",
      exact: true,
      badger: ""
    }
  ];

  closeSidebar(): void {
    this.onClickNavIcon(false);
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

#sidebar
  position: fixed
  left: -264px
  top: 0
  bottom: 0
  z-index: 5
  display: flex
  flex-direction: column
  border-right: $border
  background-color: $panel-background
  margin-top: 78px
  padding-top: 20px
  width: 264px
  transition: left 0.2s
  overflow-y: auto
  ::-webkit-scrollbar
    width: 8px
  ::-webkit-scrollbar-thumb
    background-color: $panel-border
    background-clip: padding-box
    border-radius: 0
  @media (min-width: 1280px)
    left: 0 !important
  &.active
    left: 0
  nav
    margin-bottom: 24px
    ul
      li
        > a
          font-size: 16px
          display: block
          padding: 11px 24px
          &.nuxt-link-exact-active,&:hover
            background: #41476b
            border-left: 3px solid #7685d5
            padding-left: 21px
            span
              &:nth-child(2)
                background-color: #7685d5
          span
            color: $white
            &:nth-child(2)
              display: inline-block
              padding: 0 6px
              height: 22px
              line-height: 22px
              color: $white
              min-width: 22px
              text-align: center
              background-color: #41476b
              border-radius: 11px
              font-size: 12px
              margin-left: 8px

  .my-wallet
    margin-top: auto
    padding: 24px
    border-top: solid 1px $panel-border
    h4
      font-size: 13px
      font-weight: 500
      margin-bottom: 24px
    .text-white
      color: $white
      font-size: 14px
      margin-bottom: 16px

    .currency-list
      display: flex
      .currency
        display: flex
        flex-direction: row
        width: 100%
        margin-bottom: 16px
        .token
          margin-right: auto
        .amount
          font-size: 14px
          color: $white
          margin-left: 8px
</style>
