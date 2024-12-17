<template>
	<view class="page_housing_information diy_list diy_list_page div_list_tml" id="housing_information_list">
		<!-- 筛选模块(开始) -->
		<view>
			<view class="container">
				<view>
					<view>
						<view class="">
							<!-- 搜索栏 -->
														<uni-search-bar placeholder="搜索房屋名称" @confirm="search" @cancel="cancel" cancelText="取消"
											@input="input($event, 'house_name')">
								<uni-icons slot="searchIcon" color="#999999" size="18" type="home" />
							</uni-search-bar>
																												<!-- /搜索栏 -->
						</view>
					</view>
				</view>

				<view>
					<view>
						<view class="tab_view">
							<!-- 筛选栏 -->
																			<uni-section title="房屋类型" type="line">
							<uni-data-select
									@change="change_house_type"
									v-model="query['house_type']"
									:localdata="list_house_type"
							></uni-data-select>
							</uni-section>
																					<uni-section title="厅室" type="line">
							<uni-data-select
									@change="change_hall"
									v-model="query['hall']"
									:localdata="list_hall"
							></uni-data-select>
							</uni-section>
																	<!-- /筛选栏 -->
						</view>
					</view>
				</view>

				<view>
					<view>
						<view class="sort_view">
							<!-- 排序 -->
							<view class="list_orderby">
								<bar_orderby :text="o.name" v-model:direction="o.direction" :direction.sync="o.direction"
											 v-for="(o,i) in list_orderby" :key="i" @handle="handleOrderby">
								</bar_orderby>
							</view>
							<!-- /排序 -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 筛选模块(结束) -->
		<!-- 列表 -->
			<view class="warp" >
			<view class="container">
				<view v-for="(o,i) in list" class="row box_style">
							<view class="col" v-if="0 && $check_field('get','house_no')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>房屋编号</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["house_no"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="1 && $check_field('get','house_name')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>房屋名称</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["house_name"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="1 && $check_field('get','cover')">
						<view class="view">
							<view class="diy_title" v-if=" false">
								<span>封面</span>
							</view>
										<view class="diy_field diy_img">
								<img :src="$fullUrl(o['cover'])" width="100%" height="100" />
							</view>
									</view>
					</view>
							<view class="col" v-if="1 && $check_field('get','house_type')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>房屋类型</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["house_type"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="1 && $check_field('get','deposit')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>押金</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["deposit"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="1 && $check_field('get','rent')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>租金</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["rent"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="0 && $check_field('get','hall')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>厅室</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["hall"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="0 && $check_field('get','detailed_address')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>详细地址</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["detailed_address"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="0 && $check_field('get','house_details')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>房屋详情</span>
							</view>
										<view class="diy_field diy_html">
								<rich-text v-html="o['house_details']"></rich-text>
							</view>
									</view>
					</view>
							<view class="col" v-if="0 && $check_field('get','homeowner_user')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>房主用户</span>
							</view>
										<view class="diy_field diy_uid">
								<span>
									{{ get_user_homeowner_user(o['homeowner_user']) }}
								</span>
							</view>
									</view>
					</view>
							<view class="col" v-if="0 && $check_field('get','name_of_the_owner')">
						<view class="view">
							<view class="diy_title" v-if="true">
								<span>房主姓名</span>
							</view>
										<view class="diy_field diy_text">
								<span>
									{{ o["name_of_the_owner"] }}
								</span>
							</view>
									</view>
					</view>
							<view class="bottom-view">
								<view class="praise-title">点赞数<span>{{ o["praise_len"] }}</span></view>
									</view>
					<view class="col">
						<view class="view">
							<view class="create_time_block diy_filed diy_time">
								{{ $toTime(o["create_time"] ,"yyyy-MM-dd hh:mm:ss") }}

							</view>
						</view>
					</view>
					<view class="uni-padding-wrap uni-common-mt">
						<navigator :url="'./details?housing_information_id=' + o['housing_information_id']" class="btn btn-primary">查看详情</navigator>

					</view>
				</view>
			</view>
		</view>
			<!-- /列表 -->
		<!-- 分页器 -->
		<uni-pagination
				class="pager"
				show-icon="true"
				:total="count"
				:pageSize="query.size"
				:current="query.page"
				@change="page_change"
		></uni-pagination>
		<!-- /分页器 -->
	</view>
</template>

<script>
	import list_tab from "@/components/diy/list_tab.vue";
	import bar_orderby from "@/components/diy/bar_orderby.vue";
    import mixin from "@/libs/mixins/page.js";


	export default {
		mixins: [mixin],
		components: {
			list_tab,
			bar_orderby
		},
		data() {
			return {
				url_get_list: "~/api/housing_information/get_list?like=0",
											// 房屋类型选项列表
				list_house_type: [{value:"全部",text:"全部"}],
											// 厅室选项列表
				list_hall: [{value:"全部",text:"全部"}],
													// 用户列表
					list_user_homeowner_user: [],
					
					list_orderby: [
															{
					name: '点赞数',
					direction: "",
					command_asc: '`praise_len` asc',
					command_desc: '`praise_len` desc'
				},
				{
					name: '发布时间',
					direction: "",
					command_asc: '`create_time` asc',
					command_desc: '`create_time` desc'
				}
			],
					query: {
										"house_name": "", // 房屋名称
													"house_type": "", // 房屋类型
														"hall": "", // 厅室
													"housing_information_id": 0, // ID
						"page": 1,
						"size": 10
			},
			list: [],
					count: 50,
		}
		},
		methods: {


	/**
	 * 获取列表后
	 * @param {Object} json
	 * @param {Object} func
	 */
	get_list_after(json ,func){
		var list = json.result.list;
		// list.map((o)=>{
		// 	o["praise_len"] = 0;
		// });
		this.get_praise(list);

		if (func) {
			func(json);
		}
	},

	/**
	 * 获取点赞数
	 * @param {Object} list
	 */
	get_praise(list){
		this.$get("~/api/praise/count_group?groupby=source_id&source_table=housing_information", {}, (res) => {
			if(res.result){
				res.result.map((o)=>{
					for(var i = 0;i < list.length; i++){
						var oj = list[i];
						if(oj["housing_information_id"] === o["source_id"]){
							oj["praise_len"] = o["count"];
							break;
						}
					}
				});
			}
			else if(res.error) {
				console.error(res.error);
			}
		});
	},

	
						
			
						// 改变分类标签
	change_house_type(val) {
		if (val === "全部" || val === "") {
			this.query.house_type = "";
		}else{
			this.query.house_type = val
		}
		this.search();
	},
			
		/**
	 * 获取房屋类型列表
	 */
	async get_list_house_type() {
						var json = await this.$get("~/api/house_type/get_list?");
		if(json.result && json.result.list){
			json.result.list.map((o) => this.list_house_type.push({value:o.house_type,text:o.house_type}));
		}
		else if(json.error){
			$.toast(json.error.message);
			console.error(json.error);
		}
			},
			
			
						// 改变分类标签
	change_hall(val) {
		if (val === "全部" || val === "") {
			this.query.hall = "";
		}else{
			this.query.hall = val
		}
		this.search();
	},
			
		/**
	 * 获取厅室列表
	 */
	async get_list_hall() {
					['一室','两室','三室','四室','四室以上'].map((o) => this.list_hall.push({value:o,text:o}));
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
				
		
	input(e, key) {
		this.query[key] = e.value;
	},

	search() {
		this.query.page = 1;
		this.get_list();
	},

	// 改变分类标签
	changeScreen(idx,key) {
		if (this.query[key] === "全部") {
			this.query[key] = "";
		}
		this.search()
	},

	// 控制排序
	handleOrderby(o) {
		// console.log(o);
		// 取出对应的orderby

		// 重置其他排序的direction
		this.list_orderby.map(val => {
			if (val.name !== o.text) {
				return val.direction = ""
			}
		})

		// 找到对应的排序项，发送排序请求
		var obj_orderby = this.list_orderby.find(val => val.name === o.text)
		if (o.direction === "") {
			this.query.orderby = ""
			this.search()
		} else if (o.direction === "up") {
			this.query.orderby = obj_orderby.command_desc
			this.search()
		} else if (o.direction === "down") {
			this.query.orderby = obj_orderby.command_asc
			this.search()
		}
	},

	/**
	 * 跳转地址
	 * @param {Object} id
	 */
	to_nav(id) {
		this.$nav('/pages/housing_information/details?housing_information_id=' + id)
	},


	},
	created() {
									// 初始化房屋类型列表
		this.get_list_house_type();
									// 初始化厅室列表
		this.get_list_hall();
										this.get_list_user_homeowner_user();
						}
	}
</script>
<style scoped>
.container {
  box-shadow: none;
  -webkit-box-shadow: none;
}
.pager {
  margin-top: 1rem;
}
.uni-collapse {
  background-color: inherit;
}

.pager {
  margin-top: 1rem;
}

.tab_view {
  /* background-color: #ffffff; */
  margin: 0 auto;
}

.list_orderby {
  display: flex;
  justify-content: flex-start;
  /* background-color: #ffffff; */
  /* border-top: 5px double #ccc;
		border-bottom: 5px double #ccc; */
  margin-right: -1px;
}

.list_orderby .bar_orderby {
  border-left: 1px solid #ccc;
}
.change_table {
  height: 50px;
  margin: 0 var(--margin_base);
}
.btn_change_table {
  margin-left: auto;
  font-weight: bold;
  width: 100px;
  height: 37px;
  text-align: center;
  font-size: 0.875rem;
  border: 1px solid #cccccc;
  border-radius: 1rem;
  margin: 0.25rem;
  float: right;
}
.end-title {
  display: flex;
}
.end-title view {
  flex-grow: 1;
  text-align: center;
}
.end-cont {
  display: none;
  /* background: #c8c7cc; */
}
.btna {
  color: #ffffff;
  background: #00a0ff;
}
.dis {
  display: block;
}
.box_style {
  width: 44%;
  margin-bottom: 0.75rem;
  padding: 0.375rem;
  display: inline-block !important;
  border: 0.075rem solid #ccc;
  border-radius: 0.375rem;
  overflow: hidden;
}
.box_style:nth-child(even) {
  margin-left: 0.6rem;
}
.box_style:nth-child(even) {
  margin-left: 0.6rem;
}
.bottom-view,
.create_time_block {
  font-size: 12px;
  color: #666666;
}
.bottom-view view {
  display: inline-block;
}
.bottom-view span {
  margin-left: 5px;
  margin-right: 10px;
}
</style>
<style>
/* 新加样式 */
.uni-searchbar {
  background-color: #22b8b8;
}
.search_div .uni-searchbar .uni-searchbar__box {
  border-radius: 8px !important;
  height: auto;
}

.tab_view {
  margin: 8px auto;
  font-size: 14px;
}
.list_orderby {
  margin: 1rem;
}
.list_orderby .bar_orderby {
  margin-right: 0.5rem;
  border-left: 1px solid #ccc;
  background-color: #22b8b8;
  border-radius: 10px;
  padding: 5px;
}
.sort_view .bar_orderby .text {
  color: #fff;
}
/* 列表样式 */
.dis {
  width: 50%;
  display: inline-block;
}
.end-cont .warp .container {
  font-family: Arial, Helvetica, sans-serif;
  border: 2px solid #22b8b8;
  padding: 5px;
  /* margin-top: 10px; */
  border-radius: 8px;
  margin: 10px 5px 0 5px;
  font-size: 14px;
}
.col {
  padding: 5px;
}
.end-cont .warp .container .diy_img img {
  width: 100%;
  height: 100px;
  padding: 5px 0;
}
.diy_dj {
  display: inline-block;
  width: 50%;
}
.uni-common-mt {
  width: 100%;
}
.uni-common-mt .btn {
  font-size: 14px;
  color: #fff;
  background-color: #22b8b8;
  line-height: 2;
  margin-bottom: 8px;
  display: inline-block;
	  width: 100%;
	  text-align: center;
}
.diy_text{
	padding-left: 10px;
	 color:#22b8b8;
	 text-decoration: dashed;
}
.uni-common-mt .btn{
	display: inline-block;
	  width: 100%;
	  text-align: center;
}
.container {
  padding: 8px 0s;
}
.delete_btn{
	display: inline-block;
	padding-left: 8px;
	color: #22B8B8;
	text-decoration: underline;
}
</style>
