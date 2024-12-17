<template>
	<el-main class="bg edit_wrap">
		<el-form ref="form" :model="form" status-icon label-width="120px" v-if="is_view()">

							<el-col v-if="user_group === '管理员' || $check_field('get','house_no') || $check_field('add','house_no') || $check_field('set','house_no')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="房屋编号" prop="house_no">
												<el-input id="house_no" v-model="form['house_no']" placeholder="请输入房屋编号"
							  v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','house_no')) || (!form['lease_application_id'] && $check_field('add','house_no'))" :disabled="disabledObj['house_no_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','house_no')">{{form['house_no']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','house_name') || $check_field('add','house_name') || $check_field('set','house_name')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="房屋名称" prop="house_name">
												<el-input id="house_name" v-model="form['house_name']" placeholder="请输入房屋名称"
							  v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','house_name')) || (!form['lease_application_id'] && $check_field('add','house_name'))" :disabled="disabledObj['house_name_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','house_name')">{{form['house_name']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','house_type') || $check_field('add','house_type') || $check_field('set','house_type')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="房屋类型" prop="house_type">
												<el-input id="house_type" v-model="form['house_type']" placeholder="请输入房屋类型"
							  v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','house_type')) || (!form['lease_application_id'] && $check_field('add','house_type'))" :disabled="disabledObj['house_type_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','house_type')">{{form['house_type']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','deposit') || $check_field('add','deposit') || $check_field('set','deposit')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="押金" prop="deposit">
								<el-input-number id="deposit" v-model.number="form['deposit']"
						v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','deposit')) || (!form['lease_application_id'] && $check_field('add','deposit'))" :disabled="disabledObj['deposit_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','deposit')">{{form['deposit']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','rent') || $check_field('add','rent') || $check_field('set','rent')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="租金" prop="rent">
								<el-input-number id="rent" v-model.number="form['rent']"
						v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','rent')) || (!form['lease_application_id'] && $check_field('add','rent'))" :disabled="disabledObj['rent_isDisabled']"></el-input-number>
					<div v-else-if="$check_field('get','rent')">{{form['rent']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','hall') || $check_field('add','hall') || $check_field('set','hall')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="厅室" prop="hall">
												<el-input id="hall" v-model="form['hall']" placeholder="请输入厅室"
							  v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','hall')) || (!form['lease_application_id'] && $check_field('add','hall'))" :disabled="disabledObj['hall_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','hall')">{{form['hall']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','detailed_address') || $check_field('add','detailed_address') || $check_field('set','detailed_address')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="详细地址" prop="detailed_address">
												<el-input id="detailed_address" v-model="form['detailed_address']" placeholder="请输入详细地址"
							  v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','detailed_address')) || (!form['lease_application_id'] && $check_field('add','detailed_address'))" :disabled="disabledObj['detailed_address_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','detailed_address')">{{form['detailed_address']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','homeowner_user') || $check_field('add','homeowner_user') || $check_field('set','homeowner_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="房主用户" prop="homeowner_user">
													<el-select v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','homeowner_user')) || (!form['lease_application_id'] && $check_field('add','homeowner_user'))" id="homeowner_user" v-model="form['homeowner_user']" :disabled="disabledObj['homeowner_user_isDisabled']">
							<el-option v-for="o in list_user_homeowner_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
						<el-select v-else-if="$check_field('get','homeowner_user')" id="homeowner_user" v-model="form['homeowner_user']" :disabled="true">
							<el-option v-for="o in list_user_homeowner_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','name_of_the_owner') || $check_field('add','name_of_the_owner') || $check_field('set','name_of_the_owner')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="房主姓名" prop="name_of_the_owner">
												<el-input id="name_of_the_owner" v-model="form['name_of_the_owner']" placeholder="请输入房主姓名"
							  v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','name_of_the_owner')) || (!form['lease_application_id'] && $check_field('add','name_of_the_owner'))" :disabled="disabledObj['name_of_the_owner_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','name_of_the_owner')">{{form['name_of_the_owner']}}</div>
											</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','order_date') || $check_field('add','order_date') || $check_field('set','order_date')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="下单日期" prop="order_date">
								<el-date-picker :disabled="disabledObj['order_date_isDisabled']" v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','order_date')) || (!form['lease_application_id'] && $check_field('add','order_date'))" id="order_date"
						v-model="form['order_date']" type="date" placeholder="选择日期">
					</el-date-picker>
					<div v-else-if="$check_field('get','order_date')">{{form['order_date']}}</div>
							</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','tenant_user') || $check_field('add','tenant_user') || $check_field('set','tenant_user')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="租客用户" prop="tenant_user">
																		<div v-if="user_group !== '管理员'">
							{{ get_user_session_tenant_user(form['tenant_user']) }}
							<!--<el-input id="business_name" v-model="form['tenant_user']" placeholder="请输入租客用户"-->
							<!--v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','tenant_user')) || (!form['lease_application_id'] && $check_field('add','tenant_user'))" :disabled="disabledObj['tenant_user_isDisabled']"></el-input>-->
							<!--<div v-else-if="$check_field('get','tenant_user')">{{form['tenant_user']}}</div>-->
							<el-select v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','tenant_user')) || (!form['lease_application_id'] && $check_field('add','tenant_user'))" id="tenant_user" v-model="form['tenant_user']" :disabled="disabledObj['tenant_user_isDisabled']">
								<el-option v-for="o in list_user_tenant_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
							<el-select v-else-if="$check_field('get','tenant_user')" id="tenant_user" v-model="form['tenant_user']" :disabled="true">
								<el-option v-for="o in list_user_tenant_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
										   :value="o['user_id']">
								</el-option>
							</el-select>
						</div>
						<el-select v-else id="tenant_user" v-model="form['tenant_user']" :disabled="disabledObj['tenant_user_isDisabled']">
							<el-option v-for="o in list_user_tenant_user" :key="o['username']" :label="o['nickname'] + '-' + o['username']"
									   :value="o['user_id']">
							</el-option>
						</el-select>
																</el-form-item>
			</el-col>
								<el-col v-if="user_group === '管理员' || $check_field('get','application_description') || $check_field('add','application_description') || $check_field('set','application_description')" :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="申请描述" prop="application_description">
								<el-input type="textarea" id="application_description" v-model="form['application_description']" placeholder="请输入申请描述"
						v-if="user_group === '管理员' || (form['lease_application_id'] && $check_field('set','application_description')) || (!form['lease_application_id'] && $check_field('add','application_description'))" :disabled="disabledObj['application_description_isDisabled']"></el-input>
					<div v-else-if="$check_field('get','application_description')">{{form['application_description']}}</div>
							</el-form-item>
			</el-col>
							<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核状态" prop="examine_state">
					<el-select id="examine_state" v-model="form['examine_state']"
						v-if="user_group === '管理员' || (form['examine_state'] && $check_examine()) || (!form['examine_state'] && $check_examine())">
						<el-option key="未审核" label="未审核" value="未审核"></el-option>
						<el-option key="已通过" label="已通过" value="已通过"></el-option>
						<el-option key="未通过" label="未通过" value="未通过"></el-option>
					</el-select>
					<div v-else>{{form["examine_state"]}}</div>
				</el-form-item>
			</el-col>
					<el-col :xs="24" :sm="12" :lg="8" class="el_form_item_warp">
				<el-form-item label="审核回复" prop="examine_reply">
					<el-input id="examine_reply" v-model="form['examine_reply']" placeholder="请输入审核回复"
						v-if="user_group === '管理员' || (form['examine_reply'] && $check_examine()) || (!form['examine_reply'] && $check_examine())"></el-input>
					<div v-else>{{form["examine_reply"]}}</div>
				</el-form-item>
			</el-col>
	
	
	
	
	
	
	
			<el-col :xs="24" :sm="12" :lg="8" class="el_form_btn_warp">
				<el-form-item>
					<el-button type="primary" @click="submit()">提交</el-button>
					<el-button @click="cancel()">取消</el-button>
				</el-form-item>
			</el-col>

		</el-form>
	</el-main>
</template>

<script>
	import mixin from "@/mixins/page.js";

	export default {
		mixins: [mixin],
		data() {
			return {
				field: "lease_application_id",
				url_add: "~/api/lease_application/add?",
				url_set: "~/api/lease_application/set?",
				url_get_obj: "~/api/lease_application/get_obj?",
				url_upload: "~/api/lease_application/upload?",

				query: {
					"lease_application_id": 0,
				},

				form: {
								"house_no":  '', // 房屋编号
										"house_name":  '', // 房屋名称
										"house_type":  '', // 房屋类型
										"deposit":  0, // 押金
										"rent":  0, // 租金
										"hall":  '', // 厅室
										"detailed_address":  '', // 详细地址
										"homeowner_user": 0, // 房主用户
										"name_of_the_owner":  '', // 房主姓名
										"order_date":  '', // 下单日期
										"tenant_user": 0, // 租客用户
										"application_description":  '', // 申请描述
									"examine_state": "未审核",
							"examine_reply": "",
							"lease_application_id": 0, // ID
						
				},
				disabledObj:{
								"house_no_isDisabled": false,
										"house_name_isDisabled": false,
										"house_type_isDisabled": false,
					          			"deposit_isDisabled": false,
					          			"rent_isDisabled": false,
										"hall_isDisabled": false,
										"detailed_address_isDisabled": false,
										"homeowner_user_isDisabled": false,
										"name_of_the_owner_isDisabled": false,
										"order_date_isDisabled": false,
										"tenant_user_isDisabled": false,
										"application_description_isDisabled": false,
										},

	
		
		
		
		
		
		
		
					// 用户列表
				list_user_homeowner_user: [],
				
		
		
					// 用户列表
				list_user_tenant_user: [],
						// 用户组
				group_user_tenant_user: "",
				
	
			}
		},
		methods: {


	
	
			
	
			
	
			
	
			
	
			
	
			
	
			
	
				/**
			 * 获取房主用户用户列表
			 */
			async get_list_user_homeowner_user() {
                // if(this.user_group !== "管理员" && this.form["homeowner_user"] === 0) {
                //     this.form["homeowner_user"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=房主用户");
                if(json.result && json.result.list){
                    this.list_user_homeowner_user = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					get_user_homeowner_user(id){
				var obj = this.list_user_homeowner_user.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
			
	
			
	
				/**
			 * 获取租客用户用户列表
			 */
			async get_list_user_tenant_user() {
                // if(this.user_group !== "管理员" && this.form["tenant_user"] === 0) {
                //     this.form["tenant_user"] = this.user.user_id;
                // }
                var json = await this.$get("~/api/user/get_list?user_group=租客用户");
                if(json.result && json.result.list){
                    this.list_user_tenant_user = json.result.list;
                }
                else if(json.error){
                    console.error(json.error);
                }
			},
					/**
			 * 获取租客用户用户组
			 */
			async get_group_user_tenant_user() {
							this.form["tenant_user"] = this.user.user_id;
							var json = await this.$get("~/api/user_group/get_obj?name=租客用户");
				if(json.result && json.result.obj){
					this.group_user_tenant_user = json.result.obj;
				}
				else if(json.error){
					console.error(json.error);
				}
			},
			get_user_session_tenant_user(id){
				var _this = this;
				var user_id = {"user_id":id}
				var url = "~/api/"+_this.group_user_tenant_user.source_table+"/get_obj?"
				this.$get(url, user_id, function(res) {
					if (res.result && res.result.obj) {
						var arr = []
						for (let key in res.result.obj) {
							arr.push(key)
						}
						var arrForm = []
									for (let key in _this.form) {
							arrForm.push(key)
						}
												_this.form["tenant_user"] = id
									_this.disabledObj['tenant_user' + '_isDisabled'] = true
						for (var i=0;i<arr.length;i++){
						  if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
							for (var j = 0; j < arrForm.length; j++) {
							  if (arr[i] === arrForm[j]) {
								if (arr[i] !== "tenant_user") {
			                      _this.form[arrForm[j]] = res.result.obj[arr[i]]
			                      _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								  break;
								} else {
								  _this.disabledObj[arrForm[j] + '_isDisabled'] = true
								}
							  }
							}
						  }
						}
					}
				});
			},
					get_user_tenant_user(id){
				var obj = this.list_user_tenant_user.getObj({"user_id":id});
				var ret = "";
				if(obj){
					if(obj.nickname){
						ret = obj.nickname;}
					else{
						ret = obj.username;
					}
				}
				return ret;
			},
			
	
		
			/**
			 * 获取对象之前
			 * @param {Object} param
			 */
			get_obj_before(param) {
				var form = "";
												// 获取缓存数据附加
				form = $.db.get("form");
							$.push(this.form ,form);
																									
				if(this.form && form){
					Object.keys(this.form).forEach(key => {
						Object.keys(form).forEach(dbKey => {
							// if(dbKey === "charging_standard"){
							// 	this.form['charging_rules'] = form[dbKey];
							// 	this.disabledObj['charging_rules_isDisabled'] = true;
							// };
							if(key === dbKey){
								this.disabledObj[key+'_isDisabled'] = true;
							}
						})
					})
				}
																				        if (this.form["order_date"].indexOf("-")===-1){
          this.form["order_date"] = this.$toTime(parseInt(this.form["order_date"]),"yyyy-MM-dd")
        }
									$.db.del("form");
				return param;
			},

			/**
			 * 获取对象之后
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json, func){


																													        if(this.form["order_date"]=="0000-00-00"){
          this.form["order_date"] = null;
        }
				if(parseInt(this.form["order_date"]) > 9999){
					this.form["order_date"] = this.$toTime(parseInt(this.form["order_date"]),"yyyy-MM-dd")
				}
								

			},

			/**
			 * 提交前验证事件
			 * @param {Object} 请求参数
			 * @return {String} 验证成功返回null, 失败返回错误提示
			 */
			submit_check(param) {
				let msg = null
																																										return msg;
			},

			is_view(){
				var bl = this.user_group == "管理员";

				if(!bl){
					bl = this.$check_action('/lease_application/table','add');
					console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
				}
				if(!bl){
					bl = this.$check_action('/lease_application/table','set');
					console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
				}
				if(!bl){
					bl = this.$check_action('/lease_application/view','add');
					console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
				}
				if(!bl){
					bl = this.$check_action('/lease_application/view','set');
					console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
				}
				if(!bl){
					bl = this.$check_action('/lease_application/view','get');
					console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
				}

				console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

				return bl;
			},
			/**
			 * 上传文件
			 * @param {Object} param
			 */
			uploadimg(param) {
				this.uploadFile(param.file, "avatar");
			},

		},
		created() {
																			this.get_list_user_homeowner_user();
												this.get_list_user_tenant_user();
					this.get_group_user_tenant_user();
							},
	}
</script>

<style>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}

	.avatar-uploader .el-upload:hover {
		border-color: #409EFF;
	}

	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}

	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}




</style>
