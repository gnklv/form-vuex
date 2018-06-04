<template>
  <section>
    <v-container>
      <v-layout row wrap justify-center>
        <v-flex xs6>
          <v-form
            v-model="valid"
            ref="form"
            lazy-validation
          >
            <v-text-field
              label="First Name"
              v-model="infoBase.firstName"
              :rules="nameRules"
              :counter="10"
              required
            />
            <v-text-field
              label="Last Name"
              v-model="infoBase.lastName"
              :counter="10"
            />
            <v-text-field
              label="Email"
              v-model="infoBase.email"
              :rules="emailRules"
              required
            />

            <v-btn
              :disabled="!valid"
              @click="submit"
            >
              Submit
            </v-btn>

            <v-btn @click="clear">
              Clear
            </v-btn>
          </v-form>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Info",
  computed: {
    ...mapState({
      infoBase: state => state.infoBase
    })
  },
  data: () => ({
    valid: true,

    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],

    emailRules: [
      v => !!v || "E-mail is required",
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "E-mail must be valid"
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('SUBMIT_INFO_BASE', this.infoBase);
        this.$router.push({ name: 'Skills' });
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
