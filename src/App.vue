<template>
  <div id="app">
    <sidebar/>
    <div class="main">
      <router-view/>
    </div>
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
  display: flex;
  width: 100%;
}
.main {
  order: 1;
  flex: 5;
}
</style>
