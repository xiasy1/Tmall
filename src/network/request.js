import axios from 'axios'

export function request(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://192.168.6.144/Tmall/server2.php',
    timeout: 5000
  })
  return instance(config)
}