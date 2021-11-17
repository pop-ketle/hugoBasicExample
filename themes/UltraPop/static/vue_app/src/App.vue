<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        color=#e0a4c6
        dark
        shrink-on-scroll
        prominent
        scroll-target="#scrolling-techniques"
        fade-img-on-scroll
      >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, #e0a4c6, #eedde7"
        ></v-img>
      </template>

        <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
  
        <v-app-bar-title>Title</v-app-bar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
  
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    </v-card>

    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <!-- <v-main>
      <HelloWorld/>
    </v-main> -->
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
// import vue_app_bar from './components/v_app_bar';


  export default {
    name: 'app',

    // components: {
    //   vue_app_bar,
    // },

    data: () => ({
      drawer: false,
      group: null,
    }),
  }
</script>
