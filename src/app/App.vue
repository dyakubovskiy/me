<template>
  <VHeader />
  <div class="container">
    <RouterView />
  </div>
  <VFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { VHeader, VFooter } from './layout'
</script>
