<template>
  <component :is="tag" :data-tip="tip" :class="['tooltip', color, position, open]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
type Props = {
  tag?: 'div' | 'span' | 'p'
  color?: 'primary' | 'base-100' | 'base-200'
  position?: 'top' | 'bottom' | 'left' | 'right'
  tip: string
  open?: boolean
}

const props = withDefaults(defineProps<Props>(), { tag: 'div', open: false })

const color = computed(() => {
  if (props.color === 'primary') return 'tooltip-primary'
  else if (props.color === 'base-100') return 'tooltip-base-100'
  else if (props.color === 'base-200') return 'tooltip-base-200'
  return ''
})

const position = computed(() => {
  if (props.position === 'bottom') return 'tooltip-bottom'
  if (props.position === 'top') return 'tooltip-top'
  if (props.position === 'left') return 'tooltip-left'
  if (props.position === 'right') return 'tooltip-right'
  return ''
})

const open = computed(() => (props.open ? 'tooltip-open' : ''))
</script>
