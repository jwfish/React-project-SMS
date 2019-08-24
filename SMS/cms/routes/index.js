var express = require('express');
var router = express.Router();
var url = require('url');

var bodyParser = require("body-parser");

router.use(
  bodyParser.urlencoded({
    extended: false
  })
);

router.use((req, res, next) => {
  // 全局添加
  res.append("Access-Control-Allow-Origin", "*");
  next();
});


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

//token算法       
const {
  createToken,
  decodeToken
} = require('../libs/token');

let {
  find,
  insert, //增[{name:111,age:18}，{第二个}] 数组里面包对象
  Update, //改[{旧值}，{新值}]
  Remove, //删
  // id查询
  ObjectId
} = require('../libs/mdb')


//登录页
router.post('/login', async function (req, res, next) {
  let {
    name,
    password
  } = req.body;

  let data = await find('user', {
    name: name,
    password: password
  });

  const token = createToken({
    name: name
  }, 300);
  console.log(data, token);
  res.json({
    data,
    token
  });

});


//周报获取页面
router.get('/weekly', async function (req, res, next) {
  // let {
  //   name,
  //   password
  // } = url.parse(req.url, true).query;

  let data = await find('weekly');
  console.log(data);
  res.json({
    data
  })
});


//插入新的周报
router.get('/insertweekly', async function (req, res, next) {
  let {
    name,
    title,
    textarea,
    states,
    time
  } = url.parse(req.url, true).query;

  let data = await insert('weekly', [{
    name: name,
    title: title,
    content: textarea,
    states: states,
    time: time
  }]);
  console.log(data);
  // res.json({
  //   data
  // })

  res.send(data)
});


//交费详情
router.get('/moneydetail', async function (req, res, next) {

  //查询学生交费信息
  let data = await find('money');
  console.log(data);
  res.send(data)
});


//考试列表
router.get('/exam', async function (req, res, next) {

  //查询学生交费信息
  let data = await find('exam');
  console.log(data);
  res.send(data)
});


//获取技术问题列表
router.get('/technology', async function (req, res, next) {

  let data = await find('technology');
  console.log(data);
  res.json({
    data
  })
});

//插入技术问题
router.get('/inserttechnology', async function (req, res, next) {
  let {
    name,
    question,
    time

  } = url.parse(req.url, true).query;

  let data = await insert('technology', [{
    name: name,
    question: question,
    time: time,
    reply: '暂无'
  }]);
  console.log(data);
  res.send(data)
});



//请假列表获取
router.get('/leave', async function (req, res, next) {
  let data = await find('leave');
  console.log(data);
  res.send(data)
});

//插入请假问题
router.get('/insertleave', async function (req, res, next) {
  let {
    name,
    reason,
    timeframe,
    time

  } = url.parse(req.url, true).query;

  let data = await insert('leave', [{
    name: name,
    reason: reason,
    classteacher: '未审批',
    lecturer: '未审批',
    timeframe: timeframe,
    time: time
  }]);
  console.log(data);
  res.send(data)
});


//违纪列表获取
router.get('/discipline', async function (req, res, next) {
  let data = await find('discipline');
  console.log(data);
  res.send(data)
});



//获取我的资料
router.get('/material', async function (req, res, next) {
  let data = await find('material');
  console.log(data);
  res.send(data)
});

module.exports = router;
