<template>
	<div>
			<el-form-item v-if="$check_register_field('add','name_of_the_owner','/homeowner_user/view')" label="房主姓名" prop="name_of_the_owner">
				<el-input id="name_of_the_owner" v-model="form['name_of_the_owner']" placeholder="请输入房主姓名"></el-input>
				</el-form-item>
				<el-form-item v-if="$check_register_field('add','gender','/homeowner_user/view')" label="性别" prop="gender">
				<el-select id="gender" v-model="form['gender']">
			<el-option v-for="o in list_gender" :key="o" :label="o" :value="o">
			</el-option>
		</el-select>
				</el-form-item>
	
	</div>
</template>

<script>
	import mixin from "@/mixins/component.js";

	export default {
		mixins: [mixin],
		props:{

			form:{
				type: Object,
				default: function(){
					return {
							"name_of_the_owner":  '' ,
								"gender":  '' ,
						}
				}
			},

		},
		data() {
			return {
				field: "homeowner_user_id",
				url_add: "~/api/homeowner_user/add?",
				url_set: "~/api/homeowner_user/set?",
				url_upload: "~/api/homeowner_user/upload?",

						list_gender: ['男','女'],
	
				rules: {
					"name_of_the_owner": [     ],
					"gender": [    {required: true,message: '性别不能为空'},  ],
				}

			}
		},
		methods: {

	
	
	

	
	
	

		},
		created() {
				}
	}
</script>
