<template>
    <div class="sidebar">
        <div class="sidebar--header">
            Easy LDAPa
        </div>
        <ul>
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
