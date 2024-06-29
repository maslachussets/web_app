<template>
  <div ref="lottieContainer" class="lottie-animation"></div>
</template>

<script>
import lottie from "lottie-web";

export default {
  name: "LottieAnimation",
  props: {
    animationData: {
      type: Object,
      required: true,
    },
    loop: {
      type: Boolean,
      default: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: null, // Цвет по умолчанию
    },
  },
  mounted() {
    this.loadAnimation();
  },
  methods: {
    loadAnimation() {
      const animation = lottie.loadAnimation({
        container: this.$refs.lottieContainer,
        renderer: "svg",
        loop: this.loop,
        autoplay: this.autoplay,
        animationData: this.animationData,
      });

      if (this.color) {
        animation.addEventListener("DOMLoaded", () => {
          this.changeColor(animation);
        });
      }
    },
    changeColor(animation) {
      const svgElement = animation.renderer.svgElement;
      const elements = svgElement.querySelectorAll(
        "path, rect, circle, polygon, polyline, ellipse, line"
      );
      elements.forEach((element) => {
        element.setAttribute("stroke", this.color);
        element.setAttribute("fill", this.color);
      });
    },
  },
};
</script>

<style scoped>
.lottie-animation {
  width: 16px;
  height: 16px;
}
</style>
