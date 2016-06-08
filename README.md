# fis3-preprocessor-ng2-inline

此插件会把@Component中的html和style内联进js中。

## 效果
预处理前
```js
Component({
  templateUrl: 'xxx',
  styleUrls: ['xxx']
})
```
处理后
```js
Component({
  template: __inline('xxx'),
  styles: [__inline('xxx')]
})
```
## 用法
```js
fis.match('**.ts', {
  parser: fis.plugin('typescript'),
  preprocessor: fis.plugin('ng2-inline'),
  rExt: '.js'
})
```
