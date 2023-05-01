const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // allow client to make reqs to api server during development
  devServer: {
    proxy: "http://127.0.0.1:3000"
  }
})
