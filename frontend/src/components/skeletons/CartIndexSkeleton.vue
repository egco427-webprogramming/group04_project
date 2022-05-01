<template>
  <main class="ui stackable grid centered" id="header-form">
    <div class="nine wide column" id="cart-form">
      <h1 class="mt-3 ui dividing header large placeholder-glow" id="header-cart">
        <span class="placeholder" style="width: 20%;"></span>
      </h1>
      <div class="ui celled grid" id="header-item">
        <div class="row center aligned">
          <div class="three wide column">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 25%;"></span>
            </p>
          </div>
          <div class="ten wide column detail">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 10%;"></span>
            </p>
          </div>
          <div class="three wide column">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 25%;"></span>
            </p>
          </div>
        </div>
      </div>

      <div class="item" v-for="i in 3">
        <div class="ui celled grid shadow">
          <div class="row">
            <div class="three wide column cart-detail" align="center">
              <div class="ui placeholder">
                  <sui-image class="image" width="70" height="70"></sui-image>
              </div>
            </div>
            <div class="ten wide column left aligned detail">
              <div class="row">
                <div class="column" id="name-column">
                  <p class="placeholder-glow">
                    <span class="placeholder" style="width: 75%;"></span>
                  </p>
                </div>
                <div class="column" id="amount-column">
                  <div class="placeholder-" id="button-group">
                    <button 
                      class="ui small icon button"
                      id="plus-icon"
                    >
                      <i class="icon placeholder-glow" >
                        <span class="placeholder" style="width: 75%;"></span>
                      </i> 
                    </button>
                    <p class="placeholder-glow">
                      <span class="product-amount placeholder" style="width: 5%;"></span>
                    </p>

                    <button 
                      class="ui small icon button"
                      id="minus-icon"
                    >
                      <i class="icon placeholder-glow" >
                        <span class="placeholder" style="width: 75%;"></span>
                      </i> 
                    </button>
                  </div>
                </div>
              </div>
              <p class="placeholder-glow">
                <span class="product-type placeholder" style="width: 25%;"></span>
              </p>
            </div>
            <div class="three wide center aligned column" id="price-text">
              <p class="placeholder-glow">
                <span class="placeholder" style="width: 60%;"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="five wide column" id="detail-form">
      <h1 class="mt-3 ui dividing header large placeholder-glow" id="header-summary">
        <span class="placeholder" style="width: 40%;"></span>
      </h1>
      <div class="ui vertically divided grid m-4">
        <div class="two column row" id="summary-detail">
          <div class="column">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 35%;"></span> 
              <br>
              <span class="placeholder" style="width: 40%;"></span>
              <br>
              <span class="placeholder" style="width: 25%;"></span>
            </p>
          </div>
          <div class="column right aligned">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 30%;"></span> 
              <br>
              <span class="placeholder" style="width: 25%;"></span>
              <br>
              <span class="placeholder" style="width: 30%;"></span>
            </p>
          </div>
        </div>
      </div>

      <form action class="ui form" @submit.prevent="buyHandle">
        <div class="field">
          <div class="required field" id="firstname-field">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 18%;"></span> 
            </p>
            <input />
          </div>
          <div class="required field" id="lastname-field">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 18%;"></span> 
            </p>
            <input/>
          </div>
          <div class="required field" id="mobile-field">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 25%;"></span> 
            </p>
            <input/>
          </div>
          <div class="required field" id="card-field">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 20%;"></span> 
            </p>
            <input/>
          </div>

          <div class="fields">
            <div class="required field">
              <p class="placeholder-glow">
                <span class="placeholder" style="width: 20%;"></span> 
              </p>
              <input/>
            </div>
            <div class="required field">
              <p class="placeholder-glow">
                <span class="placeholder" style="width: 30%;"></span> 
              </p>
              <div class="two fields">
                <div class="field">
                  <select class="ui fluid search dropdown" name="card[expire-month]" required>
                  </select>
                </div>
                <div class="required field">
                  <input
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="required field">
          <p class="placeholder-glow">
            <span class="placeholder" style="width: 30%;"></span> 
          </p>
          <div class="field">
            <textarea rows="2" />
          </div>
        </div>
        <div align="center">
          <button class="ui black button placeholder" id="checkout-button">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 5%;"></span>
              &nbsp;
              <span class="placeholder" style="width: 30%;"></span>
            </p>
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {


};
</script>

<style scoped>
.form {
  margin: 5%;
}
#header-form {
  margin-top: 20px;
  margin-bottom: 1%;
}
#header-cart,
#header-summary {
  font-size: 50px;
  color: rgb(54, 54, 55);
}
#checkout-button {
  height: 50px;
  width: 350px;
  border-radius: 30px;
  margin: 35px auto auto auto;
}
#header-item {
  margin-top: 35px;
}
#minus-icon,
.product-amount,
#plus-icon,
#trash-icon {
  float: right;
}
#detail-form {
  min-width: max-content;
  margin-left: 2%;
}
#summary-detail {
  font-size: 16px;
}
#price-text {
  margin-top: 7px;
}
#name-column {
  width: 60%;
  margin-top: 7px;
}
#amount-column {
  width: 40%;
  padding: 0 auto auoto auto;
  min-width: max-content;
}
#button-group {
  margin-top: 0;
}
</style>