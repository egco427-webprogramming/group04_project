<template>
  <br>
  <h1 class="placeholder-glow" id="header-text">
    <span class="placeholder" style="width: 15%;"></span>
  </h1>
  <div class="product-wrapper">
    <template v-for="i in 15">
      <!-- <ProductCardSkeleton /> -->
      <!-- Content in ProductCardSkeleton -->
      <sui-card>
        <!-- product image -->
        <div class="ui placeholder">
          <sui-image class="image" height="300" width="300"></sui-image>
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
        <!-- button -->
        <button class="ui black button placeholder" attached="bottom">
          <p class="placeholder-glow">
            <span class="placeholder" style="width: 5%;"></span>
            &nbsp;
            <span class="placeholder" style="width: 30%;"></span>
          </p>
        </button>
      </sui-card>
    </template>
  </div>
  <br>
</template>

<script>
// import ProductCardSkeleton from "./ProductCardSkeleton.vue";

export default {
  // components: { ProductCardSkeleton },
};
</script>

<style scoped>
#header-text {
  margin-top: 48px;
}
.product-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 40px;
}
h1 {
  font-weight: 700;
  font-size: 50px;
  color: rgb(54, 54, 55);
}
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