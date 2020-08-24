<template lang="pug">
  span(
    class="pie",
    :style='`height: ${size}px; width: ${size}px; min-width: ${size}px;`'
  )
    svg(:height=`${size}`, :width=`${size}`, viewBox='0 0 20 20')
      circle(
        v-for="(item, i) in dataObjects",
        :key="i",
        :style="`height: ${size}px; width: ${size}px; strokeDasharray: ${item.relativeSize} ${circleLength}; strokeDashoffset: ${item.offset}`",
        r='5',
        cx='10',
        cy='10',
        fill='transparent',
        :stroke="tokens[i].color",
        :stroke-offset='item.offset',
        stroke-width='10',
        transform='rotate(-90) translate(-20)'
      )

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ListPoolPie extends Vue {
  @Prop() tokens!: any;
  @Prop() size!: number;

  get circleLength(): number {
    return 10 * Math.PI;
  }

  get values() {
    return this.tokens.map((token: any) => parseFloat(token.denormWeight));
  }

  get dataTotal() {
    return this.values.reduce((a: any, b: any) => a + b);
  }

  get dataObjects() {
    let startingPoint = 0;
    return this.values.map((item: any) => {
      const relativeSize = (item / this.dataTotal) * this.circleLength;
      const dataObject = {
        relativeSize,
        offset: -startingPoint
      };
      startingPoint += relativeSize;
      return dataObject;
    });
  }
}
</script>

<style lang="sass" scoped>
@import '@/assets/sass/helper/variable.sass'
@import '@/assets/sass/helper/grid.sass'
</style>
