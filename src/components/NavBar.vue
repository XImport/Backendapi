<template>
  <div>
    <v-app-bar color="primary" dense>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Recipes Backend</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">
            <v-icon class="mr-2">mdi-cog-outline</v-icon> Settings
          </v-btn>
        </template>
        <v-list class="mt-9">
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Hamza Nouinou
              </v-list-item-title>
              <v-list-item-subtitle>Hamzanwn@nwn.com</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon class="green--text">mdi-eye</v-icon>
            </v-list-item-action>
          </v-list-item>
          <v-divider></v-divider>
          <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="accent">
              <v-list-item v-for="(item, i) in settings" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data: () => ({
    selectedItem: 0,

    settings: [
      { text: "View Account", icon: "mdi-clock" },
      { text: "Settings", icon: "mdi-account" },
      { text: "Admin", icon: "mdi-flag" },
    ],
  }),
};
</script>

<style scoped>
.v-btn {
  box-shadow: none !important;
}

.v-menu__content {
  position: absolute;
  display: inline-block;
  max-width: 80%;
  overflow-y: auto;
  overflow-x: hidden;
  contain: content;
  box-shadow: -9px 15px 15px -9px rgba(0, 0, 0, 0.64);

  border-radius: 4px;
}
</style>
