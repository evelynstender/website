<template>
  <v-app id="inspire">
    <v-app-bar app dark flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="mr-10" size="32">
          <img src="https://avatars1.githubusercontent.com/u/35370302?v=4" alt="evelyn avatar" />
        </v-avatar>

        <v-btn href="/about" text>
          About me
        </v-btn>

        <v-btn href="https://blog.evelynstender.com" text>
          Blog
        </v-btn>
        <v-btn href="/portifolio" text>
          Portifolio
        </v-btn>
        <v-btn href="/contact" text>
          Contact me
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main color="white" class="grey lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-sheet min-height="85vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style src="./App.css" />
