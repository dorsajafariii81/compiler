<style scoped>
    .why-choose-us-wrapper{
        background-color: #f7f8fa;
        padding: 48px 0;
    }
    .why-choose-details{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 48px;
    }
    .why-choose-details ul{
        list-style: none;
        display: contents;
    }
    .why-choose-details ul li svg path{
        fill:#bca858;
    }
    .why-choose-photo-wrapper img{
        width: 100%;
        max-height: 400px;
        border-radius: 8px;
        object-fit: contain;
    }
    @media (max-width:767px) {
        .container{
            max-width: 100%;
        }
    }
    @media (max-width:600px) {
        .why-choose-photo-wrapper{
            display: none;
        }
    }
</style>
<template>
  <section class="why-choose-us-wrapper">
    <div class="container">
        <div class="row">
            <div class="why-choose-photo-wrapper col-xl-6 col-lg-6 col-md-6 col-sm-5">
                <img src="../../assets/images/why-choose.jpg" alt="">
            </div>
            <div class="why-choose-details col-xl-6 col-lg-6 col-md-6 col-sm-7 co-12">
                <h2>چرا ما را انتخاب کنید</h2>
                <div>
                    <ul>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"/></svg>
                            <span>
                                ما برای پاسخگویی زنده در تماس های خود تلاش می کنیم.
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"/></svg>
                            <span>
                                طیف گسترده ای از مهارت ها و تجربیات.
                            </span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"/></svg>
                            <span>
                                پاسخ سریع به درخواست ها و زمان پاسخگویی حیاتی تضمین شده است.
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>
