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
    repo: 'https://github.com/arilychan/arilychan.github.io',
    locales: {
      '/': {
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // 404 page
        notFound: [
          '小阿日没有找到你要的东西',
          '这种事情小阿日不懂啦',
          '这是小阿日的秘密',
          '小阿日走丢了，快帮我找找',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },
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
        children: [
          '/guide/bancho.md',
          '/guide/ppysb.md',
          '/guide/elo.md',
          '/guide/eat.md',
        ],
      },
      {
        text: '关于',
        link: '/about',
      },
    ],
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
        // 排除首页
        isSearchable: (page) => page.path !== '/',
      },
    ],
  ],
}