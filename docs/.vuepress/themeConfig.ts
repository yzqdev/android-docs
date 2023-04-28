import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme(
  {
    logo: '/images/android.svg',
    iconAssets: 'iconfont',
    repo: 'yzqdev/android-docs',
    pcBreakPoint: 1600,
    docsDir: 'docs',
    iconPrefix: 'iconfont icon-',
    // theme-level locales config

    // navbar
    navbar: navbar,
    // wideBreakPoint:2930,
    // sidebar
    sidebar: sidebar,
    footer: `powered by <a href='https://vuepress-theme-hope.github.io/v2/'>vuepress-theme-hope</a>`,
    darkmode: 'toggle',
    displayFooter: true,
    // page meta

    // custom containers

    // 404 page
    // a11y
    plugins: {
      prismjs: {
        dark: 'tomorrow',
        light: 'tomorrow',
      },
      mdEnhance: {
        codetabs: true,
        tabs: true,

        demo: true,
        sub: true,
        sup: true,
        footnote: true,
        mark: true,
      },
    },
  },
  { custom: true }
)
