import axios from 'axios'

export function request(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://172.16.0.248/Tmall/server2.php',
    timeout: 5000
  })
  return instance(config)
}