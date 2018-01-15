<template>
  <div class="sidebar">
    <div class="sidebar--header">
      Easy LDAP
    </div>
    <ul class="sidebar--menu">
      <li>
        <router-link :to="{ path: 'users' }">Users</router-link>
      </li>
      <li>
        <router-link :to="{ path: 'users' }">Groups</router-link>
      </li>
      <li>
        <router-link :to="{ path: 'users' }">Organizational Units</router-link>
      </li>
      <li>
        <router-link :to="{ path: 'users' }">Security</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style>
  .sidebar{
    order: 1;
    flex: 2;
    height: 100vh;
    background-color: #78787C;
    color: #FFF;
  }
  .sidebar--header{
    text-align: center;
    padding: 20px;
    border-bottom: solid 1px #AAA;
    text-transform: uppercase;
  }
  .sidebar--menu{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .sidebar--menu a{
    color: #FFF;
    text-decoration: none;
  }
</style>
