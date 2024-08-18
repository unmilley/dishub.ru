<template>
  <details class="dropdown" :class="[position, alignEnd]" :open="open" ref="details">
    <summary :class="summaryClass">
      <slot name="summary" />
    </summary>
    <component :is="tag" :class="['dropdown-content z-[1]', contentClass]">
      <slot name="default" />
    </component>
  </details>
</template>

<script lang="ts" setup>
type Props = {
  position: 'right' | 'left' | 'bottom' | 'top'
  alignEnd: boolean
  open: boolean
  isCloseOnClickOutside: boolean
  contentClass: string
  summaryClass: string
  tag: 'div' | 'ul'
}

const props = withDefaults(defineProps<Partial<Props>>(), {
  alignEnd: false,
  forceOpen: false,
  isCloseOnClickOutside: true,
  summaryClass: 'btn m-1',
  tag: 'div',
  open: false,
})
// const props = toRefs(_props)

const position = computed(() => {
  if (props.position === 'left') return 'dropdown-left'
  else if (props.position === 'right') return 'dropdown-right'
  else if (props.position === 'bottom') return 'dropdown-bottom'
  else if (props.position === 'top') return 'dropdown-top'
  else return ''
})

const alignEnd = computed(() => (props.alignEnd ? 'dropdown-end' : ''))

const details = ref<HTMLDetailsElement>()
onClickOutside(details, () => {
  if (props.isCloseOnClickOutside) details.value!.open = false
})
</script>
