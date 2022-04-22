<template>
    <TheCarousel />
</template>
 
<script>
    import TheCarousel from "../components/TheCarousel.vue";

    export default {
        name: 'Home',

        components: {
            TheCarousel,
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