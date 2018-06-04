<template>
  <header>
    <v-toolbar>
      <v-stepper
        v-model="activeIndex"
        :class="$style.stepper"
      >
        <v-stepper-header :class="$style.stepperHeader">
          <template v-for="(item, index) in items">
            <v-stepper-step
              :key="item.name"
              :step="index + 1"
              :complete="activeIndex > index + 1"
            >
              Step {{ index + 1 }}
            </v-stepper-step>
            <v-divider v-if="index + 1 !== items.length"></v-divider>
          </template>
        </v-stepper-header>
      </v-stepper>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: "TheHeader",
  computed: {
    items() {
      return [...this.$router.options.routes];
    },
    activeIndex() {
      return this.items.findIndex((obj) => obj.path === this.$route.path ) + 1;
    },
  },
  data: () => ({
    step: 1,
  }),
};
</script>

<style lang="scss" module>
.stepper {
  width: 100%;
  height: 100%;
  box-shadow: none;
}

.stepperHeader,
.col {
  height: 100%;
}
</style>
