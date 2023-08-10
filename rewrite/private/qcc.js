脚本功能：企查查——解锁SVIP


使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https://apph5.qichacha.com/api/(enterpriseCenter|basic)/(getUserInfoWithSass/getUserInfoForUserCenter|getUserInfo) url script-response-body https://raw.githubusercontent.com/gjwj666/qx/main/dayone.js

[mitm] 

hostname = apph5.qichacha.com

*******************************/

const path1 = "/enterpriseCenter/getUserInfoWithSass";
const path2 = "/basic/getUserInfoForUserCenter";
const path3 = "/basic/getUserInfo";

let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
obj = {
  "myInviteCode" : "b5gsq6ajb9fspd4",
  "unionid" : "o_tBAtzOGhpwyNAbt4zAgAJzOQi8",
  "deviceToken" : "5364f1aa20af5b7ae27321a25517cb1ecc03d053955ad231888a43be7cda2a43",
  "_isSaasFKGJ" : false,
  "clientType" : 3,
  "_isTeamOwner" : false,
  "lastLoginTime" : 1691651475,
  "accountId" : 31641086,
  "sinaid" : "",
  "isEntSvip" : false,
  "weixinid" : "",
  "nickname" : "吾爱破解",
  "registTime" : 1571296749,
  "points" : 999999,
  "type" : 1,
  "registIp" : "117.136.116.196",
  "phonePrefix" : "+86",
  "isPersonalVip" : false,
  "qqunionid" : "",
  "lastLoginIp" : "117.136.116.170",
  "sex" : 0,
  "email" : "",
  "faceimg" : "https://co-image.qichacha.com/upload/face/1.jpg",
  "isEntVip" : false,
  "name" : "",
  "isActive" : 0,
  "_teamName" : "",
  "accessGroupId" : 0,
  "qqopenid" : "",
  "isComment" : 1,
  "inviteCode" : "",
  "userType" : 3,
  "lastRemindTime" : 0,
  "isPersonalSvip" : true,
  "_isTeamMember" : false,
  "_teamId" : "",
  "phone" : "18325933344",
  "guid" : "3bf796f6132a74cdf6ab12d5e09c92c3",
  "groupid" : 11,
  "userId" : "3bf796f6132a74cdf6ab12d5e09c92c3",
  "hwopenid" : ""
}
}
if ($request.url.indexOf(path2) != -1){
obj={
  "buyers" : {
    "vipList" : [
      "137****3924购买了3年VIP，25分钟前",
      "132****3753购买了3年VIP，26分钟前",
      "152****1725购买了3年VIP，27分钟前",
      "185****2991购买了3年VIP，40分钟前",
      "138****8110购买了3年VIP，43分钟前",
      "185****2722购买了3年VIP，46分钟前",
      "189****4284购买了3年VIP，46分钟前",
      "181****4498购买了3年VIP，47分钟前",
      "137****1953购买了3年VIP，51分钟前",
      "151****0636购买了3年VIP，56分钟前"
    ],
    "svipList" : [
      "159****2321购买了1年SVIP，23分钟前",
      "132****0400购买了3年SVIP，31分钟前",
      "153****6541购买了3年SVIP，34分钟前",
      "151****7923购买了3年SVIP，37分钟前",
      "132****5357购买了3年SVIP，42分钟前",
      "157****6816购买了3年SVIP，44分钟前",
      "155****4481购买了3年SVIP，45分钟前",
      "137****7177购买了3年SVIP，46分钟前",
      "139****4965购买了1年SVIP，48分钟前",
      "135****6675购买了1年SVIP，49分钟前"
    ],
    "evipList" : [
      "133****0232购买了60个企业套餐，28分钟前",
      "182****4821购买了35个企业套餐，31分钟前",
      "152****1762购买了55个企业套餐，32分钟前",
      "151****5032购买了45个企业套餐，32分钟前",
      "153****2998购买了35个企业套餐，35分钟前",
      "155****1615购买了55个企业套餐，38分钟前",
      "152****1175购买了60个企业套餐，41分钟前",
      "136****1009购买了20个企业套餐，46分钟前",
      "150****1991购买了55个企业套餐，58分钟前",
      "155****7764购买了55个企业套餐，58分钟前"
    ]
  },
  "user" : {
    "phone" : "18325933344",
    "isVip" : false,
    "balance" : 0,
    "isSvip" : true,
    "isTeamUser" : false,
    "avatar" : "https://co-image.qichacha.com/upload/face/1.jpg",
    "registTime" : 1571296749,
    "expireDate" : "2099-12-31",
    "lastVipEndDate" : "2099-12-31",
    "guid" : "3bf796f6132a74cdf6ab12d5e09c92c3",
    "udeskUrl" : "https://1520026.s2.udesk.cn/im_client/?web_plugin_id=30264&group_id=38037&c_cf_GUID=3bf796f6132a74cdf6ab12d5e09c92c3&nonce=1180611012&signature=B527461960DC7F3F040FB29FDB056E47049038587E2F473C30C185C163E1E993&timestamp=1691653610814&web_token=3bf796f6132a74cdf6ab12d5e09c92c3&encryption_algorithm=SHA256",
    "name" : "吾爱破解",
    "vipInfo" : {
      "expireApp" : "",
      "expire" : "",
      "headerInfo" : {
        "expireApp" : "",
        "expire" : "",
        "appUrl" : "https://apph5.qichacha.com/user/center?vipType=&__track=",
        "iconType" : "",
        "bgInfo" : {
          "bgUrl" : "https://co-image.qichacha.com/upload/chacha/img/vip/user-center-bg.png",
          "bgDarkUrl" : "https://co-image.qichacha.com/upload/chacha/img/vip/user-center-dark-bg.png"
        }
      },
      "statusSVIP" : {
        "isTrial" : true,
        "expire" : 4102418439
      },
      "trialType" : "",
      "statusVIP" : {
        "isTrial" : false,
        "expire" : ""
      }
    }
  }
}

}
if ($request.url.indexOf(path3) != -1){
obj = {
  "lastVipEndDate" : 4102418439,
  "msgSwitch" : "0",
  "companyName" : "",
  "phone" : "18325933344",
  "isLogin" : true,
  "isSVIP" : true,
  "teamId" : "",
  "balance" : 999999,
  "isTeamUser" : false,
  "faceimg" : "https://co-image.qichacha.com/upload/face/1.jpg",
  "isVIP" : false,
  "guid" : "3bf796f6132a74cdf6ab12d5e09c92c3",
  "cacheMail" : "",
  "nickname" : "吾爱破解",
  "email" : "",
  "name" : "",
  "myInviteCode" : "b5gsq6ajb9fspd4"
}
}
$done({body: JSON.stringify(obj)});
