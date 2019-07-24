module.exports = {
	devServer:{
		open:true,

		proxy:{
			"/api":{
				target:"https://midway.51tiangou.com",
				changeOrigin:true,
				pathRewrite:{
					"^/api":""
				}
			}
		}
	}
}