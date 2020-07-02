import { request } from "./request";

// 相当于服务器端的controller
export default {
  getHomeMultidata: () => {
    return request({
      url: '/home/multidata'
    })
  },
  getHomeMultidata2: () => {
    return request({
      url: '/home/multidata'
    })
  }
}