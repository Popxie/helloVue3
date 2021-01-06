<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: \helloVue3\src\App.vue
 * @Date: 2020-11-24 17:01:34
-->
<template>
    <router-view></router-view>
    app
    <page1 />
    <page2 />
    <page3 />
    <page4 />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'App',
  components: {
    'page1': defineAsyncComponent(() => import('./pages/1.vue')),
    'page2': defineAsyncComponent(() => import('./pages/2.vue')),
    'page3': defineAsyncComponent(() => import('./pages/3.vue')),
    'page4': defineAsyncComponent(() => import('./pages/4.vue')),
  }
}
</script>
