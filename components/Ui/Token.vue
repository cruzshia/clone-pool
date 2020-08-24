<template lang="pug">
  .token
    img(
      :src="url",
      :style="style"
    )
    span(
      v-if="text"
    ) {{ text }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Token extends Vue {
  @Prop() url!: string;
  @Prop() text!: string;
  @Prop() size!: number;

  get style() {
    const size = this.size || 22;
    return {
      width: `${size}px`,
      height: `${size}px`
    };
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.token
  display: flex
  img,span
    align-self: center
  img
    border-radius: 50%
  span
    font-size: 14px
    color: $white
    margin-left: 8px
</style>
