export default {
	path: '/Makeup',
	name: 'Makeup',
	component: ()=>import("@/components/home/makeup.vue"),
	meta:{
		flag:false,
	},
	children:[
		{
			path: "volume",
			name: "volume",
			component :()=>import("@/components/home/shop/volume.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path: "price",
			name: "price",
			component :()=>import("@/components/home/shop/price.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path: "comprehensive",
			name: "comprehensive",
			component :()=>import("@/components/home/shop/comprehensive.vue"),
			meta:{
				flag:false,
			},
		},
		{
			path:"/Makeup",
			redirect: "comprehensive"
		}
	]
}