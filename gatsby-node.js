// 以编程方式创建页面
// 必须在gatsby-node.js文件增加
// 创建页面
function createPages ({actions}) {
  const { createPage } = actions
    // 获取模板的绝对路径
    const template = require.resolve('./src/templates/person.js')
    // 获取模板所需要的数据
    const persons = [
      {
        slug: '1', name: 'fhh', age: 20
      },
      {
        slug: '2', name: 'whh', age: 20
      },
    ]
    // 根据模板和数据创建页面
    persons.forEach(person => {
      createPage({
        // 模板绝对路径
        component: template,
        // 访问地址
        path: `/person/${person.slug}`,
        // 传递模板的数据
        context: person
      })
    })
  
}
module.exports = {
  createPages
}