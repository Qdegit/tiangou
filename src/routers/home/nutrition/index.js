export default {
	path: '/Nutrition',
	name: 'Nutrition',
	component: ()=>import("@/components/home/nutrition.vue"),
	meta:{
		flag:false,
	},
	children:[
		{
			path: "volume1",
			name: "volume1",
			component :()=>import("@/components/home/shop/volume1.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path: "price1",
			name: "price1",
			component :()=>import("@/components/home/shop/price1.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path: "comprehensive1",
			name: "comprehensive1",
			component :()=>import("@/components/home/shop/comprehensive1.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path:"/nutrition",
			redirect: "comprehensive1"
		}
	]
}