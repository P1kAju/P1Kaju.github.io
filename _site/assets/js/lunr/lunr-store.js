var store = [{
        "title": "1039 HomeSchool security research",
        "excerpt":"1039家校通网上约车系统是一款驾校一体化系统。   北京壹零叁玖科技发展有限公司(简称1039公司)是国内第一家专业从事培训行业标准化软件开发和大型应用性平台的高科技企业，是培训行业信息化建设的最佳合作伙伴。   Google Hack:  intitle: 1039家校通      漏洞利用   SQL注入万能密码   影响版本: 家校通v1.0  - v.6.0   登录接口   /admin/Product/Comstye.aspx /Student/StudentLogin.aspx /Teacher/Index.aspx   管理员   用户名密码均输入： ‘ or ‘’=’ （都是单引号）可直接进入。      登陆后可任意修改网站内容      教练点评处存在SQL注入   /Teacher/TeacherPf.aspx?yid=0030         管理员后台增加分类处存在SQL注入   /admin/Product/comstye2.aspx /admin/yk/Index.aspx   配合SQL万能密码进入后台，然后访问：         后台管理编辑器任意文件上传   上传文件      Burp抓包重放数据 模块，可以看到上传的地址；      访问路径 就是大马的地址    WOW GETSHELL!   ","categories": ["research"],
        "tags": ["漏洞复现"],
        "url": "http://localhost:4000/research/1039-HomeSchool-security-research/",
        "teaser": null
      }]
