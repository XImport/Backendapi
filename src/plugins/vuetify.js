import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#1976D2",
        secondary: "#b0bec5",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
      dark: {
        primary: "#1b2430",
        secondary: "#51557E",
        accent: "#816797",
        error: "#b71c1c",
      },
    },
  },
});
