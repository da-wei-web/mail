import { request } from './request';

export default {
  toGoodsDetail: iid => {
    return request({
      url: '/detail', 
      params: {
        // 和后端数据接口的id字段名保持一致
        iid
      } 
    })
  },
  // 数据整合
  GoodsInfo: class {
    constructor(itemInfo, columns,services) {
      this.title = itemInfo.title;
      this.desc = itemInfo.desc;
      this.discountDesc = itemInfo.discountDesc;
      this.discountBgColor = itemInfo.discountBgColor;
      this.price = itemInfo.price;
      this.oldPrice = itemInfo.oldPrice;
      this.columns = columns;
      this.services = services;
    }
  }
}

