<template>
  <!-- TopBox Section -->
  <TopBox />
  <!-- NavBar Section -->
  <NavBar />
  <div class="routePath">
      <router-link to="/teams">Home  /  {{ currentPath }} </router-link    >
  </div>
  <div class="teams_container">
      <div class="ipl_logo">
          <img src="https://www.iplt20.com/assets/images/teams-landing-logo.png" alt="ipl_logo" />
      </div>
      <div class="card-row" v-for="(row, rowIndex) in teamCardRows" :key="rowIndex">
          <div class="card" v-for="(item, index) in row" :key="index" :style="{ background: item.teamColor }">
              <router-link :to=item.team_routes class="img-box">
                <img :src="item.team_logo" class="card-img-top" alt=""> 
              </router-link>
              <div class="card-body">
                  <p class="card-text">{{ item.team_name }}</p>
              </div>
            </div>
      </div>
  </div>
  
  <!-- Footer Section -->
  <Footer />
</template>

<script>
import { ref, computed } from 'vue'
import { teamCard } from '../../dummyData/teamCardDetails'
import Footer from '../HomePage/Footer.vue'
import NavBar from '../HomePage/NavBar.vue'
import TopBox from '../HomePage/TopBox.vue'
import { useRoute } from 'vue-router'

export default {
  name: 'TeamCards',
  components: {
      Footer,
      NavBar,
      TopBox,
  },
  setup() {
      const teamCardData = ref(teamCard)
      const route = useRoute()
      const currentPath = route.name
      const teamCardRows = computed(() => {
          const rows = []
          const cardsPerRow = 4
          const totalCards = teamCardData.value.length

          for (let i = 0; i < totalCards; i += cardsPerRow) {
              const row = teamCardData.value.slice(i, i + cardsPerRow)
              rows.push(row)
          }

          return rows
      })

      return {
          teamCardRows,
          currentPath
      }
  },
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

.img-box {
  background: white;
  height: 160px;
  border-bottom-left-radius: 130px;
  border-bottom-right-radius: 130px;
  box-shadow: 8.0px 16.0px 16.0px hsla(0, 23%, 5%, 0.25);
}

.teams_container {
  background: black;
}

.ipl_logo {
  position: relative;
  left: 600px;
  top: 1px;
  width: 200px;
  height: 156.95px;
}

.card img {
  height: 120px;
  width: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  filter: drop-shadow(20px 20px 10px rgb(121, 121, 118));
}

.card-text {
  font-size: 18px;
  margin-top: 51px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  color: white;
}

.card {
  border-radius: 20px;
  height: 297px;
  width: 300px !important;
}

.card-row {
  margin-top: 60px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  padding: 20px;
}
</style>