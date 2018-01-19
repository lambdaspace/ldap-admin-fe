import VTooltip from "v-tooltip";
// Notifications plugin
import Notifications from "vue-notifyjs";

import "bootstrap/dist/css/bootstrap.css";
import "vue-notifyjs/themes/default.scss";
import "es6-promise/auto";

// A plugin file where you could register global components used across the app
import GlobalComponents from "./globalComponents";
// A plugin file where you could register global directives
import GlobalDirectives from "./globalDirectives";
// Sidebar on the right. Used as a local plugin in DashboardLayout.vue
import SideBar from "./components/UIComponents/SidebarPlugin";

// asset imports
import "./assets/sass/light-bootstrap-dashboard.scss";
import "./assets/css/demo.css";

// library auto imports

export default {
  install(Vue) {
    Vue.use(GlobalComponents);
    Vue.use(GlobalDirectives);
    Vue.use(SideBar);
    Vue.use(Notifications);
    Vue.use(VTooltip);
  }
};
