<template>
  <!-- product -->
  <div class="product-container">
    <div class="row" id="row">
      <div class="col" align="center" id="col-img">
        <img :src="product.img_url" :alt="product.name"/>
      </div>
      <div class="col" id="product-detail">
        <div align="left" > 
            <h2 id="product-name">{{product.name}}</h2>
            <h5 id="product-category">{{product.category}}</h5>
            <h4 id="product-price">THB {{product.price}}</h4>
            <hr id="hr-line">
            <h4 id="description-text">Description</h4>
            <h5 id="product-des">{{product.des}}</h5>
        </div>
        <div align="center">
            <button class="ui black button" @click.prevent="addToCart" id="add-button">
              <h5>Add to cart</h5>
            </button>  
        </div>
              
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { getProduct } from "../services/product.service";
export default {
  props: {
    id: String | Number,
  },
  async setup(props) {
    const { dispatch } = useStore();
    const product = ref(await getProduct(props.id));

    const amount = 1;
    const addToCart = () =>
      dispatch("cart/addProduct", { id: props.id, amount });

    // console.log(product.value);
    return { product, addToCart };
  },
};
</script>

<style>
#row {
  margin: 70px 0px 70px 0px;
}
#col-img {
  margin: auto 50px auto 50px;
  display: block;
  /* margin-top: auto;
  margin-bottom: auto; */
  object-fit: cover;
}
img {
  width: 100%;
}

#product-detail {
  margin: 0px 40px 0px 40px;
}
#product-name {
  margin-top: 100px;
  font-weight: bold;
}
#product-category {
  margin-top: 10px;
}
#product-price {
  margin-top: 15px;
}
#hr-line {
  margin-top: 60px;
}
#description-text {
  margin-top: 20px
}
#product-des {
  margin-top: 10px;
}
#add-button {
  height: 60px;
  width: 350px;
  border-radius: 30px;
  margin-top: 75px;
  
}
</style>