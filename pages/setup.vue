<template lang="pug">
  div
    BasicContainer
      .setup-container
        h3 Setup Proxy
        p Create proxy contract to manage liquidity on Balancer. This is a one-time action and will save you gas in the long-term.
        Button(
          v-if="!isInstanceReady",
          :isLoading="isLoading",
          class="button-primary",
          :onClick="onClickSetupButton"
        ) Setup

        Button(
          v-else,
          :onClick="goBack"
        ) Next

        p(v-if="isLoading") Waiting for confirmations to protect from chain reorganizations: {{ confirmations }}/10

</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Setup extends Vue {
  isLoading: boolean = false;
  isInstanceReady: boolean = false;
  confirmations: number = 0;

  onClickSetupButton(): void {
    this.isLoading = true;
  }

  goBack(): void {
    this.$router.back();
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'

.setup-container
  padding: 24px
  border: $border
  border-radius: 4px
  width: 400px
  margin: 64px auto auto auto
  background-color: $panel-background
  +xs
    width: 85%
  p
    font-size: 14px
    margin: 24px 0
  button
    display: block
    margin: auto
</style>
