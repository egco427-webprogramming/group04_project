<template>
  <div class="container">
    <div class="circle">
      <i class="check icon"></i>
    </div>
    <h1>Payment Successful</h1> 
    <p>Thank you for your purchased.</p> 
    <router-link to="/">
        <div align="center">
          <button class="ui black button " id="continue-button">Continue</button>
        </div>
    </router-link>

  </div>

</template>

<script>
  export default {};
</script>

<style scoped>
h1 {
  color: green;
  font-weight: 900;
  font-size: 40px;
  margin-top: 30px;
  margin-bottom: 10px;
}

p {
  font-size: 20px;
}

i {
  color: white;
  font-size: 50px;
  line-height: 100px;
  margin-left:7px ;
}
.circle {
  border-radius: 100px;
  height: 100px;
  width: 100px;
  background: green;
  margin: 0 auto;
}
.container {
  margin: auto;
  padding: 100px;
}

#continue-button {
  height: 50px;
  max-width: 350px;
  width: 90%;
  border-radius: 30px;
  margin: 35px auto 120px auto;
}
</style>