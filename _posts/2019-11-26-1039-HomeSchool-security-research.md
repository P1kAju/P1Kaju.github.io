---
title:  "1039 HomeSchool security research"
date:   2019-09-14 21:00:10 +0800
categories: research
tags: ["漏洞复现"]
---

1039家校通网上约车系统是一款驾校一体化系统。


北京壹零叁玖科技发展有限公司(简称1039公司)是国内第一家专业从事培训行业标准化软件开发和大型应用性平台的高科技企业，是培训行业信息化建设的最佳合作伙伴。


Google Hack:
~~~
intitle: 1039家校通
~~~

![image.png](https://i.loli.net/2019/10/26/fDzCsTPXkBGAipO.png)


## 漏洞利用

### SQL注入万能密码

影响版本: 家校通v1.0  - v.6.0

登录接口

~~~
/admin/Product/Comstye.aspx
/Student/StudentLogin.aspx
/Teacher/Index.aspx
~~~

**管理员**

用户名密码均输入： ' or ''=' （都是单引号）可直接进入。

![1567317867435.png](https://i.loli.net/2019/09/01/8gQHWsE7Xihzofn.png)

登陆后可任意修改网站内容

![1567318261894.png](https://i.loli.net/2019/09/01/S8bAOypRX9K2TG1.png)



### 教练点评处存在SQL注入

~~~
/Teacher/TeacherPf.aspx?yid=0030
~~~

![1567322657154.png](https://i.loli.net/2019/09/01/W8MS7TAhqfuHXD1.png)

![1567328906324.png](https://i.loli.net/2019/09/01/ldhsSJpK5X7bziy.png)



###  管理员后台增加分类处存在SQL注入

~~~
/admin/Product/comstye2.aspx
/admin/yk/Index.aspx
~~~

配合SQL万能密码进入后台，然后访问：

![1567321823408.png](https://i.loli.net/2019/09/01/oG5yqL6KBlvu42C.png)


![1567321705586.png](https://i.loli.net/2019/09/01/QzeC7uNBLPRF1oh.png)

### 后台管理编辑器任意文件上传

上传文件

![1567329246720.png](https://i.loli.net/2019/09/01/aXg3nAxYFQ2EIhr.png)



Burp抓包重放数据 模块，可以看到上传的地址；

![1567329315435.png](https://i.loli.net/2019/09/01/z9qTfBHeNMShjAI.png)



访问路径 就是大马的地址
![image.png](https://i.loli.net/2019/09/01/YxanmheG8trgodQ.png)


**WOW GETSHELL!**
![image.png](https://i.loli.net/2019/09/01/fbsNvJuHaGD7YwU.png)