<template lang="pug">
  .page-not-found Pool not found
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageNotFound extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'

.page-not-found
  font-size: 24px
  color: $white
  margin-top: 64px
  text-align: center
</style>
