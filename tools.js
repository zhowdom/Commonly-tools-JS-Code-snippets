/**
 * 
 * @descriptions 常用JS代码片段
 */

// 解析URL中的参数(方法1)
function parseUrl (url) {
  if (!url) return
  const _params = url.split('?')[1].split('&')
  const obj = {}
  for (let s of Object.values(_params)) {
    const _keys = s.split('=')
    obj[_keys[0]] = _keys[1]
  }
  return obj
}
// test
parseUrl("HTTPS:WWW.BAIDU.COM?ID=1&NAME='MACO'&AGE=18") // => {ID: '1', NAME: "'MACO'", AGE: '18'}

// 解析URL中的参数(方法2-推荐)
function parseQuery (url) {
  q = {};
  url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
  return q;
}
// test
parseQuery("HTTPS:WWW.BAIDU.COM?ID=1&NAME='MACO'&AGE=18") // => {ID: '1', NAME: "'MACO'", AGE: '18'}


// 生成随机字符串
const randomString = () => Math.random().toString(36).slice(2);
// test
randomString();

// 去掉字符串中的元素标记
const removeTag = (fragment) => new DOMParser().parseFromString(fragment, 'text/html').body.textContent || ''
// test
removeTag(`<div>Hello World</div>`); // Hello World


// 筛选对象中指定属性
const pick = (obj, ...props) => Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));
// test
pick({a: 1, b: 2, c: 3}, 'a', 'b') // {a:1, b:2}


// 随机HEX颜色
const randomColor = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0');

// test
randomColor(); // #2f8d91

// 复制文本到剪切板
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// test
copyToClipboard('hello world');

// 获取某个日期位于当年的第几天
const dayOfYear = (date) => {
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}

// test
dayOfYear(new Date(2022, 10, 27))


/**
 * 保留传入位小数
 * 运算不做4舍5入操作
 * @param numString 需要保留小数的数字字符串
 * @param fixed 保留的小数位数
 * @returns 保留指定小数位数后的字符串,如果小数位数大于保留的小数位数,则截取小数点两位有效数字,如果输入不是数字则返回null
 */
export const keepDecimal = (numString, fixed) => {
  // 检查输入是否为数字
  if (isNaN(numString) || numString === null || numString === '') {
    return null
  }

  const [integerPart, decimalPart] = String(numString).split('.')

  // 如果没有小数部分或保留位数为0，则直接返回整数部分
  if (!decimalPart || fixed === 0) {
    return integerPart
  }

  // 截取指定的小数位数，不进行四舍五入
  const decimalPart2 = decimalPart.substring(0, fixed)

  // 拼接整数和截取的小数部分
  return integerPart + '.' + decimalPart2.padEnd(fixed, '0')
}


