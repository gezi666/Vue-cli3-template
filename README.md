# 基于Vue-cli 3搭建的PC端可视化单页应用快速开发模板

# 特点：
1、 基于node v10.15.3、npm v6.4.1、vue-cli 3、webpack 4、babel 7搭建；

2、 内置axios、echarts 4、element-ui 2、vue-router、vuex、stylus等；

3、 开启Eslint检测；

4、 通过easymock模拟接口；

5、 项目打包时，动态获取命令行输入的服务器地址；

6、 使用现代模式构建应用，为现代浏览器交付原生支持的 ES2015 代码，并生成一个兼容老浏览器的包用来自动回退。

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
npm run serve
```

### 项目打包
```
npm run build <publicPath>
```

### 代码检测修复
```
npm run lint
```

### [vue-cli 3 配置参考](https://cli.vuejs.org/zh/config/)

