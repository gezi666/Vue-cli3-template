<template>
  <div class="hello">
    <h1>Hi {{ name }}!</h1>
    <h1>{{ msg }}</h1>
    <el-button type="primary" @click="jump">Element组件</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: ""
    };
  },
  props: {
    msg: String
  },
  methods: {
    jump() {
      this.$router.push({ name: "demo" });
    }
  },
  mounted() {
    console.log("全局变量API_URL-后台请求地址", API_URL);

    // 请求本地静态文件
    this.$request("get", "/static/demo-option.json").then((res) => {
      console.log("本地静态资源", res);
    });
    // 请求easy-mock接口
    this.$request("get", "/demo").then((res) => {
      console.log("mock数据", res.data);
      this.name = res.data.name;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1 {
  color: lightblue;
  font-size: 30px;
}
</style>
