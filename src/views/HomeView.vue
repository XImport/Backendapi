<template>
  <div>
    <NavBar />
    <v-container>
      <v-row class="text-center">
        <v-col cols="12" sm="3"> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  name: "HomeView",
  data() {
    return {
      items: [],
    };
  },

  components: {
    NavBar,
  },
};
</script>
