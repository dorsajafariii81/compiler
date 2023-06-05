<style scoped>
    .our-services-wrapper{
        padding: 48px 0;
    }
    .services-wrapper{
        display: flex;
        justify-content: space-around;
    }
    .service-card{
        height: 240px;
        position: relative;
        margin-bottom: 16px;
    }
    
    .card-container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 20px;
        border: 1px solid #e5e5e5;
        z-index: 1;
        text-align: center;
        transition-duration: 500ms;
        cursor: pointer;
        text-decoration: none;
        color: #000000;
    }
    .card-title{
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 8px;
    }
    .card-container:hover{
        border-color: transparent;
        box-shadow: 0 2px 40px 8px rgba(15, 15, 15, 0.15);
    }
    .our-services-wrapper h2{
        text-align: center;
        margin: 0 0 48px 0;
    }
    .service-card .image-wrapper{
        width: 55px;
        height: 55px;
        padding: 8px;
    }
    .service-card img{
        width: 100%;
        height: 100%;
    }
    @media (max-width:767px) {
        .our-services-wrapper{
            padding: 32px 16px;
        }
        .service-card {
            padding: 0 8px;
        }
    }
</style>
<template>
    <section class="container our-services-wrapper">
        <h2>خدمات ما</h2>
        <div class="services-wrapper row">
            <div class="service-card col-xl-3 col-lg-3 col-md-6 col-6">
                <router-link  :to="{name:'service',params:{id:1}}" class="card-container">
                    <div class="image-wrapper">
                        <img src="../../assets/images/s3.png" alt="">
                    </div>
                    <p class="card-title">
                         خدمات مو
                    </p>
                    <p>
                        امروزه خانمی نیست که با رنگ و لایت...
                    </p>
                </router-link>
            </div>
            <div class="service-card col-xl-3 col-lg-3 col-md-6 col-6">
                <router-link  :to="{name:'service',params:{id:2}}" class="card-container">
                    <div class="image-wrapper">
                        <img src="../../assets/images/s4.jpg" alt="">
                    </div>
                    <p class="card-title">	
                        میکاپ
                    </p>
                    <p>
                        میکاپ یکی از برترین و پرطرفدارترین ...
                    </p>
                </router-link>
            </div>
            <div class="service-card col-xl-3 col-lg-3 col-md-6 col-6">
                <router-link  :to="{name:'service',params:{id:3}}" class="card-container">
                    <div class="image-wrapper">
                        <img src="../../assets/images/s3.jpg" alt="">
                    </div>
                    <p class="card-title">
                        پوست
                    </p>
                    <p>
                        لاین پوست یکی از مهم‌ترین لاین‌های زیباییست...
                    </p>
                </router-link>
            </div>
            <div class="service-card col-xl-3 col-lg-3 col-md-6 col-6">
                <router-link  :to="{name:'service',params:{id:4}}" class="card-container">
                    <div class="image-wrapper">
                        <img src="../../assets/images/s2.jpg" alt="">
                    </div>
                    <p class="card-title">
                        کاشت ناخن
                    </p>
                    <p>
                        لاین ناخن یکی از پرطرفدارترین‌ لاین‌های زیبایی...
                    </p>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>
