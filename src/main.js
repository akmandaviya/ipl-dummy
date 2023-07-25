import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router/routes";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faAward, faCalendar, 
         faCamera, 
         faChartLine, 
         faChartSimple, 
         faCheck, 
         faChevronLeft, 
         faChevronRight,
         faCircleChevronLeft,
         faCircleChevronRight,
         faCircleLeft,
         faEye, 
         faLocationDot, 
         faMagnifyingGlass,
         faPhone,
         faShareNodes,
         faTrophy,
         faUpRightFromSquare,
         faUserSecret, 
         faUsers,
         faXmarkCircle, 
         } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret, 
            faMagnifyingGlass, 
            faCalendar, 
            faChartSimple, 
            faChartLine, 
            faUsers, 
            faChevronLeft, 
            faChevronRight, 
            faShareNodes,
            faEye,
            faCircleLeft,
            faTrophy,faAward,faLocationDot,faPhone,faCheck, faCamera,faCircleChevronLeft,faCircleChevronRight,faUpRightFromSquare,faXmarkCircle)


createApp(App).use(router).use(store).component('font-awesome-icon', FontAwesomeIcon).mount("#app");
