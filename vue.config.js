const path = require('path');
// 修改webpack文件之后，要重新启动服务在生效
module.exports = {
  // 在原有的配置上进行修改,给目录其一个别名
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
  // },

  // 在原有的配置上进行添加
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
};
