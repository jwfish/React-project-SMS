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





module.exports = router;
