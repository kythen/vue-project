<template>
  <div class="order-wrap">
    <h3>您的产品</h3>
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>
      <div class="order-list-option">
        开始日期：
        <v-date-picker :date="startTime" :option="option" :limit="limit" @on-change="getStartDate"></v-date-picker>
      </div>
      <div class="order-list-option">
        结束日期：
        <v-date-picker :date="endTime" :option="option" :limit="limit" @on-change="getEndDate"></v-date-picker>
      </div>
      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query" />
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads" @click="changeOrderType(head)" :class="{active:head.active}">{{head.label}}</th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="head in tableHeads" >{{item[head.key]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
  import  VDatePicker from 'vue-datepicker'
  import VSelection from '../components/base/selection'
  import _ from 'lodash'
  export default {
    components:{
      VDatePicker,
      VSelection
    },
    data(){
      return {
        productId:0,
        query:'',
        products: [
          {
            label: '数据统计',
            value: 0
          },
          {
            label: '数据预测',
            value: 1
          },
          {
            label: '流量分析',
            value: 2
          },
          {
            label: '广告发布',
            value: 3
          }
        ],
        startTime: {
          time: '2016-05-25'
        },
        endTime: {
          time: '2016-07-07'
        },
        option: {
          type: 'day',
          week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
          month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          format: 'YYYY-MM-DD',
          placeholder: 'when?',
          inputStyle: {
            'display': 'inline-block',
            'padding': '6px',
            'line-height': '22px',
            'font-size': '16px',
            'border': '2px solid #fff',
            'box-shadow': '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
            'border-radius': '2px',
            'color': '#5F5F5F'
          },
          color: {
            header: '#ccc',
            headerText: '#f00'
          },
          buttons: {
            ok: 'Ok',
            cancel: 'Cancel'
          },
          overlayOpacity: 0.5, // 0.5 as default
          dismissible: true // as true as default
        },
        limit: [
          {
            type: 'fromto',
            from: '2016-02-01',
            to: '2016-02-20'
          }],
        tableHeads: [
          {
            label: '订单号',
            key: 'orderId'
          },
          {
            label: '购买产品',
            key: 'product'
          },
          {
            label: '版本类型',
            key: 'version'
          },
          {
            label: '有效时间',
            key: 'period'
          },
          {
            label: '购买日期',
            key: 'date'
          },
          {
            label: '数量',
            key: 'buyNum'
          },
          {
            label: '总价',
            key: 'amount'
          }
        ],
        tableData:[],
        currentOrder:'asc'
      }
      },
    methods:{
      productChange(obj){
        this.productId = obj.value;
        this.getList();
      },
      getStartDate(date){
        this.startTime.time = date;
        this.getList();
      },
      getEndDate(date){
        this.endTime.time = date;
        this.getList();
      },
      changeOrderType(headItem){
        this.tableHeads.map((item)=>{
          item.active = false;
          return item;
        })
        headItem.active = true;
        this.tableData = _.orderBy(this.tableData,headItem.key,this.currentOrder);
      },
      getList(){
        let reqParams = {
          query:this.query,
          productId:this.productId,
          startTime:this.startTime.time,
          endTime:this.endTime.time
        };
        this.$http.post('/api/getOrderList',reqParams)
          .then((res) => {
          this.tableData = res.data.list;
        },(err) => {

        })
      }
    },
    watch:{
      query(){
        this.getList();
      }
    },
    mounted(){
      this.getList();
    }
    }

</script>
<style scoped>
  .order-wrap{
    width:1200px;
    min-height:800px;
    margin:20px auto;
    overflow:hidden;
  }
  .order-wrap h3{
    font-size:20px;
    font-weight:bold;
    margin-bottom:20px;
  }
  .order-query{
    height:25px;
    line-height:25px;
    border:1px solid  #e3e3e3;
    outline:none;
    text-indent:10px;
  }
  .order-list-option{
    display:inline-block;
    padding-left:15px;
  }
  .order-list-option:first-child{
    padding-left:0px;
  }
  .order-list-table{
    margin-top:20px;
  }
  .order-list-table table{
    width:100%;
    background:#fff;
  }
  .order-list-table td,
  .order-list-table th{
    border:1px solid #e3e3e3;
    text-align:center;
    padding:10px 0;
  }
  .order-list-table th{
    background:#4fc08d;
    color:#fff;
    border:1px solid #4fc08d;
    cursor:pointer;
  }
  .order-list-table th.active{
    background:#35495e;
  }
</style>
