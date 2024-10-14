<template>
  <div class="app-contents">
    <LoadingSpinner v-show='isLoading' />
    <router-view />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import LoadingSpinner from '@/components/common/LoadingSpinner.vue'
import { isLoading } from '@/util/axios_cstm'
</script>
