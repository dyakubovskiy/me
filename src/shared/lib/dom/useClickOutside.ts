import type { Ref } from 'vue'

import { onClickOutside } from '@vueuse/core'

export const useClickOutside = (
  elementRef: Ref<Nullable<HTMLElement>>,
  handler: (event: MouseEvent) => void,
  ignore?: Array<Ref<HTMLElement>>
) => onClickOutside(elementRef, handler, { ignore })
