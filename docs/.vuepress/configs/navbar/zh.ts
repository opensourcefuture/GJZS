import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
  {
    text: '下载',
    link: '/Download/',
  },
  {
    text: '更新日志',
    link: '/Changelog/',
  },
  {
    text: '支持',
    link: '/Support/',
  },
  {
    text: '友情链接',
    children: [
      {
        text: '柚坛社区',
        link: 'https://uotan.cn',
      },
      {
        text: '一个云盘',
        link: 'https://pan.igjbbs.cn',
      },
      {
        text: '作者个人主页',
        link: 'https://bdovo.xyz',
      },
      {
        text: '服务器状态查看',
        link: 'https://status.qqcn.xyz',
      },
    ],
  },
]
