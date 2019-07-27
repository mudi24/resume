# resume

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

简历实现整体思路：

1. 创建**currentStyle**和 **fullStyle**，currentStyle 为空字符串，fullStyle 为最终展示的内容
2. 通过 **setInterval** 定时向 currentStyle 中添加 fullStyle的内容
3. 将 currentStyle 用**<style></style>**标签包裹起来，然后通过**v-html**使<style>标签中的css样式同时生效
4. **currentMarkdown** 和 **fullMarkdown**的实现方法与**currenStyle** 和**fullStyle** 的实现方法相同，但其中增加了判断是否为markdown打开，将markdown转为Html的步骤

以上是整体思路，其实其中还包含了很多细节：

- promise	
- async    await	
- scrollTop 	
- ...

上面这些是我的理解，可能写的不是很好，但是希望可以对你有所帮助。

如果你有什么其他问题可以跟我联系，欢迎赐教！ 这是我的邮箱yaokai729@outllook.com

如果你觉得对你有所帮助，别忘了给我star，感谢！

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
