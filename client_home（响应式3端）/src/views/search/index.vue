<template>
  <div class="page_search">
	<div class="warp">
	  <div class="container">
		<div class="row">
		  <div class="col-12">
			<div class="card_result_search">
			  <div class="title">搜索结果</div>

				<!-- 文章搜索结果 -->
			  <list_result_search
				:list="result_article"
				title="新闻资讯"
				source_table="article"
			  ></list_result_search>


						  <list_result_search
				v-if="$check_action('/tenant_user/list', 'get')"
				:list="result_tenant_user_tenant_name"
				title="租客用户租客姓名"
				source_table="tenant_user"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/tenant_user/list', 'get')"
				:list="result_tenant_user_gender"
				title="租客用户性别"
				source_table="tenant_user"
			  ></list_result_search>
									  <list_result_search
				v-if="$check_action('/homeowner_user/list', 'get')"
				:list="result_homeowner_user_name_of_the_owner"
				title="房主用户房主姓名"
				source_table="homeowner_user"
			  ></list_result_search>
								  <list_result_search
				v-if="$check_action('/homeowner_user/list', 'get')"
				:list="result_homeowner_user_gender"
				title="房主用户性别"
				source_table="homeowner_user"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/housing_information/list', 'get')"
				:list="result_housing_information_house_name"
				title="房源信息房屋名称"
				source_table="housing_information"
			  ></list_result_search>
											  <list_result_search
				v-if="$check_action('/housing_information/list', 'get')"
				:list="result_housing_information_house_type"
				title="房源信息房屋类型"
				source_table="housing_information"
			  ></list_result_search>
														  <list_result_search
				v-if="$check_action('/housing_information/list', 'get')"
				:list="result_housing_information_hall"
				title="房源信息厅室"
				source_table="housing_information"
			  ></list_result_search>
																								  <list_result_search
				v-if="$check_action('/housing_consultation/list', 'get')"
				:list="result_housing_consultation_house_name"
				title="房源咨询房屋名称"
				source_table="housing_consultation"
			  ></list_result_search>
																													  <list_result_search
				v-if="$check_action('/housing_consultation/list', 'get')"
				:list="result_housing_consultation_consultation_date"
				title="房源咨询咨询日期"
				source_table="housing_consultation"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/lease_application/list', 'get')"
				:list="result_lease_application_house_name"
				title="租赁申请房屋名称"
				source_table="lease_application"
			  ></list_result_search>
																													  <list_result_search
				v-if="$check_action('/lease_application/list', 'get')"
				:list="result_lease_application_order_date"
				title="租赁申请下单日期"
				source_table="lease_application"
			  ></list_result_search>
																		  <list_result_search
				v-if="$check_action('/check_in_information/list', 'get')"
				:list="result_check_in_information_house_name"
				title="入住信息房屋名称"
				source_table="check_in_information"
			  ></list_result_search>
																													  <list_result_search
				v-if="$check_action('/check_in_information/list', 'get')"
				:list="result_check_in_information_signing_date"
				title="入住信息签约日期"
				source_table="check_in_information"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/rent_information/list', 'get')"
				:list="result_rent_information_house_name"
				title="房租信息房屋名称"
				source_table="rent_information"
			  ></list_result_search>
																													  <list_result_search
				v-if="$check_action('/rent_information/list', 'get')"
				:list="result_rent_information_rent_collection_date"
				title="房租信息收租日期"
				source_table="rent_information"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/feedback_information/list', 'get')"
				:list="result_feedback_information_house_name"
				title="反馈信息房屋名称"
				source_table="feedback_information"
			  ></list_result_search>
																													  <list_result_search
				v-if="$check_action('/feedback_information/list', 'get')"
				:list="result_feedback_information_feedback_date"
				title="反馈信息反馈日期"
				source_table="feedback_information"
			  ></list_result_search>
															  <list_result_search
				v-if="$check_action('/notification_information/list', 'get')"
				:list="result_notification_information_house_name"
				title="通知信息房屋名称"
				source_table="notification_information"
			  ></list_result_search>
																										  <list_result_search
				v-if="$check_action('/notification_information/list', 'get')"
				:list="result_notification_information_notification_date"
				title="通知信息通知日期"
				source_table="notification_information"
			  ></list_result_search>
												  <list_result_search
				v-if="$check_action('/house_type/list', 'get')"
				:list="result_house_type_house_type"
				title="房屋类型房屋类型"
				source_table="house_type"
			  ></list_result_search>
						</div>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
import mixin from "../../mixins/page.js";
import list_result_search from "../../components/diy/list_result_search.vue";

export default {
  mixins: [mixin],
  data() {
	return {
	  "query": {
		word: "",
	  },
	  "result_article": [],
						"result_tenant_user_tenant_name":[],
								"result_tenant_user_gender":[],
									"result_homeowner_user_name_of_the_owner":[],
								"result_homeowner_user_gender":[],
												"result_housing_information_house_name":[],
											"result_housing_information_house_type":[],
														"result_housing_information_hall":[],
																								"result_housing_consultation_house_name":[],
																													"result_housing_consultation_consultation_date":[],
																		"result_lease_application_house_name":[],
																													"result_lease_application_order_date":[],
																		"result_check_in_information_house_name":[],
																													"result_check_in_information_signing_date":[],
															"result_rent_information_house_name":[],
																													"result_rent_information_rent_collection_date":[],
															"result_feedback_information_house_name":[],
																													"result_feedback_information_feedback_date":[],
															"result_notification_information_house_name":[],
																										"result_notification_information_notification_date":[],
												"result_house_type_house_type":[],
				};
  },
  methods: {
	/**
	 * 获取文章
	 */
	get_article() {
	  this.$get("~/api/article/get_list?like=0", { page: 1, size: 10, title: this.query.word }, (json) => {
		if (json.result) {
		  this.result_article = json.result.list;
		}
	  });
	},

				/**
	 * 获取tenant_name
	 */
	get_tenant_user_tenant_name(){
		this.$get("~/api/tenant_user/get_list?like=0", { page: 1, size: 10, "tenant_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_tenant_user_tenant_name = json.result.list;
			result_tenant_user_tenant_name.map(o => o.title = o['tenant_name'])
	  			this.result_tenant_user_tenant_name = result_tenant_user_tenant_name
		 	}
		});
	},
						/**
	 * 获取gender
	 */
	get_tenant_user_gender(){
		this.$get("~/api/tenant_user/get_list?like=0", { page: 1, size: 10, "gender": this.query.word }, (json) => {
		  if (json.result) {
			var result_tenant_user_gender = json.result.list;
			result_tenant_user_gender.map(o => o.title = o['gender'])
	  			this.result_tenant_user_gender = result_tenant_user_gender
		 	}
		});
	},
							/**
	 * 获取name_of_the_owner
	 */
	get_homeowner_user_name_of_the_owner(){
		this.$get("~/api/homeowner_user/get_list?like=0", { page: 1, size: 10, "name_of_the_owner": this.query.word }, (json) => {
		  if (json.result) {
			var result_homeowner_user_name_of_the_owner = json.result.list;
			result_homeowner_user_name_of_the_owner.map(o => o.title = o['name_of_the_owner'])
	  			this.result_homeowner_user_name_of_the_owner = result_homeowner_user_name_of_the_owner
		 	}
		});
	},
						/**
	 * 获取gender
	 */
	get_homeowner_user_gender(){
		this.$get("~/api/homeowner_user/get_list?like=0", { page: 1, size: 10, "gender": this.query.word }, (json) => {
		  if (json.result) {
			var result_homeowner_user_gender = json.result.list;
			result_homeowner_user_gender.map(o => o.title = o['gender'])
	  			this.result_homeowner_user_gender = result_homeowner_user_gender
		 	}
		});
	},
										/**
	 * 获取house_name
	 */
	get_housing_information_house_name(){
		this.$get("~/api/housing_information/get_list?like=0", { page: 1, size: 10, "house_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_housing_information_house_name = json.result.list;
			result_housing_information_house_name.map(o => o.title = o['house_name'])
	  			this.result_housing_information_house_name = result_housing_information_house_name
		 	}
		});
	},
									/**
	 * 获取house_type
	 */
	get_housing_information_house_type(){
		this.$get("~/api/housing_information/get_list?like=0", { page: 1, size: 10, "house_type": this.query.word }, (json) => {
		  if (json.result) {
			var result_housing_information_house_type = json.result.list;
			result_housing_information_house_type.map(o => o.title = o['house_type'])
	  			this.result_housing_information_house_type = result_housing_information_house_type
		 	}
		});
	},
												/**
	 * 获取hall
	 */
	get_housing_information_hall(){
		this.$get("~/api/housing_information/get_list?like=0", { page: 1, size: 10, "hall": this.query.word }, (json) => {
		  if (json.result) {
			var result_housing_information_hall = json.result.list;
			result_housing_information_hall.map(o => o.title = o['hall'])
	  			this.result_housing_information_hall = result_housing_information_hall
		 	}
		});
	},
																						/**
	 * 获取house_name
	 */
	get_housing_consultation_house_name(){
		this.$get("~/api/housing_consultation/get_list?like=0", { page: 1, size: 10, "house_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_housing_consultation_house_name = json.result.list;
			result_housing_consultation_house_name.map(o => o.title = o['house_name'])
	  			this.result_housing_consultation_house_name = result_housing_consultation_house_name
		 	}
		});
	},
																											/**
	 * 获取consultation_date
	 */
	get_housing_consultation_consultation_date(){
		this.$get("~/api/housing_consultation/get_list?like=0", { page: 1, size: 10, "consultation_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_housing_consultation_consultation_date = json.result.list;
			result_housing_consultation_consultation_date.map(o => o.title = o['consultation_date'])
	  			this.result_housing_consultation_consultation_date = result_housing_consultation_consultation_date
		 	}
		});
	},
																/**
	 * 获取house_name
	 */
	get_lease_application_house_name(){
		this.$get("~/api/lease_application/get_list?like=0", { page: 1, size: 10, "house_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_lease_application_house_name = json.result.list;
			result_lease_application_house_name.map(o => o.title = o['house_name'])
	  			this.result_lease_application_house_name = result_lease_application_house_name
		 	}
		});
	},
																											/**
	 * 获取order_date
	 */
	get_lease_application_order_date(){
		this.$get("~/api/lease_application/get_list?like=0", { page: 1, size: 10, "order_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_lease_application_order_date = json.result.list;
			result_lease_application_order_date.map(o => o.title = o['order_date'])
	  			this.result_lease_application_order_date = result_lease_application_order_date
		 	}
		});
	},
																/**
	 * 获取house_name
	 */
	get_check_in_information_house_name(){
		this.$get("~/api/check_in_information/get_list?like=0", { page: 1, size: 10, "house_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_check_in_information_house_name = json.result.list;
			result_check_in_information_house_name.map(o => o.title = o['house_name'])
	  			this.result_check_in_information_house_name = result_check_in_information_house_name
		 	}
		});
	},
																											/**
	 * 获取signing_date
	 */
	get_check_in_information_signing_date(){
		this.$get("~/api/check_in_information/get_list?like=0", { page: 1, size: 10, "signing_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_check_in_information_signing_date = json.result.list;
			result_check_in_information_signing_date.map(o => o.title = o['signing_date'])
	  			this.result_check_in_information_signing_date = result_check_in_information_signing_date
		 	}
		});
	},
													/**
	 * 获取house_name
	 */
	get_rent_information_house_name(){
		this.$get("~/api/rent_information/get_list?like=0", { page: 1, size: 10, "house_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_rent_information_house_name = json.result.list;
			result_rent_information_house_name.map(o => o.title = o['house_name'])
	  			this.result_rent_information_house_name = result_rent_information_house_name
		 	}
		});
	},
																											/**
	 * 获取rent_collection_date
	 */
	get_rent_information_rent_collection_date(){
		this.$get("~/api/rent_information/get_list?like=0", { page: 1, size: 10, "rent_collection_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_rent_information_rent_collection_date = json.result.list;
			result_rent_information_rent_collection_date.map(o => o.title = o['rent_collection_date'])
	  			this.result_rent_information_rent_collection_date = result_rent_information_rent_collection_date
		 	}
		});
	},
													/**
	 * 获取house_name
	 */
	get_feedback_information_house_name(){
		this.$get("~/api/feedback_information/get_list?like=0", { page: 1, size: 10, "house_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_feedback_information_house_name = json.result.list;
			result_feedback_information_house_name.map(o => o.title = o['house_name'])
	  			this.result_feedback_information_house_name = result_feedback_information_house_name
		 	}
		});
	},
																											/**
	 * 获取feedback_date
	 */
	get_feedback_information_feedback_date(){
		this.$get("~/api/feedback_information/get_list?like=0", { page: 1, size: 10, "feedback_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_feedback_information_feedback_date = json.result.list;
			result_feedback_information_feedback_date.map(o => o.title = o['feedback_date'])
	  			this.result_feedback_information_feedback_date = result_feedback_information_feedback_date
		 	}
		});
	},
													/**
	 * 获取house_name
	 */
	get_notification_information_house_name(){
		this.$get("~/api/notification_information/get_list?like=0", { page: 1, size: 10, "house_name": this.query.word }, (json) => {
		  if (json.result) {
			var result_notification_information_house_name = json.result.list;
			result_notification_information_house_name.map(o => o.title = o['house_name'])
	  			this.result_notification_information_house_name = result_notification_information_house_name
		 	}
		});
	},
																								/**
	 * 获取notification_date
	 */
	get_notification_information_notification_date(){
		this.$get("~/api/notification_information/get_list?like=0", { page: 1, size: 10, "notification_date": this.query.word }, (json) => {
		  if (json.result) {
			var result_notification_information_notification_date = json.result.list;
			result_notification_information_notification_date.map(o => o.title = o['notification_date'])
	  			this.result_notification_information_notification_date = result_notification_information_notification_date
		 	}
		});
	},
										/**
	 * 获取house_type
	 */
	get_house_type_house_type(){
		this.$get("~/api/house_type/get_list?like=0", { page: 1, size: 10, "house_type": this.query.word }, (json) => {
		  if (json.result) {
			var result_house_type_house_type = json.result.list;
			result_house_type_house_type.map(o => o.title = o['house_type'])
	  			this.result_house_type_house_type = result_house_type_house_type
		 	}
		});
	},
			
  },
  components: { list_result_search },
	created(){
    this.query.word = this.$route.query.word || "";
  },
  mounted() {
	this.get_article();
					this.get_tenant_user_tenant_name();
							this.get_tenant_user_gender();
								this.get_homeowner_user_name_of_the_owner();
							this.get_homeowner_user_gender();
											this.get_housing_information_house_name();
										this.get_housing_information_house_type();
													this.get_housing_information_hall();
																							this.get_housing_consultation_house_name();
																												this.get_housing_consultation_consultation_date();
																	this.get_lease_application_house_name();
																												this.get_lease_application_order_date();
																	this.get_check_in_information_house_name();
																												this.get_check_in_information_signing_date();
														this.get_rent_information_house_name();
																												this.get_rent_information_rent_collection_date();
														this.get_feedback_information_house_name();
																												this.get_feedback_information_feedback_date();
														this.get_notification_information_house_name();
																									this.get_notification_information_notification_date();
											this.get_house_type_house_type();
			  },
  watch: {
	$route() {
	  $.push(this.query, this.$route.query);
	  this.get_article();
				  this.get_tenant_user_tenant_name();
						  this.get_tenant_user_gender();
							  this.get_homeowner_user_name_of_the_owner();
						  this.get_homeowner_user_gender();
										  this.get_housing_information_house_name();
									  this.get_housing_information_house_type();
												  this.get_housing_information_hall();
																						  this.get_housing_consultation_house_name();
																											  this.get_housing_consultation_consultation_date();
																  this.get_lease_application_house_name();
																											  this.get_lease_application_order_date();
																  this.get_check_in_information_house_name();
																											  this.get_check_in_information_signing_date();
													  this.get_rent_information_house_name();
																											  this.get_rent_information_rent_collection_date();
													  this.get_feedback_information_house_name();
																											  this.get_feedback_information_feedback_date();
													  this.get_notification_information_house_name();
																								  this.get_notification_information_notification_date();
										  this.get_house_type_house_type();
				},
  },
};
</script>

<style scoped>
.card_search {
  text-align: center;
}
.card_result_search>.title {
  text-align: center;
  padding: 10px 0;
}
</style>
