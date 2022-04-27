<template>
  <div class="ui celled grid shadow">
    <div class="row">
      <!-- <UserHistoryTransactionItemList :items="transaction?.items" /> -->
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
export default {
  props: {
    transaction: Object,
  },
  components: { UserHistoryTransactionItemList },
};
</script>
<style>
</style>