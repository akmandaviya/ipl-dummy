<template>
    <TopBox />
    <NavBar />
    <div class="routePath">
          <router-link to="/mobileproducts">Home  /  {{ currentPath }} </router-link>
      </div>
    <OfficialApp class="official-app" />
    <div class="app-box">
        <div class="android">
            <h4>Android App</h4>
            <hr>
            <p class="a-main">Get Ready for 2023 Indian Premier League with the latest <br> app updates! New features
                include:</p>
            <font-awesome-icon icon="check" class="tick-mark" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 29px;">IPL stories: check back each day for latest video </p>
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 50px;">compilations</p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 60px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 90px;">Enhanced points table and stats display</p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 90px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 120px;">Addition of Women's Franchise sections</p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 120px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 150px;">Live match photo stream </p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 150px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 180px;">In-player option for video stream </p>

            <img class="a-app" style="border-radius: 6px; cursor: pointer;" :src=playStore alt="play store" />
        </div>
        <div class="ios">
            <h4>iOS App</h4>
            <hr>
            <p class="i-main">Get Ready for 2023 Indian Premier League with the latest <br> app updates! New features
                include:</p>
                <font-awesome-icon icon="check" class="tick-mark" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 29px;">IPL stories: check back each day for latest video </p>
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 50px;">compilations</p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 60px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 90px;">Enhanced points table and stats display</p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 90px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 120px;">Addition of Women's Franchise sections</p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 120px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 150px;">Live match photo stream </p>
            <font-awesome-icon icon="check" class="tick-mark" style="position: relative; bottom: 150px;" />
            <p style="font-weight: 700; position: relative; left: 45px; bottom: 180px;">In-player option for video stream </p>

            <img class="a-app" style="cursor: pointer; border-radius: 6px;" :src=appStore alt="app store" />
        </div>
    </div>
    <Footer class="footer" />
</template>
<script>
import TopBox from '../HomePage/TopBox.vue';
import NavBar from '../HomePage/NavBar.vue';
import Footer from '../HomePage/Footer.vue';
import OfficialApp from '../HomePage/OfficialApp.vue';
import playStore from '../../assets/play-store.png'
import appStore from '../../assets/app-store.png'
import { useRoute } from 'vue-router'
export default {

    setup() {
        const route = useRoute()
        const currentPath = route.name
       return {
        playStore,
        appStore,
        currentPath
       }
    },
    components: {
        TopBox,
        NavBar,
        Footer,
        OfficialApp
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
.official-app {
    margin-top: 50px;
    background: black;
    color: white;
}

.app-box {
    display: flex;
    justify-content: center;
    margin-bottom: 200px;
    margin-top: 84px;
}

.android {
    width: 453px;
    height: 373px;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 1px 2px 50px hsl(0deg 0% 0% / 0.25);
}

.android h4 {
    text-align: center;
    font-weight: 700;
    margin-top: 5px;
}

.android hr {
    width: 76px;
    margin-left: 186px;
    height: 4px;
}

.android p {
    color: rgb(2, 2, 105);
}

.a-main {
    position: relative;
    top: -6px;
    text-align: center;

}

.ios {
    width: 453px;
    height: 373px;
    margin-left: 42px;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 1px 2px 50px hsl(0deg 0% 0% / 0.25);
}

.ios h4 {
    text-align: center;
    font-weight: 700;
    margin-top: 5px;
}

.ios hr {
    width: 76px;
    margin-left: 186px;
    height: 4px;
}

.i-main {
    position: relative;
    top: -6px;
    text-align: center;
}

.ios p {
    color: rgb(2, 2, 105);
}

.tick-mark {
    height: 22px;
    color: #07d607;
    margin-left: 15px;
}

.a-app { 
    position: relative;
    border-radius: 6px;
    cursor: pointer;
    bottom: 183px;
    left: 154px;
}

</style>
