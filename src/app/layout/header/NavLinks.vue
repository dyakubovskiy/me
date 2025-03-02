<template>
  <div
    class="nav"
    :class="{ dropdown: isDropdown }">
    <LocalLink
      v-for="{ name, pathName } in NAV_LINKS"
      :key="pathName"
      :pathName
      class="navLink">
      {{ name }}
    </LocalLink>
  </div>
</template>

<script setup lang="ts">
import { LocalLink } from '@/shared/ui/link'

interface Props {
  isDropdown?: boolean
}

defineProps<Props>()

const NAV_LINKS = [
  {
    name: 'Работы',
    pathName: 'works'
  }
]
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  flex: 1;

  &.dropdown {
    position: absolute;
    flex-direction: column;
    align-items: flex-start;
    backdrop-filter: blur(1rem);
    z-index: 10;
    background: var(--background-secondary);
    padding: 1.6rem;
    right: 0.8rem;
    top: 50%;
    transform: translateY(50%);
    border-radius: 8px;
  }
}

.navLink {
  padding: 0.8rem;

  &:hover {
    color: var(--accent);
  }
}
</style>
