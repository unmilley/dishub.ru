<template>
  <div class="card card-compact bg-base-200 shadow-xl">
    <figure class="px-10 pt-5">
      <slot name="figure">
        <Icon v-if="icon" :name="icon" size="2rem" />
      </slot>
    </figure>
    <div class="card-body !pt-2">
      <h2 class="card-title text-lg justify-center text-center flex-auto">{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ title: string; icon?: string }>()
</script>
