<template>
  <div>
    <header class="navbar bg-base-300 shadow-md">
      <div class="navbar-start">
        <nuxt-link :to="{ name: 'index' }" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
          <Icon name="mill:logo" class="size-6 md:size-8" />
          <span class="font-title text-base-content text-lg md:text-2xl">dishub.</span>
        </nuxt-link>
      </div>
      <div class="navbar-center"></div>
      <div class="navbar-end">
        <details class="dropdown dropdown-end" v-if="user">
          <summary class="btn btn-ghost btn-square avatar">
            <div class="w-10 mask mask-squircle">
              <NuxtImg :src="user.avatar" :alt="user.username" />
            </div>
          </summary>
          <ul class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li>
              <a class="justify-between">
                Profile
                <span class="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </details>
        <div v-else class="">
          <nuxt-link to="/auth/sign-in" class="btn btn-outline">Войти</nuxt-link>
        </div>
      </div>
    </header>
    <slot />

    <header-btm-nav />
  </div>
</template>

<script setup lang="ts">
const { userDB } = useDatabase()
const user = computed(() => userDB.user.value)
</script>
