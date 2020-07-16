<template>
  <div
    :class="{ 'mouse-over': mouseOver }"
    class="title-item"
    @mouseenter="mouseOver = true"
    @mouseleave="mouseOver = false"
  >
    <span
      v-if="
        mouseOver &&
          typeof title.results !== 'number' &&
          title.results.length > 1
      "
      class="popover"
    >
      {{ title.results.map((x) => titles[x].title).join(', ') }}
      <!-- <template v-for="(item, index) in title.results">
        <span :key="index">
          {{ titles[item].title }}
        </span>
      </template> -->
    </span>
    <span>{{ title.text }}</span>
    <!-- {{title}} -->
    <span
      v-if="typeof title.results !== 'number' && title.results.length > 1"
      class="underline"
    ></span>
  </div>
</template>
<script>
import relations from '../relations';
import titles from '../titles';
export default {
  props: ['title', 'text'],
  data() {
    return {
      relations,
      titles,
      mouseOver: false,
      resultIndex: 0,
    };
  },
  methods: {},
};
</script>

<style>
@keyframes slideInFromLeft {
  0% {
    right: 110%;
  }
  100% {
    right: 0;
  }
}
.title-item {
  display: inline !important;
  transition: 0.3s;
  cursor: default;
  position: relative;
  margin: 0 8px;
}
.title-item:hover {
  /* background: rgb(248, 248, 248); */
  transform: rotate(30deg);
  border-radius: 12px !important;
}
.title-item-x {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 20px;
}
.underline {
  height: 4px;
  background: #e67e22;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
  border-radius: 10px;
  z-index: -1;
  animation: 1s ease-out 0s 1 slideInFromLeft;
}
.popover {
  height: 90px;
  background: rgb(255, 255, 255);
  position: absolute;
  left: -80px;
  right: -80px;
  top: -130px;
  /* border: 1px solid #ccc; */
  border-radius: 10px;
  z-index: 21;
  box-shadow: -1px 5px 15px -4px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  text-align: left;
  padding: 20px;
}
</style>
