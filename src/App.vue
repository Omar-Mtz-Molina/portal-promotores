<template>
  <div id="app">
    <v-app>
      <v-main>
        <SystemBar />
        <NavigationDrawer />
        <router-view />
      </v-main>
    </v-app>
  </div>
</template>
<script>
import SystemBar from "@/components/template/SystemBar.vue";
import NavigationDrawer from "@/components/template/NavigationDrawer.vue";
export default {
  components: {
    SystemBar,
    NavigationDrawer,
  },
};
</script>
