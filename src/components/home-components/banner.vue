<style scoped>
    .banner-wrapper{
        width: 100%;
        height: 70vh;
    }
    .banner-wrapper img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media (max-width:767px) {
        .banner-wrapper{
            height: unset;
            aspect-ratio: 16 / 9;
        }
    }
</style>
<template>
    <section class="banner-wrapper">
        <img src="../../assets/images/banner.jpg" alt="">
    </section>
</template>

<script>
export default {

}
</script>
