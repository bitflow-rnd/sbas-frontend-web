<template>
  <div @click='close' class='btn btn-sm btn-icon btn-active-color-primary'>
    <a class='popup-close-btn'>
      <span class='svg-icon svg-icon-1'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            opacity='0.5'
            x='6'
            y='17.3137'
            width='16'
            height='2'
            rx='1'
            transform='rotate(-45 6 17.3137)'
            fill='currentColor'
          ></rect>
          <rect
            x='7.41422'
            y='6'
            width='16'
            height='2'
            rx='1'
            transform='rotate(45 7.41422 6)'
            fill='currentColor'
          ></rect>
        </svg>
      </span>
    </a>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['close'])

function close() {
  emits('close')
}
</script>

<style scoped>

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

</style>