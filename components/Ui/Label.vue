<template lang="pug">
  span(class="label")
    slot
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Mutation, Action } from "vuex-class";

@Component({})
export default class NewTemplate extends Vue {}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.label
  border-radius: 2em
  border: 1px solid $highlighted-selector-border
  color: $highlighted-selector-border
  padding: 0 9px
  height: 24px
  line-height: 22px
  vertical-align: middle
</style>
