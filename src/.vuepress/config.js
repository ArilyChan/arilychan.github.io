module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: '小阿日',
  description: '一个QQ机器人，拥有osu相关查询和娱乐功能',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
  ],
  // 打包目录
  dest: "docs",
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/images/logo.png',
    docsDir: 'src',
    repo: 'https://github.com/arilychan/',
    navbar: [
      { text: '首页', link: '/' },
      /*
      {
        text: '链接',
        children: [
          { text: 'QQ群', link: '/'},
        ]
      },
      */
    ],
    sidebar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指令',
        link: '/guide',
        children:[
          '/guide/osu.md',
          '/guide/chat.md',
        ],
      },
    ],
  },
}