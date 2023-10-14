# ppy.sb 查询

国内领先的osu!全模式私服，[网站](https://osu.ppy.sb/)

- 指令前缀： `*`

- 以下指令说明中，以`<>`标注的为必要参数，`[]`为可选参数

- 可用的mode：`osu` `osuRX` `osuAP` `taiko` `taikoRX` `fruit` `fruitRX` `mania`

## setuser

绑定玩家账号

- 指令： **\*setuser** `<osuid或用户名>`

- 示例： `\*setuser arily`

## stat

展示玩家信息

- 指令： **\*stat** `<osuid或用户名>`

- 示例： `*stat arily`

展示**指定模式**的玩家信息

- 指令： **\*stat**`#<mode>` `<osuid或用户名>`

- 示例： `*stat#mania arily`

设置用户默认模式

- 指令：**\*setmode**`<mode>`

- 示例： `*setmode osu`

## userpage

玩家个人页面截图

- 指令： **\*userpage** `<osuid或用户名>`

- 示例： `*userpage arily`

## recent / pr

展示最后上传至ppy.sb服务器的成绩

- 指令： **\*recent** / **\*pr**`#<mode>` `<osuid或用户名>`

- 示例： `*recent#mania arily`

## bp / best

#### 查询bp

- 指令： **\*best** / **\*bp**`#<mode>` `<osuid或用户名>`

- 示例： `*best#mania arily`

#### 查询bp列表第几个成绩

- 指令： **\*best**`<序号>` / **\*bp**`<序号>` `<osuid或用户名>`

- 示例： `*bp1 arily`

#### 查询bp列表中最近几小时内的所有成绩

- 指令： **\*best** `<osuid或用户名>` **@last** `<小时数>`

- 示例： `*best arily @last 24`

#### 查询bp列表中从某日开始后的所有成绩

- 指令： **\*best** `<osuid或用户名>` **@from** `<日期>`

- 示例： `*best arily @from 2007-12-20`

#### 查询bp列表中指定日期间的所有成绩

- 指令： **\*best** `<osuid或用户名>` **@from** `<日期>` **@to** `<日期>`

- 示例： `*best arily @from 2021-12-31 @to 2045-12-31`
