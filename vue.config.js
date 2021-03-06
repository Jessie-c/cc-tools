module.exports = {
  // 修改 src 目录 为 examples 目录
  // pages: {
  //   index: {
  //     entry: "examples/main.js",
  //     template: "public/index.html",
  //     filename: "index.html"
  //   }
  // 扩展 webpack 配置，使 packages 加入编译
  // chainWebpack: config => {
  //   config.resolve.alias.set("@", "examples");
  //   // config.module
  //   //   .rule("js")
  //   //   .include.add("/packages")
  //   //   .end()
  //   //   .use("babel")
  //   //   .loader("babel-loader")
  //   //   .tap(options => {
  //   //     // 修改它的选项...
  //   //     return options;
  //   //   });
  //   return config;
  // }
  // }
  devServer: {
    //跨域
    port: 8010, // 端口号
    open: false, //配置自动启动浏览器
    proxy: {
      // 配置跨域处理 可以设置多个
      "/api": {
        //target: "http://localhost:7001",
        target: "http://119.29.165.40:8010",
        changeOrigin: true
      }
    }
  }
};
