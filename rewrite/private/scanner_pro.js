/*



苹果商店下载: 口袋扫描仪

修改内容：解锁永久会员 

注意事项：开启一次就解锁永久 




[rewrite_local]

^https:\/\/scanner\.myhithink\.com\/scanner\_api\/user\/get url script-response-body scanner_pro.js



[mitm] 

hostname = scanner.myhithink.com

*/


 
var pojie=JSON.parse($response.body); 
//

pojie ={
  "msg": "成功",
  "payload": {
    "email_bind_reward": "1",
    "email_bind_reward_days": "180",
    "user_bind_list": [{
      "nickname": "阳阳",
      "type": 1
    }],
    "user_info": {
      "api_domain": "https://scanner.myhithink.com",
      "avatar": "https://api.hdscanner.com/scanner_file/user/20191110/42d8b92163b3df0712bd52358cd12475.png",
      "country_code": "",
      "disk_host": "https://www.hdscanner.com/cloud_disk/",
      "email": "",
      "identity_tag": 0,
      "invite_code": "4PHVKS",
      "login_type": 1,
      "nickname": "阳阳",
      "payment_url": "/website/payment-pro/index.html",
      "phone": "18888888888",
      "token": "dbb539c29ba2173a9a265402366be42e",
      "user_level": 2,
      "usercode": "c49106ba0d448aaa6ae2a12510303ada",
      "vip_days": 365,
      "vip_expired_in": 1608307200,
      "vip_type": 2,
      "vip_url": "/website/vip-pro-page/index.html"
    }
  },
  "status": 0
}

$done({body:JSON.stringify(pojie)});

