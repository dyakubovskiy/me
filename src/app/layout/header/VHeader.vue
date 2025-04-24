<template>
  <div class="wrapper">
    <header class="header">
      <LocalLink
        pathName="Main"
        class="logo bold">
        <VIcon iconId="terminal" />
        dyakubovskiy
      </LocalLink>
      <NavLinks v-if="!isMedium" />
      <div class="buttons">
        <Transition name="switch">
          <ButtonIcon
            :key="themeIcon"
            :iconId="themeIcon"
            iconSize="small"
            iconColor="contrast"
            :style="{
              background: `var(--${themeBackground})`
            }"
            @click="toggleDark" />
        </Transition>
        <ButtonIcon
          v-if="isMedium"
          ref="burgerRef"
          iconId="menu"
          class="burger"
          @click="toggleDropdown" />
      </div>
      <NavLinks
        v-if="isMedium && isDropdownActive"
        ref="dropdownRef"
        isDropdown
        @click="closeDropdown" />
    </header>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

import { ref, computed, useTemplateRef } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { useScreenWidth } from '@/shared/lib/screenWidth'
import { useClickOutside } from '@/shared/lib/dom'
import { ButtonIcon } from '@/shared/ui/buttons'
import { LocalLink } from '@/shared/ui/link'
import { VIcon } from '@/shared/ui/icon'
import NavLinks from './NavLinks.vue'

const { isMedium } = useScreenWidth()

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isDropdownActive: Ref<boolean> = ref(false)
const toggleDropdown = useToggle(isDropdownActive)

const themeIcon: Ref<string> = computed(() => (isDark.value ? 'sun' : 'moon'))
const themeBackground: Ref<string> = computed(() => (isDark.value ? 'orange' : 'purple'))

const closeDropdown = (): void => {
  isDropdownActive.value = false
}

const dropdownRef = useTemplateRef<InstanceType<typeof NavLinks>>('dropdownRef')
const burgerRef = useTemplateRef<InstanceType<typeof ButtonIcon>>('burgerRef')
const dropdownElement: Ref<Nullable<HTMLElement>> = computed(() => dropdownRef.value?.$el ?? null)
const burgerElement: Ref<Nullable<HTMLElement>> = computed(() => burgerRef.value?.$el ?? null)

useClickOutside(dropdownElement, closeDropdown, [burgerElement])
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
  gap: 0.8rem;
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

.buttons {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.buttonIcon {
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
}

.burger {
  border: 1px solid #fff;
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
