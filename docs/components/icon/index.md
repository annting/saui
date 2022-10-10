# Icon

Icon 组件整合了`ionicon`开源svg icon 包, 提供了约 **1000+** 的常用 icon  

## 基础用法
<saIcon name="search" />

```html
<saIcon name="search" />
```

## 颜色
通过`color`属性来设置 Icon 的颜色
<saIcon name="search" color="red"/>
<saIcon name="search" color="green"/>

```html
<saIcon name="search" color="red"/>
<saIcon name="search" color="green"/>
```

## 尺寸
通过`size`属性来设置 Icon 的尺寸
<saIcon name="search" size="20px"/>
<saIcon name="search" size="2em"/>

```html
<saIcon name="search" size="20px"/>
<saIcon name="search" size="2em"/>
```


## Icon 属性
| 属性名 | 说明 | 类型  | 可选值 | 默认值 |
|--|----|-----|-----|-----|
| name | icon名称   |  string   |  参考快速检索   |  -   |
| size | 尺寸   |  string   |  -   |  1em   |
| color | 颜色   |  string   |  -   |  -   |





## Icon 快速检索

<IconSearch />

<script setup>
import IconSearch from './iconSerach.vue'


</script>