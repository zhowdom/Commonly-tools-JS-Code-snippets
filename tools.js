/**
 * 
 * @descriptions 常用JS代码片段
 */

// 解析URL地址中的参数(方法1)
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

/**
 * HTTPS:WWW.BAIDU.COM?ID=1&NAME='MACO'&AGE=18
 * => {ID: '1', NAME: "'MACO'", AGE: '18'}
 */