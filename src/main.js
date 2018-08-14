/* JS Libraries ***************************************************************/
import Vue from "vue"
import Vuetify from "vuetify"
import * as VueGoogleMaps from "vue2-google-maps"
import VueCarousel from "vue-carousel"


/* Components *****************************************************************/


/* Style Libraries ************************************************************/
import "normalize.css"
import "animate.css"
import "bulma"

import "vuetify/dist/vuetify.min.css"

/* Custom Components **********************************************************/
import App from "./App.vue"
// import ChFooter from "./components/ch-footer.vue"
/*import ChNavbar from "./components/ch-navbar.vue"*/
/*import ChSample from "./components/ch-sample.vue"*/
// import ChMap from "./components/ch-map.vue"

/* Vue Components ************************************************************/
Vue.component("app", App)
// Vue.component("ch-footer", ChFooter)
/*Vue.component("ch-navbar", ChNavbar)*/
/*Vue.component("ch-sample", ChSample)*/
// Vue.component("ch-map", ChMap)
Vue.use(Vuetify)
Vue.use(VueCarousel);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBS4g7qNqSVoVAEAkKiL_eosjSxMeaowBE"
  }
})

new Vue({
  el: "#app",
  render: h => h(App)
})
