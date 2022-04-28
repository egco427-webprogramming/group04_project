<template>
    <div class="row">
        <h2>SignUp</h2>
        <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 col-md-offset-3" />
        <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3">
            <input type="email" v-model="formData.email" class="form-control" placeholder="email">
            <br>
            <input type="password" v-model="formData.password" class="form-control" placeholder="password">
            <br>
            <button class="btn btn-success" @click="signUp">SignUp</button>
            <p>Already a member?
                <router-link :to="{path:'/signin'}">
                    <span class="signup">Sign in</span>
                </router-link>
            </p>
            <button @click="toast">Toast it!</button>
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

</style>