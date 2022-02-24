const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry:path.resolve(__dirname,'src',"index.js"),
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[ 
            {
                test:/\.js$/,
                loader:['bable-loader'],
                include:path.join(__dirname,'src'),
                exclude:/node_modules/
            },
            {
                test:/\.less$/, 
                use:[
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test:/\.css$/, 
                use:[
                    "style-loader",
                    "css-loader"
                ]
            }
            
        ]
    },
    plugins:[ 
        new htmlWebpackPlugin({ // 配置打包html
            template: path.resolve(__dirname,'src','index.html')
        })
    ],
    mode:"development",
    devServer:{
        compress:true,
        open:true,
        port:3001,
        static:path.resolve(__dirname,"dist")
    }
}