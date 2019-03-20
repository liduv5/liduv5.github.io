---
title: hexo+github pages搭建个人博客（一）
date: 2019-03-18 12:12:12
categories: hexo
tags: [hexo,github]
---
使用Hexo+gitHub Pages搭建个人博客的流程。


**搭建步骤：**
1. 安装git,node.js
2. 安装hexo
3. 本地搭建站点（本地访问）
4. 部署到github（线上访问）

## 1. 安装hexo ##
1. 安装git。安装完毕后，在任意位置鼠标右击即可打开Git Bash，输入命令，进行Git操作。
`$ git -v   # 查看Git版本，验证是否安装成功`
1. 安装Node.js。Hexo是基于nodejs的博客框架，而且nodejs还集成了npm包管理工具。
`$ node -v # 查看nodejs版本，验证是否安装成功`
1. 安装hexo：
全局配置切换到淘宝源
`npm config set registry https://registry.npm.taobao.org`
 
 `$ npm install hexo --save   # 安装hexo`
`$ npm install hexo-cli -g   # 安装hexo命令行模式`
`$ hexo -v  # 查看hexo版本，验证是否安装成功`

## 2. hexo建站 ##
1. 新建一个blog文件夹，进入blog文件夹，Git Bash。
1. hexo初始化：
`$ hexo init`
1. 安装依赖包：
`$ npm install`
1. 初始化完成，在blog文件夹内会生成一下文件目录：
```
├── node_modules # 依赖模块
├── scaffolds# 文章模板
├── source   # 用户源文件：页面，文章markdown文件
| 　　 └── _posts   # 创建的文章
└── themes   # 主题
├── .gitignore   # git忽略文件信息
├── _config.yml  # 站点配置文件
├── package.json # 已安装插件映射表，下次只需npm install即直接安装表插件
```

1. hexo本地生成静态页面
`$ hexo clean # 清理本地静态文件；`
`$ hexo generate  # 生成静态页面，即public文件夹；`
`$ hexo server# 启用hexo本地服务器；`
注：Hexo 3.0 把服务器独立成了个别模块，您必须先安装 hexo-server 才能使用。
`$ hexo-server安装命令：npm install hexo-server --save`
这时，打开浏览器在地址栏输入http://localhost:4000即可本地访问静态博客页面。

## 3. 配置github pages ##

1. 登录github，New repository：yourname.github.io。其中yourname是你的github用户名，github强制后缀为github.io才能启用github pages服务。
1. Git Bash配置git用户信息：
`$ git config --global user.name "YourName"`
`$ git config --global user.email "YourEmail"`

1. 配置网络传输协议
- SSH协议
- ①SSH密钥：
`$ ssh-keygen -t rsa -C "youremail@example.com"  # 生成rsa密钥`
`$ cd ~/.ssh  # 进入虚拟目录ssh文件中`
`$ cat id_rsa.pub  # 显示id_rsa.pub文件内容`

- ②复制秘钥至github->用户setting->SSH keys，New SSH Key；
- ③验证是否添加成功
`$ ssh -T git@github.com  # 验证github是否添加成功`

- ④编辑站点配置文件_config.yml：
```
deploy: 
   type: git 
   repo: git@github.com:yourname/yourname.github.io.git 
   branch: master
```
## 4. 部署到github ##

1. 安装Git部署插件：
`$ npm install hexo-deployer-git --save`

1. 部署
```
$ hexo clean # 清理本地静态文件；
$ hexo generate  # 生成静态页面，即public文件夹；
$ hexo deploy# 部署到github；
或者使用：$ hexo g -d 
```
1. 部署完毕，站点文件目录如下：
```
.
├── .deploy_git  # （新增）hexo deploy 生成的git部署文件
├── public       # （新增）hexo generate 生成的静态文件
├── db.json      # （新增）hexo generate 生成的数据
├── node_modules # 依赖模块
├── scaffolds    # 文章模板
├── source       # 用户源文件：页面&文章的markdown文件
|   └── _posts   # 文章
└── themes       # 主题
├── .gitignore   # git时需忽略文件
├── _config.yml  # 站点配置文件
├── package.json # 已安装插件映射表，下次只需npm install即直接安装表插件
```
站点搭建完毕，打开浏览器在地址栏输入以下链接可随时访问自己的博客了。github pages：http://yourname.github.io