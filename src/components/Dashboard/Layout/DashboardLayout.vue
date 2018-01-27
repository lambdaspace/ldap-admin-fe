<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"/>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"/>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"/>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/table-list">
        <i class="nc-icon nc-notes"/>
        <p>Table list</p>
      </sidebar-link>
      <sidebar-link to="/admin/typography">
        <i class="nc-icon nc-paper-2"/>
        <p>Typography</p>
      </sidebar-link>
      <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"/>
        <p>Icons</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"/>
        <p>Maps</p>
      </sidebar-link>
      <sidebar-link to="/admin/notifications">
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
