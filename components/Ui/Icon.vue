<template lang="pug">
  i(
    class="fa iconfont",
    :class="name",
    :style="size ? `font-size: ${size}px; line-height: ${size}px;` : ''",
    @click="onClick ? null : onClick"
  )

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Icon extends Vue {
  @Prop() name!: string;
  @Prop() size?: string;
  @Prop() onClick!: () => void;
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'

.iconfont
  font-size: 16px
  line-height: 16px
  vertical-align: baseline
  &.cursor
    cursor: pointer
  &.white
    color: $white
</style>
