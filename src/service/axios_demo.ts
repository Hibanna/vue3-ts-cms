import axios from 'axios'

axios.defaults.baseURL = 'http://httpbin.org/'

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res)
})

axios.get('get', {
  params:{
    name : 'code'
  }
}).then((res) => {
  console.log(res)
})

axios.interceptors.request.use((config)=> {
  console.log("请求发送成功")
  return config
},(err) => {
  console.log("请求发生错误")
  return err
})
axios.interceptors.response.use((res)=> {
  console.log("服务器响应成功")
  return res
},(err)=> {
  console.log("服务器响应失败")
  return err
})
