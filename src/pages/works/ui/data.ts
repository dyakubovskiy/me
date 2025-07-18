import type { WorkProps } from './VWork.vue'

import boilerplateImg from '../images/boilerplate.webp'
import kinkoImg from '../images/kinko.webp'
import abacImg from '../images/abac.webp'
import meImg from '../images/me.webp'

export const works: Array<WorkProps> = [
  {
    name: 'Me',
    desc: 'Текущее приложение',
    source: 'https://github.com/dyakubovskiy/me',
    website: '/',
    img: meImg
  },
  {
    name: 'Boilerplate',
    desc: 'Шаблон прилоежния с использование vue и TS, для быстрого старта проекта',
    source: 'https://github.com/dyakubovskiy/boilerplate',
    img: boilerplateImg
  },
  {
    name: 'ABAC library',
    desc: 'Проект с библиотекой для управления доступом к ресурсам на основе ABAC',
    source: 'https://github.com/dyakubovskiy/permissionDraft',
    website: 'https://snazzy-llama-8fdc63.netlify.app',
    img: abacImg
  },
  {
    name: 'Kinko',
    desc: 'Web приложение password manager - с хранением данных в localStorage с использованием crypto-js',
    source: 'https://github.com/iltcube/kinko',
    website: 'https://kinko-nine.vercel.app',
    img: kinkoImg
  }
]
