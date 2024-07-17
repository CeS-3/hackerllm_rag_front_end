<template>
    <v-main style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0;">
        <v-row>
          <div class="spacer"></div>
          <v-col>
              <span class="articleTitle">Data Analysis</span><br>
              <span class="articleSubTitle">What we have got</span>
              <v-divider></v-divider>
                  <v-row>
                    <v-col cols="12" md="4" offset="10">
                        <div style="height: 1em;"></div>
                    </v-col>
                  </v-row>
                  <p class="article">
                  We strive to provide the best service possible with every contact. Our team is dedicated to making sure you have the best experience with our services.
                  </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div style="height: 100px;"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="1">
              <span class="second-level-title">Machine Attack Part</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="1">
            <BarChart :categories="MachineBarCategories" :data="MachineBarChartData" :title="MachineAttackPaths" />
          </v-col>
          <v-col cols="5">
            <p class="article">
              <br>待定

            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="1">
            <BarChart :categories="MachineMeanBarCategories" :data="MachineMeanBarChartData" :title="MachineAttackPaths" />
          </v-col>
          <v-col cols="5">
            <p class="article">
                <br>Analysis<br>
Considering the total frequency (count) of each technique's appearance among the top 800 individuals and the average completion number (mean), a principal component analysis (PCA) was conducted based on count and mean. <br>
The principal component is derived as 0.707count + 0.707mean, with a cumulative contribution rate reaching 0.91.<br>
The visualization results sorted in descending order by the principal component are shown in the chart.
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="1">
            <RadarChart :indicator="MachineRadarIndicator" :data="MachineRadarData" />
          </v-col>
          <v-col cols="5">
            <p class="article">
                <br>
                Conclusion<br>
    The top 7 techniques are recommended for learning:<br>
    <ol>
        <li>Reconnaissance</li>
        <li>Password Reuse</li>
        <li>Password Cracking</li>
        <li>Injections</li>
        <li>Software & OS Exploitation</li>
        <li>Common Applications</li>
        <li>Web Site Structure Discovery</li>
        <li>Security Tools</li>
    </ol>
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div style="height: 100px;"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="1">
              <span class="second-level-title">Challenge Part</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" offset="1">
            <BarChart :categories="ChallengeBarCategories" :data="ChallengeBarChartData" :title="ChallengeCategories"/>
          </v-col>
          <v-col cols="5">
            <RadarChart :indicator="ChallengeRadarIndicator" :data="ChallengeRadarData" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="1">
            <p class="article">
              <br>this is the analysis
            </p>
          </v-col>
          <v-col cols="5">
            <p class="article">
              <br>this is the analysis
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div style="height: 100px;"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="1">
              <span class="second-level-title">Sherlock Part</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" offset="1">
            <BarChart :categories="SherlockMeanBarCategories" :data="SherlockMeanBarChartData" :title="SherlockCategories"/>
          </v-col>
          <v-col cols="5">
            <RadarChart :indicator="SherlockRadarIndicator" :data="SherlockRadarData" />
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" offset="1">
            <p class="article">
              <br>this is the analysis
            </p>
          </v-col>
          <v-col cols="5">
            <p class="article">
              <br>this is the analysis
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div style="height: 100px;"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="1">
              <span class="second-level-title">Target Operating System Part</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" offset="1">
            <BarChart :categories="SystemBarCategories" :data="SystemBarChartData" :title="SystemCategories"/>
          </v-col>
          <v-col cols="5">
            <p class="article">
              <br>this is the analysis
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div style="height: 100px;"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="1">
              <span class="second-level-title">Challenge Correlation Analysis</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ConfusionMatrix :data="ChallengeMatrixData" :categories="ChallengeMatrixCategories" />
          </v-col>          
        </v-row>
        <v-row>
          <v-col offset="2">
            <p class="article">this is the analysis</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div style="height: 100px;"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="1">
              <span class="second-level-title">Sherlock Correlation Analysis</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ConfusionMatrix :data="SherlockMatrixData" :categories="SherlockMatrixCategories" />
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="2">
            <p class="article">this is the analysis</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
          <div style="height: 100px;"></div>
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="1">
              <span class="second-level-title">Rankings Correlation Analysis</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <ScatterChart :data="RankScatterData" xAxisLabel="Ranking" yAxisLabel="Team Ranking" />
          </v-col>
        </v-row>
        <v-row>
          <v-col offset="2">
            <p class="article">this is the analysis</p>
          </v-col>
        </v-row>
    </v-main>
</template>



<script>
import BarChart from './BarChart.vue';
import ConfusionMatrix from './ConfusionMatrix.vue';
import RadarChart from './RadarChart.vue'
import ScatterChart from './ScatterChart.vue'
export default {
  components: {
    ConfusionMatrix,
    BarChart,
    RadarChart,
    ScatterChart,
  },
  data() {
    return {
        //Challenge Part
        ChallengeMatrixData: [
        [1, 0.86, 0.84, 0.73, 0.83, 0.84, 0.8, 0.47, 0.84, 0.79, 0.64, 0.6],
        [0.86, 1, 0.83, 0.72, 0.85, 0.79, 0.78, 0.47, 0.84, 0.79, 0.64, 0.63],
        [0.84, 0.83, 1, 0.67, 0.73, 0.7, 0.69, 0.43, 0.74, 0.7, 0.57, 0.6],
        [0.73, 0.72, 0.67, 1, 0.74, 0.73, 0.72, 0.47, 0.67, 0.61, 0.53, 0.52],
        [0.83, 0.85, 0.73, 0.74, 1, 0.78, 0.8, 0.63, 0.79, 0.77, 0.55, 0.55],
        [0.84, 0.79, 0.7, 0.73, 0.78, 1, 0.74, 0.49, 0.74, 0.66, 0.55, 0.53],
        [0.8, 0.78, 0.69, 0.72, 0.8, 0.74, 1, 0.49, 0.79, 0.78, 0.6, 0.54],
        [0.47, 0.47, 0.43, 0.47, 0.63, 0.49, 0.49, 1, 0.43, 0.41, 0.23, 0.24],
        [0.84, 0.84, 0.74, 0.67, 0.79, 0.74, 0.79, 0.43, 1, 0.82, 0.69, 0.59],
        [0.79, 0.79, 0.7, 0.61, 0.77, 0.66, 0.78, 0.41, 0.82, 1, 0.67, 0.59],
        [0.64, 0.64, 0.57, 0.53, 0.55, 0.55, 0.6, 0.23, 0.69, 0.67, 1, 0.57],
        [0.6, 0.63, 0.6, 0.52, 0.55, 0.53, 0.54, 0.24, 0.59, 0.59, 0.57, 1]
      ],
      ChallengeMatrixCategories: ['Reversing', 'Crypto', 'Pwn', 'Web', 'Misc', 'Forensics', 'Mobile', 'OSINT', 'Hardware', 'GamePwn', 'Blockchain', 'AI - ML'],
      
      //Sherlock混淆矩阵数据
      SherlockMatrixData: [
        [1, 0.81, 0.83, 0.46, 0.7, 0.67], 
        [0.81, 1, 0.79, 0.35, 0.69, 0.66],
        [0.83, 0.79, 1, 0.42, 0.69, 0.58],
        [0.46, 0.35, 0.42, 1, 0.33, 0.32],
        [0.7, 0.69, 0.69, 0.33, 1, 0.54],
        [0.67, 0.66, 0.58, 0.32, 0.54, 1]
      ],
      SherlockMatrixCategories: ['DFIR', 'Cloud', 'Malware Analysis', 'SOC', 'Threat Intelligence', 'Campaign'],
      
      MachineAttackPaths: "Machine Attack Paths",
      ChallengeCategories: "Challenge Categories",
      SherlockCategories: "Sherlock Categories",
      SystemCategories: "System Categories",

      //machine板块柱状图
      MachineBarCategories: ['Reconnaissance', 'Password Reuse', 'Password Cracking', 'Injections', 'Software & OS exploitation', 'Common Applications', 'Web Site Structure Discovery', 'Security Tools', 'Source Code Analysis', 'SUDO Exploitation', 'Authentication', 'Databases', 'Custom Applications', 'Configuration and Authorization', 'Protocols', 'Broken Authentication and Authorization', 'Fuzzing', 'User Enumeration', 'Active Directory', 'Reverse Engineering'],
      MachineBarChartData: [778.37, 759.59, 748.97, 745.81, 707.69, 700.23, 672.15, 422.61, 374.41, 327.21, 323.61, 297.85, 220.55, 142.28, 95.58, 89.88, 85.97, 79.15, 47.87, 36.32],

      //machine mean板块柱状图
      MachineMeanBarCategories: ['Reconnaissance', 'Software & OS exploitation', 'Injections', 'Security Tools', 'Password Reuse', 'Password Cracking', 'Web Site Structure Discovery', 'Common Applications'],
      MachineMeanBarChartData: [48.86, 34.91, 30.81, 30.71, 27.37, 26.32, 23.68, 22.39],

      //chanllenge模块柱状图
      ChallengeBarCategories: ['Web', 'Crypto', 'Reversing', 'Misc', 'Forensics', 'Pwn', 'Hardware', 'Mobile', 'GamePwn', 'OSINT', 'Blockchain', 'AI - ML'],
      ChallengeBarChartData: [15.26, 8.22, 7.59, 6.50, 6.45, 6.41, 4.20, 2.78, 1.76, 1.40, 1.05, 0.17],
      
      //sherlock mean板块柱状图
      SherlockMeanBarCategories: ['DFIR', 'SOC', 'Malware Analysis', 'Campaign', 'Cloud', 'Threat Intelligence'],
      SherlockMeanBarChartData: [3.65, 0.82, 0.49, 0.29, 0.16, 0.11],
      
      //system 板块柱状图
      SystemBarCategories: ['Linux', 'Windows', 'Other', 'FreeBSD', 'OpenBSD', 'Android', 'Solaris'],
      SystemBarChartData: [64.11, 24.38, 0.78, 0.51, 0.49, 0.32, 0.16],

      //machine板块雷达图
      MachineRadarIndicator: [
        { name: 'Software & OS exploitation', max: 35 },
        { name: 'Security Tools', max: 35 },
        { name: 'Common Applications', max: 35 },
        { name: 'Web Site Structure Discovery', max: 35 },
        { name: 'Injections', max: 35 },
        { name: 'Password Cracking', max: 35 },
        { name: 'Password Reuse', max: 35 },
        { name: 'Reconnaissance', max: 35 }
      ],
      MachineRadarData: [24.1, 27.5, 30.3, 21.5, 22.7, 22.7, 23.8, 24.1],

      //chanllenge模块雷达图
      ChallengeRadarIndicator: [
        { name: 'Web', max: 30 },
        { name: 'Misc', max: 30 },
        { name: 'GamePwn', max: 30 },
        { name: 'Mobile', max: 30 },
        { name: 'OSINT', max: 30 },
        { name: 'AI - ML', max: 30 },
        { name: 'Pwn', max: 30 },
        { name: 'Blockchain', max: 30 },
        { name: 'Crypto', max: 30 },
        { name: 'Forensics', max: 30 },
        { name: 'Reversing', max: 30 },
        { name: 'Hardware', max: 30 }
      ],
      ChallengeRadarData: [16.0, 13.2, 10.0, 16.4, 28.0, 2.9, 6.3, 8.0, 9.8, 10.7, 12.3, 10.0],
      
      //Sherlock模块雷达图
      SherlockRadarIndicator: [
        { name: 'Threat Intelligence', max: 50 },
        { name: 'DFIR', max: 50 },
        { name: 'SOC', max: 50 },
        { name: 'Campaign', max: 50 },
        { name: 'Cloud', max: 50 },
        { name: 'Malware Analysis', max: 50 }
      ],
      SherlockRadarData: [12.5, 11.3, 41.2, 5.9, 7.9, 9.6],
      
      //排名相关性散点图
      RankScatterData: [
        [161.2, 51.6],
        [167.5, 59.0],
        [159.5, 49.2],
        [157.0, 63.0],
        [155.8, 53.6],
        [170.0, 59.0],
        [159.1, 47.6],
        [166.0, 69.8],
        [176.2, 66.8],
        [160.2, 75.2],
        [172.5, 55.2],
        [170.9, 54.2],
        [172.9, 62.5],
        [153.4, 42.0],
        [160.0, 50.0],
        [147.2, 49.8],
        [168.2, 49.2],
        [175.0, 73.2],
        [157.0, 47.8],
        [167.6, 68.8]
      ],
    };
  }
};
</script>
<style>
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
  .second-level-title{
    font-family: Arial, sans-serif;
    font-size: 4em;
    font-style: italic;
    line-height: 1.5;
    color: rgb(200, 186, 186);
  }
</style>