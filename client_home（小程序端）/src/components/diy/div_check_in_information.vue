<template>
	<view class="diy_details diy_div_check_in_information">
		<view v-if="Object.keys(obj).length!==0" class="warp">
			<view class="container">
				<view class="row">
					<view v-if="$check_field('get','house_no')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>房屋编号:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["house_no"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','house_name')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>房屋名称:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["house_name"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','house_type')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>房屋类型:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["house_type"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','rent')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>租金:</span>
						</view>
							<view class="diy_field diy_number">
							<text>
								{{ obj["rent"] }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','hall')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>厅室:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["hall"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','detailed_address')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>详细地址:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["detailed_address"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','homeowner_user')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>房主用户:</span>
						</view>
							<view class="diy_field diy_uid">
							<text>
								{{ get_user_homeowner_user(obj['homeowner_user']) }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','name_of_the_owner')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>房主姓名:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["name_of_the_owner"]}}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','tenant_user')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>租客用户:</span>
						</view>
							<view class="diy_field diy_uid">
							<text>
								{{ get_user_tenant_user(obj['tenant_user']) }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','signing_date')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>签约日期:</span>
						</view>
							<view class="diy_field diy_date">
							<text>
								{{ $toTime(obj["signing_date"],"yyyy-MM-dd") }}
							</text>
						</view>
						</view>
					<view v-if="$check_field('get','lease_contract')" class="col-12 col-md-6">
						<view class="diy_title">
							<span>租赁合同:</span>
						</view>
							<view class="diy_field diy_text">
							<text>
								{{obj["lease_contract"]}}
							</text>
						</view>
						</view>
				</view>
			</view>
		</view>

			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/rent_information/edit')" v-if="$check_action('/rent_information/edit','add') || $check_action('/rent_information/edit','set')" >房租信息</button>
					</view>
				</view>
			</view>
		</view>
			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/feedback_information/edit')" v-if="$check_action('/feedback_information/edit','add') || $check_action('/feedback_information/edit','set')" >反馈信息</button>
					</view>
				</view>
			</view>
		</view>
			<view class="warp">
			<view class="container">
				<view class="row">
					<view class="col">
						<button type="button" class="diy_btn" @click="to_form('/pages/notification_information/edit')" v-if="$check_action('/notification_information/edit','add') || $check_action('/notification_information/edit','set')" >通知信息</button>
					</view>
				</view>
			</view>
		</view>
		</view>
</template>

<script>
	import mixin from "@/libs/mixins/component.js";
	export default {
		mixins: [mixin],
		props: {
			obj_goods: {
				type: Object,
				default(){
					return {}
				}
			},
			query:{
				type: Object,
				default(){
					return {
						check_in_information_id: 0
					}
				}
			}
		},
		data() {
			return {
				obj_goods_type: {},
				obj: {},
											// 用户列表
				list_user_homeowner_user: [],
							// 用户列表
				list_user_tenant_user: [],
						}
		},
		methods: {
			async get_obj_goods_type() {
				var res = await this.$get("~/api/goods_type/get_obj", {
					name: this.obj_goods.type
				})

				if (res.result.obj) {
					this.obj_goods_type = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
			async get_obj_by_goods() {
				var {
					source_table,
					source_field
				} = this.obj_goods_type
				var {
					source_id
				} = this.obj_goods
				var query = {}
				query[source_field] = source_id
				this.$get("~/api/" + source_table + "/get_obj", {}, (res) => {
					if (res.result.obj) {
						this.obj = res.result.obj
					} else {
						console.log("没有请求到商品分类");
					}
				})
			},
			async get_obj_by_id(){
				var res = await this.$get("~/api/check_in_information/get_obj", {
					check_in_information_id:this.query.check_in_information_id
				})

				if (res.result && res.result.obj) {
					this.obj = res.result.obj
				} else {
					console.log("没有请求到商品分类");
				}
			},
										/**
			 * 获取房主用户用户列表
			 */
			async get_list_user_homeowner_user() {
				var json = await this.$get("~/api/user/get_list?user_group=房主用户");
				if(json.result && json.result.list){
					this.list_user_homeowner_user = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_homeowner_user(id){
				let obj = this.list_user_homeowner_user;
				let ret = "";
				for(let i=0;i<obj.length;i++){
					if(obj[i].user_id==id){
						ret = obj[i].nickname+"-"+obj[i].username;
					}
				}
				return ret;
			},
						/**
			 * 获取租客用户用户列表
			 */
			async get_list_user_tenant_user() {
				var json = await this.$get("~/api/user/get_list?user_group=租客用户");
				if(json.result && json.result.list){
					this.list_user_tenant_user = json.result.list;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_tenant_user(id){
				let obj = this.list_user_tenant_user;
				let ret = "";
				for(let i=0;i<obj.length;i++){
					if(obj[i].user_id==id){
						ret = obj[i].nickname+"-"+obj[i].username;
					}
				}
				return ret;
			},
					},
		created() {
										this.get_list_user_homeowner_user();
						this.get_list_user_tenant_user();
					},
		async onLoad(){
			if (Object.keys(this.obj_goods).length !== 0) {
				await this.get_obj_goods_type();
				await this.get_obj_by_goods();
			} else if (this.query["check_in_information_id"] !==0) {
				await this.get_obj_by_id();
			}
		}
	}
</script>

<style scoped>
	.div_check_in_information_details {}

	.details {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
		border-bottom: 1px solid #eee;
	}

	.left_text {
		flex: 0 0 25%;
	}

	.right_text {
		flex: 0 0 75%;
	}
	.edit_nav{
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}
</style>
