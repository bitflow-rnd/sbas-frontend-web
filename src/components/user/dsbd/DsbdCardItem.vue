<template>
  <div class='top-box'>
    <div class='subject-box'>
      <div class='label-txt bg-primary'>전국</div>
      <div class='subject-txt'>{{ props.cardItem.title }}</div>
    </div>
    <div class='remove-box'>
      <a @click='openRemovePopup' role='button'>
        <i class='fa-solid fa-circle-minus minus'></i>
      </a>
    </div>
  </div>
  <div class='bottom-box text-end pt-4'>
    <div class='cnt-box'>
      <span class='text-black fw-bold'>3,796&nbsp;</span>
      <span class='text-black fw-bold' style='font-size: 20px;'>명</span>
    </div>
    <div class='rate-box'>
      <span class='text-gray-600'>전 주 대비</span>
      <span class='text-primary'>13.4% ▲</span>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, onMounted } from 'vue'

const emits = defineEmits(['openRemovePopup'])
const props = defineProps({
  cardItem: Object,
})

onMounted(() => {
  console.log(props.cardItem)
})

function openRemovePopup() {
  emits('openRemovePopup')
}

</script>

<style scoped>

.card-box {
  background-color: rgba(255, 255, 255, 0.6);
}

.cnt-box {
  font-size: 2rem;
}

.label-txt.bg-primary {
  margin-right: 9px;
}

.rate-box > span:first-child {
  margin-right: 7px;
}
</style>