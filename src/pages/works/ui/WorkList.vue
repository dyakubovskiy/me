<template>
  <div class="works">
    <VWork
      v-for="work in works"
      :key="work.name"
      v-bind="work" />
  </div>
</template>

<script setup lang="ts">
import VWork from './VWork.vue'
import { works } from './data'
</script>

<style scoped lang="scss">
.works {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  justify-items: center;
  gap: 2.4rem;
}
</style>
