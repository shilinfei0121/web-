// pages/list/list.js
Page({

  textPaste:function(){
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: '244878765@qq.com',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })
  },
  textPate: function () {
    wx.showToast({
      title: '复制成功',
    })
    wx.setClipboardData({
      data: 'Web前端开发工程师',
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            console.log(res.data)
          }
        })
      }
    })
  },
  callUp:function(){
    wx.makePhoneCall({
      phoneNumber: '18993666769' //仅为示例，并非真实的电话号码
    })
  },
  poster:function(){
    wx.chooseImage({
      success(res) {
        const tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success(res) {
            const data = res.data
            //do something
          }
        })
      }
    })
  },
  savePhone:function(){
    wx.addPhoneContact({
      firstName: '施林飞',
      mobilePhoneNumber: '18993666769'
    })
  },
  /**
   * 页面的初始数据
   */
  data: {

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})