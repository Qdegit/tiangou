export default {
	path: '/Clean',
	name: 'Clean',
	component: ()=>import("@/components/home/clean.vue"),
	meta:{
		flag:false,
	},
	children:[
		{
			path: "volume2",
			name: "volume2",
			component :()=>import("@/components/home/shop/volume2.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path: "price2",
			name: "price2",
			component :()=>import("@/components/home/shop/price2.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path: "comprehensive2",
			name: "comprehensive2",
			component :()=>import("@/components/home/shop/comprehensive2.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path:"/Clean",
			redirect: "comprehensive2"
		}
	]
}