<template>
    <TopBox />
    <NavBar />
    <div class="routePath">
          <router-link to="/about">Home  /  {{ currentPath }} </router-link>
      </div>
    <div class="aboutIpl">
        <p>About IPL</p>
    </div>
    <div class="about-box">
        <p class="aboutUs">About Us</p>
        <p class="address">Address :</p><br>
        <font-awesome-icon icon="location-dot" style="position: relative; right: 250px; bottom: 31px;" />
        <p class="ad-1"> BCCI-IPL 4th Floor, Cricket Centre. Wankhede Stadium 'D' Road,</p>
        <p class="ad-2">Churchgate Mumbai - 400020 India</p>
        <div style="position: relative; bottom: 52px;">
            <p class="cnt">Contact Us</p>
            <p class="num">+91 22 22800300<br>
                +91 22 61580300<br>
                +91 22 22800354<br></p>
            <font-awesome-icon icon="phone" style="position: relative; bottom: 128px; right: 144px;" />
        </div>

    </div>
    <Footer />
</template>
<script>
import TopBox from '../HomePage/TopBox.vue';
import NavBar from '../HomePage/NavBar.vue';
import Footer from '../HomePage/Footer.vue';
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const currentPath = route.name
        return {
            currentPath
        }
    },
    components: {
        TopBox,
        NavBar,
        Footer
    }
}
</script>
<style scoped>
.routePath {
  background: #061e59;
  padding-top: 0.2rem !important;
  padding-bottom: 0.5rem !important;
}

.routePath a {
  text-decoration: none;
  color: white;
  margin-left: 104px;
  font-size: 12px;
}
.about-box {
    position: relative;
    background: #f2efe8;
    text-align: center;
    width: 700px;
    height: 284px;
    left: 404px;
    top: 10px;
    border-radius: 25px;

}

.aboutIpl {
    background: #081033;
    color: white;
    height: 100px;
}

.aboutIpl p {
    position: relative;
    top: 11px;
    left: 70px;
    font-size: 45px;
    font-weight: 500;
    text-transform: uppercase;
}

.aboutUs {
    font-size: 35px;
    font-weight: 800;
    font-style: italic;
}

.address {
    position: relative;
    right: 223px;
}

.ad-1 {
    position: relative;
    bottom: 56px;
    right: 16px;
}

.ad-2 {
    position: relative;
    bottom: 71px;
    right: 114px;
}

.cnt {
    position: relative;
    right: 213px;
}

.num {
    position: relative;
    bottom: 40px;
    right: 67px;
}
</style>

