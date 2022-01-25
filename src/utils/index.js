var cachedToken = ``; // 定义全局token
const USER_INFO = "user_info";
const TOKEN = "social-token";
/**
 * @name:
 * @description: 获取用户token
 * @method: getToken
 * @for: util
 * @param {} {参数类型} 参数名 参数说明
 * @return: {cachedToken} 返回值说明
 */
export function getToken() {
  if (cachedToken) {
    return cachedToken;
  }
  return localStorage.getItem(TOKEN);
}
/**
 * @name:
 * @description: 设置token
 * @method: setToken
 * @for: util
 * @param {token} {参数类型} 参数名 参数说明
 * @return: {token} 返回值说明
 */
export function setToken(token) {
  cachedToken = token;
  localStorage.setItem(TOKEN, token);
}

/*
 * 设置 用户信息
 */
export function setUser(user) {
  localStorage.setItem(USER_INFO, JSON.stringify(user));
}

/*
 * 获取 用户信息
 */
export function getUser() {
  return JSON.parse(localStorage.getItem(USER_INFO));
}

/*
 * 清空部分localStorage
 */
export function clear() {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER_INFO);
}

/**
 * @name:
 * @description: 日期格式化
 * @method formatterDate
 * @for util
 * @param {date: 时间字符串或者时间戳，type: 字符串(需要返回的时间类型)}
 * @param {type: minute(年月日时分) second(年月日时分秒) month(年月) monthToMinute(月日时分) dateTime(年月日) time(时分秒)}
 * @return {2020-03-17}
 */
export function formatterDate(date, type, to = 0) {
  if (!date) {
    date = new Date();
  }
  if (typeof date === "string") {
    date = new Date(date);
  }
  var y = date.getFullYear() + to, // 年
    M = date.getMonth() + 1, //月份
    d = date.getDate(), //日
    h = date.getHours(), //小时
    m = date.getMinutes(), //分
    s = date.getSeconds(); //秒
  M = M < 10 ? "0" + M : M;
  d = d < 10 ? "0" + d : d;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  switch (type) {
    case "minute":
      return `${y}-${M}-${d} ${h}:${m}`;
    case "second":
      return `${y}-${M}-${d} ${h}:${m}:${s}`;
    case "month":
      return `${y}-${M}`;
    case "monthToMinute":
      return `${m}-${d} ${h}:${m}`;
    case "hours":
      return `${h}:${m}:${s}`;
    default:
      return `${y}-${M}-${d}`;
  }
}

/**
 * 根据身份证号得到姓别和精确计算年龄
 */
export function analyzeIDCard(IDCard) {
  var sexAndAge = {};
  //获取用户身份证号码
  var userCard = IDCard;
  //如果身份证号码为undefind则返回空
  if (!userCard) {
    return sexAndAge;
  }
  //获取性别
  if (parseInt(userCard.substr(16, 1)) % 2 == 1) {
    sexAndAge.sex = "M-男";
  } else if (parseInt(userCard.substr(16, 1)) % 2 == 0) {
    sexAndAge.sex = "W-女";
  } else {
    sexAndAge.sex = "N-未知";
  }
  //获取出生年月日
  //userCard.substring(6,10) + "-" + userCard.substring(10,12) + "-" + userCard.substring(12,14);
  var yearBirth = userCard.substring(6, 10);
  var monthBirth = userCard.substring(10, 12);
  var dayBirth = userCard.substring(12, 14);
  //获取当前年月日并计算年龄
  var myDate = new Date();
  var monthNow = myDate.getMonth() + 1;
  var dayNow = myDate.getDay();
  var age = myDate.getFullYear() - yearBirth;
  if (monthNow < monthBirth || (monthNow == monthBirth && dayNow < dayBirth)) {
    age--;
  }
  //得到年龄
  sexAndAge.age = age;
  sexAndAge.birthday = `${yearBirth}-${monthBirth}-${dayBirth}`;
  //返回性别和年龄
  return sexAndAge;
}

/**
 *
 * 提示信息
 *  */
export function errorToast() {
  
}
