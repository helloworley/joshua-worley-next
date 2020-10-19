const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");

module.exports = withCSS(withSass({
    target: 'serverless',
    env: {
        CONTENTFUL_SPACE: 'tgk6k1pkyqnt',
        CONTENTFUL_TOKEN: 'HcyrB461jAGcWAHXpGjp8P_P4f8t4dGsvqkbJ9Aw0eo'
    },
    webpack (config) {
        config.node = {
            fs: "empty"
        };
        config.plugins = [
            ...config.plugins,
        ]
       config.module.rules.push({
           test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
           use: {
               loader: 'url-loader',
               options: {
                   limit: 100000
               }
           },
       });

       return config;
   }
}));