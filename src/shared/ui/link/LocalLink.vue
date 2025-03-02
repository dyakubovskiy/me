<template>
  <RouterLink
    :to="{ name: pathName }"
    class="localLink">
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
.localLink {
  color: var(--text-color);
}
</style>
