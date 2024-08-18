<template>
  <div class="flex flex-col justify-start w-[21.5rem] sm:w-[24rem] h-full py-4 px-4">
    <div class="mb-10 w-full mt-8">
      <h1 class="mb-2 text-2xl lg:text-3xl">Добро пожаловать</h1>
      <h2 class="text-sm">{{ isLogin ? 'Войдите в свою учетную запись' : 'Создать новую учетную запись' }}</h2>
    </div>

    <div class="form-control w-full">
      <!-- <div class="tooltip tooltip-open" data-tip="🚧 Позже... 🚧">
        <button class="btn btn-ghost btn-outline w-full">
          Продолжить с Google
          <i class="bx bxl-google bx-sm"></i>
        </button>
        <button class="btn btn-ghost btn-outline w-full mt-4">
          Продолжить с Github
          <i class="bx bxl-github bx-sm"></i>
        </button>
      </div> -->

      <!-- <div class="divider uppercase">Или</div> -->

      <auth-form-sign-in v-if="isLogin" />
      <auth-form-sign-up v-else />
      <div class="self-center text-sm mt-8 lg:mt-4">
        <div>
          <span class="">{{ isLogin ? 'У вас нет учетной записи? ' : 'У вас есть учетная запись? ' }}</span>
          <span class="cursor-pointer underline transition hover:text-primary" @click="isLogin = !isLogin">
            {{ isLogin ? 'Зарегистрироваться' : 'Войти' }}
          </span>
        </div>
      </div>
    </div>

    <div class="sm:text-center ~mt-3 ~mb-8 mt-auto">
      <p class="text-xs sm:mx-auto sm:max-w-sm opacity-85">
        Продолжая, вы соглашаетесь с
        <!-- <span class="tooltip tooltip-bottom tooltip-base-100" data-tip="чаво?">
          <a class="underline cursor-pointer"> Условиями предоставления услуг</a>
        </span> -->
        <ui-tooltip tag="span" tip="чаво?" color="base-100" position="bottom">
          <a class="underline cursor-pointer"> Условиями предоставления услуг</a>
        </ui-tooltip>
        и
        <ui-tooltip tag="span" tip="чаво?" color="base-100" position="top">
          <a class="underline cursor-pointer"> Политикой конфиденциальности</a>
        </ui-tooltip>
        dishub.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLogin = ref(true)
</script>
