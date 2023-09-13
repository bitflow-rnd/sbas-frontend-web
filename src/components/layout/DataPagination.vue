<template>
  <div class="row mt-10">
    <div
        class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
    <div class="col-12 d-flex align-items-center justify-content-center">
      <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
        <ul class="pagination">
          <li class="paginate_button page-item previous" :class="{disabled: page < 2 || totalPageCount === 0}"
              id="kt_table_users_previous"><a
              @click="changePage(page - 1)" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0"
              class="page-link"><i
              class="previous"></i></a></li>

          <template v-for="num in [...Array(this.pageEndIndex + 1).keys()].splice(this.pageStartIndex)"
                    :key="num">
            <li class="paginate_button page-item"><a @click="changePage(num)"
                                                     aria-controls="kt_table_users" role="button"
                                                     :class="{active: num === page}"
                                                     :data-dt-idx="num" tabindex="0"
                                                     class="page-link">{{ num }}</a></li>
          </template>
          <li class="paginate_button page-item next" :class="{disabled: !hasNextPage}"
              id="kt_table_users_next"><a
              @click="changePage(page + 1)"
              aria-controls="kt_table_users"
              data-dt-idx="4"
              tabindex="0"
              class="page-link"><i
              class="next"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataPagination",
  props: {
    dataLength: {
      type: Number,
      required: true
    },
    displayRowsCount: {
      type: Number,
      required: false,
      default: 10
    },
    displayChangePageButtonsCount: {
      type: Number,
      required: true,
      default: 10
    },
    previousPageButtonsCount: {
      type: Number,
      required: true,
      default: 4
    },
    nextPageButtonsCount: {
      type: Number,
      required: true,
      default: 4
    },
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    totalPageCount() {
      return Math.ceil(this.dataLength / this.displayRowsCount)
    },
    pageStartIndex() {
      if ((this.page < (this.previousPageButtonsCount + 1)) ||
          (this.totalPageCount <= this.displayChangePageButtonsCount)) {
        return 1
      } else {
        return this.page - this.previousPageButtonsCount
      }
    },
    pageEndIndex() {
      if (this.totalPageCount <= this.displayChangePageButtonsCount) {
        return this.totalPageCount
      } else if ((this.page + this.nextPageButtonsCount) > this.totalPageCount) {
        return this.totalPageCount
      } else if ((this.page + this.nextPageButtonsCount) <= this.displayChangePageButtonsCount) {
        return this.displayChangePageButtonsCount
      } else {
        return this.page + this.nextPageButtonsCount
      }
    },
    hasNextPage() {
      return this.page !== this.totalPageCount && this.page <= this.totalPageCount;
    }
  },
  watch: {
    totalPageCount() {
      this.page = 1
    }
  },
  methods: {
    changePage(newPage) {
      this.page = newPage
      this.$emit("change", this.page)
    },
  }
}
</script>

<style scoped>

</style>
