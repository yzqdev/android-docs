# 一些小技巧
## 关于生命周期
一、onLoad
只加载一次，监听页面加载，其参数为上个页面传递的数据，参数类型为Object（用于页面传参）

二、onShow
监听页面显示。页面每次出现在屏幕上都触发，包括从下级页面点返回露出当前页面。

主要区别：
从二级页面返回该页面时，onLoad不会再次加载，而onshow会重新加载。

这点很重要：

1.如果加载列表页，二级页面对一级的列表页面内容有修改，则以及列表函数应该在onShow中加载，否则可以选择onLoad。

2.如果从一个页面携带参数跳转到另外一个页面，在另一个页面获取参数的方式： onLoad(options){ console.log(options.xxx) },这些参数都挂在在options.

总结一下 1：在一些数据变化较少的时候我们用onload 2：像这些order订单列表数据变化及时性我们用的是onshow;

总结：
onLoad先于onShow执行
onLoad页面的整个生命周期里，只执行一次
onShow页面的整个生命周期里，可执行多次，即每次显示都会执行
获取参数并且只请求一次的事件放在 onLoad 里。
当前页面需要时时刷数据的请求多次的事件放在 onShow 里。