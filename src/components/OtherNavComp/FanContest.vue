<template>
 <TopBox/>
 <NavBar/>
 <div class="main-text">
    <p>TATA IPL Fan Contest
    </p>
 </div>
 <img src="https://www.iplt20.com/assets/images/TATA-NEU-deks.png" style="width: 1519px; height: 474px;"/>
 <img src="https://www.iplt20.com/assets/images/fancontest-deksotp.png" style="width: 1519px; height: 474px;"/>
 <img src="https://www.iplt20.com/assets/images/RuPay-deks.png" style="width: 1519px; height: 474px;"/>
 <Footer style="margin-top: 1px;"/>
</template>
<script>
import TopBox from '../HomePage/TopBox.vue';
import NavBar from '../HomePage/NavBar.vue';
import Footer from '../HomePage/Footer.vue';
export default {
    components: { 
      TopBox,
      NavBar,
      Footer
    },
    setup() {
        
    },
}
</script>
<style scoped>
.main-text p {
    font-size: 25px;
    margin-left: 15px;
    margin-top: 10px;
    font-style: italic;
    font-weight: 700;
}
</style>
