<template>
  <div>
     <div class="app-head">
       <div class="app-head-inner">
         <router-link :to="{path:'/'}">
           <img src="../assets/logo.png" class="head-logo"/>
         </router-link>
         <div class="head-nav">
           <ul class="nav-list">
             <li>{{username}}</li>
             <li v-if="username !== ''" class="nav-pile">|</li>
             <li v-if="username !== ''" @click="quit">退出</li>
             <li v-if="username === ''" @click="logClick">登录</li>
             <li class="nav-pile">|</li>
             <li v-if="username === ''" @click="regClick">注册</li>
             <li v-if="username === ''" class="nav-pile">|</li>
             <li class="nav-pile" @click="aboutClick">关于</li>
           </ul>
         </div>
       </div>
     </div>
     <div class="app-content">
       <router-view></router-view>
     </div>
     <div class="app-foot">
       <p>@ 2016 fishenal MIT</p>
     </div>
    <my-dialog :is-show="isShowAboutDialog"  @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>
  </div>
</template>

<script>
  import Dialog from './dialog'
export default {
  components:{
    MyDialog:Dialog
  },
  data(){
    return {
      username:'',
      isShowAboutDialog:false
    }
  },
  methods:{
    aboutClick(){
      this.isShowAboutDialog = true;
    },
    logClick(){

    },
    regClick(){

    },
    closeDialog(attr){
      this[attr] = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  *{
    margin:0;
    padding:0;
    border:0;
  }
  a{
    color:inherit;
    text-decoration:none;
  }
  body{
    background:#f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size:14px;
    color:#444;
  }
  ol,ul{
    list-style:none;
  }
  .app-head{
    background:#363636;
    color:#b2b2b2;
    height:90px;
    line-height:90px;
    width:100%;
  }
  .app-head-inner{
    width:1200px;
    margin:0 auto;
  }
  .head-logo{
    float:left;
  }
  .app-head-inner img{
    width:50px;
    margin-top:20px;
  }
  .head-nav{
    float:right;
  }
  .head-nav  ul{
    overflow:hidden;
  }
  .head-nav li{
    cursor:pointer;
    float:left;
  }
  .nav-pile{
    padding:0 10px;
  }
  .app-foot{
    text-align:center;
    height:80px;
    width:100%;
    line-height:80px;
    background:#e3e4e8;
    clear:both;
    margin-top:30px;
  }
</style>
