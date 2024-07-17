<template>
    <v-main class="main" >
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
    <v-main style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0;">
        <v-row>
            <div class="spacer"></div>
        <v-col>
            <span class="articleTitle">Introduction</span><br>
            <span class="articleSubTitle">What this project does</span>
            <v-divider></v-divider>
                <v-row>
                <v-col cols="12" md="4" offset="10">
                    <v-btn color="#b1ed4a" @click="dialog = true">
                    <v-icon>mdi-account</v-icon>
                    <span>Group Member</span>
                    </v-btn>
                </v-col>
                </v-row>
                <p class="article">
                We strive to provide the best service possible with every contact. Our team is dedicated to making sure you have the best experience with our services.
                </p>
                <div style="height: 50px;"></div>
                <v-btn color="primary">Learn More</v-btn>
                <v-btn color="secondary" href="mailto:1540962271@qq.com">Contact Us</v-btn>
        </v-col>
        </v-row>
    </v-main>
    <v-dialog v-model="dialog" class="custom-dialog">
        <v-card class="custom-card">
        <v-card-title class="headline">Group Member Introduction</v-card-title>
        <v-card-text>
            This is some text within the dialog.
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false">Close</v-btn>
        </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script>
  export default {
    name: 'HeaderA',
    data() {
      return {
        dialog : false
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
  .article{
    font-family: Arial, sans-serif;
    font-size: 1.75em;
    line-height: 1.5;
    color: white;
  }
  .articleTitle{
    font-family: Arial, sans-serif;
    font-size: 5em;
    font-weight: bold;
    line-height: 1.5;
    color: white;
    text-decoration: underline
  }
  .articleSubTitle{
    font-family: Arial, sans-serif;
    font-size: 1.75em;
    line-height: 1.0;
    color: rgb(156, 147, 147);
  }
  .custom-dialog{
    max-width: 900px;
  }
  .custom-card {
    height: 600px; /* 设置对话框的高度 */
  }
</style>
  