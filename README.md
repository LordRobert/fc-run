##阿里函数计算项目的运行工具
阿里函数计算是一个在沙盒中运行的独立工程。且函数的handler入口方法不能直接在node环境下运行。此工具模拟调用了handler的入口方法。

### 注意
此工具适用于nodejs语言开发的函数计算。

### 安装
使用npm全局安装：
    ```
    npm install fc-run -g
    ```

### 运行
在函数计算代码的根目录运行：
    ```
    fc-run -m index.js -d data.json
    ```

### 参数说明
-m 函数计算的入口文件，handler所在文件，默认为index.js
-d 执行此函数的参数所在文件，默认为data.json，函数计算项目运行时会传给event

