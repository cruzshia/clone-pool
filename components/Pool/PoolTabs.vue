<template lang="pug">
  ul.tabs
    li(
      v-for="(tab, index) in tabList",
      :key="index"
    )
      nuxt-link(:to="`/pool/${$route.params.id}/${tab.router}`")
        span {{ tab.name }}
        span(
          v-if="tab.badge !== ''",
          class="counter"
        ) {{ tab.badge }}
    
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class PoolTabs extends Vue {
  @Prop() pickedTab!: string;
  @Prop() tabList!: any;

  @Emit("onclickTab")
  onclickTab(tabName: string): string {
    return tabName;
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

ul.tabs
  position: relative
  z-index: 1
  display: flex
  flex-wrap: wrap
  li
    height: 44px
    a
      height: 44px
      line-height: 40px
      border-radius: 4px 4px 0 0
      overflow: hidden
      padding: 0 16px
      display: inline-block
      &.nuxt-link-exact-active
        background-color: $blue-900
        .counter
          background-color: $blue
      span
        color: $white
      .counter
        display: inline-block
        padding: 0 6px
        height: 22px
        line-height: 22px
        color: $white
        min-width: 22px
        text-align: center
        background-color: $blue-900
        border-radius: 11px
        margin-left: 8px
</style>
