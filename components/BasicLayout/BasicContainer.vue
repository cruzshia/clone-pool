<template lang="pug">
  .basic-container
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BasicContainer extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/grid.sass'

.basic-container
  padding: 32px 24px
  +sm
    padding: 24px 0
</style>
