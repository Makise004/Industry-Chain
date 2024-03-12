<template>
  <dv-scroll-ranking-board :config="config4" style="width:90%;height:85%;margin:auto" />
</template>

<script>
export default {
  data() {
    return {
      config4:{
        data: [
          {
            name: '专用设备制造业',
            value: 286
          },
          {
            name: '其他制造业',
            value: 76
          },
          {
            name: '农副产品加工业',
            value: 53
          },
          {
            name: '化学原料和化学制品制造业',
            value: 116
          },
          {
            name: '化学纤维制造业',
            value: 43
          },
          {
            name: '医药制造业',
            value: 40
          },
          {
            name: '印刷和记录媒介复制业',
            value: 27
          },
          {
            name: '家具制造业',
            value: 12
          },
          {
            name: '废弃资源综合利用业',
            value: 13
          },
          {
            name: '文教、工美、体育和娱乐用品制造业',
            value: 194
          },
          {
            name: '有色金属冶炼和压延加工业',
            value: 81
          },
          {
            name: '木材加工和木、竹、藤、棕、草制品业',
            value: 16
          },
          {
            name: '橡胶和塑料制品业',
            value: 129
          },
          {
            name: '汽车制造业',
            value: 202
          },
          {
            name: '燃气生产和供应业',
            value: 25
          },
          {
            name: '电力、热力生产和供应业',
            value: 40
          },
          {
            name: '电气机械和器材制造业',
            value: 558
          },
          {
            name: '皮革、毛皮、羽毛及其制品和制鞋业',
            value: 81
          },
          {
            name: '石油、煤炭及其他燃料加工业',
            value: 3
          },
          {
            name: '纺织业',
            value: 102
          },
          {
            name: '纺织服装、服饰业',
            value: 78
          },
          {
            name: '计算机、通信和其他电子设备制造业',
            value: 156
          },
          {
            name: '通用设备制造业',
            value: 293
          },
          {
            name: '造纸和纸制品业',
            value: 16
          },
          {
            name: '酒、饮料和精制茶制造业',
            value: 7
          },
          {
            name: '金属制品、机械和设备修理业',
            value: 3
          },
          {
            name: '金属制品业',
            value: 271
          },
          {
            name: '铁路、船舶、航空航天和其他运输设备制造业',
            value: 39
          },
          {
            name: '非金属矿物制品业',
            value: 173
          },
          {
            name: '食品制造业',
            value: 21
          },
          {
            name: '黑色金属冶炼和压延加工业',
            value: 56
          },
        ],
        carousel: 'single',
        rowNum: 8,
        waitTime: 4000,
      },  
    }
  }
}
</script>

<style>
  .smalltitle {
    color: rgb(242, 243, 245);
    font-size: 14px;
    font-weight: 700;
    position: absolute;
    left:50%;
    transform: translate(-50%);
  }
  .container1 {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>