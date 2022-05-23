import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import 'animate.css/animate.min.css' ;
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
app.use(store).use(router).mount('#app')
