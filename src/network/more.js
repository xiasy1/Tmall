import {request} from "./request.js"

export function getNavListInfo() {
  return request({
    params: {
      name: 'morelist'
    }
  })
}