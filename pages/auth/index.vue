<template>
  <section class="min-h-[calc(100dvh_-_4.2rem)] ~bg-base-100 flex ~justify-around ~w-full">
    <div
      class="bg-base-200 z-0 w-full lg:w-5/12 lg:border-r-2 border-base-content/30 flex justify-center items-center overflow-y-hidden"
    >
      <auth-form />
    </div>
    <div class="bg-base-100 hidden lg:w-7/12 lg:flex justify-center items-center overflow-y-hidden">
      <img class="block dark:hidden w-4/5" src="assets/illustrations/auth-light.svg" alt="auth-light.svg" />
      <img class="hidden dark:block w-4/5" src="assets/illustrations/auth-dark.svg" alt="auth-dark.svg" />
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' })
useHead({ title: 'Авторизация' })
</script>
