import { AD_FLAG, LOGIN_FLAG } from 'assets/js/storageConst'
/*
 * 制作存储定时localstorage方法
 * */
export const MyLocalStorage = {
  Cache: {
    /**
     * 总容量5M
     * 存入缓存，支持字符串类型、json对象的存储
     * 页面关闭后依然有效 ie7+都有效
     * @param key 缓存key
     * @param stringVal
     * @time 数字 缓存有效时间（秒） 默认60s
     * 注：localStorage 方法存储的数据没有时间限制。第二天、第二周或下一年之后，数据依然可用。不能控制缓存时间，故此扩展
     * */
    set: function (key, stringVal, time) {
      try {
        if (!localStorage) {
          return false;
        }
        if (!time || isNaN(time)) {
          time = 60;
        }
        var cacheExpireDate = (new Date() - 1) + time * 1000;
        var cacheVal = {
          val: stringVal,
          exp: cacheExpireDate
        };
        localStorage.setItem(key, JSON.stringify(cacheVal)); //存入缓存值
        //console.log(key+":存入缓存，"+new Date(cacheExpireDate)+"到期");
      } catch (e) {
      }
    },
    /**获取缓存*/
    get: function (key) {
      try {
        if (!localStorage) {
          return false;
        }
        var cacheVal = localStorage.getItem(key);
        var result = JSON.parse(cacheVal);
        var now = new Date() - 1;
        if (!result) {
          return null;
        } //缓存不存在
        if (now > result.exp) { //缓存过期
          this.remove(key);
          return null;
        }
        //console.log("get cache:"+key);
        return result.val;
      } catch (e) {
        this.remove(key);
        return null;
      }
    },
    /**移除缓存，一般情况不手动调用，缓存过期自动调用*/
    remove: function (key) {
      if (!localStorage) {
        return false;
      }
      localStorage.removeItem(key);
    },
    /**清空所有缓存*/
    clear: function () {
      if (!localStorage) {
        return false;
      }
      localStorage.clear();
    }
  } //end Cache
}

/*
* 检查是否执行广告
* */
export function checkADFlag () {
  console.log("执行checkADFlag")
  let AD_flag = MyLocalStorage.Cache.get(AD_FLAG)
  if (!AD_flag) {
    console.log('进入广告')
    MyLocalStorage.Cache.set(AD_FLAG, true, 30)
    return true
  } else {
    return false
  }
}

/*
* 检查是否登陆
* */
export function checkLoginFlag () {
  console.log("执行checkLoginFlag")
  let login_flag = MyLocalStorage.Cache.get(LOGIN_FLAG)
  if (!login_flag) {
    console.log('进入登陆')
    return true
  } else {
    return false
  }
}

let elementStyle = document.createElement('div').style // 能力检测
let vendor = (() => { // 供应商
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }
  return false // 如果都没有，那么这个浏览器是有问题的
})()

/*
 * 根据供应商添加前缀
 * */
export function prefixStyle (style) {
  if (vendor === false) {
    return false
  }
  
  if (vendor === 'standard') {
    return style
  }
  return vendor + style.charAt(0).toUpperCase() + style.substr(1) // 首字母大写如 webkitTransform
}
