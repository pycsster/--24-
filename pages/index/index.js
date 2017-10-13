
const chunfendata = require('../../utils/datas.js');
var jieqishuju = chunfendata.jieqidata();






//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    alldata: jieqishuju,
    inputdata:"",
    blocks:"none",
    season:""




  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },


  binginput:function(e){
    console.info(e.detail.value);
    
//获取input里面的内容。点击事件。
    this.setData({
      inputdata: e.detail.value
    })

    var inputletters = this.data.inputdata.trim();
    //获得输入的拼音和正则匹配
    var reg1 = new RegExp(inputletters);

    var reg2 = /^\w{3,}/;
    // var regs = reg2.test('chunfen') ;
    var regs = reg2.test(inputletters);


    var that = this;

    if (inputletters == "立春" || (reg1.test("lichun") && regs)) {
      //弹出下拉列表
      that.setData({
        blocks: "block",
        season: "立春"
      })

    }


    else if (inputletters == "雨水" || (reg1.test("yushui") && regs)) {
      that.setData({
        blocks: "block",
        season: "雨水"
      })
    }

    else if (inputletters == "惊蛰" || (reg1.test("jingzhe") && regs)) {
      that.setData({
        blocks: "block",
        season: "惊蛰"
      })
    }

    else if (inputletters == "春分" || (reg1.test("chunfen") && regs)) {
      that.setData({
        blocks: "block",
        season: "春分"
      })
    }


    else if (inputletters == "清明" || (reg1.test("qingming") && regs)) {
      that.setData({
        blocks: "block",
        season: "清明"
      })
    }


    else if (inputletters == "谷雨" || (reg1.test("guyu") && regs)) {
      that.setData({
        blocks: "block",
        season: "谷雨"
      })
    }


    else if (inputletters == "立夏" || (reg1.test("lixia") && regs)) {
      that.setData({
        blocks: "block",
        season: "立夏"
      })
    }


    else if (inputletters == "小满" || (reg1.test("xiaoman") && regs)) {
      that.setData({
        blocks: "block",
        season: "小满"
      })
    }


    else if (inputletters == "芒种" || (reg1.test("mangzhong") && regs)) {
      that.setData({
        blocks: "block",
        season: "芒种"
      })
    }


    else if (inputletters == "夏至" || (reg1.test("xiazhi") && regs)) {
      that.setData({
        blocks: "block",
        season: "夏至"
      })
    }


    else if (inputletters == "小暑" || (reg1.test("xiaoshu") && regs)) {
      that.setData({
        blocks: "block",
        season: "小暑"
      })
    }


    else if (inputletters == "大暑" || (reg1.test("dashu") && regs)) {
      that.setData({
        blocks: "block",
        season: "大暑"
      })
    }


    else if (inputletters == "立秋" || (reg1.test("liqiu") && regs)) {
      that.setData({
        blocks: "block",
        season: "立秋"
      })
    }


    else if (inputletters == "处暑" || (reg1.test("chushu") && regs)) {
      that.setData({
        blocks: "block",
        season: "处暑"
      })
    }


    else if (inputletters == "白露" || (reg1.test("bailu") && regs)) {
      that.setData({
        blocks: "block",
        season: "白露"
      })
    }


    else if (inputletters == "秋分" || (reg1.test("qiufen") && regs)) {
      that.setData({
        blocks: "block",
        season: "秋分"
      })
    }


    else if (inputletters == "寒露" || (reg1.test("hanlu") && regs)) {
      that.setData({
        blocks: "block",
        season: "寒露"
      })
    }


    else if (inputletters == "霜降" || (reg1.test("shuangjiang") && regs)) {
      that.setData({
        blocks: "block",
        season: "霜降"
      })
    }


    else if (inputletters == "立冬" || (reg1.test("lidong") && regs)) {
      that.setData({
        blocks: "block",
        season: "立冬"
      })
    }


    else if (inputletters == "小雪" || (reg1.test("xiaoxue") && regs)) {
      that.setData({
        blocks: "block",
        season: "小雪"
      })
    }


    else if (inputletters == "大雪" || (reg1.test("daxue") && regs)) {
      that.setData({
        blocks: "block",
        season: "大雪"
      })
    }

    else if (inputletters == "冬至" || (reg1.test("dongzhi") && regs)) {
      that.setData({
        blocks: "block",
        season: "冬至"
      })
    }


    else if (inputletters == "小寒" || (reg1.test("xiaohan") && regs)) {
      that.setData({
        blocks: "block",
        season: "小寒"
      })
    }


    else if (inputletters == "大寒" || (reg1.test("dahan") && regs)) {
      that.setData({
        blocks: "block",
        season: "大寒"
      })
    }


    else {

      // wx.showToast({
      //   title: '请输入正确节气',
      //   icon: 'loading',
      //   duration: 2000
      // })
      
    }



  },
  
  //以下是失去焦点的时候，inputlist 消失

  inputblurs:function(){
    //如果input失去焦点，则blocks设置为none

      this.setData({
        blocks: "none"
      })
  
  },



//以下是点击’搜索‘按钮，跳转到相关页面

  searching:function(){

    console.info(this.data.inputdata);  

    var inputletters = this.data.inputdata.trim();


//获得输入的拼音和正则匹配
    var reg1 = new RegExp(inputletters);

    var reg2 =/^\w{3,}/;
    // var regs = reg2.test('chunfen') ;
    var regs = reg2.test(inputletters);

    var that = this;

    if (inputletters == "春分" || (reg1.test("chunfen") && regs )   ){

                wx.navigateTo({
              url: '../jieqi/jieqi',
              
            })
    }
    else if (inputletters == "秋分" || (reg1.test("qiufen") && regs)  ){

      wx.navigateTo({
        url: '../qiufen/qiufen',
      })

    }
    else if (inputletters == "立春" || (reg1.test("lichun") && regs)) {

      wx.navigateTo({
        url: '../lichun/lichun',
      })

    }
    else if (inputletters == "雨水" || (reg1.test("yushui") && regs)) {

      wx.navigateTo({
        url: '../yushui/yushui',
      })

    }

    else{

        wx.showToast({
          title: '请输入正确节气',
          icon: 'loading',
          duration: 2000
        })

    }
  
  },

  //以下是输入框弹出内容点击后的跳转

  listto:function(){
    var listdata = this.data.season;

    console.info(listdata);

    switch (listdata){
      case "立春":
        wx.navigateTo({
          url: '../lichun/lichun',

        })
        break;

      case "雨水":
        wx.navigateTo({
          url: '../yushui/yushui',

        })

        break;

      case "惊蛰":
        wx.navigateTo({
          url: '../jingzhe/jingzhe',

        })

        break;


      case "春分":
        wx.navigateTo({
          url: '../chunfen/chunfen',

        })

        break;


      case "清明":
        wx.navigateTo({
          url: '../qingming/qingming',

        })

        break;


      case "谷雨":
        wx.navigateTo({
          url: '../guyu/guyu',

        })

        break;


      case "立夏":
        wx.navigateTo({
          url: '../lixia/lixia',

        })

        break;


      case "小满":
        wx.navigateTo({
          url: '../xiaoman/xiaoman',

        })

        break;


      case "芒种":
        wx.navigateTo({
          url: '../mangzhong/mangzhong',

        })

        break;


      case "夏至":
        wx.navigateTo({
          url: '../xiazhi/xiazhi',

        })

        break;


      case "小暑":
        wx.navigateTo({
          url: '../xiaoshu/xiaoshu',

        })

        break;


      case "大暑":
        wx.navigateTo({
          url: '../dashu/dashu',

        })

        break;


      case "立秋":
        wx.navigateTo({
          url: '../liqiu/liqiu',

        })

        break;


      case "处暑":
        wx.navigateTo({
          url: '../chushu/chushu',

        })

        break;


      case "白露":
        wx.navigateTo({
          url: '../bailu/bailu',

        })

        break;


      case "秋分":
        wx.navigateTo({
          url: '../qiufen/qiufen',

        })

        break;


      case "寒露":
        wx.navigateTo({
          url: '../hanlu/hanlu',

        })

        break;


      case "霜降":
        wx.navigateTo({
          url: '../shuangjiang/shuangjiang',

        })

        break;


      case "立冬":
        wx.navigateTo({
          url: '../lidong/lidong',

        })

        break;


      case "小雪":
        wx.navigateTo({
          url: '../xiaoxue/xiaoxue',

        })

        break;


      case "大雪":
        wx.navigateTo({
          url: '../daxue/daxue',

        })

        break;


      case "冬至":
        wx.navigateTo({
          url: '../dongzhi/dongzhi',

        })

        break;

      case "小寒":
        wx.navigateTo({
          url: '../xiaohan/xiaohan',
        })

        break;

      case "大寒":
        wx.navigateTo({
          url: '../dahan/dahan',

        })

        break;

        
    default: 
      console.info('请输入正确节气名称')
    
    ;


}


  },

  gotopage:function(){

    console.info('点击了..')

  wx.navigateTo({
    url: '../jieqi/jieqi',
  })

  },

  lichun:function(){
    wx.navigateTo({
      url: '../lichun/lichun',
    })
  },
  jingzhe:function(){
    wx.navigateTo({
      url: '../jingzhe/jingzhe',
    })
  },

chunfen:function(){
  wx.navigateTo({
    url: '../chunfen/chunfen',
  })
},

  yushui:function(){
    wx.navigateTo({
      url: '../yushui/yushui',
    })

  },
  qingming: function () {
    wx.navigateTo({
      url: '../qingming/qingming',
    })

  },
  guyu: function () {
    wx.navigateTo({
      url: '../guyu/guyu',
    })

  },
  lixia: function () {
    wx.navigateTo({
      url: '../lixia/lixia',
    })

  },

  xiaoman:function(){
    wx.navigateTo({
      url: '../xiaoman/xiaoman',
    })

  },

  mangzhong:function(){
    wx.navigateTo({
      url: '../mangzhong/mangzhong',
    })

  },
  xiazhi: function () {
    wx.navigateTo({
      url: '../xiazhi/xiazhi',
    })

  },

  xiaoshu: function () {
    wx.navigateTo({
      url: '../xiaoshu/xiaoshu',
    })

  },
  dashu: function () {
    wx.navigateTo({
      url: '../dashu/dashu',
    })

  },
  liqiu: function () {
    wx.navigateTo({
      url: '../liqiu/liqiu',
    })

  },

  chushu: function () {
    wx.navigateTo({
      url: '../chushu/chushu',
    })

  },
  bailu: function () {
    wx.navigateTo({
      url: '../bailu/bailu',
    })

  },
  qiufen: function () {
    wx.navigateTo({
      url: '../qiufen/qiufen',
    })

  },

  hanlu: function () {
    wx.navigateTo({
      url: '../hanlu/hanlu',
    })

  },
  shuangjiang: function () {
    wx.navigateTo({
      url: '../shuangjiang/shuangjiang',
    })

  },

  lidong: function () {
    wx.navigateTo({
      url: '../lidong/lidong',
    })

  },
  xiaoxue: function () {
    wx.navigateTo({
      url: '../xiaoxue/xiaoxue',
    })

  },
  daxue: function () {
    wx.navigateTo({
      url: '../daxue/daxue',
    })

  },
  dongzhi: function () {
    wx.navigateTo({
      url: '../dongzhi/dongzhi',
    })

  },
  xiaohan: function () {
    wx.navigateTo({
      url: '../xiaohan/xiaohan',
    })

  },

  dahan: function () {
    wx.navigateTo({
      url: '../dahan/dahan',
    })

  },





  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
