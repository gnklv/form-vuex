<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap>
        <v-flex xs12>
          <p>Оцените ваши знания по шкале</p>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-between>
        <v-flex xs11>
          <v-slider
            label="HTML"
            v-model="skill.html"
            step="1"
            max="10"
            min="0"
            ticks
            thumb-label
          />
        </v-flex>
        <v-flex xs1>
          <v-text-field
            v-model="skill.html"
            type="number"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-between>
        <v-flex xs11>
          <v-slider
            label="CSS"
            v-model="skill.css"
            step="1"
            max="10"
            min="0"
            ticks
            thumb-label
          />
        </v-flex>
        <v-flex xs1>
          <v-text-field
            v-model="skill.css"
            type="number"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-between>
        <v-flex xs11>
          <v-slider
            label="JS"
            v-model="skill.js"
            step="1"
            max="10"
            min="0"
            ticks
            thumb-label
          />
        </v-flex>
        <v-flex xs1>
          <v-text-field
            v-model="skill.js"
            type="number"
          />
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <v-btn
            @click="submit"
          >
            Submit
          </v-btn>

          <v-btn @click="clear">
            Clear
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "Skills",
  computed: {
    ...mapGetters(['GET_SKILL'])
  },
  created() {
    this.getData();
  },
  data: () => ({
    skill: {
      html: '',
      css: '',
      js: ''
    }
  }),
  methods: {
    ...mapMutations(['SET_SKILL']),
    getData() {
      this.skill = this.GET_SKILL;
    },
    submit() {
      this.SET_SKILL(this.skill);
    },
    clear() {
      for (let key in this.skill) {
        this.skill[key] = 0;
      }
    }
  }
};
</script>
