<template>
  <div class="wrapper">
    <header class="header">
      <LocalLink
        pathName="Main"
        class="logo bold">
        <VIcon iconId="terminal" />
        dyakubovskiy
      </LocalLink>
      <ButtonIcon
        iconId="sun"
        iconSize="small"
        iconColor="contrast"
        class="themeButton"
        @click="toggleDark" />
    </header>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { VIcon } from '@/shared/ui/icon'
import { LocalLink } from '@/shared/ui/link'
import { ButtonIcon } from '@/shared/ui/buttons'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  backdrop-filter: blur(1rem);
}

.header {
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
  background-color: #fbd38d;
}

.icon {
  width: 2rem;
  height: 2rem;
}
</style>
