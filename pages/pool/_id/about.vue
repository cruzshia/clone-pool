<template lang="pug">
  .about-pool
    ul
      li
        span Pool type
        span Shared pool
      li
        span Creator
        span
          a(
            class="link"
            href="https://etherscan.io/address/0x11df7977a3f983757e10e87e1a29cf0997125869"
            target="_blank",
            rel="noopener noreferrer"
          )
            Avatar(
              address="0x11690B00Fef3091f37Dd0F88e36c838Cd344547f",
              :size="20"
            )
            p 0x11df...5869
            Icon(
              name="fa-external-link-alt",
              size="12"
            )
      li
        span Creation date
        span
          a(
            class="link"
            href="https://etherscan.io/tx/0xa1f8573b7a0b6db4d793a3da8ec3a6ec647ae8914cafd5aa4eb3ad5a11ca099d"
            target="_blank",
            rel="noopener noreferrer"
          )
            p June 24, 2020, 12:19 AM 
            Icon(
              name="fa-external-link-alt",
              size="12"
            )
      li
        span BPT asset
        span
          a(
            class="link"
            href="https://etherscan.io/token/0x59a19d8c652fa0284f44113d0ff9aba70bd46fb4"
            target="_blank",
            rel="noopener noreferrer"
          )
            Avatar(
              address="https://etherscan.io/token/0x59a19d8c652fa0284f44113d0ff9aba70bd46fb4",
              :size="20"
            )
            p 0x59a1...6fb4
            Icon(
              name="fa-external-link-alt",
              size="12"
            )
      li
        span BPT total supply
        span 12.75M
      li
        span Public swap
        span Enabled
      li
        span Swap fee
        span 1%
      li
        span Total swap volume
        span $8.81M
      li
        span Total swap fee
        span $88.12K

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutPool extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.about-pool
  padding: 24px
  border: $border
  border-radius: 4px
  background-color: $panel-background
  +md
    border-radius: 0
    border-left: 0
    border-right: 0
  ul
    max-width: 540px
    +xs
      max-width: 100%
    li
      display: flex
      justify-content: space-between
      padding: 8px 0
      span
        font-size: 14px
        &:last-child
          color: $white

      .link
        display: inline-flex
        p, i
          color: $white
          align-self: center
        p
          margin: 0 8px
</style>
