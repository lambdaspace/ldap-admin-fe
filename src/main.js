// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import "normalize.css";

import App from "./App";
import router from "./router";
import store from "./store";
import LightBootstrap from "./light-bootstrap-main";

Vue.config.productionTip = false;
Vue.use(LightBootstrap);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
