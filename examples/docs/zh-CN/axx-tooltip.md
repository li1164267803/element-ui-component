## xiwen-tooltip

该功能实现了文字过长时溢出裁切显示... 鼠标滑上使用 tooltip 显示全部内容  
文字少时，没有裁切，鼠标滑上不显示 tooltip

### 基础用法

基础的 title 用法。
:::demo

```html
<h3>文字多时，滑上显示</h3>
<div class="axx-tooltip-box">
  <axx-tooltip
    title="鼠标滑上使用 tooltip 显示全部内容 文字少时，没有裁切，鼠标滑上不显示 tooltip 希文出品 必属精品234"
  />
</div>

<h3>文字少时 滑上不展示</h3>
<div class="axx-tooltip-box">
  <axx-tooltip title="鼠标滑上使用 tooltip 显示全部内容 文字少时" />
</div>
<style>
  .axx-tooltip-box {
    width: 200px;
    border: 1px solid #000;
    height: 50px;
  }
</style>
```

:::

### 使用 slot 方式

使用 slot 方式
:::demo

```html
<div class="axx-tooltip-box-slot">
  <axx-tooltip>
    <template slot="title">
      使用slot的写法23123123123123s23424435345345355555
    </template>
    使用slot的写法23123123123123s23424435345345355555
  </axx-tooltip>
</div>
<style>
  .axx-tooltip-box-slot {
    width: 200px;
    border: 1px solid #000;
    height: 50px;
  }
</style>
```

:::
:::demo

```html
<el-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```

:::

### API

**下面只列出了在本插件中二次封装添加的新字段，和部分原有 antd-vue 中 tooltip 部分默认的配置**  
**具体的 antd-vue 中 tooltip api 配置请点击下面链接，查看官方文档**

[https://www.antdv.com/components/tooltip-cn/#API](https://www.antdv.com/components/tooltip-cn/#API)

| 参数             | 说明                    | 类型     | 默认值           |
| ---------------- | ----------------------- | -------- | ---------------- |
| title            | 需要 Tooltip 显示的文本 | _string_ | -                |
| detail           | 初始值                  | _object_ | -                |
| btnText          | 按钮文本                | _string_ | -                |
| cuttingNum       | 显示几行后开始裁切      | _Number_ | 2                |
| placement        | 气泡框位置              | _string_ | rightTop         |
| overlayClassName | 卡片类名                | _string_ | xiwen-preinstall |

#### 注：

- 本插件相当于是对 antd-vue 组件 tooltip 的二次封装，支持 tooltip 原生组件的 **所有 api 功能**
- 适用于在表格中展示，或者是正常的页面循环
- 但是如果想要调用原生 ui 组件的实例方法，通知 ref 绑定获取到的并不是 antd 的 tooltip 组件，如果想要调用 tooltip 的原生方法，**需要传递 forward-ref 参数绑定**

```html
<template>
  <axx-tooltip @forward-ref="tooltip" title="希文出品"></axx-tooltip>
</template>

<script>
  // 即可调用原生方法
  this.$refs.tooltip.visibleChange(callback);
</script>
```
