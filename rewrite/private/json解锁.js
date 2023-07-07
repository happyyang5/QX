
/*
by.yang
# 考试宝解锁会员
# 功能: 解锁会员
 [rewrite_local]
^https:\/\/api\.ankianki\.com\/user\/userInfo\/get url script-response-body ksb.js
[mitm]
hostname = *api.ankianki.com
 */

var body = $response.body;
var obj = JSON.parse(body);

obj.data['user_type'] = 2;
obj.data['vip_type'] = 2;
obj.data['vip_expiration_time'] = 4102415999;
obj.data['yst_vip_type'] = 2;
obj.data['yst_vip_expiration_time'] = 4102415999;
obj.data['vip_config']['alert_title'] = 高级用户;
obj.data['vip_config'].desc = 破解by.yang;
obj.data['vip_config'].price = 10000;



body = JSON.stringify(obj);
$done({body});