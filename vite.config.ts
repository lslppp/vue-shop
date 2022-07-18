import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";



// https://vitejs.dev/config/     
export default defineConfig({
  plugins: [vue()],
  transpileDependencies: true,
  lintOnSave: false,
///////////////////成功代码////////////////////////////////////////
  server: {
        port:3000,
        host: '0.0.0.0',
        cors: true,
        // open: true,
        // origin: 'http://127.0.0.1:8080'，
        proxy: {
          '/api': {
              target: 'http://localhost:3000',   //代理接口
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, '/api')
          }
        }
    },
/////////////////////////////实验例子/////////////////////////////////////
 
  // devServer:{
  //   cors: true,
  //   port:3000,
  //   open:true,
  //   host: '0.0.0.0',
  //   proxy:{
  //     '/api':{
  //       target:"http://localhost:3000",
  //       changeOrigin:true,
  //       // secure:true,
  //       pathRewrite:{ '^/api':'/api'},
  //     }
  //   }
  // },


  ////////////////////////////成功代码////////////////////////////
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});



// const { defineConfig} = require("@vue/cli-service");
// let path = require ("path");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   lintOnSave: false,
//   devServer:{
//     proxy:{
//       '/api':{
//         target:"http://localhost:3000",
//         changeOrigin:true,
//         secure:true,
//         pathRewrite:{ '^/api':'/api'},
//       }
//     }
//   },
//   configureWebpack:(config)=>{
//    config.resolve = {
//       extensions: ['.js','.json', '.vue'],
//       alias: {
//         '@': path.resolve(__dirname, './src'),
//       }
//     }
//   }
// });
