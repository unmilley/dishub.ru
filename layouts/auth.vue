<template>
  <div>
    <header class="navbar bg-base-100 border-b border-base-content/30">
      <div class="navbar-start">
        <nuxt-link :to="{ name: 'index' }" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
          <Icon name="mill:logo" class="size-6 md:size-8" />
          <span class="font-title text-base-content text-lg md:text-2xl">dishub.</span>
        </nuxt-link>
      </div>
      <div class="navbar-end">
        <header-theme />
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup></script>
