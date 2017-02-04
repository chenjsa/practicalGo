# practicalGo

This is a golang practice project for go beginner.

This project is heavily inspired by the [practialnode](https://github.com/azat-co/practicalnode), but is wrote by go with [Martini](https://github.com/go-martini/martini) framework. 

这是一个go网络编程的入门工程，网站内容参考practialnode，基于Martini框架进行开发。

# Dependencies

Default Project requires Go, MongoDB and few other tools installed.

* [Martini](https://github.com/go-martini/martini)
* [React](https://github.com/facebook/react)

# IntelliJ IDEA配置

为了能实时的使用gofmt自动格式化代码，需要对IDEA进行一些配置。

1. 安装file watchers插件
1. 添加模板
 ![filewatchers](https://github.com/chenjsa/practicalGo/blob/master/data/filewatchers.png)
1. 配置模板
 ![gofmt](https://github.com/chenjsa/practicalGo/blob/master/data/gofmt.png)
1. 设置检测范围
 ![scope](https://github.com/chenjsa/practicalGo/blob/master/data/scope.png)

# 内容

* `lesson1`分支：搭建最简单的HTTP服务器
* `lesson2`分支：使用godep管理Martini依赖包，使用Martini框架搭建HTTP服务器
* `lesson3`分支：使用React+Redux构建Web页面
* todo
    * 使用antd组件库
    * 使用MongoDB进行数据存储
    * 上线部署

# 运行

Server编译
```bash
godep go build
```
Server开发模式运行
```bash
./practicalGo -war web
```
Web页面
```bash
cd web
npm run dev
```
在浏览器地址栏输入http://localhost:8091查看页面

**Let's go!** 
