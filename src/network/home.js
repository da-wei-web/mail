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
  },
  toGoodsDetail: iid => {
    return request({
      url: '/detail', 
      params: {
        // 和后端数据接口的id字段名保持一致
        iid
      } 
    })
  }

}