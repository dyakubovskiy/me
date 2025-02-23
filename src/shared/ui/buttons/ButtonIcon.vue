<template>
  <button
    type="button"
    class="buttonIcon"
    @click="$emit('click')">
    <VIcon
      :iconId
      :iconSize
      :iconColor />
  </button>
</template>

<script setup lang="ts">
import type { IconProps } from '../icon'

import { VIcon } from '../icon'

type Props = IconProps

defineProps<Props>()
defineEmits<{
  (e: 'click'): void
}>()
</script>

<style scoped lang="scss">
.buttonIcon {
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}
</style>
