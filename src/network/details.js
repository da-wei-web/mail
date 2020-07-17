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
  /**
   * 数据整合 
   */ 
  // 商品数据整合
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
  },
  // 商铺数据整合
  ShopInfo: class {
    constructor(shopInfo) {
      this.name = shopInfo.name;
      this.shopLogo = shopInfo.shopLogo;
      this.shopUrl = shopInfo.shopUrl;
      this.score = shopInfo.score;
      this.cFans = shopInfo.cFans;
      this.cSells = shopInfo.cSells;
      this.cGoods = shopInfo.cGoods;
    }
  },
  // 商品参数
  GoodsParams: class {
    constructor(info, rule) {
      this.image = this.images ? this.images[0] : '';
      this.infos = info.set;
      this.sizes = rule.tables;
    }
  }

}

