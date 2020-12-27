//登录和注册点击切换
$('#goto-register').on('click', function () {
  $('#register').stop().show()
})
$('#goto-login').on('click', function () {
  $('#register').stop().hide()
})
//登录注册表单校验
//引入form
const { form } = window.layui

//注册
form.verify({
  username: [/^[a-z0-9]{6,10}$/, '账号名是6到10位由数字, 小写字母组成'],
  password: [/^[\S]{6,12}$/, '密码必须6到12位，且不能出现空格'],
  repwd: function (value) {
    return $('.pwd').val() !== value && '两次密码不相同'
  },
})
// layui-btn layui-btn-fluid layui-bg-blue
$('#register .layui-form').on('submit', function (e) {
  e.preventDefault()
  const data = {
    username: $('#register input[name=username]').val(),
    password: $('#register input[name=password]').val(),
  }
  ///处理后台需要的数据
  const dataArr = handleDataFormatForReq(data)
  //// 发送 POST 请求
  axios
    .post(`http://ajax.frontend.itheima.net/api/reguser`, dataArr)
    .then((res) => {
      // console.log(res)
      const { message, status } = res.data
      if (status === 0) {
        layer.msg(message)
        $('#register').stop().hide()
      }
    })
})
$('#login .layui-form').on('submit', function (e) {
  e.preventDefault()
  const data = {
    username: $('#login input[name=username]').val(),
    password: $('#login input[name=password]').val(),
  }
  const dataArr = handleDataFormatForReq(data)
  axios
    .post(`http://ajax.frontend.itheima.net/api/login`, dataArr)
    .then((res) => {
      console.log(res)
      const { message, status } = res.data
      if (status === 0) {
        layer.msg(message)
        window.location.href = './index.html'
      }
    })
})
