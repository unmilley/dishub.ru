<template>
  <div class="btm-nav btm-nav-sm bg-base-200">
    <header-mobile-btm-nav-button v-for="n in navigation" :key="n.title" :n="n" />
  </div>
</template>

<script lang="ts" setup>
import type { Navigation } from '@/types'
import type { Links } from '~/src/routing'

const { push } = useRouter()
const { $routing } = useNuxtApp()

const { isUser } = useAuth()

// TODO: make search modal component
const modalOpen = ref(false)

const navigation = computed((): Navigation[] => [
  { title: 'Главная', icon: 'ph:house', path: 'index', isVisible: true, action: (p: Links) => push($routing(p)) },
  {
    title: 'Поиск',
    icon: 'ph:magnifying-glass',
    isVisible: true,
    action: () => (modalOpen.value = !modalOpen.value),
  },
  {
    title: 'Записать',
    icon: 'ph:plus-circle',
    path: 'record',
    isVisible: isUser.value,
    action: (p: Links) => push($routing(p)),
  },
  {
    title: 'Избранное',
    icon: 'ph:list-heart',
    path: 'favorites',
    isVisible: isUser.value,
    action: (p: Links) => push($routing(p)),
  },
  { title: 'Меню', icon: 'ph:list', path: 'menu', isVisible: true, action: (p: Links) => push($routing(p)) },
])
</script>
