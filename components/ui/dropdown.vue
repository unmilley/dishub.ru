<template>
  <details class="dropdown" :class="[position, alignEnd, forceOpen]" ref="details">
    <summary :class="summaryClass">
      <slot name="summary" />
    </summary>
    <div :class="['dropdown-content z-[1]', contentClass]" v-if="$props.div">
      <slot name="default" />
    </div>
    <ul :class="['dropdown-content z-[1]', contentClass]" v-if="$props.ul">
      <slot name="default" />
    </ul>
  </details>
</template>

<script lang="ts" setup>
type PropsBase = {
  position: 'right' | 'left' | 'bottom' | 'top'
  alignEnd: boolean
  forceOpen: boolean
  isCloseOnClickOutside: boolean
  contentClass: string
  summaryClass: string
}
type DropdownUi = Partial<PropsBase> & { ul: boolean; div?: boolean }
type DropdownDiv = Partial<PropsBase> & { ul?: boolean; div: boolean }
type Props = DropdownDiv | DropdownUi
const _props = withDefaults(defineProps<Props>(), {
  alignEnd: false,
  forceOpen: false,
  isCloseOnClickOutside: true,
  summaryClass: 'btn m-1',
  div: true,
})
const props = toRefs(_props)

const position = computed(() => {
  if (props.position.value === 'left') return 'dropdown-left'
  else if (props.position.value === 'right') return 'dropdown-right'
  else if (props.position.value === 'bottom') return 'dropdown-bottom'
  else if (props.position.value === 'top') return 'dropdown-top'
  else return ''
})

const alignEnd = computed(() => (props.alignEnd.value ? 'dropdown-end' : ''))
const forceOpen = computed(() => (props.forceOpen.value ? 'dropdown-open' : ''))

const details = ref<HTMLDetailsElement>()
onClickOutside(details, () => {
  if (props.isCloseOnClickOutside.value) details.value!.open = false
})
</script>
