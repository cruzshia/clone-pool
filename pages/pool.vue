<template lang="pug">
  div
    BasicContainer
      ModalAddLiquidity(
        v-if="showAddLiquidity",
        :toggleAddLiquidity="toggleAddLiquidity"
      )

      ModalRemoveLiquidity(
        v-if="showRemoveLiquidity",
        :toggleRemoveLiquidity="toggleRemoveLiquidity"
      )

      //- PageNotFound

      .single-pool
        .top-container
          .pool-address
            h3 Pool 0x59a1...6fb4
            a(
              href="https://facebook.com"
              target="_blank",
              rel="noopener noreferrer"
            )
              Icon(
                name="fa-external-link-alt",
                size="12"
              )
          Button(
            class="button-primary",
            :onClick="onClickAddButton"
          ) Add Liquidity
          Button(
            :onClick="onClickRemoveButton"
          ) Remove Liquidity

        PoolBoxes

        PoolTabs(
          :pickedTab="pickedTab",
          :tabList="tabList",
          @onclickTab="onclickTab"
        )

        nuxt-child

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation, Action } from "vuex-class";

@Component({
  validate({ params, redirect, route }): boolean {
    const routeName = route.name;
    if (routeName === "pool" && !params.id) {
      redirect("/");
      return false;
    }

    return true;
  }
})
export default class Pool extends Vue {
  showAddLiquidity: boolean = false;
  showRemoveLiquidity: boolean = false;
  pickedTab = "Balances";
  tabList = [
    {
      name: "Balances",
      router: "",
      badge: "30"
    },
    {
      name: "Swaps",
      router: "swaps",
      badge: "16k"
    },
    {
      name: "Holder",
      router: "holder",
      badge: "120"
    },
    {
      name: "About",
      router: "about",
      badge: ""
    }
  ];

  mounted(): void {
    // if (this.$route.hash) {
    //   const hash: string = this.$route.hash.split("#")[1];
    //   if (hash) {
    //     this.pickedTab = hash;
    //   }
    // }
  }

  onclickTab(pickedTabName: string): void {
    if (this.pickedTab != pickedTabName) {
      this.pickedTab = pickedTabName;
      // window.location.hash = pickedTabName;
    }
  }

  // Add Liquidity
  toggleAddLiquidity(): void {
    this.showAddLiquidity = !this.showAddLiquidity;
  }

  onClickAddButton(): void {
    this.toggleAddLiquidity();
  }

  // Remove Liquidity
  toggleRemoveLiquidity(): void {
    this.showRemoveLiquidity = !this.showRemoveLiquidity;
  }

  onClickRemoveButton(): void {
    this.toggleRemoveLiquidity();
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.single-pool
  .top-container
    display: flex
    margin-bottom: 24px
    +sm
      padding: 0 24px
    +xxs
      padding: 0 4px
    .pool-address, button
      align-self: center
    .pool-address
      display: flex
      margin-right: auto
      +xs
        display: none
      h3, a
        align-self: center
      h3
        color: $white
        font-size: 20px
      a
        margin-left: 8px
        i
          color: $white

    button
      margin-left: 8px
      &:first-child
        margin-left: 0
</style>
