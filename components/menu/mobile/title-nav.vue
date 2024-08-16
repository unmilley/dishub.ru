<template>
  <menu-mobile title="Подпись в навигации">
    <div class="form-control flex-1">
      <input
        type="checkbox"
        aria-label="Отображать"
        class="btn btn-outline label-text checked:!btn-active"
        v-model="localSetting.btmNavTitle"
      />
    </div>
  </menu-mobile>
</template>

<script lang="ts" setup>
const { localSetting } = useUnState()
</script>
