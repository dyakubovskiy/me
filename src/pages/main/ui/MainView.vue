<template>
  <div class="page">
    <div class="container">
      <h1 class="title">🚀 Vue 3 Boilerplate</h1>
      <p class="subtitle">
        Это шаблон для быстрого старта проектов на Vue 3 с TypeScript, архитектурой FSD и Node.js
        22.12.0.
      </p>

      <section class="section">
        <h2 class="sectionTitle">📦 Основные зависимости</h2>
        <ul class="list">
          <li class="listItem">
            <strong>Vue 3</strong> — прогрессивный фреймворк для создания пользовательских
            интерфейсов.
          </li>
          <li class="listItem">
            <strong>Vue Router</strong> — официальный маршрутизатор для Vue.js.
          </li>
          <li class="listItem">
            <strong>@vueuse/core</strong> — коллекция полезных композиций для Vue 3.
          </li>
          <li class="listItem">
            <strong>es-toolkit</strong> — набор инструментов для работы с JavaScript/TypeScript.
          </li>
        </ul>
      </section>

      <section class="section">
        <h2 class="sectionTitle">🛠️ Dev-зависимости</h2>
        <ul class="list">
          <li class="listItem">
            <strong>Vite</strong> — современный и быстрый сборщик для Vue и TypeScript.
          </li>
          <li class="listItem"><strong>TypeScript</strong> — строгая типизация для JavaScript.</li>
          <li class="listItem"><strong>ESLint</strong> — линтер для поддержания чистоты кода.</li>
          <li class="listItem">
            <strong>Prettier</strong> — инструмент для автоматического форматирования кода.
          </li>
          <li class="listItem">
            <strong>Vue DevTools</strong> — инструмент для отладки Vue-приложений.
          </li>
        </ul>
      </section>

      <section class="section">
        <h2 class="sectionTitle">📂 Архитектура FSD</h2>
        <p class="sectionText">
          Проект использует Feature-Sliced Design (FSD) для организации кода. Это позволяет
          разделить приложение на независимые модули (фичи), что упрощает поддержку и
          масштабирование.
        </p>
        <ul class="list">
          <li class="listItem">
            <strong>app</strong> — настройки приложения, роутинг, глобальные стили.
          </li>
          <li class="listItem">
            <strong>entities</strong> — бизнес-сущности (например, пользователи, продукты).
          </li>
          <li class="listItem">
            <strong>features</strong> — функциональные возможности (например, авторизация, корзина).
          </li>
          <li class="listItem"><strong>widgets</strong> — независимые блоки интерфейса.</li>
          <li class="listItem"><strong>shared</strong> — общие компоненты, утилиты, стили.</li>
        </ul>
      </section>

      <section class="section">
        <h2 class="sectionTitle">🚀 Как начать?</h2>
        <ol class="list">
          <li class="listItem">Установите зависимости: <code>npm install</code>.</li>
          <li class="listItem">Запустите проект в режиме разработки: <code>npm run dev</code>.</li>
          <li class="listItem">Соберите проект для production: <code>npm run build</code>.</li>
        </ol>
      </section>

      <div class="socialLinks">
        <a
          href="https://t.me/your_telegram"
          target="_blank"
          rel="noopener noreferrer"
          class="socialLink">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
            alt="Telegram"
            class="socialIcon" />
        </a>
        <a
          href="https://github.com/your_github"
          target="_blank"
          rel="noopener noreferrer"
          class="socialLink">
          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="GitHub"
            class="socialIcon" />
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page {
  padding: 2rem;
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f9fafb;
}

.container {
  max-width: 800px;
  width: 100%;
  padding: 4rem;
  background-color: #2d2d2d;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 3.6rem;
  color: #ffffff;
  margin-bottom: 2rem;
  text-align: center;
}

.subtitle {
  font-size: 1.8rem;
  color: #a0aec0;
  margin-bottom: 3rem;
  text-align: center;
}

.section {
  margin-bottom: 3rem;
}

.sectionTitle {
  font-size: 2.4rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.sectionText {
  font-size: 1.6rem;
  color: #a0aec0;
  margin-bottom: 1.5rem;
}

.list {
  list-style-type: none;
  padding: 0;
}

.listItem {
  font-size: 1.6rem;
  color: #a0aec0;
  margin-bottom: 1.5rem;
  padding-left: 2rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #4299e1;
  }
}

code {
  background-color: #4a5568;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-family: monospace;
  color: #ffffff;
}

.socialLinks {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
}

.socialLink {
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
}

.socialIcon {
  width: 3.2rem;
  height: 3.2rem;
}
</style>
