import { createWebHistory, createRouter } from "vue-router";
import HomePage from '../components/HomePage/HomePage.vue';
import TeamCards from '../components/Team/TeamCards.vue'
import Fantasy from '../components/OtherNavComp/Fantasy.vue'
import Stats from '../components/OtherNavComp/Stats.vue'
import AllNews from '../components/SeeMore/AllNews.vue'
import AllMagicMoments from '../components/SeeMore/AllMagicMoments.vue'
import About from '../components/OtherNavComp/About.vue'
import MobileProducts from '../components/OtherNavComp/MobileProducts.vue'
import Photos from '../components/OtherNavComp/Photos.vue'
import Venue from '../components/OtherNavComp/Venue.vue'
import Auction from '../components/OtherNavComp/Auction.vue'
import FanContest from '../components/OtherNavComp/FanContest.vue'
import PointsTable from '../components/OtherNavComp/PointsTable.vue'
import CSK from '../components/Team/AllTeams/CSK.vue'
import DC from '../components/Team/AllTeams/DC.vue'
import KKR from '../components/Team/AllTeams/KKR.vue'
import GT from '../components/Team/AllTeams/GT.vue'
import LSG from '../components/Team/AllTeams/LSG.vue'
import MI from '../components/Team/AllTeams/MI.vue'
import SRH from '../components/Team/AllTeams/SRH.vue'
import RR from '../components/Team/AllTeams/RR.vue'
import PBKS from '../components/Team/AllTeams/PBKS.vue'
import RCB from '../components/Team/AllTeams/RCB.vue'
const routes = [
    {
        name: 'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name: 'TeamCard',
        path: '/teams',
        component: TeamCards,
    },
    {
        name: 'CSK',
        path: '/teams/CSK',
        component: CSK
    },
    {
        name: 'DC',
        path: '/teams/DC',
        component: DC
    },
    {
        name: 'GT',
        path: '/teams/GT',
        component: GT
    },
    {
        name: 'KKR',
        path: '/teams/KKR',
        component: KKR
    },
    {
        name: 'LSG',
        path: '/teams/LSG',
        component: LSG
    },
    {
        name: 'MI',
        path: '/teams/MI',
        component: MI
    },
    {
        name:'PBKS',
        path:'/teams/PBKS',
        component: PBKS
    },
    {
        name:'RCB',
        path:'/teams/RCB',
        component: RCB
    },
    {
        name: 'RR',
        path: '/teams/RR',
        component: RR
    },
    {
        name: 'SRH',
        path: '/teams/SRH',
        component: SRH
    },
    {
        name: 'Fantasy',
        path: '/fantasy',
        component: Fantasy
    },
    {
        name: 'Stats',
        path: '/stats',
        component: Stats,
    },
    {
        name: 'AllNews',
        path: '/allNews',
        component: AllNews,
    },
    {
        name: 'AllMagicMoments',
        path: '/allMagicMoments',
        component: AllMagicMoments
    },
    {
        name: 'About',
        path: '/about',
        component: About
    },
    {
        name: 'MobileProducts',
        path: '/mobileproducts',
        component: MobileProducts
    },
    {
        name: 'Photos',
        path: '/photos',
        component: Photos
    },
    {
        name: 'Venue',
        path: '/venue',
        component: Venue
    },
    {
        name: 'Auction',
        path: '/auction',
        component: Auction
    },
    {
        name: 'FanContest',
        path: '/fancontest',
        component: FanContest
    },
    {
        name: 'PointsTable',
        path: '/pointstable',
        component: PointsTable
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() { // navigate to particular, route , but start from the top
        return { top: 0 };
    },
})

export default router
