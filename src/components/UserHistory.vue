<template>
  <div>
    <h4 class="ui dividing header">Purchase History</h4>
    <br>
    <!-- <ul>
      <li v-for="transaction in history">{{transaction||"Transaction"}}</li>
    </ul> -->
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
            <p>Price</p>
          </div>
        </div>
      </div>
      <div v-for="transaction in history">
        
          <div class="ui celled grid shadow">
            <div class="row">
              <div class="three wide column">
                <!-- <img class="ui small image" :src="item.img_url" :alt="item.name" /> -->
              </div>
              <div class="ten wide column left aligned detail">
                <div class="item" v-for="item in transaction.items">
                  <span class="product-name">{{item._id}}</span>
                </div>
                <br />
                <!-- <span class="product-type">Type:{{item.category}}</span> -->
                <br />

              </div>
              <div class="three wide center aligned column">
                <!-- <span>THB {{String(Math.round(item.price*item.amount))}}</span> -->
              </div>
              <hr>
              <div>
                <p class="product-amount">Total Price:{{transaction.price}}</p> 
                <p>Date: {{transaction.date}}</p>
              </div>
            </div>
            
           
          </div>

        

      </div>
  </div>
</main>

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