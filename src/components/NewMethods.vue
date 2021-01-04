<template>
  <p>{{ state1 }}</p>
  <el-button @click="add1">增加1</el-button>

	<p>{{ state2 }}</p>
  <el-button @click="add2">增加2</el-button>

	<p>infoObj:{{ infoObj }}</p>
  <el-button type='primary' @click="add3">增加3</el-button>

  <el-button type='primary' @click="getDataListClick">获取数据 mock</el-button>
  <el-button type='primary' @click="getDataListClick2">获取数据 65</el-button>
  <el-button type='primary' @click="login">登录</el-button>

  <div>
    <input v-model="copyText" type="text">
    <el-button v-copy='copyText'>复制</el-button>
  </div>
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
      copyText: 'im a copy directive',
      name: 'your name',
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
      console.log(333)
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
  },
  methods: {
    async getDataListClick() {
      const url = '/kaka/demo/list'
      const params = {
        pageSize: 20,
        page: 1
      }
      const res = await axios.get(url, { params })
      console.log('res: ', res)
    },
    async getDataListClick2() {
      const url = '/cooperation/api/v1/mixCourse'
      const params = {
        pageSize: 20,
        pageNum: 1
      }
      const res = await axios.get(url, { params })
      console.log('res: ', res)
    },
    async login() {
      const url = '/authority/auth/login'
      const params = {
        username: 'xiehuaqiang',
        password: 'H7uBaUSO4KEUIpZDys2twUkHDyWsv+WfADzPl9yVKkdRvNTC4QXzVqjFIYNWANyVdxdxf3tJ6czFP3KX4S9G6dLUdy2kmJ7KUS3vxoy85GJmSQM5bVbQGUD5Bj/x6HJ56b9KvvxVBqjwXFHFn28XksW5j32Z7H7FTmqLrrbQ3MU=',
        appKey: 'FFFF0N0N000000006D3A',
        keyId: '12ede89a-31e1-43e6-8eb3-b1be0900548c',
      }
      const res = await axios.post(url, params)
    }
  }
}
</script>
