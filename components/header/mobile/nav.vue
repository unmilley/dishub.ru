<template>
  <header class="navbar bg-base-300 shadow-md">
    <div class="navbar-start">
      <nuxt-link :to="$routing('index')" class="flex-0 btn btn-ghost gap-1 px-2 md:gap-2">
        <Icon name="mill:logo" class="size-6 md:size-8" />
        <span class="font-title text-base-content text-lg md:text-2xl">dishub.</span>
      </nuxt-link>
    </div>
    <div class="navbar-center"></div>
    <client-only>
      <div class="navbar-end">
        <ui-dropdown
          tag="ul"
          align-end
          summary-class="btn btn-ghost btn-square avatar"
          content-class="menu menu-sm bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          v-if="user"
        >
          <template #summary>
            <div class="w-10 mask mask-squircle">
              <NuxtImg :src="user.avatar" :alt="user.username" />
            </div>
          </template>
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <div class="divider h-0"></div>
          <ul>
            <li><button type="button" @click="openModal">Выйти</button></li>
          </ul>
        </ui-dropdown>
        <div v-else class="">
          <nuxt-link :to="$routing('auth')" class="btn btn-outline">Войти</nuxt-link>
        </div>
      </div>
    </client-only>
    <Modal title="logout" :buttons="{ position: 'between' }">
      <template #content>
        <p class="text-lg">Вы уверены, что хотите выйти?</p>
      </template>

      <template #buttons>
        <button class="btn btn-error" @click="closeModal">Нет</button>
        <button class="btn btn-success" @click="logoutAccept">Да, уверен</button>
      </template>
    </Modal>
  </header>
</template>

<script lang="ts" setup>
const { logout } = useAuth()
const { userDB } = useDatabase()
const user = computed(() => userDB.user.value)

const { open: openModal, close: closeModal } = useModal('logout')

const logoutAccept = () => {
  closeModal()
  logout()
}
</script>
