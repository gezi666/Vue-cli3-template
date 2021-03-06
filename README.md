# 基于Vue-cli 3搭建的PC端单页应用快速开发模板

# 特点：
  - 基于node v10.15.3、npm v6.4.1、vue-cli 3、webpack 4、babel 7搭建；

  - 内置axios、element-ui、vue-router、vuex、stylus等；

  - Eslint检测；

  - easymock模拟接口；

  - 支持命令行自定义生产环境接口地址；

  - 路由组件动态加载；

  - 打包分离体积大的第三方包，比如element-ui；

  - 使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。

# 目录简介

```
    |-- public                           // 静态资源目录
    |   |-- static                       // 项目静态资源目录
    |   |-- favicon.ico                  // 网站图标
    |   |-- index.html                   // 页面入口文件
    |-- src                              // 源码目录
    |   |-- api                          // 获取数据接口API相关文件
    |   |   |-- index.js                 // axios封装方法
    |   |-- assets                       // 资源文件 CSS JS IMG
    |   |   |-- css
    |   |   |   |-- reset.css            // 重置样式
    |   |   |-- js
    |   |   |   |-- common.js            // 公用方法
    |   |   |-- img                      // 图标文件夹
    |   |-- components                   // 组件文件夹
    |   |-- router                       // 路由配置文件
    |   |-- store                        // vuex相关文件
    |   |-- App.vue                      // 页面入口组件
    |   |-- main.js                      // 程序入口文件，加载各种公共组件
    |-- .eslintignore                    // eslint忽略文件
    |-- .eslintrc                        // eslint规则配置文件
    |-- .gitignore                       // git提交忽略文件
    |-- babel.config.js                  // babel配置文件
    |-- vue.config.js                    // 项目配置（包含webpack）文件
```


## 安装项目依赖
```
npm install
```

### 启动开发环境
``` 
npm start
```

### 项目打包
```
npm run build --api-url <api_url>
```

### 代码检测修复
```
npm run lint
```

### [vue-cli 3 配置参考](https://cli.vuejs.org/zh/config/)

