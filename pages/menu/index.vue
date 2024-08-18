<template>
  <section class="flex flex-col">
    <div class="inline-flex justify-center items-center my-4 gap-1 flex-auto">
      <h1 class="text-2xl ml-5">Меню</h1>
      <ui-dropdown
        align-end
        summary-class="btn btn-circle btn-ghost btn-xs text-info"
        content-class="card compact bg-base-300/75 backdrop-blur-md rounded-box z-[1] w-64 shadow"
      >
        <template #summary><Icon name="ph:info" size="1.25rem" /></template>
        <div class="card-body">
          <p>Все изменения применяются только на устройство</p>
        </div>
      </ui-dropdown>
    </div>
    <div class="grid grid-cols-2 px-2 gap-4 flex-auto">
      <menu-mobile-theme />
      <menu-mobile-title-nav />
    </div>
    <div class="flex-1 mt-auto">
      <OnceMadeLove />
    </div>
  </section>
</template>

<script lang="ts" setup>
useHead({ title: 'Меню' })
</script>
