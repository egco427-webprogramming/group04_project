<template>
  <br>
  <h1 class="placeholder-glow">
    <span class="placeholder" style="width: 15%;"></span>
  </h1>

  <main class="ui stackable grid centered" id="header-form">
    <div class="ten wide column">
      <div class="ui celled grid">
        <div class="row center aligned">
          
          <div class="three wide column">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 50%;"></span>
            </p>
          </div>
          <div class="ten wide column detail">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 25%;"></span>
            </p>
          </div>
          <div class="three wide column">
            <p class="placeholder-glow">
              <span class="placeholder" style="width: 70%;"></span>
            </p>
          </div>
        </div>
      </div>
      <div v-for="i in 5">
        <div class="ui celled grid shadow">
          <div class="row">
            <div class="three wide column" align="center">
              <div class="ui placeholder">
                  <sui-image class="image" width="70" height="70"></sui-image>
              </div>
            </div>
            <div class="ten wide column left aligned detail">
              <div class="item">
                <p class="placeholder-glow">
                    <span class="placeholder" style="width: 80%;"></span>
                </p>
              </div>
              <p class="placeholder-glow">
                <span class="placeholder" style="width: 40%;"></span>
              </p>
            </div>
            <div class="three wide center aligned column">
              <p class="placeholder-glow">
                <span class="placeholder" style="width: 50%;"></span>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="thirteen wide column">
              <p class="placeholder-glow">
                <span class="placeholder" style="width: 10%;"></span>
                <br>
                <span class="placeholder" style="width: 25%;"></span>
              </p>
            </div>
            <div class="three wide center aligned column">
              <p class="placeholder-glow">
                <span class="placeholder" style="width: 40%;"></span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
</script>

<style scoped>
h1 {
  font-weight: 700;
  font-size: 50px;
  color: rgb(54, 54, 55);
}
hr {
  min-width: max-content;
}
#header-form {
  margin: 20px 0 0 0;
}
.image {
  min-width: 100%;
  min-height: 100%;
}
</style>