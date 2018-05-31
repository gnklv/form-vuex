<template>
  <header>
    <v-container>
      <v-toolbar>
        <v-flex
          xs6
          :class="$style.col"
        >
          <v-stepper
            v-model="step"
            :class="$style.stepper"
          >
            <v-stepper-header :class="$style.stepperHeader">
              <template v-for="(item, index) in items">
                <v-stepper-step
                  :key="item.name"
                  :step="index + 1"
                  :complete="step > index + 1"
                >Step {{ index + 1 }}</v-stepper-step>
                <v-divider v-if="index + 1 !== items.length"></v-divider>
              </template>
            </v-stepper-header>
          </v-stepper>
        </v-flex>
      </v-toolbar>
    </v-container>
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
      return this.items.findIndex((obj) => obj.path === this.$route.path );
    },
  },
  data: () => ({
    step: 1,
  }),
};
</script>

<style lang="scss" module>
.stepper {
  height: 100%;
  box-shadow: none;
}

.stepperHeader,
.col {
  height: 100%;
}
</style>
