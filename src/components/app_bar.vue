<template>
  <v-app-bar app color="green darken-1" dark flat width="1024">
    <v-app-bar-nav-icon @click="openHome">
      <v-icon>home</v-icon>
    </v-app-bar-nav-icon>
    <v-toolbar-title>Project Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-btn icon @click="openSettings">
      <v-icon>settings</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

export default {
  name: 'app_bar',
  data() {
    return {};
  },
  methods: {
    openHome() {
      this.$router.push({ path: '/' });
    },
  },
  mounted() {},
  computed: {

  },
};
</script>

<style scoped lang="sass"></style>
