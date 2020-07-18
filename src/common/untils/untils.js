// 防抖
export function debance(fun, delay) {
  let timer = null;
  return function (...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  }
}

// 转换日期格式
export function formaDate(date, fmt) {
  /*
   * 正则表达式
   * y+ 一个或者多个y
   * RegExp.$1表示匹配到的内容
   * (date.getYear() + '') 转换成字符串
   * substr(number) 截取(从左到右)保留剩下的字符
   */ 

  if(/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  let o = {
    'M+': date.getMonth() + 1, // 月份是从0起, 因此+1符合人的习惯
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }

  for(let key in o) {
    if(new RegExp(`(${key})`).test(fmt)) {
      let str = o[key] + '';
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZera(str))
    }
  }
  return fmt;
}

function padLeftZera(str) {
  return ('00' + str).substr(str.length)
}