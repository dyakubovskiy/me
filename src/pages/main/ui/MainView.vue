<template>
  <div class="wrapper">
    <InteractiveModel class="threeModel" />
    <div class="greetings">
      {{ greetings }}
    </div>
    <div class="intro">
      <h2 class="name">
        {{ developer }}
      </h2>
      <div class="profession">
        {{ profession }}
      </div>
      <img
        class="avatar"
        src="@/pages/main/ui/avatar.webp" />
    </div>
    <div class="inner">
      <h3 class="sectionTitle">Обо мне</h3>
      <div class="desc">
        {{ about }}
      </div>
      <h3 class="sectionTitle">Bio</h3>
      <div class="bio">
        <div
          v-for="{ date, content, present } in bio"
          :key="date"
          class="event">
          <div class="date bold">
            {{ date }}
            <div
              v-if="present"
              class="present">
              - по настоящее время
            </div>
          </div>
          <div class="content">
            {{ content }}
          </div>
        </div>
      </div>
      <h3 class="sectionTitle">Я в сети</h3>
      <div class="sozialLinks">
        <a
          v-for="{ name, iconId, link } in socials"
          :key="name"
          class="social"
          target="_blank"
          :href="link">
          <VIcon
            :iconId
            iconSize="small"
            iconColor="accent" />
          {{ name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VIcon } from '@/shared/ui/icon'
import { greetings, developer, profession, about, bio, socials } from './data'
import { InteractiveModel } from './modelViewer'
</script>

<style scoped lang="scss">
.wrapper {
  max-width: 60rem;
  width: 100%;
  padding: 40rem 1.6rem 0;
  margin: 0 auto;

  @include medium {
    padding: 26rem 1.6rem 0;
  }

  @include small {
    padding: 17rem 1.6rem 0;
  }
}

.threeModel {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}

.greetings {
  background: var(--background-secondary);
  padding: 1.2rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;
  border-radius: 8px;
  position: relative;
  backdrop-filter: blur(1rem);
  margin-bottom: 2.4rem;
}

.intro {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 9.6rem;
  gap: 0 2.4rem;
  margin-bottom: 1.2rem;

  @include medium {
    grid-template-columns: 1fr;
  }
}

.name {
  font-size: 3.6rem;
  line-height: 4.4rem;

  @include medium {
    font-size: 3rem;
    line-height: 4rem;
  }
}

.profession {
  font-size: 1.6rem;
  line-height: 2.4rem;
}

.avatar {
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 50%;
  border: 1px solid var(--accent);
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  object-fit: cover;
  object-position: center;

  @include medium {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
    justify-self: center;
    margin-top: 1.2rem;
  }
}

.inner {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}

.sectionTitle {
  width: max-content;
  font-size: 2rem;
  line-height: 2.4rem;
  border-bottom: 4px solid var(--border-color);
}

.desc {
  text-align: justify;
  text-indent: 4rem;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
  line-height: 2.4rem;
  margin-bottom: 0.8rem;
}

.bio {
  line-height: 2.4rem;
}

.event {
  display: flex;
  align-items: center;
  gap: 1.6rem;
}

.date {
  display: flex;
  line-height: 1.8rem;
}

.sozialLinks {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.social {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  width: max-content;
  border-radius: 8px;
  padding: 0.8rem;
  color: var(--accent);

  &:hover {
    background: var(--accent-hover);
  }
}
</style>
