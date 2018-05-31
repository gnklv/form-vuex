<template>
  <v-app id="app">
    <TheLayout>
      <transition name="slide-right">
        <router-view/>
      </transition>
    </TheLayout>
  </v-app>
</template>

<script>
import TheLayout from "./components/TheLayout";

export default {
  name: "App",
  components: {
    TheLayout
  }
};
</script>

<style lang="scss">
@import "./styles/app";
</style>
