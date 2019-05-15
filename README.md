This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

//启动生产环境
### `yarn start`
//启动开发环境
### `yarn run dev`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
//解决内存溢出导致启动打包失败方法<br>
可以在node_modules 文件夹下找到.bin目录
然后找到webpack-dev-server.cmd 文件夹
增加代码     --max_old_space_size=8192<br>
### 
    @IF EXIST "%~dp0\node.exe" (
       "%~dp0\node.exe" --max_old_space_size=8192 "%~dp0\..\webpack-dev-server\bin\webpack-dev-server.js" %*
     ) ELSE (
       @SETLOCAL
       @SET PATHEXT=%PATHEXT:;.JS;=;%
       node --max_old_space_size=8192 "%~dp0\..\webpack-dev-server\bin\webpack-dev-server.js" %*
     )`
  package.json中添加--max_old_space_size=8192<br>
  "scripts": {
    "dev": "webpack-dev-server  --mode development --devtool inline-source-map --hot",
    "build": "webpack --mode production",
    "start": "node --max_old_space_size=8192 www.js"
  },


### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

//打包
### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


目录结构：<br />
index 首页<br />
newRoom 新房<br />
seaViewRoom 海景房<br />
villa 别墅<br />
market 楼市<br />
about 关于（联系）我们<br />
userSystem 用户系统[登录、注册、找回]