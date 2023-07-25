<template>
    <TopBox />
    <NavBar />

        <div class="routePath">
          <router-link to="/photos">Home  /  {{ currentPath }} </router-link>
      </div>

    <div class="photo-gallery">
        <p>photo galleries</p>
    </div>

    <div>
    <div class="item-row" v-for="(item, index) in allPhotos" :key="index">
      <div class="item" v-for="(subItem, subIndex) in item" :key="subIndex"  style="padding: 1px;">
       <img :src=subItem  style="width: 280px; height: 200px;"/>
      </div>
    </div>
  </div>

    <Footer style="margin-top: 100px;" />
</template>
<script>
import TopBox from '../HomePage/TopBox.vue';
import NavBar from '../HomePage/NavBar.vue';
import Footer from '../HomePage/Footer.vue';
import {photoGalleryData} from '../../dummyData/photos.js'
import { useRoute } from 'vue-router'
import { ref } from 'vue';
export default {
    components: {
        TopBox,
        NavBar,
        Footer
    },
    setup() {
        const allPhotos = ref(photoGalleryData)
        const route = useRoute()
        const currentPath = route.name
        return {
            allPhotos,
            currentPath
        }
    },
}
</script>
<style scoped>
.photo-gallery { 
    width: 1519px;
    height: 76px;
    background: #081033;
}
.photo-gallery p { 
    position: relative;
    top: 6px;
    left: 55px;
    color: white;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 500;
}
.item-row { 
    display: flex;
    position: relative;
    top: 50px;
    left: 50px;
    width: fit-content;
}
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

</style>
