<template>
  <div class="home-container">
    <!--Top box section-->
     <TopBox/>
    <!--Nav bar Section-->  
    <NavBar/>

    <!--Mainview Component-->
    <MainView/>

    <!--Looking Component-->
    <LookingFor/>

    <!--Magic moments compoents-->
     <MagicMoments/>

    <!--Point table component-->
    <PointsTable/>

    <!--Latest News-->
    <LatestNews/>
    
    <!--Official App component-->
    <OfficalApp/>

    <!--Footer component-->
    <Footer />

  </div>
</template>
<script>
import Footer from '../HomePage/Footer.vue'
import OfficalApp from '../HomePage/OfficialApp.vue'
import MainView from '../MainData/MainView.vue'
import LookingFor from '../MainData/LookingFor.vue'
import PointsTable from '../MainData/PointsTable.vue'
import MagicMoments from '../MainData/MagicMoments.vue'
import LatestNews from '../MainData/LatestNews.vue'
import NavBar from '../../components/HomePage/NavBar.vue'
import TopBox from './TopBox.vue'

export default ({
  name: "HomePage",
  components: {
    Footer,
    OfficalApp,
    MainView,
    LookingFor,
    PointsTable,
    MagicMoments,
    LatestNews,
    NavBar,
    TopBox
},
  setup() {

    return {
      
    }
  },
})
</script>

