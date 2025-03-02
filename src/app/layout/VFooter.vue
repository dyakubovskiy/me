<template>
  <footer class="footer">
    <div class="container">© {{ copyrightDate }} dyakubovskiy. All Rights Reserved.</div>
  </footer>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

import { computed } from 'vue'

const CREATION_YEAR = 2025

const copyrightDate: Ref<string> = computed(() => {
  const currentYear = new Date().getFullYear()

  return currentYear > CREATION_YEAR ? `${CREATION_YEAR} - ${currentYear}` : `${CREATION_YEAR}`
})
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  font-size: 1.4rem;
  line-height: 2rem;
  padding: 1.6rem 0;
}
</style>
