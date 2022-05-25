# 移动应用交互设计大作业说明文档

## 主题

本次我的大作业主题为“隔离饭堂”，是为了每一个隔离不知道做什么饭的人提供菜谱。这个想法一开始是因为上海疫情很严重，上海群众隔离在家不知道做些什么，做饭可能是每日必须做的同时也能稍微娱乐自己的一件事，但是食材紧缺，如何才能利用现有的食材做出好吃的饭，于是这个网页产生了。

## 说明

本项目使用vue3+js+vant移动端开发，基本符合material design设计规范

![image-20220523201418335](C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523201418335.png)

## 开发前准备工作

### 进行移动端分辨率自适应

```js
window.onload = ()=>{
    function reSize(){
        var deviceWidth = document.documentElement.clientWidth || window.innerWidth;
        //获得屏幕宽度
        if(deviceWidth >= 750){
            deviceWidth = 750
        }
        if(deviceWidth <= 320){
            deviceWidth = 320;
        }
        document.documentElement.style.fontSize = (deviceWidth/7.5)+'px';  
        document.querySelector('body').style.fontSize = 0.3 +'rem';
        //1rem = 100px
        //设计稿是750px 设置一半的宽度 375 那么 1rem = 100px
        
    }
    
    reSize()
    
    window.onresize = function(){
        reSize();
    }
}

```

### 引用vant

```powershell
npm i vant
```

按需引入

```js
import { Swipe, SwipeItem } from 'vant';
import { NavBar } from 'vant';
import { Icon } from 'vant';
import { Overlay } from 'vant';
import { Button } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';
import { Tab, Tabs } from 'vant';
import { Search } from 'vant';
import { List } from 'vant';
import { PullRefresh } from 'vant';
import { ShareSheet } from 'vant';
import { Notify } from 'vant';
import { Toast } from 'vant';
import { Empty } from 'vant';
import { ActionSheet } from 'vant';
import { Card } from 'vant';
import { Popup } from 'vant';
import { Grid, GridItem } from 'vant';
const app = createApp(App);
app.use(ElementPlus);
app.use(Swipe);
app.use(SwipeItem);
app.use(NavBar);
app.use(Icon);
app.use(Overlay);
app.use(Button);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Tab);
app.use(Tabs);
app.use(Search);
app.use(List);
app.use(Card);
app.use(PullRefresh);
app.use(ShareSheet);
app.use(Empty);
app.use(ActionSheet);
app.use(Popup);
app.use(Grid);
app.use(GridItem);
```

## 界面展示

### 主页

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523201331450.png" alt="image-20220523201331450" style="zoom:50%;" />

由顶部标签栏，图标列表，轮播图，主体内容，底部导航栏组成

添加window.scroll事件，通过滚动距离，调用组件，显示顶部导航栏

```js
onMounted(()=>{
      window.addEventListener('scroll', () => {
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        if(top>=197){
          state.listShow = true;
        }
        else {
          state.listShow = false;
        }
      })
    })
```

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523201320941.png" alt="image-20220523201320941" style="zoom:50%;" />

![image-20220523200700125](C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523200700125.png)



点击可以快速滚动到对应组件，鼠标直接滚动，上面的标签也会响应的改变



<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523200748524.png" alt="image-20220523200748524" style="zoom:50%;" />

最下面为了增添丰富性，做了一个多图轮播的功能，借用swipe来实现。

### 课堂

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523200856425.png" alt="image-20220523200856425" style="zoom:50%;" />

课堂可以展示三个页面，分别是推荐页，减脂页，分类页

#### 推荐

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523201509563.png" alt="image-20220523201509563" style="zoom:50%;" />

点击对应图片，通过路由传递参数

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523201938367.png" alt="image-20220523201938367" style="zoom:50%;" />

点击收藏会和添加到store中，在收藏页显示

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523202115426.png" alt="image-20220523202115426" style="zoom:50%;" />

#### 减脂

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523201524795.png" alt="image-20220523201524795" style="zoom:50%;" />

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523202142598.png" alt="image-20220523202142598" style="zoom:50%;" />

点击对应图片，通过底部弹窗来显示信息



#### 分类

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523201542898.png" alt="image-20220523201542898" style="zoom:50%;" />

### 收藏

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523202230463.png" alt="image-20220523202230463" style="zoom:50%;" />



添加收藏后

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523203541061.png" alt="image-20220523203541061" style="zoom:50%;" />

#### 菜篮

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523203612775.png" alt="image-20220523203612775" style="zoom:50%;" />



<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523203627247.png" alt="image-20220523203627247" style="zoom:50%;" />

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523203640834.png" alt="image-20220523203640834" style="zoom:50%;" />



<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523203651002.png" alt="image-20220523203651002" style="zoom:50%;" />

## 食谱

方便选择困难症用户自动匹配今天要做什么菜

本页灵感、设计来自于@云游君，像复刻一个完全一样的有点难，稍微做了个简单的，通过api接口引入不同的菜系

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523203731113.png" alt="image-20220523203731113" style="zoom:50%;" />

比如我们选择白菜和牛肉，下面就会自动生成有白菜牛肉

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220523204052187.png" alt="image-20220523204052187" style="zoom:50%;" />





## 错误

开发过程中遇到过一些错误

太离谱了这个错误，而且还不知道为什么，我感觉就是数组添加对象的问题，但是还没搞明白



先说明以下要实现的功能，就是一个类似记事本的功能

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220521174626684.png" alt="image-20220521174626684" style="zoom:50%;" />

点击添加，两个input表单双向绑定两个字符串，点击完成，将两个字符串添加到数组中

<img src="C:\Users\FatDove\AppData\Roaming\Typora\typora-user-images\image-20220521174638568.png" alt="image-20220521174638568" style="zoom:50%;" /><img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220521174846457.png" alt="image-20220521174846457" style="zoom:50%;" />



但是问题是什么呢，就是当你再次添加的时候，已经存在的元素也会改变

<img src="C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220521175025676.png" alt="image-20220521175025676" style="zoom:50%;" />

改变下面的添加内容，已经存在的内容也会改变。。。。

console了以下发现原有的数组也改变了。。。

![image-20220521175136304](C:\Users\FatDove\Desktop\笔记\vue\实战项目开发日志\vue3大作业\image-20220521175136304.png)



data数据：

```js
const state  = reactive({
      cook:{
        cookName:'', //食材信息
        cookNum:''  ,//食材用量
        isChecked:false,  //控制每一行是否完成 单选框
      },
      cookList:[
        
      ]  //将弹框中加入的食材加入到这个数组中显示到菜篮中
```

对象添加到数组的函数：

```js
const addToList = ()=>{
      state.cookList.push(state.cook);
      console.log(state.cookList);
      state.isShow = false;
      state.isEmpty = false; //添加到菜篮子之后 非空
    }
```





进行了如下更改才正确，具体原理也不懂

```js
const addToList = ()=>{
      var c = {};
      c.cookName = state.cook.cookName;
      c.cookNum = state.cook.cookNum;
      c.isChecked = state.cook.isChecked;
      console.log(c);
      c = state.cook
      state.cookList.push(c);
      console.log(state.cookList);
      state.isShow = false;
      state.isEmpty = false; //添加到菜篮子之后 非空
    }
先拿个变量存一下
```



## 技术分析

涵盖了本学期学的所有vue3相关功能，外部ui，route，store，axios等等





## 改进

一些数据可以写在JSON数据包里，当时写的时候觉得数据不多，写着写着就多起来了，以后写纯前端项目可以使用JSON，也可以使用mock来模拟数据，但是考虑到网页的完整性和美观性，没有采用mock。

