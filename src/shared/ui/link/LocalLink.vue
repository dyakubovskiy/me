<template>
  <RouterLink :to="{ name: pathName }">
    <slot>
      {{ linkText }}
    </slot>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  linkText?: string
  pathName: string
}

defineProps<Props>()
</script>

<style scoped lang="scss">
a {
  color: var(--text-color);
}
</style>
