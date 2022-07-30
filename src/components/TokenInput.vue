<script setup lang="ts">
  import { ref } from 'vue'

  // (() => { return document.cookie.split('; _utoken=')[1] })()
  const uToken = ref('W8izGnClJeVaM3BNdzbS75mFJlToBA51zOw1QYSm5QoEwIfe_Xq-aca3Yp7SJDP4VjkJvDSJCK3wPguAL68vjRRjORs0C9RypOUW2u7BlNaq7T_Mb3_52vVh9huiWgXQs33yYtHRKMyMuZTWDiWN_DXA1ha_v945RYwZqWq6eOE*Uw_lXWaHzW7kgtXkPn3BulXK4feqWaHXgVYZcRA2x9d38CKn3sSOnOjjXVw4OMj9-L3MkHaF2uC7YyAIh8yrt5QAkU5m4CNhNze07HNIcIdHc65CIJt0j4uf0L0DTsISRnNM6J4jVHbteAR5um5mDCvOvHJ8VrKwCEek5lcD7cOx1aYN6dLhVEIFce3XVAN6D_bhglzWwqRhNtyg2jmpD4yATPPAe-guvXgEFR2nbIkE3yodc7fOKs7WiETOdkaod1keel-f33P5fceudtb0UTp-Ri0RwzlhKVUQV7MaieEZDzmD9emRob0fw_9mMxRWnafF1Fa4UBqMxYu7cK0f-1S3kk8vXQikigoyqI-UM_75az4_ZOJ4wEl39IyD_pG3BSJYeT6IZ3L0OhybBH701e-NALch95kt1qGTpd7Cgo7FxbGCLh0nZvSjwsiOlYDXj-wVypvNJWiAbsXghhFszgwG9iJOtwRlP6H00oTT_Zfcmi4Gk-auZ022ritH-F9KX8F6DtzdRd_llK3NpuDf8QZMOeasBmyv4-IE4wNtnIX0B8Ej9z733X7gmvSX5XWJaLC90spr-fmwL9i_wCIa1O8VcqI3UCsd2aAkR-2FPCsiot3yim7wRY7rCdhMcUbRRCcSS3tjOioctgnLiSn1d-DztWlCshF-4e6zrYjl-RNH8fwFftq2OGduB91k0x8kGnYBv98NHEY3POf_hFt2KWGHc2poJhW4Zy8ICwOK-SHIMbm6rHbvubmfprwHJ_q_DPgPx8xn2y_W9r_3C2OxXqcdU7-10OsB7DVxoZY99RZqx9K5hoM-ycm1e59BgE9hsWraOUqu2SArICppEyVEeQ')

  const onSubmit = () => {
    console.log(uToken.value)
  }
</script>

<template>
  <n-input-group>
    <n-input v-model:value="uToken" :style="{ width: '50%' }" />
    <n-button type="primary" @click="onSubmit"> 提交 </n-button>
  </n-input-group>
</template>

<style scoped></style>
