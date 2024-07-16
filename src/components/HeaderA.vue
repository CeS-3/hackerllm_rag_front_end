<template>
  <v-app-bar app color="#b1ed4a" dark :height="80">
    <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-icon left>mdi-home</v-icon>
      We <span class="bold-text">Hack</span> the <span class="bold-text">Site</span> : <span class="sub-title">analysis hacker site and find out way to become a good hacker.</span>
    </v-toolbar-title>
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
.bold-text{
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif; /* 根据需要调整字体 */
}
.sub-title{
  font-size: medium;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
