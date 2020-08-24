<template lang="pug">
  span.toggle
    .toggle-button(
      v-for="(option, key) in options"
      :key="key"
      :class="value === key && 'active'",
      @click="$emit('select', key)"
    ) {{ option }}

</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";

@Component
export default class Toggle extends Vue {
  @Prop() value!: string;
  @Prop() options!: any;
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.toggle
  display: inline-block
  background-color: $secondary-button-background
  border-radius: 22px

  .toggle-button
    display: inline-block
    height: 44px
    line-height: 40px
    border-radius: 22px
    color: $secondary-button-text
    padding: 0 24px 3px
    font-size: 14px
    cursor: pointer

  .active
    background-color: $panel-border
</style>
