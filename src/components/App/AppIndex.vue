<script setup lang="ts">
  import { zhCN, dateZhCN } from 'naive-ui'
  import MpcbIndex from '@/views/MpcbIndex.vue'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <mpcb-index />
  </n-config-provider>
</template>

<style scoped></style>
