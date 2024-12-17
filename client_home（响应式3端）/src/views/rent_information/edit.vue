<template>
	<div class="diy_edit page_rent_information" id="rent_information_edit">
		<div class='warp'>
			<div class='container'>
				<div class='row diy_edit_content_box'>
						<div v-if="$check_field('set','house_no') || $check_field('add','house_no') || $check_field('get','house_no')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								房屋编号:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_house_no" v-model="form['house_no']" placeholder="请输入房屋编号" v-if="(form['house_no'] && $check_field('set','house_no')) || (!form['house_no'] && $check_field('add','house_no'))"  :disabled="disabledObj['house_no_isDisabled']"/>
							<span v-else-if="$check_field('get','house_no')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','house_name') || $check_field('add','house_name') || $check_field('get','house_name')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								房屋名称:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_house_name" v-model="form['house_name']" placeholder="请输入房屋名称" v-if="(form['house_name'] && $check_field('set','house_name')) || (!form['house_name'] && $check_field('add','house_name'))"  :disabled="disabledObj['house_name_isDisabled']"/>
							<span v-else-if="$check_field('get','house_name')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','house_type') || $check_field('add','house_type') || $check_field('get','house_type')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								房屋类型:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_house_type" v-model="form['house_type']" placeholder="请输入房屋类型" v-if="(form['house_type'] && $check_field('set','house_type')) || (!form['house_type'] && $check_field('add','house_type'))"  :disabled="disabledObj['house_type_isDisabled']"/>
							<span v-else-if="$check_field('get','house_type')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','hall') || $check_field('add','hall') || $check_field('get','hall')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								厅室:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_hall" v-model="form['hall']" placeholder="请输入厅室" v-if="(form['hall'] && $check_field('set','hall')) || (!form['hall'] && $check_field('add','hall'))"  :disabled="disabledObj['hall_isDisabled']"/>
							<span v-else-if="$check_field('get','hall')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','detailed_address') || $check_field('add','detailed_address') || $check_field('get','detailed_address')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								详细地址:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_detailed_address" v-model="form['detailed_address']" placeholder="请输入详细地址" v-if="(form['detailed_address'] && $check_field('set','detailed_address')) || (!form['detailed_address'] && $check_field('add','detailed_address'))"  :disabled="disabledObj['detailed_address_isDisabled']"/>
							<span v-else-if="$check_field('get','detailed_address')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','homeowner_user') || $check_field('add','homeowner_user') || $check_field('get','homeowner_user')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								房主用户:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_homeowner_user" :disabled="disabledObj['homeowner_user_isDisabled']" v-model="form['homeowner_user']" v-if="(form['homeowner_user'] && $check_field('set','homeowner_user')) || (!form['homeowner_user'] && $check_field('add','homeowner_user'))" >
								<option v-for="o in list_user_homeowner_user" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','homeowner_user')">{{ form['homeowner_user'] }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','name_of_the_owner') || $check_field('add','name_of_the_owner') || $check_field('get','name_of_the_owner')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								房主姓名:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_name_of_the_owner" v-model="form['name_of_the_owner']" placeholder="请输入房主姓名" v-if="(form['name_of_the_owner'] && $check_field('set','name_of_the_owner')) || (!form['name_of_the_owner'] && $check_field('add','name_of_the_owner'))"  :disabled="disabledObj['name_of_the_owner_isDisabled']"/>
							<span v-else-if="$check_field('get','name_of_the_owner')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
							<div v-if="$check_field('set','tenant_user') || $check_field('add','tenant_user') || $check_field('get','tenant_user')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								租客用户:
							</span>
						</div>
						<div class="diy_field diy_down">
							<select id="form_tenant_user" :disabled="disabledObj['tenant_user_isDisabled']" v-model="form['tenant_user']" v-if="(form['tenant_user'] && $check_field('set','tenant_user')) || (!form['tenant_user'] && $check_field('add','tenant_user'))" >
								<option v-for="o in list_user_tenant_user" :value="o['user_id']">
									{{o['nickname'] + '-' + o['username']}}
								</option>
							</select>
							<span v-else-if="$check_field('get','tenant_user')">{{ form['tenant_user'] }}</span>
						</div>
					</div>
							<div v-if="$check_field('set','rent') || $check_field('add','rent') || $check_field('get','rent')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								租金:
							</span>
						</div>
								<!-- 数字 -->
						<div class="diy_field diy_number">
							<input type="number" id="form_rent" v-model.number="form['rent']" placeholder="请输入租金" v-if="(form['rent'] && $check_field('set','rent')) || (!form['rent'] && $check_field('add','rent'))" :disabled="disabledObj['rent_isDisabled']" />
							<span v-else-if="$check_field('get','rent')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','rent_collection_date') || $check_field('add','rent_collection_date') || $check_field('get','rent_collection_date')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								收租日期:
							</span>
						</div>
								<!-- 日期 -->
						<div class="diy_field diy_date">
							<input type="date" :disabled="disabledObj['rent_collection_date_isDisabled']" id="form_rent_collection_date" v-model="form['rent_collection_date']" placeholder="请输入收租日期" v-if="(form['rent_collection_date'] && $check_field('set','rent_collection_date')) || (!form['rent_collection_date'] && $check_field('add','rent_collection_date'))" />
							<span v-else-if="$check_field('get','rent_collection_date')">{{ form['${obj.name}'] }}</span>
						</div>
							</div>
							<div v-if="$check_field('set','remarks') || $check_field('add','remarks') || $check_field('get','remarks')" class="form-item col-12 col-md-6">
						<div class="diy_title">
							<span>
								备注:
							</span>
						</div>
								<!-- 文本 -->
									<div class="diy_field diy_text">
							<input type="text" id="form_remarks" v-model="form['remarks']" placeholder="请输入备注" v-if="(form['remarks'] && $check_field('set','remarks')) || (!form['remarks'] && $check_field('add','remarks'))"  :disabled="disabledObj['remarks_isDisabled']"/>
							<span v-else-if="$check_field('get','remarks')">{{ form['${obj.name}'] }}</span>
						</div>
										</div>
	




				</div>
				<div class="diy_edit_submit_box row">
					<div class="col-12">
						<div class="btn_box">
							<button class="btn_submit" @click="submit()">提交</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import mixin from "@/mixins/page.js";
	export default {
		mixins: [mixin],
		components: {},
		data() {
			return {
				url_get_obj: "~/api/rent_information/get_obj?",
				url_add: "~/api/rent_information/add?",
				url_set: "~/api/rent_information/set?",

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
							"hall": "",
							"detailed_address": "",
							"homeowner_user": 0,
							"name_of_the_owner": "",
							"tenant_user": 0,
							"rent": 0,
							"rent_collection_date": "",
							"remarks": "",
						"rent_information_id": 0,
				},

				obj: {
						"house_no":  '', // 房屋编号
							"house_name":  '', // 房屋名称
							"house_type":  '', // 房屋类型
							"hall":  '', // 厅室
							"detailed_address":  '', // 详细地址
							"homeowner_user": 0, // 房主用户
							"name_of_the_owner":  '', // 房主姓名
							"tenant_user": 0, // 租客用户
							"rent":  0, // 租金
							"rent_collection_date": new Date().getTime(),
							"remarks":  '', // 备注
						"rent_information_id": 0,
				},

				// 表单字段
				form: {
						"house_no":  '', // 房屋编号
							"house_name":  '', // 房屋名称
							"house_type":  '', // 房屋类型
							"hall":  '', // 厅室
							"detailed_address":  '', // 详细地址
							"homeowner_user": 0, // 房主用户
							"name_of_the_owner":  '', // 房主姓名
							"tenant_user": 0, // 租客用户
							"rent":  0, // 租金
							"rent_collection_date": new Date().getTime(),
							"remarks":  '', // 备注
						"rent_information_id": 0,
				},
				disabledObj:{
						"house_no_isDisabled": false,
							"house_name_isDisabled": false,
							"house_type_isDisabled": false,
							"hall_isDisabled": false,
							"detailed_address_isDisabled": false,
							"homeowner_user_isDisabled": false,
							"name_of_the_owner_isDisabled": false,
							"tenant_user_isDisabled": false,
									"rent_collection_date_isDisabled": false,
							"remarks_isDisabled": false,
					},

																// 用户列表
				list_user_homeowner_user: [],
									// 用户列表
				list_user_tenant_user: [],
							
				// ID字段
				field: "rent_information_id",

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
			 * 修改文件
			 * @param { Object } files 上传文件对象
			 * @param { String } str 表单的属性名
			 */
			change_file(files, str) {
				var form = new FormData();
				form.append("file", files[0]);
				this.$post("~/api/rent_information/upload?", form, (res) => {
					if (res.result) {
						this.form[str] = res.result.url;
					} else if (res.error) {
						this.$toast(res.error.message);
					}
				});
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_before(param){
				var form = $.db.get("form");
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
        //   this.obj = $.push(this.obj ,form);
				// 	this.form = $.push(this.form ,form);
				// }
				// var arr = []
				// for (let key in form) {
				// 	arr.push(key)
				// }
				// for (var i=0;i<arr.length;i++){
				// 	this.disabledObj[arr[i] + '_isDisabled'] = true
				// }
        if (form) {
          var arr = []
          for (let key in form) {
            arr.push(key)
          }
          var arrForm = []
          for (let key in this.form) {
            arrForm.push(key)
          }
          for (var i=0;i<arr.length;i++){
            if (arr[i]!=='examine_state' && arr[i]!=='examine_reply') {
              for (var j = 0; j < arrForm.length; j++) {
                if (arrForm[j] === arr[i]) {
                  this.form[arrForm[j]] = form[arr[i]]
                  this.obj[arrForm[j]] = form[arr[i]]
                  this.disabledObj[arrForm[j] + '_isDisabled'] = true
                  break;
                }
              }
            }
          }
        }
																				        if (JSON.stringify(this.form["rent_collection_date"]).indexOf("-")===-1) {
          this.form["rent_collection_date"] = this.$toTime(parseInt(this.form["rent_collection_date"]), "yyyy-MM-dd")
        }
			
        $.db.del("form");
				return param;
			},

			/**
			 * 获取对象后获取缓存表单
			 * @param {Object} json
			 * @param {Object} func
			 */
			get_obj_after(json ,func){
				// var form = $.db.get("form");
				// var obj = Object.assign({} ,form ,this.obj);
				// if (obj) {
        //   delete(obj.examine_state)
        //   delete(obj.examine_reply)
				// 	this.obj = $.push(this.obj ,obj);
				// }
				// if (form) {
        //   delete(form.examine_state)
        //   delete(form.examine_reply)
				// 	this.form = $.push(this.form ,form);
				// }
				if(func){
					func(json);
				}
			},

		},
		created() {
																					this.get_list_user_homeowner_user();
										this.get_list_user_tenant_user();
												},
	}
</script>

<style>




</style>
