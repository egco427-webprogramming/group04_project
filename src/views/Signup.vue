<template>
    <div class="row signup">
        <h2 class="text-signup">SignUp</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" />
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
                  <div align="center">
            <input type="email" v-model="formData.email" class="form-control" placeholder="email" id="email-button" />
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password" id="password-button" />
            <br>
            <button class="btn btn-success" @click="signUp" id="signin-button">SignUp</button>
            <p>Already a member?
                <router-link :to="{path:'/signin'}">
                    <span class="signup">Sign in</span>
                </router-link>
            </p></div>
        </div>
    </div>
</template>

<script>
    import {
        getAuth,
        createUserWithEmailAndPassword
    } from 'firebase/auth'

    export default {
        name: 'SignUp',
        data() {
            return {
                formData: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            signUp() {
                const auth = getAuth()
                createUserWithEmailAndPassword(
                        auth,
                        this.formData.email,
                        this.formData.password
                    )
                    .then(user => {
                        //alert("Sign up success! redirect to Home page")
                        this.$router.replace('/')
                    })
                    .catch(e => {
                        alert(e.message)
                    });
            },

        },
    }
</script>

<style>
  .signup {
    margin-top: 100px;
     margin-bottom: 100px;
  }

  .text-signup {
    font-weight: 550;
    font-size: 40px;
  }

  #email-button {
    border-radius: 12px;
    height: 50px;
    width: 350px;
    margin-top: 30px;
  }

  #password-button {
    border-radius: 12px;
    height: 50px;
    width: 350px;
    margin-top: 15px;
  }

  #signup-button {
    height: 43px;
    width: 350px;
    border-radius: 30px;
    margin-top: 35px;
  }

</style>