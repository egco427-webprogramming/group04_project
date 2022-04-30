<template>
  <br>
  <div>
    <h1 class="ui header" id="history-text">Purchase History</h1>
  </div>

  <main class="ui stackable grid centered" id="header-form">
    <div class="ten wide column">
      <!-- <h4 class="mt-3 ui dividing header large">Your cart</h4> -->
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
      <div v-for="transaction in history" id="history-detail">
        <HistoryTransaction :transaction="transaction" :key="transaction._id" />
      </div>
    </div>
  </main>
</template>

<script>
import HistoryTransaction from "./HistoryTransaction.vue";

import { getHistory } from "../services/history.service";
import { ref } from "vue";

export default {
  components: {
    HistoryTransaction,
  },
  props: {
    id: String,
  },
  async setup(props) {
    const history = ref(await getHistory(props.id));
    return { history };
  },
  methods: {
    async getHistory(id) {
      let history;
      try {
        history = await getHistory(id);
      } catch (err) {
        console.log(err);
      }
      return history;
    },
  },
};
</script>

<style scoped>

#history-text {
  margin-top: 25px;
  font-weight: 700;
  font-size: 50px;
  color: rgb(54, 54, 55);
}

#header-form {
  margin: 20px 0 0 0;
}

#history-detail {
  margin: 0px 0 1% 0;
}
</style>