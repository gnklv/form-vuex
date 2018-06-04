<template>
  <v-container>
    <TheHeader />

    <v-content>
      <slot />
    </v-content>

  </v-container>
</template>

<script>
import TheHeader from "./TheHeader";

export default {
  name: "TheLayout",
  components: { TheHeader }
};
</script>
