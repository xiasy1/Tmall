import {request} from "./request.js"

// 更多页面网络请求
export function getNavListInfo() {
  return request({
    params: {
      name: 'morelist'
    }
  })
}

// 腔调商店页面网络请求
export function getToneInfo() {
  return request({
    params: {
      name: 'ToneData'
    }
  })
}

// 魅力惠页面网络请求
export function getCharmInfo() {
  return request({
    params: {
      name: 'CharmInfo'
    }
  })
}


