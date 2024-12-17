<template>
	<view class="diy_edit page_housing_consultation" id="housing_consultation_edit">
		<view class='warp'>
			<view class='container'>
				<view class='row'>
						<view v-if="$check_field('set','house_no') || $check_field('add','house_no') || $check_field('get','house_no')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								房屋编号:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_house_no" v-model="form['house_no']" placeholder="请输入房屋编号" v-if="(form['house_no'] && $check_field('set','house_no')) || (!form['house_no'] && $check_field('add','house_no'))" :disabled="disabledObj['house_no_isDisabled']" />
							<text v-else-if="$check_field('get','house_no')">{{ form['house_no'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','house_name') || $check_field('add','house_name') || $check_field('get','house_name')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								房屋名称:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_house_name" v-model="form['house_name']" placeholder="请输入房屋名称" v-if="(form['house_name'] && $check_field('set','house_name')) || (!form['house_name'] && $check_field('add','house_name'))" :disabled="disabledObj['house_name_isDisabled']" />
							<text v-else-if="$check_field('get','house_name')">{{ form['house_name'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','house_type') || $check_field('add','house_type') || $check_field('get','house_type')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								房屋类型:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_house_type" v-model="form['house_type']" placeholder="请输入房屋类型" v-if="(form['house_type'] && $check_field('set','house_type')) || (!form['house_type'] && $check_field('add','house_type'))" :disabled="disabledObj['house_type_isDisabled']" />
							<text v-else-if="$check_field('get','house_type')">{{ form['house_type'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','deposit') || $check_field('add','deposit') || $check_field('get','deposit')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								押金:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_deposit" v-model="form['deposit']" placeholder="请输入押金" v-if="(form['deposit'] && $check_field('set','deposit')) || (!form['deposit'] && $check_field('add','deposit'))" :disabled="disabledObj['deposit_isDisabled']" />
							<text v-else-if="$check_field('get','deposit')">{{ form['deposit'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','rent') || $check_field('add','rent') || $check_field('get','rent')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								租金:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_rent" v-model="form['rent']" placeholder="请输入租金" v-if="(form['rent'] && $check_field('set','rent')) || (!form['rent'] && $check_field('add','rent'))" :disabled="disabledObj['rent_isDisabled']" />
							<text v-else-if="$check_field('get','rent')">{{ form['rent'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','hall') || $check_field('add','hall') || $check_field('get','hall')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								厅室:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_hall" v-model="form['hall']" placeholder="请输入厅室" v-if="(form['hall'] && $check_field('set','hall')) || (!form['hall'] && $check_field('add','hall'))" :disabled="disabledObj['hall_isDisabled']" />
							<text v-else-if="$check_field('get','hall')">{{ form['hall'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','detailed_address') || $check_field('add','detailed_address') || $check_field('get','detailed_address')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								详细地址:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_detailed_address" v-model="form['detailed_address']" placeholder="请输入详细地址" v-if="(form['detailed_address'] && $check_field('set','detailed_address')) || (!form['detailed_address'] && $check_field('add','detailed_address'))" :disabled="disabledObj['detailed_address_isDisabled']" />
							<text v-else-if="$check_field('get','detailed_address')">{{ form['detailed_address'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','homeowner_user') || $check_field('add','homeowner_user') || $check_field('get','homeowner_user')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								房主用户:
							</text>
						</view>
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_homeowner_user"
									v-model="form['homeowner_user']"
									:localdata="list_user_homeowner_user"
									:clear="!disabledObj['homeowner_user_isDisabled']"
									:disabled="disabledObj['homeowner_user_isDisabled']"
									v-if="(form['homeowner_user'] && $check_field('set','homeowner_user')) || (!form['homeowner_user'] && $check_field('add','homeowner_user'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','homeowner_user')">{{ form['homeowner_user'] }}</text>
						</view>
					</view>
							<view v-if="$check_field('set','name_of_the_owner') || $check_field('add','name_of_the_owner') || $check_field('get','name_of_the_owner')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								房主姓名:
							</text>
						</view>
								<!-- 文本 -->
									<view class="diy_field diy_text diy_text_row">
							<input type="text" id="form_name_of_the_owner" v-model="form['name_of_the_owner']" placeholder="请输入房主姓名" v-if="(form['name_of_the_owner'] && $check_field('set','name_of_the_owner')) || (!form['name_of_the_owner'] && $check_field('add','name_of_the_owner'))" :disabled="disabledObj['name_of_the_owner_isDisabled']" />
							<text v-else-if="$check_field('get','name_of_the_owner')">{{ form['name_of_the_owner'] }}</text>
						</view>
										</view>
							<view v-if="$check_field('set','consultation_date') || $check_field('add','consultation_date') || $check_field('get','consultation_date')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								咨询日期:
							</text>
						</view>
								<!-- 日期 -->
						<view class="diy_field diy_date">
							<uni-datetime-picker :disabled="disabledObj['consultation_date_isDisabled']" type="date" id="form_consultation_date" v-model="form['consultation_date']" placeholder="请输入咨询日期" v-if="(form['consultation_date'] && $check_field('set','consultation_date')) || (!form['consultation_date'] && $check_field('add','consultation_date'))" />
							<text v-else-if="$check_field('get','consultation_date')">{{ form['consultation_date'] }}</text>
						</view>
							</view>
							<view v-if="$check_field('set','tenant_user') || $check_field('add','tenant_user') || $check_field('get','tenant_user')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								租客用户:
							</text>
						</view>
						<view class="diy_field diy_down diy_text_row diy_select_flex">
							<uni-data-select
									id="form_tenant_user"
									v-model="form['tenant_user']"
									:localdata="list_user_tenant_user"
									:clear="!disabledObj['tenant_user_isDisabled']"
									:disabled="disabledObj['tenant_user_isDisabled']"
									v-if="(form['tenant_user'] && $check_field('set','tenant_user')) || (!form['tenant_user'] && $check_field('add','tenant_user'))"
							></uni-data-select>
							<text v-else-if="$check_field('get','tenant_user')">{{ form['tenant_user'] }}</text>
						</view>
					</view>
							<view v-if="$check_field('set','consultation_content') || $check_field('add','consultation_content') || $check_field('get','consultation_content')" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								咨询内容:
							</text>
						</view>
								<!-- 多文本 -->
						<view class="diy_field diy_desc diy_text_row">
							<textarea id="form_consultation_content" v-model="form['consultation_content']" v-if="(form['consultation_content'] && $check_field('set','consultation_content')) || (!form['consultation_content'] && $check_field('add','consultation_content'))" :disabled="disabledObj['consultation_content_isDisabled']"/>
							<text v-else-if="$check_field('get','consultation_content')">{{ form['consultation_content'] }}</text>
						</view>
							</view>
						<view v-if="user_group === '管理员' || $check_examine()" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								审核状态:
							</text>
						</view>
						<view class="diy_field diy_text diy_text_row diy_select_flex">
							<uni-data-select
									v-model="form['examine_state']"
									:localdata="list_examine_state"
							></uni-data-select>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<text>
								{{ form['examine_state'] }}
							</text>
						</view>
					</view>
					<view v-if="user_group === '管理员' || $check_examine()" class="col-12 col-md-6 row-item">
						<view class="diy_title diy_text_row">
							<text>
								审核回复:
							</text>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<textarea v-model="form['examine_reply']">
							</textarea>
						</view>
						<view class="diy_field diy_text diy_text_row">
							<text>
								{{ form['examine_reply'] }}
							</text>
						</view>
					</view>

				</view>
				<view class="row">
					<view class="col-12">
						<view class="btn_box">
							<button class="btn_submit primary_btn" @click="submit()">提交</button>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import mixin from "@/libs/mixins/page.js";
export default {
	mixins:[mixin],
	components:{},
	data(){
		return{
			url_get_obj:"~/api/housing_consultation/get_obj?",
			url_add:"~/api/housing_consultation/add?",
			url_set:"~/api/housing_consultation/set?",

			// 登录权限
			oauth: {
				"signIn": true,
				"user_group": []
			},

			// 查询条件
			query: {
					"house_no": "",
						"house_name": "",
						"house_type": "",
						"deposit": 0,
						"rent": 0,
						"hall": "",
						"detailed_address": "",
						"homeowner_user": 0,
						"name_of_the_owner": "",
						"consultation_date": "",
						"tenant_user": 0,
						"consultation_content": "",
					"housing_consultation_id": 0
			},

			obj: {
					"house_no":  '', // 房屋编号
						"house_name":  '', // 房屋名称
						"house_type":  '', // 房屋类型
						"deposit":  0 , // 押金
						"rent":  0 , // 租金
						"hall":  '', // 厅室
						"detailed_address":  '', // 详细地址
						"homeowner_user": 0, // 房主用户
						"name_of_the_owner":  '', // 房主姓名
						"consultation_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"tenant_user": 0, // 租客用户
						"consultation_content":  '', // 咨询内容
					"examine_state": "未审核",
				"examine_reply": "",
				"housing_consultation_id": 0,

			},

			// 表单字段
			form: {
					"house_no":  '', // 房屋编号
						"house_name":  '', // 房屋名称
						"house_type":  '', // 房屋类型
						"deposit":  0 , // 押金
						"rent":  0 , // 租金
						"hall":  '', // 厅室
						"detailed_address":  '', // 详细地址
						"homeowner_user": 0, // 房主用户
						"name_of_the_owner":  '', // 房主姓名
						"consultation_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
						"tenant_user": 0, // 租客用户
						"consultation_content":  '', // 咨询内容
					"examine_state": "未审核",
				"examine_reply": "",
				"housing_consultation_id": 0,
			},
			disabledObj:{
					"house_no_isDisabled": false,
						"house_name_isDisabled": false,
						"house_type_isDisabled": false,
										"hall_isDisabled": false,
						"detailed_address_isDisabled": false,
						"homeowner_user_isDisabled": false,
						"name_of_the_owner_isDisabled": false,
						"consultation_date_isDisabled": false,
						"tenant_user_isDisabled": false,
						"consultation_content_isDisabled": false,
				},

																			// 用户列表
			list_user_homeowner_user: [],
										// 用户列表
			list_user_tenant_user: [],
			
			field:"housing_consultation_id",
			table_key:"housing_consultation",

	list_examine_state:[{value:"未审核",text:"未审核"},{value:"已通过",text:"已通过"},{value:"未通过",text:"未通过"}],
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
				json.result.list.map((o) => this.list_user_homeowner_user.push({value:o.user_id,text:o.nickname + '-' + o.username}));
			}
			else if(json.error){
				console.error(json.error);
			}
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
				json.result.list.map((o) => this.list_user_tenant_user.push({value:o.user_id,text:o.nickname + '-' + o.username}));
			}
			else if(json.error){
				console.error(json.error);
			}
		},
				async get_user_session_tenant_user(){
			var _this = this;
			var json = await this.$get("~/api/user_group/get_obj?name=租客用户");
			if(json.result && json.result.obj){
				var source_table = json.result.obj.source_table;
				var user_id = _this.$store.state.user.user_id;
				if (user_id){
					var url = "~/api/"+source_table+"/get_obj?"
					this.$get(url, {"user_id":_this.$store.state.user.user_id}, function(res) {
						if (res.result && res.result.obj) {
							var arr = []
							for (let key in res.result.obj) {
								arr.push(key)
							}
							var arrForm = []
							for (let key in _this.form) {
								arrForm.push(key)
							}
							_this.form["tenant_user"] = user_id
							_this.disabledObj['tenant_user' + '_isDisabled'] = true
							for (var i=0;i<arr.length;i++){
                if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
                  for (var j = 0; j < arrForm.length; j++) {
                    if (arr[i] === arrForm[j]) {
                      if (arr[i] !== "tenant_user") {
                        _this.form[arrForm[j]] = res.result.obj[arr[i]]
                        _this.disabledObj[arrForm[j] + '_isDisabled'] = true
                        break;
                      }
                    }
                  }
                }
							}
						}
					});
				}
			}
			else if(json.error){
				console.error(json.error);
			}
		},
	
	
				
	
			change_file(key_name){
			var _self = this;
				this.$chooseFile().then(res=>{
					console.log(res)

						const uploadTask = uni.uploadFile({
							url: _self.$fullUrl("/api/feedback/upload?"),
							filePath: res[0].path,
							name: "file",
							formData: {
								i_want_to_customize: "test",
							},
							header: {
								"x-auth-token": _self.$store.state.user.token,
							},
							success: function(uploadFileRes) {
								console.log(uploadFileRes)
								var filename = JSON.parse(uploadFileRes.data).result.url;
								_self.form[key_name] = filename;
							},
						});

						uploadTask.onProgressUpdate(function(res) {
							_self.percent = res.progress;
							console.log("上传进度" + res.progress);
							console.log("已经上传的数据长度" + res.totalBytesSent);
							console.log(
								"预期需要上传的数据总长度" + res.totalBytesExpectedToSend
							);
						});

				})
		},
		change_img(key_name) {
			var _self = this;
			_self.upload_img_flag = false
			// 选择图像方法
			uni.chooseImage({
				count: 1,
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: function(res) {
					const tempFilePaths = res.tempFilePaths;
					const uploadTask = uni.uploadFile({
						url: _self.$fullUrl('/api/housing_consultation/upload?'),
						filePath: tempFilePaths[0],
						name: 'file',
						formData: {
							'housing_consultation': 'test'
						},
						header: {
							'x-auth-token': _self.$store.state.user.token
						},
						success: function(uploadFileRes) {
							var filename = JSON.parse(uploadFileRes.data).result.url
							var img_url = filename
							_self.form[key_name] = img_url
						}
					});

					uploadTask.onProgressUpdate(function(res) {
						_self.percent = res.progress;
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
					});
				},
				error: function(e) {
					console.log(e);
				}
			});
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_before(param){
			var form = uni.db.get("form");
			if (form) {
        delete(form.examine_state)
        delete(form.examine_reply)
				this.obj = uni.push(this.obj ,form);
				this.form = uni.push(this.form ,form);
			}
			var arr = []
			for (let key in form) {
				arr.push(key)
			}
			for (var i=0;i<arr.length;i++){
				this.disabledObj[arr[i] + '_isDisabled'] = true
			}
																							if (this.form["consultation_date"] && JSON.stringify(this.form["consultation_date"]).indexOf("-")===-1) {
				this.form["consultation_date"] = this.$toTime(parseInt(this.form["consultation_date"]), "yyyy-MM-dd")
			}
								uni.db.del("form");
			return param;
		},

		/**
		 * 获取对象后获取缓存表单
		 * @param {Object} json
		 * @param {Object} func
		 */
		get_obj_after(json ,func){
			var form = uni.db.get("form");
			var obj = Object.assign({} ,form ,this.obj);
			if (form) {
				this.obj = uni.push(this.obj ,obj);
			}
			if (form) {
				this.form = uni.push(this.form ,form);
			}
			if(func){
				func(json);
			}
		},

	},
	onLoad(){
																										this.get_list_user_homeowner_user();
											this.get_user_session_tenant_user();
				this.get_list_user_tenant_user();
					},
}
</script>

<style scoped>
	input{
		font-size: 10px;
	}

	.form_edit {
		background-color: #fff;
		margin-bottom: 0.5rem;
		padding: 1rem;
		font-size: 10px;
	}

	.item {
		display: flex;
		padding: 0.2rem 0;
	}

	.left_text {
		flex: 0 0 25%;
		display: flex;
		align-items: center;
	}

	.right_text {
		flex: 0 0 75%;
		border-bottom: 1px solid #eee;
	}
	.right_text.btn_warp{
		border-bottom: 0;
	}

	.btn_submit {
		text-align: center;
		background-color: #fff;
		padding: 0.3rem;
		margin: 0.1rem 1rem;
		border: 1px solid #eee;
		border-radius: 0.5rem;
	}

	.btn_submit:hover {
		opacity: 0.5;
	}
	.btn_add_img{
		color: #D3D3D3;
		text-align: center;
		border: 1px solid #eee;
		height: 5rem;
		width: 5rem;
		position: relative;
	}
	.btn_add_img text{
		font-size: 35px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}




</style>
<style scoped>
/*新样式*/
.diy_text_row {
  display: inline-block;
}
.container {
	margin-top:1rem ;
	padding: 1rem;
    -webkit-box-shadow: 0px 0px 0px #888888;
    box-shadow: 0px 0px 0px #888888;
}
.primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
	.btn_submit{
		padding: 0;
		margin-top:1rem ;
	}
	.row-item {
		padding: 10px 10px;
	    background: #f8f6fc;
		margin-bottom: 1rem;
	}
	.diy_field{
		padding-left: 1rem;
	}
	.diy_title{
		align-items: center;
        font-size: 14px;
        color: #333;
	}

	.row-item{
		display: flex !important;
		align-items: baseline;
	}
	.diy_select_flex{
		flex: 1;
	}
	.query_select{
		flex: 1;
		border-color: rgb(229, 229, 229);
		background-color: rgb(255, 255, 255);
		border-radius: 4px;
		box-sizing: border-box;
		flex: 1;
		width: 100%;
		line-height: 2;
		font-size: 14px;
		height: 2.4em;
		min-height: 2.4em;
		display: block;
		outline:none;
	}
</style>

