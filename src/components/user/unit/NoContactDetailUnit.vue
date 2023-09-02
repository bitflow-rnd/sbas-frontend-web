<template>

  <section class="cntc-info-view">

    <div class="view-head-box">

      <div class="view-img-box">
        <img src="@/assets/img/img-no-contact-selected.webp" alt="이미지">
      </div>

      <div class="view-basic-box">

        <div class="item-box">

          <div class="item-info-box">
            <div class="profile-box">

            </div>

          </div>

        </div>

      </div>

    </div>

    <div class="view-body-box">

      <article class="list-layout1">

        <div class="list-wrap">

          <div class="list-row">

            <div class="list-body-box">

              <div class="inner-item-list">

                <h2>조회할 Staff의 연락처를 선택해주세요</h2>

              </div>

            </div>

          </div>

        </div>

      </article>

    </div>

  </section>

</template>

<script>
export default {
  name: "NoContactDetailUnit"
}
</script>

<style scoped>
h2 { font-size: 1.7rem; color: #666; font-weight: normal; text-align: center; }
.view-img-box { border-bottom: 1px solid #666; }
</style>
