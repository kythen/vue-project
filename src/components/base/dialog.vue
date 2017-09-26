<template>
	<div>
		<div class="dialog-wrap">
			<div class="dialog-cover" v-if="isShow">
	
					<div class="dialog-content" v-if="isShow">
						<p class="dialog-close" @click="closeMyself">X</p>
						<slot>empty</slot>
					</div>

			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default {
		props:{
			isShow:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			closeMyself(){
				this.$emit('on-close');
			}
		}

	}
</script>
<style scoped>
	.dialog-wrap{
		position:fixed;
		width:100%;
		height:100%;
	}
	.dialog-cover{
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		background:rgba(0,0,0,.5);
		z-index:5;
	}
	.dialog-content{
		position:fixed;
		top:20%;
		left:50%;
		width:50%;
		margin-left:-25%;
		background:#fff;
		border:2px solid #4f4068;
		z-index:10;
		padding:2%;
		line-height:1.6;
	}
	.dialog-close{
		position:absolute;
		right:5px;
		top:5px;
		width:20px;
		height:20px;
		text-align: center;
		cursor:pointer;
	}
	.dialog-close:hover{
		color:#4fc08d;
	}
</style>