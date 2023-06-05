<style scoped>
  main{
    min-height: 80vh;
  }
</style>

<template>
  <div>
    <navbarMenu />
    <main>
      <RouterView />
    </main>
    <footer1 />
  </div>
</template>


<script>
  import { RouterLink, RouterView } from 'vue-router';
  import footer1 from './components/footer.vue';
  import navbarMenu from './components/navbar-menu.vue';

  export default {
    components:{
      navbarMenu,
      footer1,
    },
    data() {
      return {
      
      }
    }
  }
</script>