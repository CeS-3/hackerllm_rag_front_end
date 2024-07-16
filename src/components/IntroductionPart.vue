<template>
    <v-main class="main pa-0">
      <v-row no-gutters>
        <div class="spacer"></div>
        <v-col col="1" class="d-flex justify-start">
          <div>
            <span class="title">We "Hack" <br>the Site<br></span>
            <span class="subtitle">analysis hacker site <br>and find out way to become a good hacker.</span>
          </div>
        </v-col>
      </v-row>
    </v-main>
    <v-tabs v-model="tab" background-color="primary" dark class="pa-0 ma-0">
      <v-tab>Tab 1</v-tab>
      <v-tab>Tab 2</v-tab>
      <v-tab>Tab 3</v-tab>
    </v-tabs>
  
    <!-- Tabs Items -->
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-card flat>
          <v-card-text>This is the content for Tab 1</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>This is the content for Tab 2</v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>This is the content for Tab 3</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </template>
  
  <script>
  export default {
    name: 'HeaderA',
    data() {
      return {
        tab: 0,
        bg: require('@/assets/bg.jpg'), // 使用 require 加载静态资源
      };
    }
  };
  </script>
  
  <style>
  .main {
    width: 100vw;
    height: 950px;
    background-image: url('https://cdn.pixabay.com/photo/2022/08/12/12/25/vulture-7381642_1280.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }
  .title {
    font-family: Arial, sans-serif;
    font-size: 6em;
    font-weight: bold;
    line-height: 1.5;
    color: white;
  }
  .subtitle {
    font-family: Arial, sans-serif;
    font-size: 1.75em;
    line-height: 1.0;
    color: rgb(156, 147, 147);
  }
  .spacer {
    width: 7%;
  }
  </style>
  