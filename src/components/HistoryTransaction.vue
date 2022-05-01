<template>
  <div class="ui celled grid shadow">
    <div class="row">
      <HistoryTransactionItemList :items="itemsWithDetail" />
    </div>
    <div class="row">
      <div class="thirteen wide column">
        <span class="total-text">Total Price</span>
        <div>
          <p>Date : {{transaction?.date}}</p>
        </div>
      </div>
      <div class="three wide center aligned column">
        <span class="total-amount">THB {{transaction?.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import HistoryTransactionItemList from "./HistoryTransactionItemList.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("product");
export default {
  props: {
    transaction: Object,
  },
  components: { HistoryTransactionItemList },
  computed: {
    ...mapState({
      mappedProducts: (state) => state.mappedProducts,
    }),
    itemsWithDetail() {
      return this.transaction.items.map(({ _id, ...other }) => ({
        ...this.mappedProducts[_id],
        ...other,
      }));
    },
  },
};
</script>

<style scoped>
hr {
  min-width: max-content;
}
.total-text {
  font-size: 17px;
  font-weight: bold;
}
.total-amount {
  font-size: 15px;
  font-weight: bold;
}
</style>