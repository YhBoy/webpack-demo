

第二次提交内容
    打包html   html-webpack-plugin(插件)
	plugin:[
		new htmlWebpackPlugin({
			template: 'src/assets/test.html' // 需要打包的html 的文件
		})
	]
	
	打包 css ( 其中需要安装 style-loader css-loader less-loader less )
	module:{
        rules:[ // 配置 loader 
            {
                test:/\.less$/, //正则表达式，匹配文件类型
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:/\.css$/, //正则表达式，匹配文件类型
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
	
	打包图片 (其中需要 file-loader   url-loader )
		且配置规则还需要在 rules 下面配置
	

	
	
	配置 devServer   yarn add webpack-dev-server
	 具体查看 webpack.config.js  配置
	
	
	
	配置es6代码转成es5
	npm i babel-loader @babel/core（babel资源中心库） @babel/preset-env（babel预设） -D
	创建  .bablerc 文件  配置
		{
			"presets":[
				"@babel/preset-env"
			]
		}
	
	还是在webpack.config.js  module-> rules中配置
		{
			test:/\.js$/,
			loader:['bable-loader'],
			include:path.resolve(__dirname,'src'), // 编译src下的文件
			exclude:"/node-modules"  // 不编译node-modules下的文件
		},	



	后续还需要配置  抽离css文件  压缩css    html 和 js 文件的压缩（其他基本配置都完成了）



	配置的 压缩图片的loader 和 压缩  es6 转es5 的  babel 有点问题









	
	
	
	
	
	
	
	
	
	






