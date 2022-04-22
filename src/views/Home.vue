<template>
    <MyNavbar />
    <TheCarousel />
    <sui-segment>
    <sui-segment id="upper-segment" color="teal">
        <div>
            <sui-label ribbon color="teal">Contacts</sui-label>
        </div>
        <div>
            <form @submit.prevent="submitHandler">
            <sui-input fluid placeholder="Search..." v-model="query" />
            </form>
        </div>
    </sui-segment>
    </sui-segment>
    <TheFooter />
</template>
 
<script>
    import TheCarousel from "../components/TheCarousel.vue";
    import MyNavbar from "../components/MyNavbar.vue";
    import TheFooter from "../components/TheFooter.vue";
    export default {
        name: 'Home',

        components: {
            TheCarousel,
            TheFooter,
            MyNavbar,
        },
    }
</script>
    

<style>
#upper-segment {
  display: grid;
  grid-template-columns: 1fr 13fr 2fr;
  gap: 1%;
  align-items: center;
  justify-items: center;
}
#upper-segment :nth-child(2) {
  width: 100%;
}
</style>