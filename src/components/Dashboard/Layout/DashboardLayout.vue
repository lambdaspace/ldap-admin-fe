<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"/>
      <sidebar-link to="/overview">
        <i class="nc-icon nc-chart-pie-35"/>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/user">
        <i class="nc-icon nc-circle-09"/>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/users">
        <i class="nc-icon nc-notes"/>
        <p>Users</p>
      </sidebar-link>
      <sidebar-link to="/groups">
        <i class="nc-icon nc-notes"/>
        <p>Groups</p>
      </sidebar-link>
      <sidebar-link to="/ous">
        <i class="nc-icon nc-notes"/>
        <p>Ounits</p>
      </sidebar-link>
      <sidebar-link to="/sos">
        <i class="nc-icon nc-notes"/>
        <p>Security</p>
      </sidebar-link>
      <sidebar-link to="/table-list">
        <i class="nc-icon nc-notes"/>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/typography">
        <i class="nc-icon nc-paper-2"/>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/icons">
        <i class="nc-icon nc-atom"/>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/maps">
        <i class="nc-icon nc-pin-3"/>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/notifications">
        <i class="nc-icon nc-bell-55"/>
        <p>Notifications</p>
      </sidebar-link>
      <sidebar-link to="/users">
        <i class="nc-icon nc-circle-09"/>
        <p>Users</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar/>

      <dashboard-content @click="toggleSidebar"/>

      <content-footer/>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
import TopNavbar from "./TopNavbar";
import ContentFooter from "./ContentFooter";
import DashboardContent from "./Content";
import MobileMenu from "./MobileMenu";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    }
  }
};
</script>
