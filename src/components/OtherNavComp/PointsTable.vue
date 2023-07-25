<template>
    <TopBox />
    <NavBar />

    <div class="routePath">
          <router-link to="/pointstable">Home  /  {{ currentPath }} </router-link>
      </div>

    <div class="pointText">
        <p>Points Table</p>
    </div>

    <div class="dropMenu">
        <select class="gender">
            <option>Men</option>
            <option>Women</option>
        </select>
        <select class="season">
            <option v-for="season in seasons" :key="season">{{ season }}</option>
        </select>
    </div>

    <table class="table-data">
        <thead class="tableHeader">
            <tr class="">
                <th class="" v-for="head in tableHead" :key="head">{{ head }}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="rowData" v-for="item in teamTableData" :key="item">
                <td>{{ item.POS }}</td>
                <td>{{ item.TEAM }}</td>
                <td>{{ item.P }}</td>
                <td>{{ item.W }}</td>
                <td>{{ item.L }}</td>
                <td>{{ item.NR }}</td>
                <td>{{ item.NRR }}</td>
                <td>{{ item.FOR }}</td>
                <td>{{ item.AGAINST }}</td>
                <td>{{ item.PTS }}</td>
                <td>{{ item.RECENT_FORM }}</td>
            </tr>
        </tbody>
    </table>
    <Footer />
</template>
<script>
import { ref } from 'vue';
import TopBox from '../HomePage/TopBox.vue';
import NavBar from '../HomePage/NavBar.vue';
import Footer from '../HomePage/Footer.vue'
import {tableData} from '../../dummyData/teamData'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const teamTableData = ref(tableData)
        const route = useRoute()
        const currentPath = route.name
        return {
            teamTableData,
            seasons: [
                'Season 2023',
                'Season 2022',
                'Season 2021',
                'Season 2020',
                'Season 2019',
                'Season 2018',
                'Season 2017',
                'Season 2016',
                'Season 2015',
                'Season 2014',
                'Season 2013',
                'Season 2012',
                'Season 2011',
                'Season 2010',
                'Season 2009',
                'Season 2008'
            ],
            tableHead: [
                "POS",
                "TEAM",
                "P",
                "W",
                "L",
                "NR",
                "NRR",
                "FOR",
                "AGAINST",
                "PTS",
                "RECENT FORM"
            ],
            
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
.pointText { 
    background: #081033;
    color: white;
    height: 75px;
}

.pointText p {
    position: relative;
    left: 154px;
    text-transform: uppercase;
    font-size: 45px;
    font-weight: 600;
}
.table-data {
    position: relative;
    left: 155px;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 1200px;
    border: 1px solid black;
}

.rowData { 
    text-align: center;
}

.rowData td { 
    height: 50px;
    border-bottom: 1px solid gray;
    background: rgb(237, 235, 235);
    font-size: 14px;
}
.tableHeader {
    letter-spacing: 1px;
    border-collapse: separate;
    border-bottom: 1px solid gray;
    border-spacing: 5px 5px;
    padding: 12px;
    font-weight: 400;
    font-size: 14px;
    text-transform: uppercase;
    height: 45px;
    text-align: center;
}

.dropMenu {
    position: relative;
    left: 155px;
    margin-top: 40px;
    margin-bottom: 30px;
}

.season{
    width: 163px;
    height: 35px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
}

.gender {
    margin-right: 33px;
    width: 163px;
    height: 35px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
}
</style>
