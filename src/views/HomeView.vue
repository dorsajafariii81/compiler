<style scoped>

</style>
<template>
    <banner />
    <ourServices />
    <whyChooseUs />
</template>

<script>
import banner from '../components/home-components/banner.vue';
import ourServices from '../components/home-components/our-services.vue';
import whyChooseUs from '../components/home-components/why-choose-us.vue';

export default {
  components:{
     banner,
     ourServices,
     whyChooseUs,
  },
}
</script>

