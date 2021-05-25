# airwallex
### 项目下载及启动
##### 1.首先执行 git clone https://github.com/xhbd933/airwallex.git 下载代码仓库
##### 2.使用vscode或者其他工具打开代码
##### 3.切换到master分支 git checkout master
##### 4.安装依赖 npm install(首次推荐先删掉package-lock.json再进行npm install)
##### 5.启动项目 npm  run serve

### 项目技术栈
项目主要使用typescript语言、react框架以及一些开源的库进行开发，使用webpack构建工具进行打包，使用eslint+tslint做了简单的代码规范

### 目录结构描述

##### ├── Readme.md                   // 项目简单说明
##### ├── src                         
##### ├    ├── assets                  // 静态文件
##### ├    ├── layout                  // 页面入口
##### ├    ├──components               // 组件
##### ├    ├──pages                    // 按页面划分文件
##### ├── .babelrc                    // 用来设置转码的规则和插件
##### ├── .eslintignore               // 设置eslint规则需要忽略哪些文件
##### ├── .eslintrc                   // eslint 的配置文件
##### ├── package.json                // 定义了项目需要的各种模块，以及项目的配置信息
##### ├── node_modules                // 项目依赖
##### ├── .gitignore                  // git提交时忽略的文件
##### ├── tsconfig.json               // ts相关配置
##### ├── webpack.config.js           // webpack相关配置
