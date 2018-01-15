<template>
  <div id="app">
    <sidebar></sidebar>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: { Sidebar },
};
</script>

<style>
#app {
}
</style>
