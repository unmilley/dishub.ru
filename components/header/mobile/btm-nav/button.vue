<template>
  <button
    :title="n.title"
    :class="{ 'text-primary dark:text-white transition-colors ': active, hidden: !n.isVisible }"
    @click="typeof n.path === 'undefined' ? n.action() : n.action(n.path)"
    class="transition-colors"
    type="button"
  >
    <Icon :name="n.icon" :size="localSetting.btmNavTitle ? '1.5rem' : '1.8rem'" />
    <span class="btm-nav-label" v-if="localSetting.btmNavTitle">{{ n.title }}</span>
  </button>
</template>

<script lang="ts" setup>
import type { Navigation } from '@/types'
const { n } = defineProps<{ n: Navigation }>()

const route = useRoute()
const active = computed(() => {
  if (typeof route.name === 'symbol')
    return route.name
      .toString()
      .split('-')
      .includes(n.path ?? '')
  else return route.name!.split('-').includes(n.path ?? '')
})

const { localSetting } = useUnState()
</script>
