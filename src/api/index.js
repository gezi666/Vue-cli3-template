// 接口相关

import axios from "axios";

const defaultConfing = {
  timeout: 10000 // 请求超时时间，单位ms
};

/**
 * 请求方法
 * @param {String} method 请求方法 get/post/put...
 * @param {String} url 请求地址
 * @param {Object} data 请求参数
 * @param {Object} config 请求配置
 */
function request(method, url, data, config = {}) {
  method = method.toLowerCase();
  url = API_URL + url; // API_URL为生产环境请求地址
  data = method === "get" ? { params: data } : data;

  const newConfig = Object.assign({}, defaultConfing, config); // 合并请求配置项

  return new Promise(function(resolve, reject) {
    axios[method](url, data, newConfig)
      .then((res) => {
        if (res.status === 200) {
          console.log("请求成功", res);
          resolve(res.data);
        } else {
          console.log("请求异常", res);
          reject(res);
        }
      })
      .catch((e) => {
        console.log("请求异常", e);
        reject(e);
      });
  });
}

export default request;
