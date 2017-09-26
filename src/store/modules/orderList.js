import Vue from 'vue'
import axios from 'axios'
const state = {
	orderList:[],
	params:{}
};
const getters = {
	getOrderList(state){
		return state.orderList;
	}
}
const mutations = {
	updateOrderList(state,payload){
		state.orderList = payload;
	},
	updateParams(state,{key,value}){
		state.params[key] = value;
		console.log("========================");
		console.log(state.params);
	}
};
const actions = {
	fetchOrderList({commit,state}){
		axios.post('/api/getOrderList',state.params)
		.then((res)=>{
			commit('updateOrderList',res.data.list);
		})
	}
};
export default {
	state,
	mutations,
	getters,
	actions
}