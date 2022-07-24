<script setup lang="ts">
  import { ref } from 'vue'
  import TokenInput from './TokenInput.vue'

  defineProps<{ msg: string }>()

  const count = ref(0)
</script>

<template>
  <token-input />
</template>

<style scoped></style>
