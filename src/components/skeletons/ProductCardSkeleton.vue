<template>
  <sui-card>
    <!-- product image -->
    <div class="ui placeholder">
      <sui-image class="image" width="300px" height="300px"></sui-image>
    </div>
    <sui-card-content class="card-content" align="left">
      <!-- product name -->
      <sui-card-header>
        <p class="placeholder-glow">
          <span class="placeholder" style="width: 75%;"></span>
        </p>
      </sui-card-header>
      <!-- product price -->
      <sui-card-meta>
        <br>
        <p class="placeholder-glow">
          <span class="placeholder" style="width: 20%;"></span>
          <span class="placeholder" style="width: 20%;"></span>
        </p>
      </sui-card-meta>
    </sui-card-content>
    <button class="ui black button placeholder" attached="bottom">
      <p class="placeholder-glow">
        <span class="placeholder" style="width: 5%;"></span>
        &nbsp;
        <span class="placeholder" style="width: 30%;"></span>
      </p>
    </button>
  </sui-card>
</template>
<script>
export default {
}
</script>

<style scoped>

br {
  display: block;
  content: "";
  margin-top: 6px;
}
.card {
  width: 300px;
  height: 450px;
  cursor: pointer;
  margin: 0px 10px 30px 10px;
}
</style> 