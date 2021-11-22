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
