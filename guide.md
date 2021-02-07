### 将本地JSON文件中的数据放入数据层需要两个插件：
  + gatsby-source-filesystem: 用于将本地文件（如json、图片）中的数据添加至数据层
  + gatsby-transformer-json：将原始JSON字符串转换为JavaScript对象
### 对本地图片优化
 + gatsby-source-filesystem: 用于将本地文件添加到数据层
 + gatsby-plugin-sharp：提供本地图像的处理功能(调整图像尺寸，压缩图像体积)
 + gatsby-transformer-share：将gatsby-plugin-sharp插件处理后的吐血信息添加至数据层
 + gatsby-image： React组件，优化图像像是，与gatsby-transformer-sharp插件转化后的数据