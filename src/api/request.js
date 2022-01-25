//对于axios进行二次封装
import axios from "axios";

import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";

const requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//请求拦截器，再发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config) => {
  //进度条开始动
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(new Error("false"));
  }
);

export default requests;
