import fly from 'flyio';
import { message } from 'antd';

fly.config = {
  ...fly.conifg,
  baseURL: 'http://localhost:4455',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
  parseJson:true,
};

/**
 * 发起请求
 * @param {string} url 
 * @param {string} method 
 * @param {object} opt 
 * 
 * @eg
 * data = body | queryString
 * 
 * opt = {
 *  method: 'get',
 *  timeout: 3000, 
 * }
 * 
 * fly 官网： https://wendux.github.io/dist/#/doc/flyio/readme
 */
export async function request(url, data, opt) {
  try {
    return await fly.request(url, data, opt);
  } catch(e) {
    message.error(`${e.message}`);
  }
}

export async function get(url, data) {
  return fly.get(url, data);
}

export async function post(url, data) {
  return fly.post(url, data);
}

export async function put(url, data) {
  return fly.put(url, data);
}

export async function del(url, data) {
  return fly.delete(url, data);
}

export async function patch(url, data) {
  return fly.post(url, data);
}

export async function head(url, data) {
  return fly.post(url, data);
}