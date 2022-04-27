<template>
  <div class="ui celled grid shadow">
    <div class="row">
      <!-- <UserHistoryTransactionItemList :items="transaction?.items" /> -->
      <UserHistoryTransactionItemList :items="itemsWithDetail" />
      <hr />

      <div>
        <p class="product-amount">Total Price:{{transaction?.price}}</p>
        <p>Date: {{transaction?.date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import UserHistoryTransactionItemList from "./UserHistoryTransactionItemList.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("product");
export default {
  props: {
    transaction: Object,
  },
  components: { UserHistoryTransactionItemList },
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