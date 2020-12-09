<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /hellovue3/src/components/Form.vue
 * @Date: 2020-11-26 10:42:52
-->

<template>
  <div class="content">
    <div class="son-cont">1</div>
    <div class="son-cont">2</div>
    <div class="son-cont">3</div>
    <div class="son-cont">4</div>
    <div class="son-cont">5</div>
    <div class="son-cont">6</div>
  </div>
</template>

<style lang="scss">
  .content {
    position: fixed;
    right: 0;
    height: 768px;
    display: flex;
    background: pink;
    flex-direction: column;
    overflow: hidden;
    overflow-y: scroll;
  }
  .son-cont {
    flex-shrink: 0;
    width: 400px;
    height: 130px;
    border-radius: 4px;
    background: lightblue;
  }
</style>