<template>
  <v-app>
    <!-- <v-navigation-drawer app> -->
      <!-- -->
    <!-- </v-navigation-drawer> -->

    <!-- <v-app-bar app> -->
      <!-- -->
      <TopMenu></TopMenu>
    <!-- </v-app-bar> -->

    <!-- アプリケーションのコンポーネントに基づいてコンテンツのサイズを決定 -->
    <!-- <v-main> -->

      <!-- アプリケーションに適切なgutterを提供 -->
      <!-- <v-container fluid> -->

        <!-- vue-routerを使用する場合 -->
        <!-- <router-view></router-view> -->
      <!-- </v-container> -->
    <!-- </v-main> -->

    <!-- <v-footer app> -->
      <!-- -->
    <!-- </v-footer> -->
  </v-app>


  <!-- <v-app>
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

    </v-card> -->


    <!-- <v-main>
      <HelloWorld/>
    </v-main> -->
  <!-- </v-app> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import TopMenu from './components/TopMenu';

  export default {
    name: 'app',

    components: {
      TopMenu,
    },
  }
</script>
