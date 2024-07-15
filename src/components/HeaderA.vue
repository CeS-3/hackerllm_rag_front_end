<template>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'HeaderA',
    methods: {
      toggleDrawer() {
        this.$emit('toggle-drawer');
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  