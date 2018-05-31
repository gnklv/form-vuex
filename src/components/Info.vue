<template>
  <section>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-form
            v-model="valid"
            ref="form"
            lazy-validation
          >
            <v-text-field
              label="First Name"
              v-model="formData.firstName"
              :rules="nameRules"
              :counter="10"
              required
            />
            <v-text-field
              label="Last Name"
              v-model="formData.lastName"
              :counter="10"
            />
            <v-text-field
              label="Email"
              v-model="formData.email"
              :rules="emailRules"
              required
            />

            <v-btn
              @click="submit"
              :disabled="!valid"
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
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Info",
  computed: {
    ...mapGetters(["GET_FORM_BASE"])
  },
  created() {
    this.getData();
  },
  data: () => ({
    valid: true,
    formData: {
      firstName: null,
      lastName: null,
      email: null,
    },

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
    ...mapMutations(["SET_FORM_BASE"]),
    getData() {
      this.formData = this.GET_FORM_BASE;
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.SET_FORM_BASE(this.formData);
      }
    },
    clear() {
      this.$refs.form.reset();
    }
  }
};
</script>
