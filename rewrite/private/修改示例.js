/*
脚本重响应by.yang
by.yang-破解
更新时间2023.7.6
[rewrite_local]
^https?:\/\/.*\/m_user\/info url script-response-body 脚本路径   //修改响应
^https?:\/\/.*\/m_sns\/(film|video|short_video)\/(film_detail|detail_list|apply_play) url script-request-header 脚本路径  //修改提交参数
[mitm]
hostname = appapi.zdxclr.com, appapi.17gwl.com, appapi.mnghx.info, api.cxznl.com, api.jinhuachuangxin.com, api.shizhongruyi.com, c0d4b0d6567d54aabb92d02300a8bc36.com
*/

var body = $response.body;
body = "修改响应主体";
$done({
    body
});