//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    userInfo: {},
  },
  zhuye: function () {
    wx.navigateTo({
      url: '../zhu/zhu'
    })
  },
  wei: function () {
    wx.navigateTo({
      url: '../wei/wei'
    })
  },
  shen: function () {
    wx.navigateTo({
      url: '../shen/shen'
    })
  },
  lao: function () {
    wx.navigateTo({
      url: '../lao/lao'
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
