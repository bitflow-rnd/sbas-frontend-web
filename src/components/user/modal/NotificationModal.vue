<template>
  <article class='popup popup-assignment-cancel' tabindex='-3' style=''>
    <div class='popup-wrapper'>
      <div class='popup-contents' style='width: 350px'>
        <div class='popup-head-box py-5 px-10'>
          <div class='head-tit-box'>알림</div>
          <CloseButton @close='closePopup' />
        </div>

        <div class='popup-body-box py-3 px-8'>
          <div class="board-body-box">
            <div class="list-wrap">
              <div class="list-group-box">
                <div class="list-body-box">
                  <div
                    v-for="(item, idx) in model.list"
                    :key="idx"
                    class="item-box"
                  >
                    <div class="item-info-box"  >
                      <div class="info-box pt-3 pb-1" >
                        <div class="subject-box"
                             :class="item['isRead']===false ? 'is-read' : null">
                          {{ item['senderId'] }}</div>
                        <div class="con-box pt-1"
                             :class="item['isRead']===false ? 'is-read' : null">
                          {{ (item['detail']) }}</div>
                        <div class="date-box pt-1"
                             :class="item['isRead']===false ? 'is-read' : null">
                          {{ (item['rgstDttm']) }}</div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class='popup-foot-box py-5 px-10'>
            <article class='modal-menu-layout1'>
              <div class='modal-menu-list'>
                <router-link to='' @click='closePopup' class="modal-menu-btn menu-cancel"
                >이전
                </router-link>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </article>

</template>

<script setup>
import { defineEmits, defineProps, onMounted, reactive } from 'vue'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'
import CloseButton from '@/components/common/CloseButton.vue'

const props = defineProps({
  existPt: Object,
})
const emits = defineEmits(['closePopup'])

onMounted(() => {
  getList()
})

const model = reactive({
  list: [],
})

function closePopup() {
  emits('closePopup')
}

function getList() {
  const url = `${API_PROD}/api/v1/private/user/alarm-list`
  axios_cstm().get(url)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        model.list = data.result.items
        readNotification()
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

function readNotification() {
  const url = `${API_PROD}/api/v1/private/user/read-alarms`
  return new Promise(() => {
    axios_cstm().post(url)
      .then((response) => {
        const data = response.data
        if (data.code === '00') {
          console.log(data.result)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  })
}

</script>

<style scoped>

.popup {
  display: block;
}

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

.subject-box {
  font-size: 1.3rem;
}

.con-box {
  font-size: 1.1rem;
}

.is-read {
  background-color: #74AFEB22;
}

.date-box {
  font-size: 1.0rem;
}

</style>
