# vue 指令区别

| vue2.x           | vue3.x        |
| ---------------- | ------------- |
| bind             | beforeMount   |
| inserted         | mounted       |
| 无               | beforeUpdate  |
| update           | 移除          |
| componentUpdated | updated       |
| 无               | beforeUnmount |
| unbind           | unmounted     |

[vue官方文档·英文](https://v3.vuejs.org/guide/migration/custom-directives.html#overview)