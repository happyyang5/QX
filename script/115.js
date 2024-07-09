const chavy = init()
const cookieName = '115网盘'
const KEY_signcookie = 'cookie_115pan'
const KEY_body = 'body_115pan'

const signinfo = {}
let VAL_signcookie = chavy.getdata(KEY_signcookie)
let VAL_body = chavy.getdata(KEY_body)
let VAL_headers = {}
;(sign = async () => {
  chavy.log(`🔔 ${cookieName}`)
  await signapp()
  showmsg()
})()
.catch((e) => chavy.log(`❌ ${cookieName} 签到失败: ${e}`))
.finally(() => chavy.done())


function signapp() {
  return new Promise((resolve, reject) => {
    const VAL_signurl = `https://proapi.115.com/115ios/2.0/user/points_sign`
    const VAL_headers = {
    'Cookie' : VAL_signcookie,
    'Accept' : `*/*`,
    'Connection' : `keep-alive`,
    'Content-Type' : `application/x-www-form-urlencoded; charset=utf-8`,
    'Accept-Encoding' : `gzip;q=1.0, compress;q=0.5`,
    'Host' : `proapi.115.com`,
    'User-Agent' : `Mozilla/5.0; Darwin/10.0; 115wangpan_ios/32.2.0`,
    'X-Req-Id' : `4082229993-0`,
    'Accept-Language' : `zh-Hans-CN;q=1.0, zh-Hant-CN;q=0.9, en-CN;q=0.8, zh-Hant-HK;q=0.7`
    }
    let url = { url: VAL_signurl, headers: VAL_headers，body: VAL_body }
    chavy.post(url, (error, response, data) => {
      try {
        signinfo.signapp = JSON.parse(data.match(/\((.*)\);/)[1])
        resolve()
      } catch (e) {
        chavy.msg(cookieName, `签到结果: 失败`, `说明: ${e}`)
        chavy.log(`❌ ${cookieName} signapp - 签到失败: ${e}`)
        chavy.log(`❌ ${cookieName} signapp - response: ${JSON.stringify(response)}`)
        resolve()
      }
    })
  })
}


function showmsg() {
  if (signinfo.signapp) {
    let subTitle, detail
    if (signinfo.state == true) {
      subTitle = '115签到结果: 成功'
      details += `积分增加:${res.data.points_num}` + `\n`;
      details += `已连续签到:${res.data.continuous_day}` + `天`;
      }
    } else if (signinfo.signapp.ret == -10006) {
      subTitle = '签到结果: 失败'
      detail = `原因: 未登录, 说明: ${signinfo.signapp.msg}`
    }
    chavy.msg(cookieName, subTitle, detail)
  }
}

function init() {
  isSurge = () => {
    return undefined === this.$httpClient ? false : true
  }
  isQuanX = () => {
    return undefined === this.$task ? false : true
  }
  getdata = (key) => {
    if (isSurge()) return $persistentStore.read(key)
    if (isQuanX()) return $prefs.valueForKey(key)
  }
  setdata = (key, val) => {
    if (isSurge()) return $persistentStore.write(key, val)
    if (isQuanX()) return $prefs.setValueForKey(key, val)
  }
  msg = (title, subtitle, body) => {
    if (isSurge()) $notification.post(title, subtitle, body)
    if (isQuanX()) $notify(title, subtitle, body)
  }
  log = (message) => console.log(message)
  get = (url, cb) => {
    if (isSurge()) {
      $httpClient.get(url, cb)
    }
    if (isQuanX()) {
      url.method = 'GET'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  post = (url, cb) => {
    if (isSurge()) {
      $httpClient.post(url, cb)
    }
    if (isQuanX()) {
      url.method = 'POST'
      $task.fetch(url).then((resp) => cb(null, resp, resp.body))
    }
  }
  done = (value = {}) => {
    $done(value)
  }
  return { isSurge, isQuanX, msg, log, getdata, setdata, get, post, done }
}
