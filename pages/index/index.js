//index.js
//获取应用实例
const app = getApp()
const movies =[
  {
     url:'/images/movie1.jpg',
     name:'侏罗纪世界2',
     director: '胡安·安东尼奥·巴亚纳',
     sketch:'影片主要讲述努布拉岛上的休眠火山开始活跃，欧文与克莱尔保护岛上幸存的恐龙免于灭绝的故事。'
  },
  {
    url:'/images/movie2.jpg',
    name: '我不是药神',
    director: '文牧野导演,宁浩，徐峥监制',
    sketch: '影片讲述了神油店老板程勇从一个交不起房租的男性保健品商贩程勇，一跃成为印度仿制药“格列宁”独家代理商的故事。' 
  }
]
Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 1000,
    movies:movies
  },
  onLoad: function (options) {
    // Do some initialize when page load.
    this.loadMovie()
  },
  loadMovie(){
    wx.showToast({
      title: '正在加载',
      icon: 'loading',
      duration: 2000
    })
    wx.request({
      url: 'https://api.douban.com/v2/book/1220562', //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        wx.hideToast()
      }
    })
  }
})
