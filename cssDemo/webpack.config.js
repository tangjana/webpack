
module.exports = {
    entry:"./main.js",
    output:{
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
       
    }

}