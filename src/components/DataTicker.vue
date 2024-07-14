<template>
  <div id="ticker" style="width: 100%; height: 50px; background-color: black; color: lime;">
    <marquee behavior="scroll" direction="left" scrollamount="10">实时数据更新中...</marquee>
  </div>
</template>

<script>
export default {
  name: 'DataTicker'
};
</script>
