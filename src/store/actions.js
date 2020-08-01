// 引入常量
import { ADD_COUNTER, ADD_TO_CART } from './mutations.type';

export const actions = {
  addCart(context, payload) {
    // 方法 1:
    // let oldProduct = null;
    // for(let item of state.contentCart) {
    //   if(item.iid === payload.iid) oldProduct = item;
    // }

    // 方法2:
    let oldProduct = context.state.contentCart.find(item => item.iid === payload.iid);

    if(oldProduct) {
      // oldProduct.count += 1;
      context.commit(ADD_COUNTER, oldProduct);
    }else {
      payload.checked = true;
      payload.count = 1;
      context.commit(ADD_TO_CART, payload)
      // context.state.contentCart.push(payload);
    }
  }
}