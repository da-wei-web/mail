import Toast from './Toast';
const obj = {};
obj.install = (Vue) => {
  console.log('我是自定义插件', Vue);
  // 1、创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  // 2、实例化组件构造器
  const toast = new toastConstructor();
  // 3、将组件对象挂载到一个元素上
  toast.$mount(document.createElement('div'));
  // 4、将上步的元素追加到dom上
  document.body.appendChild(toast.$el);
  // 5、挂载到Vue的原型上
  Vue.prototype.$toast = toast;
}

export default obj