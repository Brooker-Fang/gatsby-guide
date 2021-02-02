// 以编程方式创建页面
// 必须在gatsby-node.js文件增加
// 创建页面
function createPages ({actions}) {
  const { createPages } = actions
    // 获取模板的绝对路径
    const template = require.resolve('./src/templates/person.js')
    // 获取模板所需要的数据
  }
}