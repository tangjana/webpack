module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options:'1024'
                    }
                ]
            }

        ]
    }
}