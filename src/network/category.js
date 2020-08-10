import {request} from './request';

export default {
  // 请求分类的数据
  getCategoryMsg: () => {
    return request({
      url: '/category'
    })
  },

  // 请求内容的数据
  getSubCategory: (maitKey) => {
    return request({
      url: '/subcategory',
      params: {
        maitKey
      }
    })
  },

  getCategoryDetail: (miniWallkey, type) => {
    return request({
      url: '/subcategory/detail',
      params: {
        miniWallkey,
        type
      }
    })
  }
}