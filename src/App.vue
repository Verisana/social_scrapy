<template>
  <v-app>
    <AppBar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from './components/app_bar';
import Footer from './components/app_footer';

export default {
  name: 'App',

  components: {
    AppBar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
