<template>
  <ul class="nav nav-mobile-menu">
    <drop-down>
      <template slot="title">
        <font-awesome-icon icon="globe" />
        <b class="caret"/>
        <span class="notification">5 Notifications</span>
      </template>
      <a
        class="dropdown-item"
        href="#">Notification 1</a>
      <a
        class="dropdown-item"
        href="#">Notification 2</a>
      <a
        class="dropdown-item"
        href="#">Notification 3</a>
      <a
        class="dropdown-item"
        href="#">Notification 4</a>
      <a
        class="dropdown-item"
        href="#">Another notification</a>
    </drop-down>
    <li class="nav-item">
      <a
        href="#"
        class="nav-link">
        <i class="nc-icon nc-zoom-split hidden-lg-up"/>
        <span class="d-lg-none">Search</span>
      </a>
    </li>
    <drop-down title="Dropdown">
      <a
        class="dropdown-item"
        href="#">Action</a>
      <a
        class="dropdown-item"
        href="#">Another action</a>
      <a
        class="dropdown-item"
        href="#">Something</a>
      <a
        class="dropdown-item"
        href="#">Something else here</a>
      <div class="divider"/>
      <a
        class="dropdown-item"
        href="#">Separated link</a>
    </drop-down>

    <li class="nav-item">
      <a
        class="nav-link"
        href="#pablo">
        <span class="no-icon">Log out</span>
      </a>
    </li>
  </ul>
</template>
<script>
import DropDown from "@/components/UIComponents/Dropdown";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";

export default {
  components: {
    DropDown,
    FontAwesomeIcon
  }
};
</script>
<style>

</style>
