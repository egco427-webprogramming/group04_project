<template>
  <div class="ui celled grid shadow">
    <div class="row">
      <HistoryTransactionItemList :items="itemsWithDetail" />
      <hr />

      <div>
        <p class="product-amount">Total Price:{{transaction?.price}}</p>
        <p>Date: {{transaction?.date}}</p>
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

<style>
</style>