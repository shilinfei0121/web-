//logs.js
const util = require('../../utils/util.js')
const app = getApp();
Page({
  data: {
    logs: [],
    userInfo: {},
    curIdx: 0,
    listInfo: [
      {
        text: '首页',
        imgUrl: './image/text.png',
        curUrl: './image/texter.png',
      },
      {
        text: '兼职入口',
        imgUrl: './image/card.png',
        curUrl: './image/carder.png',
      },
      {
        text: '个人中心',
        imgUrl: './image/view.png',
        curUrl: './image/viewer.png',
      },
    ]
  },
  Navigation: function (event) {
    var that = this;
    app.Navigation(event, that);
  },
  // 底部导航
  chooseImg: function (e) {
    this.setData({
      curIdx: e.currentTarget.dataset.current
    })
    //  console.log(e)
    //  console.log(this.data.curIdx) 

  },
  
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
