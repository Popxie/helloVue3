/* eslint-disable no-undef */
<!--
 * @Description: 
 * @Author: xiehuaqiang
 * @FilePath: /hellovue3/src/components/NewMethods.vue
 * @Date: 2020-11-23 14:21:19
-->
<template>
  <p>{{ state1 }}</p>
  <button @click="add1">增加</button>

	<p>{{ state2 }}</p>
  <button @click="add2">增加</button>

	<p>infoObj:{{ infoObj }}</p>
  <el-button type='primary' @click="add3">增加</el-button>
</template>

<script>
import {
  ref,
  toRefs,
  toRef
} from 'vue'

export default {
  name: 'NewWriteMethods',
  props: {
    msg: String
  },
  data() {
    return {
      name: 'your name'
    }
  },
  setup() {
    const obj = {
      count: 3,
      age: 20
    }
    console.log('GLOBALE_CONFIG:', GLOBALE_CONFIG)

    const state1 = ref(obj.count)
    const state2 = toRef(obj, 'count')
    
    const infoObj = toRefs(obj)
    
    const add1 = () => {
      state1.value++
      console.log('原始值：', obj);
      console.log('响应式数据对象：', state1);
    }
    const add2 = () => {
      state2.value++
      console.log('原始值：', obj);
      console.log('响应式数据对象：', state2);
    }
    const add3 = () => {
      infoObj.count = 6666
      infoObj.age = 444
      console.log('原始值：', infoObj);
    }
    return {
      state1,
      state2,
      add1,
      add2,
      add3,
      infoObj
    }
  }
}
</script>
