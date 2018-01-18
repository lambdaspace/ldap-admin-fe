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
        <router-link :to="{ path: 'groups' }">Groups</router-link>
      </li>
      <li>
        <router-link :to="{ path: 'ous' }">Organizational Units</router-link>
      </li>
      <li>
        <router-link :to="{ path: 'sos' }">Security</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

