<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <v-counter @on-change="onParamChange('buyNum',$event)"></v-counter>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <v-selection :selections="buyTypes" @on-change="onParamChange('buyType',$event)"></v-selection>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <v-chooser :selections="periodList" @on-change="onParamChange('period',$event)"></v-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <v-mul-chooser :selections="versionList" @on-change="onParamChange('versions',$event)"></v-mul-chooser>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
          {{price}}元
        </div>

      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          &nbsp;
        </div>
        <div class="sales-board-line-right">
          <div class="button" @click="showPayDialog">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VCounter from "../../components/base/counter"
  import VSelection from "../../components/base/selection"
  import VChooser from "../../components/base/chooser"
  import VMulChooser from "../../components/base/multiplyChooser"
  import _ from "lodash"
  export default {
    components:{
      VSelection,
      VCounter,
      VChooser,
      VMulChooser
    },
    data(){
      return {
        buyNum:0,
        buyType:{},
        versions:[],
        period:{},
        price:0,
        versionList:[
          {
            label:"客户版",
            value:0
          },
          {
            label:"代理商版",
            value:1
          },
          {
            label:"专家版",
            value:2
          }
        ],
        periodList:[
          {
            label:"半年",
            value:0
          },
          {
            label:"一年",
            value:1
          },
          {
            label:"三年",
            value:2
          }
        ],
        buyTypes:[
          {
            label:"入门版",
            value:0
          },
          {
            label:"中级版",
            value:1
          },
          {
            label:"高级版",
            value:2
          }
        ]
      }
    },
    methods:{
      onParamChange(attr,val){
        this[attr] = val;
        this.getPrice();
      },
      getPrice(){
        let buyVersionArray = _.map(this.versions,(item) => {
            return item.value;
          });
        let reqParams = {
          buyNumber:this.buyNum,
          buyType:this.buyType.value,
          period:this.period.value,
          version:buyVersionArray.join(',')
        };
        this.$http.post('/api/getPrice',reqParams)
          .then((res) => {
          this.price = res.data.amount;
        })
      }
    },
    mounted(){
      this.buyNum = 1
      this.buyType = this.buyTypes[0]
      this.versions = [this.versionList[0]]
      this.period = this.periodList[0]
      this.getPrice()
    }
  }
</script>
<style scoped>

</style>
