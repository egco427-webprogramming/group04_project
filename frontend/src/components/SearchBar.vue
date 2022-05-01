<template>
  <form class="ui category search" @submit.prevent="handleSearch">
    <div class="ui icon input">
      <input class="prompt" type="text" placeholder="Search product..." v-model="searchText" />
      <i class="search icon"></i>
    </div>
    <div class="results"></div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchText: this.$route.query?.q || "",
    };
  },
  methods: {
    handleSearch() {
      this.$router.replace(`/main?q=${this.searchText}`);
    },
  },
};
</script>

<style>
</style>