<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <n-button>naive-ui</n-button>
  <div>2HW</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
