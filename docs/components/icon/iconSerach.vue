<template>
  <div>
    <input type="text" />
    <div class="icon-box">
      <div v-for="icon in iconsList" :key="icon" class="icon-item">
        <saIcon :name="icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import icons from './iconList';
const iconsList = ref(icons);
</script>

<style scoped>
.icon-box {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
}
.icon-item {
  flex-basis: 18%;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
