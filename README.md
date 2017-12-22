>本章介绍目前流行的`vue`的服务器端渲染,采用第三方框架`nuxt`[中文文档](https://zh.nuxtjs.org/)来做`vue`的服务器端渲染

### 一、构建一个项目的基本步骤
* 1、创建一个空的目录存放项目
* 2、初始化项目

    ```javascript
    npm init --yes
    ```
    
* 3、安装`nuxt`的依赖包

    ```javascript
    npm install --save nuxt
    ```
    
* 4、配置几个启动、打包命令及配置端口

    ```javascript
    **package.json**
    ...
    "config": {
    "nuxt": {
      "host": "0.0.0.0",
      "port": "3333"
    }
    },
    "scripts": {
        "dev": "nuxt",
        "build": "nuxt build",
        "start": "nuxt start",
        "generate": "nuxt generate"
    },
    ...
    ```
    
* 5、根据文档构建一个项目全部的目录

    ![nuxt.png](http://img.blog.csdn.net/20171222212046900?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
    * `components`存放公共组件的
    * `css`存放公共样式,可以在`nuxt.config.js`中引入
    * `layouts`是布局文件
    * `middleware`是中间件文件
    * `mock`是自己模拟数据的文件
    * `pages`自己书写`vue`组件的文件
    * `plugins`是使用插件存放的目录
    * `static`是静态文件,一般存放图片类的
    * `store`可以使用`vuex`状态机管理项目状态
    * `nuxt.config.js`是`nuxt`的配置文件



---
###欢迎加入群聊，我们一起探讨前端技术栈
> 群号:560285778

![这里写图片描述](http://img.blog.csdn.net/20171008104715122?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQva3VhbmdzaHAxMjg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)