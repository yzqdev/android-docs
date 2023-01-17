import { defineUserConfig } from "@vuepress/cli";

import theme from "./themeConfig";
import {searchProPlugin} from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: '/android-docs/',
  dest: './dist',
  locales: {
    '/': {
      // 设置正在使用的语言
      lang: 'zh-CN',
    },
  },
  head: [
    [
      'link',
      {
        rel: 'icon',

        href: `/android-docs/images/android.svg`,
      },
    ],

    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css',
      },
    ],
    //my iconfont
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/c/font_3267094_jf6xwe51a2.css',
      },
    ],

    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta',{ name:"referrer", content:"no-referrer"  }]
  ],

  // site-level locales config

  lang: 'zh-CN',
  title: '安卓学习笔记',
  description: 'A simple android tutorial',

  theme: theme,

  plugins: [
    searchProPlugin({
      indexContent: true,
    }),
  ],
})
