var express = require('express');
var router = express.Router();
var connection = require('../DB/sql.js');

var user = require('../DB/userSql.js');
const tencentcloud = require("tencentcloud-sdk-nodejs")
// 导入对应产品模块的client models。
const smsClient = tencentcloud.sms.v20210111.Client

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/api/code',function(req,res,next){

  let tel = req.body.phone;
  console.log(tel);
/* 实例化要请求产品(以sms为例)的client对象 */
const client = new smsClient({
  credential: {
  /* 必填：腾讯云账户密钥对secretId，secretKey。
   * 这里采用的是从环境变量读取的方式，需要在环境变量中先设置这两个值。
   * 你也可以直接在代码中写死密钥对，但是小心不要将代码复制、上传或者分享给他人，
   * 以免泄露密钥对危及你的财产安全。
   * SecretId、SecretKey 查询: https://console.cloud.tencent.com/cam/capi */
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  /* 必填：地域信息，可以直接填写字符串ap-guangzhou，支持的地域列表参考 https://cloud.tencent.com/document/api/382/52071#.E5.9C.B0.E5.9F.9F.E5.88.97.E8.A1.A8 */
  region: "ap-guangzhou",
  /* 非必填:
   * 客户端配置对象，可以指定超时时间等配置 */
  profile: {
    /* SDK默认用TC3-HMAC-SHA256进行签名，非必要请不要修改这个字段 */
    signMethod: "HmacSHA256",
    httpProfile: {
      /* SDK默认使用POST方法。
       * 如果你一定要使用GET方法，可以在这里设置。GET方法无法处理一些较大的请求 */
      reqMethod: "POST",
      /* SDK有默认的超时时间，非必要请不要进行调整
       * 如有需要请在代码中查阅以获取最新的默认值 */
      reqTimeout: 30,
      /**
       * 指定接入地域域名，默认就近地域接入域名为 sms.tencentcloudapi.com ，也支持指定地域域名访问，例如广州地域的域名为 sms.ap-guangzhou.tencentcloudapi.com
       */
      endpoint: "sms.tencentcloudapi.com"
    },
  },
})

/* 请求参数，根据调用的接口和实际情况，可以进一步设置请求参数
 * 属性可能是基本类型，也可能引用了另一个数据结构
 * 推荐使用IDE进行开发，可以方便的跳转查阅各个接口和数据结构的文档说明 */

/* 帮助链接：
 * 短信控制台: https://console.cloud.tencent.com/smsv2
 * 腾讯云短信小助手: https://cloud.tencent.com/document/product/382/3773#.E6.8A.80.E6.9C.AF.E4.BA.A4.E6.B5.81 */
const params = {
  /* 短信应用ID: 短信SmsSdkAppId在 [短信控制台] 添加应用后生成的实际SmsSdkAppId，示例如1400006666 */
  // 应用 ID 可前往 [短信控制台](https://console.cloud.tencent.com/smsv2/app-manage) 查看
  SmsSdkAppId: "1400693164",
  /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名 */
  // 签名信息可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-sign) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-sign) 的签名管理查看
  SignName: "LiSL的技术日志",
  /* 模板 ID: 必须填写已审核通过的模板 ID */
  // 模板 ID 可前往 [国内短信](https://console.cloud.tencent.com/smsv2/csms-template) 或 [国际/港澳台短信](https://console.cloud.tencent.com/smsv2/isms-template) 的正文模板管理查看
  TemplateId: "1458969",
  /* 模板参数: 模板参数的个数需要与 TemplateId 对应模板的变量个数保持一致，若无模板参数，则设置为空 */
  TemplateParamSet: ["999","333"],
  /* 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号]
   * 示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/
  PhoneNumberSet: ["+8618826054763"],
  /* 用户的 session 内容（无需要可忽略）: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
  SessionContext: "",
  /* 短信码号扩展号（无需要可忽略）: 默认未开通，如需开通请联系 [腾讯云短信小助手] */
  ExtendCode: "",
  /* 国际/港澳台短信 senderid（无需要可忽略）: 国内短信填空，默认未开通，如需开通请联系 [腾讯云短信小助手] */
  SenderId: "",
}
// 通过client对象调用想要访问的接口，需要传入请求对象以及响应回调函数
client.SendSms(params, function (err, response) {
  // 请求异常返回，打印异常信息
  if (err) {
    console.log(err)
    return
  }
  // 请求正常返回，打印response对象
  console.log(response)
})
});






router.post('/api/login',function(req,res,next){

  let params = {
    userTel: req.body.userTel,
    userPwd:  req.body.userPwd
  };
  connection.query(user.queryUserTel(params),function(error,results){
    //手机号存在
    console.log(results);
    if (results.length>0) {
      connection.query(user.queryUserPwd(params),function(error,result){
        if(result.length>0){
          //手机和密码都对　
          res.send({
            code:200,
            data:{
              success:true,
              msg:"登录成功",
              data:result[0]
            }
          })
        }
        else{
          //密码不对
            res.send({
            code:302,
            data:{
              success:false,
              msg:"密码不正确"
            }
          })
        }
      })
    }
    //手机号不存在
    else{
       res.send({
        code:301,
        data:{
          success:false,
          msg:'手机号不存在'
        }
       })
    }
  })

});






// 查询商品id的数据 
router.get('/api/goods/id',function(req,res,next){
  let id = req.query.id;
  connection.query('select * from goods_list where id = '+id+'',function(error,results){
      if(error) throw error;
      res.send({
        code:0,
        data:results[0]
      })
  })
});


router.get('/api/goods/detail',function(req,res,next){
  res.send({
    code:0
  })
});
//分类接口
router.get('/api/goods/list',function(req,res,next){
  res.send({
    code:0,
    data:[
       {
        //one
        id:0,
        name:'推荐1',
        data:[          
         {//two
           id:0,
           name:'推荐1-1',
           list:[          
            {
            //three
               id:0,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
             {
               id:1,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:2,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:3,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:4,
               name:'铁观音',
               imgUrl:'/images/list.png'
             }
           ]
         }
        ]
       },
       {
        //one
        id:1,
        name:'推荐2',
        data:[          
         {//two
           id:0,
           name:'推荐2-1',
           list:[          
            {
            //three
               id:0,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
             {
               id:1,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:2,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:3,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:4,
               name:'铁观音',
               imgUrl:'/images/list.png'
             }
           ]
         }
        ]
       },
         {
        //one
        id:2,
        name:'推荐3',
        data:[          
         {//two
           id:0,
           name:'推荐2-1',
           list:[          
            {
            //three
               id:0,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
             {
               id:1,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:2,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:3,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:4,
               name:'铁观音',
               imgUrl:'/images/list.png'
             }
           ]
         }
        ]
       },
         {
        //one
        id:3,
        name:'推荐4',
        data:[          
         {//two
           id:0,
           name:'推荐2-1',
           list:[          
            {
            //three
               id:0,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
             {
               id:1,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:2,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:3,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:4,
               name:'铁观音',
               imgUrl:'/images/list.png'
             }
           ]
         }
        ]
       },
         {
        //one
        id:4,
        name:'推荐5',
        data:[          
         {//two
           id:0,
           name:'推荐2-1',
           list:[          
            {
            //three
               id:0,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
             {
               id:1,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:2,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:3,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:4,
               name:'铁观音',
               imgUrl:'/images/list.png'
             }
           ]
         }
        ]
       },
         {
        //one
        id:5,
        name:'推荐6',
        data:[          
         {//two
           id:0,
           name:'推荐2-1',
           list:[          
            {
            //three
               id:0,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
             {
               id:1,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:2,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:3,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:4,
               name:'铁观音',
               imgUrl:'/images/list.png'
             }
           ]
         }
        ]
       },
         {
        //one
        id:6,
        name:'推荐7',
        data:[          
         {//two
           id:0,
           name:'推荐2-1',
           list:[          
            {
            //three
               id:0,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
             {
               id:1,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:2,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:3,
               name:'铁观音',
               imgUrl:'/images/list.png'
             },
              {
               id:4,
               name:'铁观音',
               imgUrl:'/images/list.png'
             }
           ]
         }
        ]
       }
    ]
  })
});
/*获取数据库的商品列表数据*/
router.get('/api/goods/shoplist',function(req,res,next){

     console.log(req.query.searchName);
  //获取前端请求的数据 
  let [searchName,orderName] = Object.keys(req.query);
  let [name,order] = Object.values(req.query);
  console.log(searchName,orderName,name,order);
  // 返回给前端的数据
  connection.query('select * from goods_list where name like "%'+name+'%" order by '+orderName+' '+order+'',function(error,result){

      res.send({
         code:0,
         data:result
      })

  })
   // let searchName = req.query.searchName;

   // connection.query('select * from goods_list where name like "%'+searchName+'%"',function(error,result){

   //     res.send({
   //      code:0,
   //      data:result
   //     })

   // })




});


/*首页镇店之宝数据*/
router.get('/api/index/0/data/1', function(req, res, next) {
res.send({
  code:0,
  data:{
     tabsValue: 0,
     tabsItems:[
        { id:0,title: '推荐', value: 0},
        { id:1,title: '618', value: 1},
        { id:2,title: '家居厨具', value: 2},
        { id:3,title: '电脑办公', value: 3},
        { id:4,title: '美妆', value: 4},
        { id:5,title: '生鲜', value: 5},
      ],
      data:[
      /*swiper*/
       {
         id:0,
         type:'swiperList',
         data:[
           {id:0,imgUrl:'./public/images/recommend.jpeg'},
           {id:1,imgUrl:'./public/images/recommend2.jpeg'},
           {id:2,imgUrl:'./public/images/recommend3.jpeg'},
           {id:3,imgUrl:'./public/images/recommend4.jpeg'}           
         ]
       },
       //icons
       {
         id:1,
         type:'iconsList',
         data:[
            {
              id:1,
              title:"猜你喜欢",
              imgUrl:"./images/my-select.png"
             },
             {
              id:2,
              title:"大电器械",
              imgUrl:"./images/my-select.png"
             },
             {
              id:3,
              title:"居家优品",
              imgUrl:"./images/my-select.png"
             },
             {
              id:4,
              title:"超市百货",
              imgUrl:"./images/my-select.png"
             },
             {
              id:5,
              title:"美妆穿搭",
              imgUrl:"./images/my-select.png"
             },
             {
              id:6,
              title:"进口好物",
              imgUrl:"./images/my-select.png"
             },
        
           ]
       },
    //recommend
       {
        id:2,
        type:'recommendList',
        data:[
            {
              id:1,
              name:'Snow Peak 雪峰',
              content:'Snow Peak 雪峰',
              price:'545.45',
              imgUrl:'./images/recommendList1.jpeg',
            },
            {
              id:2,
              name:'Snow Peak 雪峰 ',
              content:'Snow Peak 雪峰',
              price:'545.45',
              imgUrl:'./images/recommendList1.jpeg',
            },
            {
              id:3,
              name:'Snow Peak 雪峰 ',
              content:'Snow Peak 雪峰',
              price:'545.45',
              imgUrl:'./images/recommendList1.jpeg',
            }
        ]
       },

       //like
       {
        id:3,
        type:'likeList',
        data:[
            {
              id:0,
              name:'白茶',
              price:'545.45',
              imgUrl:'./images/recommendList1.jpeg',
            },
            {
              id:1,
              name:'红茶',
              price:'100',
              imgUrl:'./images/recommendList1.jpeg',
            },
            {
              id:2,
              name:'绿茶',
              price:'800',
              imgUrl:'./images/recommendList1.jpeg',
            },
            {
              id:3,
              name:'绿茶',
              price:'800',
              imgUrl:'./images/recommendList1.jpeg',
            },
            {
              id:4,
              name:'绿茶',
              price:'800',
              imgUrl:'./images/recommendList1.jpeg',
            },
            {
              id:5,
              name:'绿茶',
              price:'800',
              imgUrl:'./images/recommendList1.jpeg',
            },
             {
              id:6,
              name:'绿茶',
              price:'800',
              imgUrl:'./images/recommendList1.jpeg',
            }
        ]
       }
    ]
  },
  })
});
/*首页新品发布数据*/
router.get('/api/index/2/data/1', function(req, res, next) {
  res.send({
      code:0,
      data:[
      //ad
       {
        id:0,
        type:'adList',
        data:[
            {
              id:0,
              name:'Snow Peak 雪',
              imgUrl:'/images/recommendList1.jpeg',
            },
            {
              id:1,
              name:'Snow Peak 雪峰',
              imgUrl:'/images/recommendList1.jpeg',
            },
            {
              id:2,
              name:'Snow Peak 雪峰',
              imgUrl:'/images/recommendList1.jpeg',
            },
           {
              id:3,
              name:'Snow Peak 雪',
              imgUrl:'/images/recommendList1.jpeg',
            },
            {
              id:4,
              name:'Snow Peak 雪峰',
              imgUrl:'/images/recommendList1.jpeg',
            },
            {
              id:5,
              name:'Snow Peak 雪峰',
              imgUrl:'/images/recommendList1.jpeg',
            }
        ]
       }

   ] 
  }) 
});

module.exports = router;