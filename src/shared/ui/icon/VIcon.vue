<template>
  <svg
    class="icon"
    :class="[iconColor, iconSize]">
    <use v-bind="{ 'xlink:href': `/sprite.svg#${iconId}` }" />
  </svg>
</template>

<script setup lang="ts">
type IconColor = 'default' | 'contrast' | 'accent'
type IconSize = 'small' | 'medium' | 'large'

export interface IconProps {
  iconId: string
  iconColor?: IconColor
  iconSize?: IconSize
}

const { iconColor = 'default', iconSize = 'medium' } = defineProps<IconProps>()
</script>

<style scoped lang="scss">
.icon {
  vertical-align: middle;
  display: inline-block;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &.default {
    color: var(--icon);
  }

  &.contrast {
    color: var(--contrast);
  }

  &.accent {
    color: var(--accent);
  }

  &.small {
    width: 1.6rem;
    height: 1.6rem;
  }

  &.medium {
    width: 2.4rem;
    height: 2.4rem;
  }

  &.large {
    width: 3.2rem;
    height: 3.2rem;
  }
}
</style>
