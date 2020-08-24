<template lang="pug">
  jazzicon(
    class="avatar-jazzicon"
    :address="address",
    :diameter="parseInt(size) || 22"
  )
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Avatar extends Vue {
  @Prop() address!: string;
  @Prop() size!: number;
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.avatar-jazzicon
  display: inline-block
  line-height: 0
  vertical-align: middle
</style>
