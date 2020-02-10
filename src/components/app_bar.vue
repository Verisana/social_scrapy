<template>
    <v-app-bar app dark flat hide-on-scroll class="mx-auto" max-width="1024">
        <v-toolbar-title>
            <v-icon>mdi-monitor-clean</v-icon>
            <span>Project Title</span>
        </v-toolbar-title>
        <v-divider vertical class="mx-3"></v-divider>
        <v-tabs v-model="active_tab">
            <v-tab>

            </v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-btn icon>
            <v-icon>mdi-settings</v-icon>
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
  },
  mounted() {},
  computed: {
      active_tab: {
          get: function() {
              return this.$store.state.active_tab;
          },
          set: function(new_value) {
              this.$store.dispatch({type: 'changeActiveTab', new_value})
          }
      }

  },
};
</script>

<style scoped lang="sass"></style>
