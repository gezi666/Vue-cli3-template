<template>
  <div class="hello">
    <h1>Hi  {{ name }}!</h1>
    <h1>{{ msg }}</h1>
    <div id="chart"></div>
    <el-button type="primary" v-on:click="jump">Element组件</el-button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      name:''
    }
  },
  props: {
    msg: String
  },
  methods:{
    initChart(option){
      const myChart = this.$echarts.init(document.getElementById('chart'));
      myChart.setOption(option);
    },
    jump(){
      this.$router.push({name:'demo'})
    }
  },
  mounted(){
    // 请求本地静态文件
    this.$axios.get("/static/demo-option.json")
      .then(res=>{
        this.initChart(res.data)
      })
    // 请求easy-mock接口
    this.$axios.get("/demo")
      .then(res=>{
        console.log("mock数据", res.data.data)
        this.name = res.data.data.name
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  h1
    color: lightblue;
    font-size: 30px;
  #chart
    margin: 30px auto;
    width:400px;
    height 300px;
</style>
