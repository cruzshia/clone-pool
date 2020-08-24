<template lang="pug">
  .modal-form
    .top(v-if='$slots.header')
      slot(name='header')
    .modal-body
      slot
    .bottom(v-if='$slots.footer')
      slot(name='footer')
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ModalForm extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.modal-form
  display: flex
  flex-direction: column
  overflow-y: auto
  .top,.modal-body,.bottom
    padding: 24px
  .top
    border-radius: 4px 4px 0 0
    border: $border
  .modal-body
    border-left: $border
    border-right: $border
    overflow-y: auto
    overflow-x: hidden
  .bottom
    border-radius: 0 0 4px 4px
    border: $border
</style>
