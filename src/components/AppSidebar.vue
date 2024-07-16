<template>
    <v-navigation-drawer
      app
      v-model="localDrawer"
      :mini-variant="miniVariant"
      @update:mini-variant="$emit('update:miniVariant', $event)"
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </template>
  
  <script>
  export default {
    name: 'AppSidebar',
    props: {
      drawer: {
        type: Boolean,
        required: true,
      },
      miniVariant: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        localDrawer: this.drawer,
      };
    },
    watch: {
      drawer(val) {
        this.localDrawer = val;
      },
      localDrawer(val) {
        this.$emit('update:drawer', val);
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  