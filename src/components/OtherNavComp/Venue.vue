<template>
    <TopBox/>
   <NavBar/>
   <div class="routePath">
          <router-link to="/about">Home  /  {{ currentPath }} </router-link>
      </div>

      <div class="venue-gallery">
        <p>venues</p>
    </div>      
   
        <div class="">
                    <div v-for="(item, index1) in allVenues" :key="index1" class="venue-card-box">
                        <div v-for="(subItem, index2) in item" :key="index2" class="venue-card">
                            <div v-for="(miniItem, index3) in subItem" :key="index3" class="small-card">
                                <img :src=miniItem.image style="width: 480px; height: 330px;" />
                                <div style="background-color: rgb(130, 130, 130);">
                                    <h3 class="venue-name">{{ miniItem.venue_name }}</h3> 
                                <p class="venue-place">{{ miniItem.venue_place }}</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
   <Footer style="margin-top: 100px;"/>
</template>
<script>
import NavBar from '../HomePage/NavBar.vue';
import TopBox from '../HomePage/TopBox.vue';
import Footer from '../HomePage/Footer.vue';
import { useRoute } from 'vue-router'
import {venueData} from '../../dummyData/venues.js'
import { ref } from 'vue';
export default{
    components:{
        NavBar,
        TopBox,
        Footer
    },
    setup() {
        const route = useRoute()
        const currentPath = route.name
        const allVenues = ref(venueData)
        return {
            currentPath,
            allVenues,
        }
    },
}
</script>
<style scoped>

.venue-card { 
    margin-right: 5px;
    margin-top: 10px;
}
.venue-card-box {
    position: relative;
    left: 40px;
    display: flex;
}
.venue-data { 
    background: black;
    position: relative;
    bottom: 750px;
    left: 50px;
    opacity: 0.5;
    width: 420px;
    text-align: center;
}

.venue-name { 
    color: white;
    text-align: center;
    text-transform: capitalize;
    font-size: 35px;
    font-weight: 700;
}

.venue-place { 
    position: relative;
    bottom: 10px;
    font-weight: 500;
    text-align: center;
    color: white;
}

.link { 
    position: relative;
    bottom: 30px;
    color: white;
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
.item-row { 
    display: flex;
    position: relative;
    top: 50px;
    left: 40px;
    width: fit-content;
    border-radius: 20px;
}
.venue-gallery { 
    width: 1519px;
    height: 76px;
    background: #081033;
}

.venue-gallery p { 
    position: relative;
    top: 6px;
    left: 35px;
    width: fit-content;
    color: white;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 500;
}


</style>
