<template>
    <TopBox />
    <NavBar />

    <div class="routePath">
        <router-link to="/stats">Home / {{ currentPath }} </router-link>
    </div>
    <div class="dropMenu">
        <select class="season">
            <option v-for="season in seasons" :key="season">{{ season }}</option>
        </select>

        <select class="allTeams">
            <option v-for="team in teams" :key="team">{{ team }}</option>
        </select>

        <select class="players">
            <option>All Players</option>
            <option>Indian</option>
            <option>Overseas</option>
        </select>
    </div>

    <div class="searchBar">
        <input type="text" @input="searchData"  v-model="searchText" placeholder="Search By Player Name" />
        <font-awesome-icon icon="circle-xmark" class="close-icon" v-if="searchText" @click="emptySearch"/>
    </div>

    <table class="table-data">
        <thead class="tableHeader">
            <tr class="">
                <th class="" v-for="head in tableHead" :key="head">{{ head }}</th>
            </tr>
        </thead>
        <tbody>
            <tr class="rowData" v-for="item in playerData" :key="item">
                <td>{{ item.POS }}</td>
                <td>{{ item.Player }}</td>
                <td>{{ item.Mat }}</td>
                <td>{{ item.Inns }}</td>
                <td>{{ item.NO }}</td>
                <td style="background: rgb(234, 231, 231);">{{ item.Runs }}</td>
                <td>{{ item.HS }}</td>
                <td>{{ item.Avg }}</td>
                <td>{{ item.BF }}</td>
                <td>{{ item.SR }}</td>
                <td>{{ item.Century }}</td>
                <td>{{ item.Fifty }}</td>
                <td>{{ item.Fours }}</td>
                <td>{{ item.Sixes }}</td>
            </tr>
        </tbody>
    </table>
    <Footer />
</template>
<script>
import { ref } from 'vue';
import TopBox from '../HomePage/TopBox.vue';
import NavBar from '../HomePage/NavBar.vue';
import Footer from '../HomePage/Footer.vue';
import { useRoute } from 'vue-router'
export default {
    components: {
        TopBox,
        NavBar,
        Footer
    },
    setup() {
        const route = useRoute()
        const currentPath = route.name
        const searchText = ref('')
        const playerData = ref ([
                {
                    "POS": "1",
                    "Player": "John",
                    "Mat": 10,
                    "Inns": 9,
                    "NO": 2,
                    "Runs": 350,
                    "HS": 85,
                    "Avg": 43.75,
                    "BF": 280,
                    "SR": 125.00,
                    "Century": 0,
                    "Fifty": 3,
                    "Fours": 40,
                    "Sixes": 5
                },
                {
                    "POS": "2",
                    "Player": "Mike",
                    "Mat": 9,
                    "Inns": 9,
                    "NO": 1,
                    "Runs": 420,
                    "HS": 110,
                    "Avg": 52.50,
                    "BF": 320,
                    "SR": 131.25,
                    "Century": 1,
                    "Fifty": 2,
                    "Fours": 45,
                    "Sixes": 8
                },
                {
                    "POS": "3",
                    "Player": "Sarah",
                    "Mat": 8,
                    "Inns": 8,
                    "NO": 0,
                    "Runs": 280,
                    "HS": 92,
                    "Avg": 35.00,
                    "BF": 210,
                    "SR": 133.33,
                    "Century": 0,
                    "Fifty": 2,
                    "Fours": 30,
                    "Sixes": 3
                },
                {
                    "POS": "4",
                    "Player": "David",
                    "Mat": 10,
                    "Inns": 9,
                    "NO": 1,
                    "Runs": 410,
                    "HS": 78,
                    "Avg": 51.25,
                    "BF": 300,
                    "SR": 136.67,
                    "Century": 0,
                    "Fifty": 4,
                    "Fours": 35,
                    "Sixes": 7
                },
                {
                    "POS": "5",
                    "Player": "Emily",
                    "Mat": 10,
                    "Inns": 10,
                    "NO": 3,
                    "Runs": 280,
                    "HS": 65,
                    "Avg": 35.00,
                    "BF": 200,
                    "SR": 140.00,
                    "Century": 0,
                    "Fifty": 1,
                    "Fours": 20,
                    "Sixes": 2
                },
                {
                    "POS": "6",
                    "Player": "Alex",
                    "Mat": 9,
                    "Inns": 8,
                    "NO": 0,
                    "Runs": 320,
                    "HS": 98,
                    "Avg": 40.00,
                    "BF": 250,
                    "SR": 128.00,
                    "Century": 0,
                    "Fifty": 3,
                    "Fours": 32,
                    "Sixes": 4
                },
                {
                    "POS": "7",
                    "Player": "Sophia",
                    "Mat": 8,
                    "Inns": 7,
                    "NO": 0,
                    "Runs": 220,
                    "HS": 75,
                    "Avg": 31.43,
                    "BF": 180,
                    "SR": 122.22,
                    "Century": 0,
                    "Fifty": 1,
                    "Fours": 25,
                    "Sixes": 1
                },
                {
                    "POS": "8",
                    "Player": "Daniel",
                    "Mat": 10,
                    "Inns": 9,
                    "NO": 2,
                    "Runs": 390,
                    "HS": 80,
                    "Avg": 48.75,
                    "BF": 270,
                    "SR": 144.44,
                    "Century": 0,
                    "Fifty": 3,
                    "Fours": 37,
                    "Sixes": 6
                },
                {
                    "POS": "9",
                    "Player": "Olivia",
                    "Mat": 9,
                    "Inns": 8,
                    "NO": 1,
                    "Runs": 370,
                    "HS": 95,
                    "Avg": 53.57,
                    "BF": 290,
                    "SR": 127.59,
                    "Century": 0,
                    "Fifty": 2,
                    "Fours": 42,
                    "Sixes": 3
                },
                {
                    "POS": "10",
                    "Player": "Matthew",
                    "Mat": 10,
                    "Inns": 9,
                    "NO": 0,
                    "Runs": 440,
                    "HS": 120,
                    "Avg": 55.00,
                    "BF": 330,
                    "SR": 133.33,
                    "Century": 1,
                    "Fifty": 3,
                    "Fours": 50,
                    "Sixes": 10
                }
            ])
        const filterData = ref([...playerData.value])

        function searchData() {
         
                playerData.value = filterData.value.filter((item) => {
                    if (item.Player) {
                        return item.Player.toLowerCase().includes(searchText.value.toLowerCase());
                    }
                    return false;
                });
            
        };
        
        function emptySearch() {
            if (searchText.value) {
                searchText.value = ""
                playerData.value = [...filterData.value];
            }
        }
        return {
            filterData,
            searchText,
            searchData,
            currentPath,
            playerData,
            emptySearch,

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
            teams: [
                'All Teams',
                'GT',
                'RCB',
                'CSK',
                'SRH',
                'RR',
                'MI',
                'DC',
                'KKR',
                'SRH',
                'LSG',
                'PBKS'
            ],
            tableHead: [
                "POS", "Player", "Mat", "Inns", "NO", "Runs", "HS", "Avg", "BF", "SR", "100", "50", "4s", "6s"
            ]
        }
    },
}
</script>
<style scoped>

.close-icon { 
    position: relative;
    right: 18px;
    height: 13px;
    bottom: 1px;
    cursor: pointer;
}
.table-data {
    position: relative;
    left: 155px;
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 1200px;
}

.rowData {
    text-align: center;
}

.rowData td {
    height: 80px;
    border-bottom: 1px solid gray;
}

.tableHeader {
    letter-spacing: 1px;
    border-collapse: separate;
    border-spacing: 5px 5px;
    padding: 12px;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    background: #1e263d;
    text-transform: uppercase;
    height: 45px;
    text-align: center;
}

.dropMenu {
    display: flex;
    justify-content: space-evenly;
    margin-top: 30px;
}

.activeTab {
    background: #ef4123;
    color: white;
}

.season {
    position: relative;
    right: 112px;
    text-transform: uppercase;
    width: 150px;
    height: 33px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
}

.allTeams {
    position: relative;
    right: 360px;
    text-transform: uppercase;
    width: 150px;
    height: 33px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
}

.players {
    position: relative;
    right: 611px;
    text-transform: uppercase;
    width: 150px;
    height: 33px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
}

.searchBar {
    position: relative;
    left: 1164px;
    bottom: 31px;
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
}</style>
