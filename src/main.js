import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import vuetify from "./plugins/vuetify";
import * as VueGoogleMaps from "vue2-google-maps";

require("@/store/subscriber");

//axios.defaults.baseURL = "https://dev.api-promotoria.iusa.com.mx/api/";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBwsTOgSJoyp56mJoj-zJAF80LC2DUDH7w",
    libraries: "places",
  },
});

/*new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");*/

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
  new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
  }).$mount("#app");
});
