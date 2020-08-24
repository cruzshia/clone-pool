<template lang="pug">
  Modal(:closeModal="togglePoolCreation")
    ModalForm
      .text-container
        p Before creating this pool, make sure the price information below is correct:

        ul
          li
            p 1 DAI = $1
          li
            p 1 USDC = $1

        p If these prices are not correct you may incur in a loss of funds due to arbitrage. You can click on
          Icon(class="fa-lock", :size="12")
          | to toggle manual input.

        p By continuing you agree that Balancer Labs is not liable for any losses you may have.


      Button(
        class="button-primary"
      ) Continue
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ModalPoolCreation extends Vue {
  @Prop() togglePoolCreation!: () => void;
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'
/deep/
  .shell
    width: 550px !important
    border-radius: 4px
    +sm
      width: auto !important
      border: 0
      border-radius: 0
  .modal-body
    border: $border
    border-radius: 4px
    padding: 40px !important
    +sm
      border: 0 !important
      border-radius: 0
    .text-container
      p
        color: $white
        fontsize: 14px
        padding-bottom: 8px
        &:last-child
          padding-bottom: 0
        span, i
          color: $white
        i
          margin: 0 5px
      ul
        margin-bottom: 8px
        li
          p
            font-weight: bold

    button
      display: block
      margin: 24px auto auto auto
</style>
