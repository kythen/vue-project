<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>数据统计</h2>
      <p>历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型
        </div>
        <div class="sales-board-line-right">
          <v-chooser :selections="buyTypes"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          适用地区
        </div>
        <div class="sales-board-line-right">
          <v-selection  :selections="districts"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间
        </div>
        <div class="sales-board-line-right">
          半年
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价
        </div>
        <div class="sales-board-line-right">
          500元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          &nbsp;
        </div>
        <div class="sales-board-line-right">
          <div class="button">
            立即购买
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VSelection from '../../components/base/selection'
  import VChooser from '../../components/base/chooser'
  export default {
    components:{
      VChooser,
      VSelection
    },
    data(){
      return {
        districts: [
          {
            label: '北京',
            value: 0
          },
          {
            label: '上海',
            value: 1
          },
          {
            label: '广州',
            value: 2
          },
          {
            label: '天津',
            value: 3
          },
          {
            label: '武汉',
            value: 4
          },
          {
            label: '重庆',
            value: 5
          },
          {
            label:'西安',
            value:6
          }
        ],
        buyTypes: [
          {
            label: '红色版',
            value: 0
          },
          {
            label: '绿色版',
            value: 1
          },
          {
            label: '紫色版',
            value: 2
          }
        ]
      }
    }
  }
</script>
<style scoped>

</style>
