const { defineConfig } = require('@vue/cli-service')
const targetserver='http://localhost:8080'
const local=''
const openapi="https://chatgptproxyapi-65a.pages.dev/api/v1/chat/completions"//此处填你的gpt代理网址
module.exports = defineConfig({
    productionSourceMap:true,
  transpileDependencies: true,
  lintOnSave:false,
  devServer:
      {
        port:80,
          proxy:
              {
                '/api':
                    {
                        target:targetserver,
                        pathRewrite:{
                            '^/api':''
                        }
                    },
                  '/openapi':
                      {
                          target:openapi,
                          changeOrigin:true,
                          pathRewrite:{
                              '^/openapi':''
                          }
                      },
                  '/local':
                      {
                          target:openapi,
                          changeOrigin:true,
                          pathRewrite:{
                              '^/local':''
                          }
                      }
              }
      },
})
