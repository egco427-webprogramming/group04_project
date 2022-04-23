<template>
  <div>
    <h4 class="ui dividing header">Purchase History</h4>History
    <ul>
      <li v-for="transaction in history">{{transaction||"Transaction"}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    history: Array,
  },
};
</script>

<style>
</style>