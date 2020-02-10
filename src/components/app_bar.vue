<template>
    <v-app-bar app dark flat hide-on-scroll class="mx-auto" max-width="1024" color="grey darken-4">
        <v-card height="60" width="350" flat color="grey darken-4">
            <v-card-title class="mx-auto">
                <v-icon class="mx-2">mdi-monitor-clean</v-icon>
                Project Title
            </v-card-title>
        </v-card>
        <v-divider vertical></v-divider>
        <v-tabs v-model="active_tab">
            <v-tab>
                {{ $t("message.app_bar.home") }}
            </v-tab>
            <v-tab>
                {{ $t("message.app_bar.how_it_works") }}
            </v-tab>
            <v-tab>
                {{ $t("message.app_bar.pricing") }}
            </v-tab>

        </v-tabs>
        <v-spacer></v-spacer>
        <v-chip-group active-class="primary--text" mandatory :value="this.$i18n.locale">
            <v-chip @click="changeLocale('eng')" ripple value="eng">
                ENG
            </v-chip>
            <v-chip @click="changeLocale('ru')" ripple value="ru">
                RU
            </v-chip>
        </v-chip-group>
    </v-app-bar>
</template>

<script>
    export default {
      name: 'app_bar',
      data() {
        return {};
      },
      methods: {
          changeLocale(locale) {
            this.$i18n.locale = locale;
          },
      },
      mounted() {},
      computed: {
          active_tab: {
              get: function() {
                  return this.$store.state.active_tab;
              },
              set: function(new_value) {
                  this.$store.commit({type: 'changeActiveTab', new_value})
              }
          },
      },
    };
</script>

<style scoped lang="sass"></style>
