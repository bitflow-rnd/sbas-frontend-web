<template>
  <section class="cntc-activity">
    <div class="activity-body-box">
      <div class="tabs-group-box">
        <div class="tabs-box" data-tabs="tabs1">
          <article class="activity-list-group">
            <div class="list-head-box">
              <div class="head-box">
                <div class="subject-box">최근활동</div>
              </div>

              <div class="option-box">
                <article class="legend-layout1">
                  <div class="legend-label-box">범례 :</div>
                  <div class="legend-list-box">
                    <div class="legend-box">
                      <span class="dot dot-blue"></span>
                      <span class="legend-txt">미처리</span>
                    </div>

                    <div class="legend-box">
                      <span class="dot dot-gray"></span>
                      <span class="legend-txt">처리</span>
                    </div>
                  </div>
                </article>
              </div>
            </div>

            <div class="list-body-box">
              <div class="img-box">
                <img src="/img/common/img_nodata.svg" alt="이미지" />
                <h2>활동내역 없음</h2>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.activity-list-group {
  padding: 2rem 0;
}
.img-box {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.img-box > h2 {
  font-size: 2rem;
  color: #666;
  font-weight: normal;
  margin-top: 12px;
}
section.cntc-activity .activity-head-box { padding: 12px 32px; }
.tabs-group-box,
.tabs-box,
.activity-list-group,
.list-body-box {
  height: 100%;
  max-height: 800px;
}
.activity-list-group {
  position: relative;
}
.list-head-box {
  position: absolute;
  top: 2rem;
  left: 0;
  width: 100%;
}
.list-body-box {
  position: relative;
}
</style>
