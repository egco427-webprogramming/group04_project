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
            <h5 id="product-category" style="font-size:16px">{{product.category}}</h5>
            <div v-if="product.promotion > 0">
              <span id="product-line-price">THB {{product.price}}</span>
              <span id="product-sale-price">  THB {{((product.price)*(100-product.promotion))/100}}</span>
            </div>
            <div v-else>
              <h4 id="product-price">THB {{product.price}}</h4>
            </div>
            <div v-if="product.sold > 1">
              <p class="product-sold" style="font-size:16px">sold : {{product.sold}} pieces</p>
            </div>
            <div v-else>
              <p  class="product-sold" style="font-size:16px">THB {{product.price}} piece</p>
            </div>
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

<style scoped>
#row {
  margin: 70px 0px 70px 0px;
}
#col-img {
  margin: auto 50px auto 50px;
  display: block;
  object-fit: cover;
}
img {
  width: 80%;
  height: 80%;
  min-width: 500px;
}

#product-detail {
  margin: 0px 120px 0px 40px;
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
  font-size: 20px;
}
#product-line-price {
  margin-top: 15px;
  font-size: 20px;
  text-decoration: line-through;
}
#product-sale-price {
  color: #cb0000;
  font-weight: bold;
  font-size: 20px;
}
.product-sold {
  margin-top: 10px;
  color: #6b6161;
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
/* responsive nav for Labtop */
@media only screen and (max-width: 1650px) {
  #col-img {
    margin: auto auto auto auto;
    display: block;
    object-fit: cover;
  }
  img {
    width: 500px;
    height: auto;
  }
  #product-detail {
    margin: 0px 60px 0px 60px;
  }
}
</style>