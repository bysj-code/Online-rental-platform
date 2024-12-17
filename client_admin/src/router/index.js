import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
import register from '../views/register.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index,
		meta: {
			index: 0,
			title: '首页'
		}
	},

	// 登录
	{
		path: '/login',
		name: 'login',
		component: login,
		meta: {
			index: 0,
			title: '登录'
		}
	},

	// 注册
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {
			index: 0,
			title: '注册'
		}
	},

	// 忘记密码
	{
		path: '/forgot',
		name: "forgot",
		component: forgot,
		meta: {
			index: 0,
			title: '忘记密码'
		}
	},

	// 修改密码
	{
		path: '/user/password',
		name: "password",
		component: () => import("../views/user/password.vue"),
		meta: {
			index: 0,
			title: '修改密码'
		}
	},

	// 视频播放页
	{
		path: "/media/video",
		name: "video",
		component: () => import('../views/media/video.vue'),
		meta: {
			index: 0,
			title: "视频"
		}
	},

	// 音频播放页
	{
		path: "/media/audio",
		name: "audio",
		component: () => import('../views/media/audio.vue'),
		meta: {
			index: 0,
			title: "音频"
		}
	},



	// 友情链接路由
	// {
	// 	path: '/link/table',
	// 	name: 'link_table',
	// 	component: () => import('../views/link/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接列表'
	// 	}
	// },
	// {
	// 	path: '/link/view',
	// 	name: 'link_view',
	// 	component: () => import('../views/link/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '链接详情'
	// 	}
	// },

	// 轮播图路由
	{
		path: '/slides/table',
		name: 'slides_table',
		component: () => import('../views/slides/table.vue'),
		meta: {
			index: 0,
			title: '轮播图列表'
		}
	},
	{
		path: '/slides/view',
		name: 'slides_view',
		component: () => import('../views/slides/view.vue'),
		meta: {
			index: 0,
			title: '轮播图详情'
		}
	},
		// 文章路由
	{
		path: '/article/table',
		name: 'article_table',
		component: () => import('../views/article/table.vue'),
		meta: {
			index: 0,
			title: '文章列表'
		}
	},
	{
		path: '/article/view',
		name: 'article_view',
		component: () => import('../views/article/view.vue'),
		meta: {
			index: 0,
			title: '文章详情'
		}
	},

	// 文章分类路由
	{
		path: '/article_type/table',
		name: 'article_type_table',
		component: () => import('../views/article_type/table.vue'),
		meta: {
			index: 0,
			title: '文章分类列表'
		}
	},
	{
		path: '/article_type/view',
		name: 'article_type_view',
		component: () => import('../views/article_type/view.vue'),
		meta: {
			index: 0,
			title: '文章分类详情'
		}
	},
	
	// 广告路由
	// {
	// 	path: '/ad/table',
	// 	name: 'ad_table',
	// 	component: () => import('../views/ad/table.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告列表'
	// 	}
	// },
	// {
	// 	path: '/ad/view',
	// 	name: 'ad_view',
	// 	component: () => import('../views/ad/view.vue'),
	// 	meta: {
	// 		index: 0,
	// 		title: '广告详情'
	// 	}
	// },



	// 公告路由
	{
		path: '/notice/table',
		name: 'notice_table',
		component: () => import('../views/notice/table.vue'),
		meta: {
			index: 0,
			title: '公告信息列表'
		}
	},
	{
		path: '/notice/view',
		name: 'notice_view',
		component: () => import('../views/notice/view.vue'),
		meta: {
			index: 0,
			title: '公告信息详情'
		}
	},


	// 评论路由
	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue'),
		meta: {
			index: 0,
			title: '评论列表'
		}
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue'),
		meta: {
			index: 0,
			title: '评论详情'
		}
	},

	// 租客用户路由
	{
		path: '/tenant_user/table',
		name: 'tenant_user_table',
		component: () => import('../views/tenant_user/table.vue')
	},
	{
		path: '/tenant_user/view',
		name: 'tenant_user_view',
		component: () => import('../views/tenant_user/view.vue')
	},
	// 房主用户路由
	{
		path: '/homeowner_user/table',
		name: 'homeowner_user_table',
		component: () => import('../views/homeowner_user/table.vue')
	},
	{
		path: '/homeowner_user/view',
		name: 'homeowner_user_view',
		component: () => import('../views/homeowner_user/view.vue')
	},
	// 房源信息路由
	{
		path: '/housing_information/table',
		name: 'housing_information_table',
		component: () => import('../views/housing_information/table.vue')
	},
	{
		path: '/housing_information/view',
		name: 'housing_information_view',
		component: () => import('../views/housing_information/view.vue')
	},
	// 房源咨询路由
	{
		path: '/housing_consultation/table',
		name: 'housing_consultation_table',
		component: () => import('../views/housing_consultation/table.vue')
	},
	{
		path: '/housing_consultation/view',
		name: 'housing_consultation_view',
		component: () => import('../views/housing_consultation/view.vue')
	},
	// 租赁申请路由
	{
		path: '/lease_application/table',
		name: 'lease_application_table',
		component: () => import('../views/lease_application/table.vue')
	},
	{
		path: '/lease_application/view',
		name: 'lease_application_view',
		component: () => import('../views/lease_application/view.vue')
	},
	// 入住信息路由
	{
		path: '/check_in_information/table',
		name: 'check_in_information_table',
		component: () => import('../views/check_in_information/table.vue')
	},
	{
		path: '/check_in_information/view',
		name: 'check_in_information_view',
		component: () => import('../views/check_in_information/view.vue')
	},
	// 房租信息路由
	{
		path: '/rent_information/table',
		name: 'rent_information_table',
		component: () => import('../views/rent_information/table.vue')
	},
	{
		path: '/rent_information/view',
		name: 'rent_information_view',
		component: () => import('../views/rent_information/view.vue')
	},
	// 反馈信息路由
	{
		path: '/feedback_information/table',
		name: 'feedback_information_table',
		component: () => import('../views/feedback_information/table.vue')
	},
	{
		path: '/feedback_information/view',
		name: 'feedback_information_view',
		component: () => import('../views/feedback_information/view.vue')
	},
	// 通知信息路由
	{
		path: '/notification_information/table',
		name: 'notification_information_table',
		component: () => import('../views/notification_information/table.vue')
	},
	{
		path: '/notification_information/view',
		name: 'notification_information_view',
		component: () => import('../views/notification_information/view.vue')
	},
	// 房屋类型路由
	{
		path: '/house_type/table',
		name: 'house_type_table',
		component: () => import('../views/house_type/table.vue')
	},
	{
		path: '/house_type/view',
		name: 'house_type_view',
		component: () => import('../views/house_type/view.vue')
	},

	// 用户路由
	{
		path: '/user/table',
		name: 'user_table',
		component: () => import('../views/user/table.vue'),
		meta: {
			index: 0,
			title: '用户列表'
		}
	},
	{
		path: '/user/view',
		name: 'user_view',
		component: () => import('../views/user/view.vue'),
		meta: {
			index: 0,
			title: '用户详情'
		}
	},
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue'),
		meta: {
			index: 0,
			title: '个人信息'
		}
	},
	// 用户组路由
	{
		path: '/user_group/table',
		name: 'user_group_table',
		component: () => import('../views/user_group/table.vue'),
		meta: {
			index: 0,
			title: '用户组列表'
		}
	},
	{
		path: '/user_group/view',
		name: 'user_group_view',
		component: () => import('../views/user_group/view.vue'),
		meta: {
			index: 0,
			title: '用户组详情'
		}
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

router.beforeEach((to, from, next) => {
	let token = to.query.token;
	if (token){
		$.db.set("token",token,120);
	}
	next();
})

router.afterEach((to, from, next) => {
	let title = "线上租房平台-admin";
	document.title = title;
})

export default router
