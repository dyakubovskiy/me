<template>
  <VHeader />
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VHeader } from './layout'
</script>
