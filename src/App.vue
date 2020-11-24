<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /hellovue3/src/App.vue
 * @Date: 2020-11-24 17:01:34
-->
<template>
  <NewMethods msg="Welcome to Your Vue.js App"/>
</template>

<script>
import NewMethods from './components/NewMethods.vue'
export default {
  name: 'App',
  components: {
    NewMethods
  }
}
</script>
