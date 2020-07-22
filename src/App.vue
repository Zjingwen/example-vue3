<template>
  <div id="app">
    <div id="head">
      <img src="./assets/logo.png" />
      <div v-for="(item,i) in routers" :key="i">
        <router-link :to="item.path">{{item.component['name']}}</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { routers } from "../src/router";
export default {
  name: "App",
  data() {
    return {
      routers: routers
    };
  }
};
</script>
