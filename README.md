# cc-tools

#### 个人工具

[github](https://github.com/z253573760/cc-tools)

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

### 目录

> 1. [tools 工具函数](###tools工具函数)<br>
> 2. [v-debounce 防抖指令](###v-debounce防抖指令)<br>
> 3. [移动端横屏提示](###移动端横屏提示)

### tools 工具函数

```
import { curry, throttle, flatten, debounce } from "@zhoucanyu/cc-tools";

throttle 函数节流 过滤重复滚动事件
const throttleFunc = throttle(() => console.log("节流函数"), 1000);

//函数防抖 函数防抖是在最后一次事件后才触发一次函数
const debounceFucn = debounce(() => console.log("防抖函数"), 1000);

flatten 多维数组摊平
flatten([1, [2], [3, [4]], [5, [[5]]]]); //[1,2,3,4,5,6]

//  柯里化函数
const foo = curry((a, b, c, d) => {
  console.log(a, b, c, d);
});
foo(1)(2)(3)(4) //1234
foo(1)(2)(3) // 不返回
const f = foo(1)(2)(3) //
f(5) // 1235

```

### v-debounce 防抖指令

给事件添加防抖效果<br>
参数<br>
事件通过修饰符传参 没有默认值 目前解锁事件 click keydown input<br>
防抖的事件间隔 也是通过修饰符传参 默认值 300ms<br>

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

### 移动端横屏提示

use 的时候传入 media 值（boolean） 默认 false 不开启

```
Vue.use(Cc, { media: true });
```
