<template>
  <v-system-bar dark color="red darken-1" v-if="authenticated">
    <v-spacer></v-spacer>
    <v-icon>mdi-wifi-strength-4</v-icon>
    <v-icon>mdi-signal-cellular-outline</v-icon>
    <v-icon>mdi-battery</v-icon>
    <span>{{ new Date().getHours() + ":" + new Date().getMinutes() }}</span>
  </v-system-bar>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
    }),
  },
  methods: {},
};
</script>
