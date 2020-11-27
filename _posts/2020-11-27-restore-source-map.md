---
title:  "SourceMap还原前端代码"
date:   2020-11-26 22:00:10 +0800
categories: JavaScript
tags: ["Front-end"]
---

最近做渗透测试过程中, 遇到了非常多Webpack的目标站. 通过还原前端代码找到API端点,从而得到未授权访问漏洞。

![img](https://secpulseoss.oss-cn-shanghai.aliyuncs.com/wp-content/uploads/1970/01/beepress-image-132042-1590557500.png)

在通过HTML源代码中的js找接口的时候发现可以通过浏览器调试功能的源代码处能够直接看到前端Vue具体的代码。

![image.png](https://i.loli.net/2020/11/27/6wtcbjfdYCxv2ul.png)

然后再网上查了查，找到一个工具（restore-source-tree）可以直接通过SourceMap 将前端代码还原到本地。

## 0x01  安装 restore-source-tree

~~~bash
git clone https://github.com/laysent/restore-source-tree.git 
cd restore-source-tree
npm i -g restore-source-tree
~~~



## 0x02  还原代码

找个能访问的页面按Ctrl+U 查看源代码，再随便打开一个js找到映射文件。

![img](https://secpulseoss.oss-cn-shanghai.aliyuncs.com/wp-content/uploads/1970/01/beepress-image-132042-15905575011.png)

通常我们要找到的SourceMap 映射文件都在这些文件的最下面有个注释的地方。

![img](https://secpulseoss.oss-cn-shanghai.aliyuncs.com/wp-content/uploads/1970/01/beepress-image-132042-1590557505.png)

把这 *chunk-vendors.6b92c4bd.js.map* 拼接到当前url目录就能把这个Source Map 文件下载下来了



### 使用 restore-source-tree 开始还原代码

```bash
restore-source-tree chunk-vendors.6b92c4bd.js.map

chunk-vendors.6b92c4bd.js.map 就是我们刚才拼接的文件
# -o 参数是输出目录，默认为当前目录output文件夹
```

![img](https://secpulseoss.oss-cn-shanghai.aliyuncs.com/wp-content/uploads/1970/01/beepress-image-132042-1590557507.png)



最终生成的文件会存放在`./output`目录

![img](https://secpulseoss.oss-cn-shanghai.aliyuncs.com/wp-content/uploads/1970/01/beepress-image-132042-1590557508.png)



## Reference
https://gh0st.cn/archives/2020-01-08/2

https://laysent.com/til/2019-05-03_restore-source-map



