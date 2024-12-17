<template>
  <view>
    <view class="container diy_view">
      <view>
        <view>
          <view class="">
            <uni-forms :modelValue="form"  v-if="is_view()">

              <uni-forms-item v-if="$check_field('get','house_no') || $check_field('add','house_no') || $check_field('set','house_no')" label="房屋编号" name="house_no">
                                <uni-easyinput type="text" v-model="form['house_no']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','house_no')) || (!form['rent_information_id'] && $check_field('add','house_no'))" :disabled="disabledObj['house_no_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','house_no')">
                  {{ form['house_no'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','house_name') || $check_field('add','house_name') || $check_field('set','house_name')" label="房屋名称" name="house_name">
                                <uni-easyinput type="text" v-model="form['house_name']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','house_name')) || (!form['rent_information_id'] && $check_field('add','house_name'))" :disabled="disabledObj['house_name_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','house_name')">
                  {{ form['house_name'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','house_type') || $check_field('add','house_type') || $check_field('set','house_type')" label="房屋类型" name="house_type">
                                <uni-easyinput type="text" v-model="form['house_type']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','house_type')) || (!form['rent_information_id'] && $check_field('add','house_type'))" :disabled="disabledObj['house_type_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','house_type')">
                  {{ form['house_type'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','hall') || $check_field('add','hall') || $check_field('set','hall')" label="厅室" name="hall">
                                <uni-easyinput type="text" v-model="form['hall']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','hall')) || (!form['rent_information_id'] && $check_field('add','hall'))" :disabled="disabledObj['hall_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','hall')">
                  {{ form['hall'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','detailed_address') || $check_field('add','detailed_address') || $check_field('set','detailed_address')" label="详细地址" name="detailed_address">
                                <uni-easyinput type="text" v-model="form['detailed_address']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','detailed_address')) || (!form['rent_information_id'] && $check_field('add','detailed_address'))" :disabled="disabledObj['detailed_address_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','detailed_address')">
                  {{ form['detailed_address'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','homeowner_user') || $check_field('add','homeowner_user') || $check_field('set','homeowner_user')" label="房主用户" name="homeowner_user">
                        <uni-data-select
                  id="form_homeowner_user"
                  v-model="form['homeowner_user']"
                  :localdata="list_user_homeowner_user"
                  :clear="!disabledObj['homeowner_user_isDisabled']"
                  :disabled="disabledObj['homeowner_user_isDisabled']"
                  v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','homeowner_user')) || (!form['rent_information_id'] && $check_field('add','homeowner_user'))"
                ></uni-data-select>
                <uni-data-select
                  v-model="form['homeowner_user']"
                  :localdata="list_user_homeowner_user"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get','homeowner_user')" id="homeowner_user"
                ></uni-data-select>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','name_of_the_owner') || $check_field('add','name_of_the_owner') || $check_field('set','name_of_the_owner')" label="房主姓名" name="name_of_the_owner">
                                <uni-easyinput type="text" v-model="form['name_of_the_owner']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','name_of_the_owner')) || (!form['rent_information_id'] && $check_field('add','name_of_the_owner'))" :disabled="disabledObj['name_of_the_owner_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','name_of_the_owner')">
                  {{ form['name_of_the_owner'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','tenant_user') || $check_field('add','tenant_user') || $check_field('set','tenant_user')" label="租客用户" name="tenant_user">
                        <uni-data-select
                  id="form_tenant_user"
                  v-model="form['tenant_user']"
                  :localdata="list_user_tenant_user"
                  :clear="!disabledObj['tenant_user_isDisabled']"
                  :disabled="disabledObj['tenant_user_isDisabled']"
                  v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','tenant_user')) || (!form['rent_information_id'] && $check_field('add','tenant_user'))"
                ></uni-data-select>
                <uni-data-select
                  v-model="form['tenant_user']"
                  :localdata="list_user_tenant_user"
                  :clear="false"
                  :disabled="true"
                  v-else-if="$check_field('get','tenant_user')" id="tenant_user"
                ></uni-data-select>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','rent') || $check_field('add','rent') || $check_field('set','rent')" label="租金" name="rent">
                                <uni-easyinput type="text" v-model="form['rent']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','rent')) || (!form['rent_information_id'] && $check_field('add','rent'))" :disabled="disabledObj['rent_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','rent')">
                  {{ form['rent'] }}
                </text>
                            </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','rent_collection_date') || $check_field('add','rent_collection_date') || $check_field('set','rent_collection_date')" label="收租日期" name="rent_collection_date">
                        <uni-datetime-picker v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','rent_collection_date')) || (!form['rent_information_id'] && $check_field('add','rent_collection_date'))" v-model="form['rent_collection_date']" type="date" :disabled="disabledObj['rent_collection_date_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','rent_collection_date')">
                  {{ form['rent_collection_date'] }}
                </text>
                    </uni-forms-item>
              <uni-forms-item v-if="$check_field('get','remarks') || $check_field('add','remarks') || $check_field('set','remarks')" label="备注" name="remarks">
                                <uni-easyinput type="text" v-model="form['remarks']" v-if="user_group === '管理员' || (form['rent_information_id'] && $check_field('set','remarks')) || (!form['rent_information_id'] && $check_field('add','remarks'))" :disabled="disabledObj['remarks_isDisabled']" />
                <!-- 仅查看 -->
                <text v-else-if="$check_field('get','remarks')">
                  {{ form['remarks'] }}
                </text>
                            </uni-forms-item>


            </uni-forms>
            <view class="form_button">
              <button size="mini" type="primary" @click="submit()" class="primary_btn">提交</button>
              <button size="mini" @click="cancel()">取消</button>
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
  mixins: [mixin],
  data() {
    return {
      field: "rent_information_id",
      url_add: "~/api/rent_information/add?",
      url_set: "~/api/rent_information/set?",
      url_get_obj: "~/api/rent_information/get_obj?",
      url_upload: "~/api/rent_information/upload?",

      query: {
        "rent_information_id": 0,
      },

      form: {
            "house_no":  '', // 房屋编号
                    "house_name":  '', // 房屋名称
                    "house_type":  '', // 房屋类型
                    "hall":  '', // 厅室
                    "detailed_address":  '', // 详细地址
                    "homeowner_user": 0, // 房主用户
                    "name_of_the_owner":  '', // 房主姓名
                    "tenant_user": 0, // 租客用户
                    "rent":  0 , // 租金
                    "rent_collection_date": this.$toTime(new Date().getTime(), "yyyy-MM-dd"),
                    "remarks":  '', // 备注
                                "rent_information_id": 0, // ID
                
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
                                                                                                      }
  },
  methods: {
    changeLog(v,value){
      this.form[value] = v
    },
    /**
     * 上传文件
     * @param {Object} param文件参数
     */
    change_file(key_name){
      var _self = this;
      // 选择图像方法
      uni.chooseFile({
        count: 1,
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album'], //从相册选择
        success: function(res) {
          const tempFilePaths = res.tempFilePaths;
          const uploadTask = uni.uploadFile({
            url: _self.$fullUrl('/api/rent_information/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
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
     * 上传图片
     * @param {Object} param文件参数
     */
    change_img(key_name){
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
            url: _self.$fullUrl('/api/rent_information/upload?'),
            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'i_want_to_customize': 'test'
            },
            header: {
              'x-auth-token': _self.$store.state.user.token
            },
            success: function(uploadFileRes) {
              var filename = JSON.parse(uploadFileRes.data).result.url
              _self.form[key_name] = filename
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
                                                                                      if (this.form["rent_collection_date"] && JSON.stringify(this.form["rent_collection_date"]).indexOf("-")===-1) {
        this.form["rent_collection_date"] = this.$toTime(parseInt(this.form["rent_collection_date"]), "yyyy-MM-dd")
      }
                  uni.db.del("form");
      return param;
    },
        
            
            
            
            
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
            
            
            
            
    
    /**
     * 获取对象之后
     * @param {Object} json
     * @param {Object} func
     */
    get_obj_after(json, func){
                                                                                      if (this.form["rent_collection_date"] && JSON.stringify(this.form["rent_collection_date"]).indexOf("-")===-1) {
        this.form["rent_collection_date"] = this.$toTime(parseInt(this.form["rent_collection_date"]),"yyyy-MM-dd")
      }
                },

    is_view(){
      var bl = this.user_group == "管理员";

      if(!bl){
        bl = this.$check_action('/rent_information/table','add');
        console.log(bl ? "你有表格添加权限视作有添加权限" : "你没有表格添加权限");
      }
      if(!bl){
        bl = this.$check_action('/rent_information/table','set');
        console.log(bl ? "你有表格添加权限视作有修改权限" : "你没有表格修改权限");
      }
      if(!bl){
        bl = this.$check_action('/rent_information/view','add');
        console.log(bl ? "你有视图添加权限视作有添加权限" : "你没有视图添加权限");
      }
      if(!bl){
        bl = this.$check_action('/rent_information/view','set');
        console.log(bl ? "你有视图修改权限视作有修改权限" : "你没有视图修改权限");
      }
      if(!bl){
        bl = this.$check_action('/rent_information/view','get');
        console.log(bl ? "你有视图查询权限视作有查询权限" : "你没有视图查询权限");
      }

      console.log(bl ? "具有当前页面的查看权，请注意这不代表你有字段的查看权" : "无权查看当前页，请注意即便有字段查询权限没有页面查询权限也不行");

      return bl;
    },

  },
  created() {
                                                    this.get_list_user_homeowner_user();
                                this.get_list_user_tenant_user();
                                      },
}
</script>

<style scoped>
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

.form_button{
  padding-bottom: 15px;
  display: flex;
}
.form_button button{
  width: 40%;
}
.query_select{
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

.query_option{
  width: 100%;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.form_button {
  padding-bottom: 15px;
  display: flex;
}
.form_button button {
  width: 40%;
}
.query_select {
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
  outline: none;
}

.query_option {
  width: 100%;
}

.btn_add_img {
  color: #d3d3d3;
  text-align: center;
  border: 1px solid #eee;
  height: 5rem;
  width: 5rem;
  position: relative;
}
.btn_add_img text {
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
/*新样式*/
.uni-forms{
padding-top:1rem;
}
.uni-forms-item {
	padding: 6px 10px;
    background: #f8f6fc;
}
.uni-forms .is-input-border{
	border: 0;
}
.container{
	    -webkit-box-shadow: 0px 0px 0px #888888;
	    box-shadow: 0px 0px 0px #888888;
}
.form_button .primary_btn{
		background-color: #22B8B8;
		color: #FFFFFF;
	}
</style>
