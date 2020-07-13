import { request } from "./request";

// 相当于服务器端的controller
export default {
  getHomeMultidata: () => {
    return request({
      url: '/home/multidata'
    })
  },
  getHomeGoods: (type, page) => {
    return request({
      url: '/home/data',
      params: {
        type,
        page
      }
    })
  }
}