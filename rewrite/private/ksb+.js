/* 
       苹果商店下载: 考试宝 
   修改内容：解锁永久会员  
   注意事项：开启一次就解锁永久  
         [rewrite_local] 
   ^https:\/\/api\.ankianki\.com\/user\/userInfo\/get url script-response-body ksb+.js 
       [mitm]  
   hostname = scanner.myhithink.com 
   */ 
       var pojie=JSON.parse($response.body);  
 // 
   pojie ={
  "code" : "200",
  "data" : {
    "uid" : 8888888,
    "user_type" : 2,
    "max_paper_limit" : 10000,
    "created_at" : "2023-02-24 09:10:49",
    "free_ad_expiration_time" : "1970-01-01 08:00:00",
    "platform" : "iOS",
    "auto_analysis_package" : 10000,
    "last_login_ip" : "117.136.103.37",
    "openid_platform" : null,
    "extra_exam_number" : [

    ],
    "nickname" : "183****8888",
    "my_invite_code" : "CH8GVM",
    "remove_error_limit" : 3,
    "invite_uid" : 0,
    "yst_vip_expiration_time" : "2099-12-31 23:59:59",
    "qr_code_logo" : null,
    "vip_expiration_time" : "2099-12-31 23:59:59",
    "area" : null,
    "email" : null,
    "sex" : 1,
    "channel" : null,
    "kefu_import_paper_number" : 10000,
    "source" : 10000,
    "export_system_paper_number" : 10000,
    "expiration_time" : null,
    "system_error_recovery" : 1,
    "domain" : null,
    "status" : 1,
    "avatar" : "https://resource.zaixiankaoshi.com/web/def-head.png",
    "miniapp_config" : "",
    "smart_create_question" : 5,
    "company_config" : "",
    "yst_vip_type" : 2,
    "last_login_time" : 1688680469,
    "updated_at" : "2023-02-24 09:10:49",
    "group_config" : null,
    "openid" : null,
    "author_intro" : null,
    "vip_config" : {
      "exam_questions_limit" : 100,
      "paper_create_limit" : 20,
      "exam_paper_limit" : 100,
      "question_limit" : 1000,
      "paper_collect_limit" : 10,
      "exam_member_limit" : 50,
      "desc" : "破解成功",
      "exam_limit" : 10,
      "price" : 1000,
      "paper_document_limit" : 2,
      "exam_submit_limit" : 3,
      "paid_kaoshi_limit" : 0,
      "alert_title" : "超级用户",
      "paper_limit" : 20
    },
    "traffic_package" : 1073741824,
    "is_show_ad" : 0,
    "real_name_passed" : 0,
    "password" : null,
    "phone" : "18888888888",
    "phone_code_number" : 0,
    "extend" : null,
    "vip_type" : 2
  },
  "time" : "1688681684",
  "encrypt" : "5SAWCgZrR4Qzmd5YudeBFT=="
} 
   $done({body:JSON.stringify(pojie)}); 
