<template>
  <div>
    <h4 class="ui dividing header">Purchase History</h4>
    <br>
    <!-- <ul>
      <li v-for="transaction in history">{{transaction||"Transaction"}}</li>
    </ul>-->
  </div>

  <main class="ui stackable grid centered">
    <div class="eight wide column">
      <h4 class="mt-3 ui dividing header large">Your cart</h4>
      <div class="ui celled grid">
        <div class="row center aligned">
          <div class="three wide column">
            <p>Item</p>
          </div>
          <div class="ten wide column detail">
            <p>Detail</p>
          </div>
          <div class="three wide column">
            <p>Unit Price</p>
          </div>
        </div>
      </div>
      <div v-for="transaction in history">
        <UserHistoryTransaction :transaction="transaction" :key="transaction._id" />
      </div>
    </div>
  </main>
</template>

<script>
import UserHistoryTransaction from "./UserHistoryTransaction.vue";
export default {
  props: {
    history: Array,
  },
  components: { UserHistoryTransaction },
};
</script>

<style>
</style>