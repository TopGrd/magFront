const initalState = [
  {
    id: '1',
    title: '简单告诉你为什么需要 https',
    author: 'mmiaow',
    time: 'April 27th 2017 11:12:21 +0000',
    avatar: 'https://avatars2.githubusercontent.com/u/8687182?s=200',
    summary: 'Express 的路由是内置在框架内的，在实例化之后可以直接调用声明路由，例如： const app = require(\'express\')(); app.get(\'/\', (req, res) => { // ... }); 项目中经常会对目录结构进行 MVC 的分层，所以很多情况下会这样组织代码： 定义一个 controller exports.renderHomepage = (req, res) => { res.render(\'home\'); }; 定义一个 router const...'
  }
]
const articlesReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return state.concat([{
        id: '2',
        title: '简单告诉你为什么不需要 https',
        author: 'mmiaow',
        time: 'April 27th 2017 11:12:21 +0000',
        avatar: 'https://avatars2.githubusercontent.com/u/8687182?s=200',
        summary: 'Express 的路由是内置在框架内的，在实例化之后可以直接调用声明路由，例如： const app = require(\'express\')(); app.get(\'/\', (req, res) => { // ... }); 项目中经常会对目录结构进行 MVC 的分层，所以很多情况下会这样组织代码： 定义一个 controller exports.renderHomepage = (req, res) => { res.render(\'home\'); }; 定义一个 router const...'
      }])
    default:
      return state
  }
}

export default articlesReducer
