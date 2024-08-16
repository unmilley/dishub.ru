<template>
  <NuxtLayout :name="layout">
    <main>
      <slot />
    </main>
  </NuxtLayout>
</template>

<script setup lang="ts">
const { isDesktop, isMobile, isIos } = toRefs(useDevice())

const layout = computed(() => (isDesktop.value ? 'desktop' : isMobile.value ? 'mobile' : 'desktop'))

watchImmediate(isIos, (val) => {
  if (val) {
    useHead({
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }],
    })
  } else {
    useHead({
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    })
  }
})
</script>
