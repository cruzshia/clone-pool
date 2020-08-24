<template lang="pug">
  div
    TopNav(
      :sidebarIsOpen="sidebarIsOpen",
      @onClickNavIcon="onClickNavIcon"
    )
    .default
      .black-screen(
        :class="sidebarIsOpen ? 'active' : null",
        @click="onClickNavIcon(!sidebarIsOpen)"
      )
      Sidebar(
        :sidebarIsOpen="sidebarIsOpen",
        :onClickNavIcon="onClickNavIcon"
      )
      Nuxt(
        class="view",
        :class="sidebarIsOpen ? 'active' : null",
      )

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Default extends Vue {
  sidebarIsOpen: boolean = true;

  mounted(): void {
    this.watchWindowWidth();
    window.addEventListener("resize", this.watchWindowWidth);
  }

  onClickNavIcon(status: boolean): void {
    this.sidebarIsOpen = status;
  }

  watchWindowWidth(): void {
    if ((window as any).innerWidth <= 1280) {
      this.sidebarIsOpen = false;
    } else {
      this.sidebarIsOpen = true;
    }
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.default
  display: flex
  .black-screen
    @media (min-width: 1280px)
      display: none
    &.active
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      background: rgba(0, 0, 0, 0.4)

  .view
    width: 100%
    margin-top: 80px
    @media (min-width: 1280px)
      margin-left: 264px !important
    @media (max-width: 1280px)
      margin-left: 0
    &.active
      margin-left: 0
</style>
