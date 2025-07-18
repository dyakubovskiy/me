const greetings = 'Привет, я веб-разработчик из России!'

const developer = 'Дмитрий Якубовский'
const profession = 'Web developer (Frontend (Vue) / Basic Backend)'

const about = `
    Меня зовут Дмитрий, я фронтенд-разработчик из Тулы, Россия.\n Мой путь в IT начался с позиции оператора чата технической поддержки, а затем я увлекся веб-разработкой. Сейчас я специализируюсь на фронтенде, но также имею базовые знания в бэкенде.
    Мне нравится создавать изящный и красивый код, особенно в сложных и высоконагруженных системах. В свободное время я реализую пет-проекты с интересными идеями, такие как игры (например, Пакмен) и менеджеры паролей.
`

const bio = [
  {
    date: '1997',
    present: false,
    content: 'Родился в Горловке, Украина'
  },
  {
    date: '2021',
    present: true,
    content: 'Работа в Scloud'
  },
  {
    date: '2024',
    present: false,
    content: 'Выступил с докладом на конференции "Старт в IT"'
  },
  {
    date: '2025',
    present: false,
    content: 'Принимал участие в TulaHack в роли эксперта'
  },
  {
    date: '2025',
    present: false,
    content: 'Окончил Тульский институт ВГУЮ (РПА Минюста России)'
  }
]

const socials = [
  {
    name: '@dyakubovskiy',
    iconId: 'github',
    link: 'https://github.com/dyakubovskiy'
  },
  {
    name: '@yakubovskuy',
    iconId: 'telegram',
    link: 'https://t.me/dev_cube'
  }
]

export { greetings, developer, profession, about, bio, socials }
