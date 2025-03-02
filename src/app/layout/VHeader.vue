<template>
  <div class="wrapper">
    <header class="header">
      <LocalLink
        pathName="Main"
        class="logo bold">
        <VIcon iconId="terminal" />
        dyakubovskiy
      </LocalLink>
      <Transition name="switch">
        <ButtonIcon
          :key="themeIcon"
          :iconId="themeIcon"
          iconSize="small"
          iconColor="contrast"
          :style="{
            background: `var(--${themeBackground})`
          }"
          class="themeButton"
          @click="toggleDark" />
      </Transition>
    </header>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

import { computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { VIcon } from '@/shared/ui/icon'
import { LocalLink } from '@/shared/ui/link'
import { ButtonIcon } from '@/shared/ui/buttons'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const themeIcon: Ref<string> = computed(() => (isDark.value ? 'sun' : 'moon'))
const themeBackground: Ref<string> = computed(() => (isDark.value ? 'orange' : 'purple'))
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(1rem);
  z-index: 10;
  background: var(--header-background);
}

.header {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 75.6rem;
  width: 100%;
  padding: 0.8rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.8rem;
  line-height: 2rem;
  padding: 0.8rem;

  &:hover {
    .icon {
      transform: rotate(-15deg);
    }
  }
}

.themeButton {
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
}

.icon {
  width: 2rem;
  height: 2rem;
}

.switch-enter-active,
.switch-leave-active {
  transition: all 0.5s ease;
  transform-origin: top center;
}

.switch-enter-from {
  opacity: 0;
  transform: translateY(-300%);
}

.switch-leave-to {
  opacity: 0;
  position: absolute;
  right: 0.8rem;
  transform: translateY(100%);
}
</style>
