var express = require('express');
var router = express.Router();
// var connection = require('../DB/sql.js');

// var user = require('../DB/userSql.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/login',function(req,res,next){
  
  let params = {
    userTel: req.body.userTel,
    userPwd:  req.body.userPwd
  };
  connection.query(user.queryUserTel(params),function(error,results){
    //手机号存在
    if (results.length > 0) {
      connection.query(user.queryUserPwd(params),function(error,result){
        if(result.length > 0){
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
  //获取前端请求的数据 
  let [searchName,orderName] = Object.keys(req.query);
  let [name,order] = Object.values(req.query);

  // 返回给前端的数据
  connection.query('select * from goods_list where name like "%'+name+'%" order by '+orderName+' '+order+'',function(error,result){

      res.send({
         code:0,
         data:result
      })

  })

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
           {id:0,imgUrl:'./images/recommend.jpeg'},
           {id:1,imgUrl:'./images/recommend2.jpeg'},
           {id:2,imgUrl:'./images/recommend3.jpeg'},
           {id:3,imgUrl:'./images/recommend4.jpeg'}           
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
              // imgUrl:"./images/my-select.png"
             },
             {
              id:2,
              title:"大电器械",
              // imgUrl:"./images/my-select.png"
             },
             {
              id:3,
              title:"居家优品",
              // imgUrl:"./images/my-select.png"
             },
             {
              id:4,
              title:"超市百货",
              // imgUrl:"./images/my-select.png"
             },
             {
              id:5,
              title:"美妆穿搭",
              // imgUrl:"./images/my-select.png"
             },
             {
              id:6,
              title:"进口好物",
              // imgUrl:"./images/my-select.png"
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
              imgUrl:'/images/recommend2.jpeg',
            },
            {
              id:2,
              name:'绿茶',
              price:'800',
              imgUrl:'/images/recommend3.jpeg',
            }
        ]
       }
    ]
  },
  })
});
// /*首页新品发布数据*/
// router.get('/api/index/1/data/1', function(req, res, next) {
//   res.send({
//       code:0,
//       data:[
//       //ad
//        {
//         id:0,
//         type:'adList',
//         data:[
//             {
//               id:0,
//               name:'Snow Peak 雪',
//               imgUrl:'/images/recommendList1.jpeg',
//             },
//             {
//               id:1,
//               name:'Snow Peak 雪峰',
//               imgUrl:'/images/recommendList1.jpeg',
//             },
//             {
//               id:2,
//               name:'Snow Peak 雪峰',
//               imgUrl:'/images/recommendList1.jpeg',
//             }
//         ]
//        }

//    ] 
//   }) 
// });

module.exports = router;