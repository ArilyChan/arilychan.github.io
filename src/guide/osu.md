# osu 查询

## elo数据

> EWC族谱

| 指令 | 示例 | 描述 |
| ------------- | ------------- | ------------- |
| `!anotherelo <osu用户名或id>` | `!anotherelo arily` | 查询elo |
| `!elo.upload <MatchId [比赛名]` | `!elo.upload 2147483647 EloWeeklyCup Season0 1400-1800` | 上传成绩给爆炸 |
| `!elo.result <MatchId>` | `!elo.result 2147483647` | 查询比赛结果 |
| `!dad / dad_of <osu用户名或id>` | `!dad candy` | 找爸爸 |

## 游玩数据

> 飞升了！（指手指）

指令前缀有两种：
* `!!` 或 `?` ： bancho服
* `*` ： ppysb服

### bancho服

可用的mode：`osu` `taiko` `fruit` `mania`

| 指令 | 示例 | 描述 |
| ------------- | ------------- | ------------- |
| `!!stat <osuid或用户名>` | `!!stat arily` | 展示玩家信息 |
| `!!stat#<mode> <osuid或用户名>` | `!!stat#mania arily` | 展示指定模式的玩家信息 |
| `!!userpage <osuid或用户名>` | `!!userpage arily` | 玩家个人页面截图 |
| `!!recent <osuid或用户名>` | `!!recent arily` | 展示最后上传至osu服务器的成绩 |
| `!!pr <osuid或用户名>` | `!!pr arily` | 展示最后上传至osu服务器的pass成绩 |
| `!!best / bp <osuid或用户名>` | `!!best arily` | 查询bp |
| `!!best<序号> / bp<序号> <osuid或用户名>` | `!!bp1 arily` | 查询bp列表第几个成绩 |
| `!!best <osuid或用户名> @last <小时数>` | `!!best arily @last 24` | 查询bp列表中最近几小时内的所有成绩 |
| `!!best <osuid或用户名> @from <日期>` | `!!best arily @from 2007-12-20` | 查询bp列表中从某日开始后的所有成绩 |
| `!!best <osuid或用户名> @from <日期> @to <日期>` | `!!best arily @from 2021-12-31 @to 2045-12-31` | 查询bp列表中指定日期间的所有成绩 |

### ppysb服

可用的mode：`osu` `osuRX` `osuAP` `taiko` `taikoRX` `fruit` `fruitRX` `mania`

| 指令 | 示例 | 描述 |
| ------------- | ------------- | ------------- |
| `*stat <osuid或用户名>` | `*stat arily` | 展示玩家信息 |
| `*stat#<mode> <osuid或用户名>` | `*stat#mania arily` | 展示指定模式的玩家信息 |
| `*userpage <osuid或用户名>` | `*userpage arily` | 玩家个人页面截图 |
| `*recent <osuid或用户名>` | `*recent arily` | 展示最后上传至osu服务器的成绩 |
| `*pr <osuid或用户名>` | `*pr arily` | 展示最后上传至osu服务器的pass成绩 |
| `*best / bp <osuid或用户名>` | `*best arily` | 查询bp |
| `*best<序号> / bp<序号> <osuid或用户名>` | `*bp1 arily` | 查询bp列表第几个成绩 |
| `*best <osuid或用户名> @last <小时数>` | `*best arily @last 24` | 查询bp列表中最近几小时内的所有成绩 |
| `*best <osuid或用户名> @from <日期>` | `*best arily @from 2007-12-20` | 查询bp列表中从某日开始后的所有成绩 |
| `*best <osuid或用户名> @from <日期> @to <日期>` | `*best arily @from 2021-12-31 @to 2045-12-31` | 查询bp列表中指定日期间的所有成绩 |
