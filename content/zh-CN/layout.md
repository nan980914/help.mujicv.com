---
title: 常见布局
description: ""
position: 4
category: 💐 常见问题
---

## 1.如何插入空格？

目前只能依靠 markdown 的空格识别格式，就是插入字符 `&nbsp;`

## 2.如何插入一个空行

可以通过插入一行文字，然后文字内只写 `&nbsp;` , 在所见即所得模式中，你可以使用以下功能快速插入。

<img src="https://s3.mdedit.online/blog/image-20220619163725968.png?imageView2/0/format/webp/q/75/w/400" alt="image-20220619163725968" />

## 3.如何处理左右布局

**方式 1：**

使用一对`:::`包裹住你的左右块，并写上`left` `right`标志即可，示例如下：

```
::: left

🎉 这里书写你的左侧 Markdown 内容

:::


::: right

🎉 这里书写你的右侧 Markdown 内容

:::
```

**方式 2：**

使用表格布局，在所见即所得编辑器中，找到表格

![image-20220619164428186](https://s3.mdedit.online/blog/image-20220619164428186.png?imageView2/0/format/webp/q/75/w/400)

通过上方的左中右来控制位置。

![image-20220619164525341](https://s3.mdedit.online/blog/image-20220619164525341.png?imageView2/0/format/webp/q/75)

## 4.如何处理左中右布局

在左右布局表格的基础上，继续增加一列来布局，即可得到三列布局

![image-20220619164645465](https://s3.mdedit.online/blog/image-20220619164645465.png?imageView2/0/format/webp/q/75)

效果图：

![image-20220619164716010](https://s3.mdedit.online/blog/image-20220619164716010.png?imageView2/0/format/webp/q/75)
