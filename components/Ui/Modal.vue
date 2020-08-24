<template lang="pug">
  .modal
    .backdrop(@click="closeModal ? closeModal() : null")
    .shell
      .close-icon(@click="closeModal ? closeModal() : null")
        Icon(name="fa-times", size="18")
      slot

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ModalContainer extends Vue {
  @Prop() closeModal!: () => void;
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.modal
  position: fixed
  display: flex
  top: 0
  bottom: 0
  left: 0
  right: 0
  align-items: center
  justify-content: center
  z-index: 10

  .backdrop
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    z-index: 99
    background: rgba(0, 0, 0, 0.4)

  .shell
    display: flex
    flex-direction: column
    position: relative
    z-index: 999
    margin: 0 auto
    width: 100%
    max-height: 90%
    background-color: $panel-background
    padding-left: 0
    padding-right: 0
    max-width: 810px

    +sm
      width: 100%
      max-width: 100%
      max-height: 100%
      min-height: 100%
      margin-bottom: 0

    .close-icon
      position: absolute
      color: $white
      top: 26px
      right: 24px
      cursor: pointer

    .modal-body
      text-align: initial
      overflow-y: auto
      overflow-x: hidden
</style>
