---
title: 证件照插入
description: ""
position: 3
category: 💐 常见问题
---

## 1. 可以插入证件照吗？

可以的。

**方式 1：选择模板中心-找到带有证件照的模板简历**

![1629537319690](https://s3.mdedit.online/blog/1629537319690.jpg)

**方式 2：直接插入 img 标签**

例如：将以下片段插入到 markdown 编辑器中

```markup
<img src="https://s3.mdedit.online/muji/muji-zhengjian.jpg" style="width:90px;position:absolute;top: 40px;right: 50px;">
```

就可以得到以下的样子。

![image-20210821171842737](https://s3.mdedit.online/blog/image-20210821171842737.png)

## 2. 如何修改证件照？

可以通过一些在线图床软件上传完图片后，获取到一个图片的在线`url`，替换 `<img>` 中的 `src`

以 [https://imagelol.com/](https://imagelol.com/) 举例。

#### 第一步

打开 [https://imagelol.com/](https://imagelol.com/)。

#### 第二步

上传你的照片/头像。

![木及简历-证件照-图床-1](https://s3.mdedit.online/blog/image-20210826231513131.png)

![](https://s3.mdedit.online/blog/image-20210826231554830.png)

![木及简历-证件照-图床-2](https://s3.mdedit.online/blog/image-20210826231628542.png)

#### 第三步

对得到的图片 url 点击复制。

![](https://s3.mdedit.online/blog/image-20210826231700797.png)

#### 第四步

粘贴替换 markdown 编辑器里你的 img 标签里的 src 属性，替换掉之前的链接。

`<img src="你的链接" style="width:90px;position:absolute;top: 40px;right: 50px;">`

#### 其他的图床

[https://sm.ms](https://sm.ms)

[https://imagelol.com](https://imagelol.com)

[https://imgkr.com](https://imgkr.com)

[https://imgtu.com](https://imgtu.com)

[https://catbox.moe](https://catbox.moe)

[https://www.niupic.com](https://www.niupic.com)

## 3. 证件照可以调整位置和大小吗？

可以的。

![image-20210826225554024](https://s3.mdedit.online/blog/image-20210826225554024.png)

点击图片，进行拖拽即可修改大小。点击控制点拖动即可修改大小。
