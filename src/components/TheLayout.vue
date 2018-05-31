<template>
  <div>
    <TheHeader />

    <v-content>
      <slot />
    </v-content>

  </div>
</template>

<script>
import TheHeader from "./TheHeader";

export default {
  name: "TheLayout",
  components: { TheHeader }
};
</script>
