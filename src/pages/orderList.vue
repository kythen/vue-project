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
        <v-date-picker :date="startTime" :limit="limit" @change="changeStarttime"></v-date-picker>
      </div>
      <div class="order-list-option">
        结束日期：
        <v-date-picker :date="endTime" :limit="limit" @change="changeEndtime"></v-date-picker>
      </div>
      <div class="order-list-option">
        关键字：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for="head in tableHeads"  :class="{active:head.active}">{{head.label}}</th>
        </tr>
        <tr v-for="item in tableData" :key="item.period">
          <td v-for="head in tableHeads">{{item[head.key]}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script type="text/javascript">
  import VSelection from '../components/base/selection'
  import VDatePicker from 'vue-datepicker/vue-datepicker-es6.vue';
  export default {
    components:{
      VSelection,
      VDatePicker
    },
    data(){
      return {
         query:"",
         productId:0,
         starttime:'2017-09-16',
         endtime:'2017-09-30',
         startTime:{
          time:'2017-09-16'
         },
         endTime:{
          time:'2017-09-30'
         },
         limit:[
         {
          type:'weekday',
          available:[1,2,3,4,5]
         },
         {
          type:'fromto',
          from:'2017-09-16',
          to:'2017-09-30'
         }
         ],
        products:[
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
        // tableData:[],
        currentOrder:'asc'
      }
    },
    methods:{
      productChange(obj){
        // this.productId = obj.value;
        // this.getTableData();
        this.$store.commit('updateParams',{
          key:'productId',
          value:obj.value
        })
         this.$store.dispatch('fetchOrderList');
      },
      changeStarttime(time){
        // this.starttime = time;
        // this.getTableData();
        this.$store.commit('updateParams',{
          key:'starttime',
          value:time
        })
         this.$store.dispatch('fetchOrderList');
      },
      changeEndtime(time){
        // this.endtime = time;
        // this.getTableData();
        this.$store.commit('updateParams',{
          key:'endtime',
          value:time
        })
         this.$store.dispatch('fetchOrderList');
      },
      // getTableData(){
      //   let params = {
      //     query:this.query,
      //     startTime:this.starttime,
      //     endTime:this.endtime,
      //     productId:this.productId
      //   };
      //   this.$http.post('/api/getOrderList',params)
      //   .then((res)=>{
      //     this.tableData = res.data.list;
      //   },(err)=>{

      //   })
      // }
    },
    computed:{
      tableData(){
        return this.$store.getters.getOrderList;
      }
    },
    mounted(){
      // this.getTableData();
      this.$store.dispatch('fetchOrderList');
      console.log(this.$store);
    },
    watch:{
      query(newValue){
        console.log(newValue)
        this.$store.commit('updateParams',{
          key:'query',
          value:newValue
        })
        this.$store.dispatch('fetchOrderList')
      }
    }

  }
</script>
<style scoped>
.order-wrap{
  width:1200px;
  min-height:800px;
  margin:0 auto;
  overflow: hidden;
}
.order-wrap h3{
  font-size:20px;
  font-weight:bold;
  margin-bottom:20px;
}
.order-query{
  height:25px;
  line-height:25px;
  border:1px solid #e3e3e3;
  outline:none;
}
.order-list-option{
  display:inline-block;
  padding-left:15px;
}
.order-list-option:first-child{
  padding-left:0;
}
.order-list-table{
  margin-top:20px;
}
.order-list-table table{
  width:100%;
  background:#fff;
}
.order-list-table th,
.order-list-table td{
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