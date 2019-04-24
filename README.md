# vue-tools

#### 个人工具

### 下载

```
npm i @zhoucanyu/cc-tools -S
```

### 引用

```
import Vue from "vue";
import Cc from "@zhoucanyu/cc-tools";
Vue.use(Cc);
```

### v-debounce 防抖指令

给事件添加防抖效果
参数
事件通过修饰符传参 没有默认值 目前解锁事件 click keydown input
防抖的事件间隔 也是通过修饰符传参 默认值 300ms

v-debounce.click="bar"

```
// 添加一个点击事件
<div v-debounce.click="bar">按钮</div> //默认300ms的延迟
<div v-debounce.click.1000="bar">按钮</div> // 1000ms的延迟
```

如果要获取 event 对象可以添加 event 修饰符
v-debounce.click.event="bar"

```
<div v-debounce.click.event="bar">按钮</div> //获取event对象
```

如果要给事件传参 必须使用箭头函数的形式
给事件传参 不能和 event 修饰符一起使用 只能 2 选 1

```
<div v-debounce.click="() => bar(1)">按钮</div>
```
