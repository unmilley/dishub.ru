<template>
  <ui-dropdown
    tag="div"
    align-end
    summary-class="btn btn-ghost"
    content-class="bg-base-200 text-base-content rounded-box top-px h-44 max-h-[calc(100vh-10rem)] w-48 overflow-y-auto border border-white/5 shadow-2xl !z-50 outline outline-1 outline-black/5 mt-16"
  >
    <template #summary><Icon name="mill:palette" size="1.45rem" /></template>

    <div class="grid grid-cols-1 gap-3 p-3">
      <button
        class="outline-base-content text-start outline-offset-4"
        v-for="theme in themes"
        @click="$colorMode.preference = theme.value"
      >
        <span class="bg-base-100 rounded-btn text-base-content block w-full cursor-pointer" :data-theme="theme.value">
          <span class="grid grid-cols-5 grid-rows-3">
            <span class="col-span-5 row-span-3 row-start-1 flex items-center gap-2 px-4 py-3">
              <client-only fallback-tag="div">
                <Icon
                  name="bx:check"
                  size="1.25rem"
                  class="shrink-0"
                  :class="[$colorMode.value === theme.value ? 'visible' : 'invisible']"
                />
                <template #fallback>
                  <div class="size-5"></div>
                </template>
              </client-only>
              <span class="flex-grow text-sm">{{ theme.title }}</span>
              <span class="flex h-full shrink-0 flex-wrap gap-1">
                <span class="bg-primary rounded-badge w-2"></span>
                <span class="bg-neutral rounded-badge w-2"></span>
              </span>
            </span>
          </span>
        </span>
      </button>
      <button class="text-center" @click="$colorMode.preference = 'system'">
        <span class="btn-link text-sm">Системная</span>
      </button>
    </div>
  </ui-dropdown>
</template>

<script lang="ts" setup>
const themes = [
  { title: 'Светлая', value: 'light' },
  { title: 'Темная', value: 'dark' },
]
</script>
