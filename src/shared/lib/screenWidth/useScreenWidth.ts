import type { Ref } from 'vue'

import { computed } from 'vue'
import { width, height } from '../browser'

type Breakpoints = 'small' | 'medium'

interface UseScreenWidth {
  width: Ref<number>
  height: Ref<number>
  isLarge: Ref<boolean>
  isMedium: Ref<boolean>
  isSmall: Ref<boolean>
}

const breakpoints: Record<Breakpoints, number> = {
  medium: 768,
  small: 480
}

export const useScreenWidth = (): UseScreenWidth => {
  const isLarge: Ref<boolean> = computed(() => width.value > breakpoints.medium)
  const isMedium: Ref<boolean> = computed(() => width.value <= breakpoints.medium)
  const isSmall: Ref<boolean> = computed(() => width.value <= breakpoints.small)

  return {
    width,
    height,
    isLarge,
    isMedium,
    isSmall
  }
}
