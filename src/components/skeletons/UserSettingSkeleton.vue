<template>
  <form class="ui form">
    <h1 class="placeholder-glow" align="center" id="profile-text">
      <span class="placeholder" style="width: 45%;"></span>
    </h1>
    <div class="field">
      <p class="placeholder-glow">
        <span class="placeholder" id="uid-text" style="width: 5%;"></span> 
      </p>
      <input id="uid-input"/>
    </div>
    <div class="two fields">
      <div class="field">
        <p class="placeholder-glow">
        <span class="placeholder" id="firstname-text" style="width: 26%;"></span> 
        </p>
        <input id="firstname-input"/>
      </div>
      <div class="field">
        <p class="placeholder-glow">
          <span class="placeholder" id="lastname-text" style="width: 26%;"></span> 
        </p>
        <input id="lastname-input"/>
      </div>
    </div>

    <div class="field">
      <div class="field">
        <p class="placeholder-glow">
          <span class="placeholder" id="email-text" style="width: 7%;"></span> 
        </p>
        <input/>
      </div>
      <div class="field">
        <p class="placeholder-glow">
          <span class="placeholder" id="mobile-text" style="width: 20%;"></span> 
        </p>
        <input/>
      </div>
    </div>

    <div class="field">
      <p class="placeholder-glow">
        <span class="placeholder" id="address-text" style="width: 25%;"></span> 
      </p>
      <div class="field">
        <textarea rows="2"/>
      </div>
    </div>
    <div align="center">
      <button class="ui black button placeholder" id="update-button">
        <p class="placeholder-glow">
          <span class="placeholder" style="width: 5%;"></span>
          &nbsp;
          <span class="placeholder" style="width: 30%;"></span>
        </p>
      </button>
    </div>
  </form>
</template>

<script>
</script>

<style scoped>
.form {
  margin: 3% auto 5%;
  max-width: 640px;
  width: 80%;
  text-align: left;
}

#profile-text {
  margin-top: 45px;
  font-weight: 700;
  font-size: 50px;
  color: rgb(54, 54, 55);
}

#uid-text {
  margin-top: 50px;
  font-size: 16px;
}

#firstname-text,
#lastname-text,
#email-text,
#mobile-text,
#address-text {
  margin-top: 15px;
  font-size: 16px;
}

#update-button {
  height: 50px;
  max-width: 350px;
  width: 90%;
  border-radius: 30px;
  margin: 30px auto auto auto;
}
</style>