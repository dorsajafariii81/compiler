<style scoped>
header{
    border-bottom: 1px solid #ededed;
}
.navbar{
    background-color: #ffffff;
    
}
.navbar-brand{
    display: flex;
    align-items: center;
}
.navbar-brand img{
    width: 50px;
    height: 50px;
}
.navbar .container{
    display: contents;
}
</style>
<template>
    <header>
        <nav class="navbar navbar-expand-lg container">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <img src="../assets/images/logo.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                    درسالن
                </router-link>
                <div class="container">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                              <router-link to="/" class="nav-link active" aria-current="page">صفحه اصلی</router-link>
                            </li> 
                            <li class="nav-item">
                              <router-link :to="{name:'about'}" class="nav-link">درباره ما</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {

}
</script>
