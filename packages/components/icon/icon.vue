<template>
  <component :is="currentComponent" :style="iconStyle" />
</template>

<script setup lang="ts">
import { iconProps } from './icon-types';
import type { Component } from 'vue';
import { computed } from 'vue';

defineOptions({
  name: 'saIcon',
});

const modules = import.meta.globEager('../../assets/icons/*.svg', {
  as: 'component',
});
const props = defineProps(iconProps);

const currentComponent = computed<Component>(() => {
  const svgName = `/${props.name}.svg`;
  for (const path in modules) {
    const mod = modules[path];
    if (path.endsWith(svgName)) {
      return mod as Component;
    }
  }
  throw new Error('not found svg file:' + svgName);
});

const iconStyle = computed(() => {
  let result = {
    width: props.size,
    height: props.size,
  };
  if (props.color) {
    return {
      ...result,
      color: props.color,
    };
  }
  return result;
});
</script>

<style scoped>
.ionicon {
  fill: currentColor;
  stroke: currentColor;
}
.ionicon-fill-none {
  fill: none;
}
.ionicon-stroke-width {
  stroke-width: 32px;
}
</style>
