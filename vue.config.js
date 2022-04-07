const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: '/',
    // css: {
    //     loaderOptions: {
    //         less: {
    //             lessOption: {
    //                 includePaths: ['./node_modules', './src/assets'],
    //             },
    //         },
    //     },
    // },
});
