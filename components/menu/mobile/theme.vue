<template>
  <menu-mobile title="Цветовая схема" icon="mill:palette">
    <client-only fallback-tag="div">
      <ui-dropdown
        summary-class="btn btn-outline no-animation w-full justify-start"
        content-class="menu bg-base-200 rounded-b-btn divide-y divide-base-content"
        tag="ul"
      >
        <template #summary><Icon :name="activeTheme.icon" /> {{ activeTheme.title }}</template>
        <li v-for="(t, value) in themes" :key="t.title">
          <button
            type="button"
            class="btn rounded-none justify-start"
            :class="{ 'text-primary dark:text-white': $colorMode.preference === value }"
            @click="changeTheme(value)"
          >
            <Icon :name="t.icon" /> {{ t.title }}
          </button>
        </li>
      </ui-dropdown>
      <template #fallback>
        <div class="btn btn-outline no-animation w-full justify-start">
          <span class="loading-spinner"></span>
        </div>
      </template>
    </client-only>
  </menu-mobile>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
type Themes = { [x: string]: { title: string; icon: string } }

const themes: Themes = {
  dark: { title: 'Темная', icon: 'bxs:moon' },
  light: { title: 'Светлая', icon: 'bxs:sun' },
  system: { title: 'Системная', icon: 'bx:mobile' },
}
const activeTheme = computed(() => themes[colorMode.preference])

const details = ref<HTMLDetailsElement>()

onClickOutside(details, () => (details.value!.open = false))

const changeTheme = (value: string | number) => {
  if (colorMode.preference === value) return
  colorMode.preference = value as string
}
</script>
