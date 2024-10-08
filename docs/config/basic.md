---
lang: zh-cn
title: 基础设置
---

# 基础设置

::: info 本节内容

本节将介绍基础设置内的内容。

:::

## Master 管理

在这里你可以管理你的骰娘的 Master 列表。

### Master 解锁码

获取 Master 解锁码。Master 解锁码的用法参见 [骰主指令](../use/core.md#master-骰主指令)。每次获取有效期 20 分钟。

### Master 列表

在这里你可以添加、删除或更改 Master。请使用统一 ID，可使用 `.userid` 指令查看你的账号 ID。

你也可添加群组 ID，在指定的群中所有人均视为有 Master 权限

### 消息通知列表

会对以下消息进行通知：加群邀请、好友邀请、进入群组、被踢出群、被禁言、自动激活、指令退群。

此处应使用统一 ID。在你开启「邮箱通知」后，给通知列表中的 QQ 号发送通知时会自动转换成对应邮箱。

#### 好友邀请

由于 QQ 的限制，当你 QQ 的「加我为好友时需要的验证方式」设置为「允许任何人」时，添加的好友为单向好友，此时不会发送 `骰子成为好友` 文案和 `好友邀请` 通过。

请你按自己的需求选择其他的验证方式，若设置为「需要验证消息」或「需要回答问题并由我确认」，海豹会按照[加好友验证设置](##加好友验证)自动通过或拒绝。

## 邮箱通知

为处理某些平台通知频繁引起的问题，开启此功能后**只会通过邮件**进行通知。请慎重决定是否开启，避免出现 **为什么我的骰娘不发通知了？** 的情况。

### 发件邮箱

填写你希望的发件邮箱，你指定的邮箱需支持通过 SMTP 协议发信，特别提醒：QQ 号被冻结后对应账号的邮箱也无法使用。

### 邮箱密钥

填写邮箱密钥。

对于一些邮箱，密钥并不是登陆密码；例如：QQ 邮箱的 SMTP 功能需使用单独生成的授权码。

### SMTP 地址

填写你邮箱服务提供商的 SMTP 地址。例如：QQ 邮箱为 `smtp.qq.com`。

## 私骰模式

因 QQ 的实现变更，此功能暂无实际作用。

## 允许自由开关

允许任何人执行 bot on/off 和 ext on/off，否则只有邀请者、管理员和 Master 进行操作。

## 启用戳一戳

仅 QQ 平台，关闭后不回应戳一戳。

::: warning 注意：对接基于 NTQQ PC 端协议的 QQ 方案时，注意对方是否支持 `戳一戳` 功能

内置客户端/Lagrange、LLOneBot 和 Napcat 等基于 NTQQ PC 的 QQ 方案，在旧版本中由于 NTQQ 旧协议本身不支持的原因，缺失该功能。

请使用：

- 海豹版本 <Badge type="tip" text="v1.4.6" /> 之前的内置客户端
- <Badge type="tip" text="6e350b0" /> 之前的 Lagrange
- <Badge type="tip" text="v3.27.0" /> 之前的 LLOneBot
- <Badge type="tip" text="v1.6.7" /> 之前的 Napcat
- ……

等方案的用户及时更新或**关闭此开关**（位于 `综合设置` - `基本设置`），以免产生不必要的报错信息。

:::

## 限制 .text 指令

默认开启。开启后只有 Master 和信任用户可使用 [`.text`](../use/fun.md#text-文本模板测试) 指令。如果你不了解这个指令，一定要开启。

## 忽略 .bot 裸指令

默认关闭。开启后在群聊中只有 AT 骰子才会响应 `.bot` 指令。

## 存活确认

定期向通知列表发送消息，以便于骰主知晓存活状态。

存活消息间隔写法：`@every 1h30m10s` 表示 1 小时 30 分 10 秒。更多请参阅 [cron 文档](https://pkg.go.dev/github.com/robfig/cron)。

注意：重启骰子后重新计时。

## 日志记录提示

开启后，每记录 N 条文本后，主动发送一条提醒信息，避免忘记 `.log off`。

## 刷屏警告

默认关闭。开启后会对使用指令过快的用户和群组进行警告，警告后继续使用指令会增加怒气值，只对 QQ 平台有效。

刷屏警告工作原理为令牌桶算法，具体请看 [wiki](https://en.wikipedia.org/wiki/Token_bucket)。

::: warning 注意

如果您感觉难以理解，为了稳定性还是不要更改比较好！

:::

::: warning 对速率限制的所有更改 重启后生效

:::

::: info 速率设置支持以下格式：

@every 3s 每 3 秒一个；

3 每秒 3 个。

:::

## 访问控制

对于 UI 界面地址由 `{Host:Port}` 两部分组成。

`Host` 可分为两种，0.0.0.0 主要用于服务器，代表可以在公网中用你的手机和电脑访问；127.0.0.1 主要用于自己的电脑/手机，只能在当前设备上管理海豹。

`Port` 为海豹核心运行的端口，默认为 3211，想开多个海豹必须修改端口号！

::: warning 注意：重启骰子后生效！

:::

当你的海豹核心运行在公网时可设置密码，避免他人访问。

登录后会自动记住一段时间。如果忘记密码请看 [我忘了 WebUI 密码](../use/faq.md#我忘了-webui-密码)。  

## QQ 频道设置

开启后将回应频道消息。基于 NTQQ 的连接方案暂不支持 QQ 频道。

## 加好友验证

仅当 QQ 账号选用「回答问题并由我确认」方式时有效。  

如果留空，则海豹核心将通过所有好友请求。  

你设定的答案不应含有空格。如果设置了多个问题，将所有答案用空格连接起来。例如：  

> 问题 1：以 dis 开头的退群指令是什么  
>
> 问题 2：你是否已阅读使用说明  

则在 WebUI 应填写为：`dismiss 是`  

## 自动退出不活跃群组 <Badge type="tip" text="v1.4.2" />  

这是 <Badge type="tip" text="v1.4.2" /> 版本新增的功能。

你可以设定一个时间线，单位是 天。

每天凌晨 4 时，海豹核心会检查在每个 QQ 群组中最后一次发送消息的时间。如果未发送消息的天数超过了你的设定，海豹核心会自动从该群组中退出。

退出前，海豹会向通知列表发送一条通知。

将时间线设置为 0 即可关闭自动退群功能。

在 <Badge type="tip" text="v1.4.4" /> 版本做了优化调整。

自动退群将会按批次执行。你可以在 WebUI 中设置每个批次的数量和批次间隔时间。每两批之间将会间隔你所指定的分钟数。每批次内退出两个群将间隔 10 秒。
