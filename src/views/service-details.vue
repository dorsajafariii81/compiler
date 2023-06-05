<style>
.service-details-wrapper p{
        font-family: "kamran";
        font-size: 24px;
        font-weight: 700;
    }
</style>
<style scoped>
h1{
    font-family: "kamran";
      margin-top: 48px;
      font-size: 64px;
      text-align: center;
      font-weight: 700;
      border-bottom: 5px solid #f3a411;
      padding-bottom: 16px;
      width: fit-content;
      margin: 48px auto 32px;
    }
    img{
        width: 100%;
        margin-bottom: 32px;
    }
    li{
        font-family: "kamran";
        font-size: 24px;
    }
    
</style>
<template>
    <section class="service-details-wrapper">
        <div class="container">
            <h1 v-text="serviceItem.title"></h1>
            <div>
                <img :src="serviceItem.image" alt="">
            </div>
            <div v-html="serviceItem.description"></div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            serviceItems:[
                {
                    id:1,
                    title:"خدمات مو",
                    description:`
                        <p>
                            امروزه خانمی نیست که با رنگ و لایت آشنا نباشد، اما این لاین پرطرفدار انواع بسیار متفاوتی دارد که با مواد گوناگونی انجام می‌شود، کیفیت مواد استفاده شده در انواع رنگ و لایت ( در ادامه خواهیم گفت) بسیار مهم و موثر است.
                        </p>
                        <p>
                            به طور مثال اگر از مواد و رنگ‌های شیمیایی نامناسب و طبق زمان‌بندی غیر اصولی استفاده شود  مو به اصطلاح  می‌سوزد و شادابی و طراوت خود را از دست می‌دهد.
                        </p>
                        <p>
                            اما از آنجایی که خواهان رنگ‌ و لایت بیش از پیش نیز شده‌اند سالن ماکیاژ لاین‌های متفاوت زیر را متناسب با تمام سلیقه‌ها ارائه می‌دهد: 
                        </p>
                        <ul>
                            <li>
                                آمبره (Ombre)
                            </li>
                            <li>
                                بالیاژ (Balayage)
                            </li>
                            <li>
                                سامبره (Sombra)
                            </li>
                            <li>
                                هاف لایت (Half Light)
                            </li>
                            <li>
                                ووی لایت (Movie Light)
                            </li>
                        </ul>
                    `,
                    image:"/src/assets/images/hair.jpg",
                },
                {
                    id:2,
                    title:"میکاپ",
                    description:`
                        <p>
                            میکاپ یکی از برترین و پرطرفدارترین لاین‌های زیبایی است که تمامی بانوان طرفدار آن هستند اما این لاین سبک‌های متفاوتی دارد از جمله:
                        </p>
                        <ul>
                            <li>
                                سبک کلاسیک
                            </li>
                            <li>
                                هالیوودی
                            </li>
                            <li>
                                مصری
                            </li>
                            <li>
                                اروپایی
                            </li>
                            <li>
                                خلیجی
                            </li>
                        </ul>
                        <p>
                            هر چهره‌ای تعریفی از زیباییست
                        </P>
                        <p>
                            با میکاپی حرفه‌ای هرصورتی زیبا‌تر شده و عیب و نقص‌های صورت به طور کامل پوشیده می‌شوند
                        </p>
                    `,
                    image:"/src/assets/images/makeup.jpg",
                },
                {
                    id:4,
                    title:"ناخن",
                    description:`
                        <p>
                            لاین ناخن یکی از پرطرفدارترین‌ لاین‌های زیبایی در سراسر دنیاست. مهم‌ترین ویژگی یک ناخن‌کار خوب دقت و ظرافت در عین مهارت‌ است
                        </p>
                        <p>
                            انواع خدمات ناخن :
                        </p>
                        <ul>
                            <li>
                                کاشت ناخن
                            </li>
                            <li>
                                ژلیش
                            </li>
                            <li>
                                مانیکور
                            </li>
                            <li>
                                پدیکور (همراه با ماساژ)
                            </li>
                            <li>
                                طراحی
                            </li>
                        </ul>
                        <p>
                            از جمله خدماتی‌ است که در سالن زیبایی درسالن ارائه می‌شود.
                        </P>
                        <p>
                            و اما کاشت ناخن یکی از بهترین و پرطرفدارترین انواع کار برروی ناخن است چرا‌که تمامی نقص‌های ناخن از جمله شکستگی، پستی و بلندی، زردی ناخن و.. را پوشش می‌دهد.
                        </p>
                        <p>
                            انواع کاشت ناخن :
                        </p>
                        <ul>
                            <li>
                                کاشت ناخن پودری
                            </li>
                            <li>
                                کاشت ناخن ژله ای
                            </li>
                            <li>
                                کاشت ناخن قالبی یا دوآل
                            </li>
                            <li>
                                کاشت ناخن به روش فیبر یا گیاهی
                            </li>
                            <li>
                                کاشت ناخن اکلیلی
                            </li>
                        </ul>
                        <p>
                            در سالن زیبایی ماکیاژ تمامی خدمات گفته شد با استفاده از بهترین مواد آمریکا انجام می‌شود.
                        </p>
                    `,
                    image:"/src/assets/images/nail.jpg",
                },
                {
                    id:3,
                    title:"پوست",
                    description:`
                        <p>
                           لاین پوست یکی از مهم‌ترین لاین‌های زیباییست و می‌توان گفت پایه‌ی هرگونه زیبا سازی صورت  پوست است؛  تا زمانیکه صورت‌ پر از لک، جوش و مشکلات پوستی باشد آرایش آن جلوه‌ای که باید داشته باشد را ندارد.
                        </p>
                        <p>
                            از انواع خدمات ماکیاژ در مراقبت ودرمان پوست با محصولات درمانی وزیبایی زیر نظر وزارت بهداشت می‌توان به موارد زیر اشاره کرد؛
                        </p>
                        <ul>
                            <li>
                                طلا تراپی
                            </li>
                            <li>
                                ویتامین سی
                            </li>
                            <li>
                                لیفتینگ وپیلینگ
                            </li>
                            <li>
                                مزوتراپی
                            </li>
                            <li>
                                اسکوم تراپی
                            </li>
                        </ul>
                        <p>
                            سالهاست که در سالن زیبایی درسالن برروی عرصه‌ی جوان‌سازی، پاکسازی و… کار شده و یکی از خبره‌ترین‌های این عرصه نیز آماده‌ی خدمت‌رسانی به شما عزیزان است
                        </P>
                        <p>
                            با میکاپی حرفه‌ای هرصورتی زیبا‌تر شده و عیب و نقص‌های صورت به طور کامل پوشیده می‌شوند
                        </p>
                    `,
                    image:"/src/assets/images/poost.jpg",
                },
            ],
            serviceItem:{},
        }
    },
    methods:{
        setServiceItem(){
            let id = this.$route.params.id;
            this.serviceItems.map(item =>{
                if(item.id ==  parseInt(id)){
                    this.serviceItem = item;
                }
            });
        }
    },
    mounted(){
        this.setServiceItem();
        console.log("hhghghg",this.serviceItem);
    }
}
</script>
