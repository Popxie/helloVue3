# hellovue3

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### 注意

- 如果使用 config 下的`yalm文件`作为环境变量文件（`env.*.yaml`）时，想拿到正确的`NODE_ENV=staging`,就需要更改默认脚本配置&安装`cross-env`依赖！

```bash
"build:staging": "vue-cli-service build --mode staging" // 旧

"build:staging": "cross-env NODE_ENV=staging vue-cli-service build" // 新
```

- 如果使用官方推荐的配置文件`.env.*`文件的话没有任何问题，可以拿到想要的`NODE_ENV=staging`

> 通过`vue-cli-service --mode staging`的时候，它**只会**加载可能存在的 `.env`、`.env.staging` 和 `.env.staging.local`文件中的环境变量。所以当通过`"build:staging": "vue-cli-service build --mode staging"`命令进行编译的时候，若不存在`.env.staging`文件的话，就不会覆盖默认的`NODE_ENV=development`！[查看官方解释](https://cli.vuejs.org/zh/guide/mode-and-env.html)

### windows 删除 node_modules 时超级无敌慢

安装

```bash
npm install rimraf -g
```

使用

```bash
rimraf node_modules
```

### 审查项目

[vue-cli·webpack](https://cli.vuejs.org/zh/guide/webpack.html)

```bash
vue inspect --rules     # 查看所有规则
vue inspect --plugins   # 查看所有插件
```
