<template>
  <div class="modal show" id="kt_modal_request" tabindex="-1">
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <div class="spinner-container">
        <VueSpinner size="150" color="#74AFEB" thickness='2' />
      </div>
    </div>
  </div>
</template>

<script setup>
import { VueSpinner } from 'vue3-spinners'
</script>

<style scoped>
.modal {
  --bs-modal-width: 98%;
  position: fixed; /* 모달을 화면에 고정 */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex; /* 모달 내부를 중앙으로 정렬 */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  z-index: 9999;
}

.spinner-container {
  position: fixed; /* 화면 고정 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 화면 가운데 정렬 */
}

</style>
