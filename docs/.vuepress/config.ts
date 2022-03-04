import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { defineHopeConfig } from "vuepress-theme-hope";
import { path } from "@vuepress/utils";
import { navbar } from "./navbar";
import { sidebar } from "./sidebar";
export default defineHopeConfig({
    base: "/android-docs/",
    locales: {
        "/": {
            // 设置正在使用的语言
            lang: "zh-CN",
        },
    },
    head: [
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: `/images/icons/favicon-16x16.png`,
            },
        ],
        [
            "link",
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: `/images/icons/favicon-32x32.png`,
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
            },
        ],
        [
            "link",
            {
                rel: "mask-icon",
                href: "/images/icons/safari-pinned-tab.svg",
                color: "#3eaf7c",
            },
        ],
        ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ],

    // site-level locales config

    lang: "zh-CN",
    title: "android-tutor",
    description: "A simple android tutorial",

    themeConfig: {
        logo: "/images/hero.png",

        // repo: "vuepress/vuepress-next",

        docsDir: "docs",
        iconPrefix: "iconfont icon-",
        // theme-level locales config

        // navbar
        navbar: navbar,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        themeColor: false,
        // sidebar
        sidebar: sidebar,

        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",

        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",

        // 404 page
        notFound: ["这里什么都没有", "我们怎么到这来了？", "这是一个 404 页面", "看起来我们进入了错误的链接"],
        backToHome: "返回首页",
        darkMode: false,
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleDarkMode: "切换夜间模式",
        toggleSidebar: "切换侧边栏",
    },

    plugins: [
        [
            "@vuepress/plugin-search",
            {
                locales: {
                    "/": {
                        placeholder: "搜索文档",
                        translations: {
                            button: {
                                buttonText: "搜索文档",
                                buttonAriaLabel: "搜索文档",
                            },
                            modal: {
                                searchBox: {
                                    resetButtonTitle: "清除查询条件",
                                    resetButtonAriaLabel: "清除查询条件",
                                    cancelButtonText: "取消",
                                    cancelButtonAriaLabel: "取消",
                                },
                                startScreen: {
                                    recentSearchesTitle: "搜索历史",
                                    noRecentSearchesText: "没有搜索历史",
                                    saveRecentSearchButtonTitle: "保存至搜索历史",
                                    removeRecentSearchButtonTitle: "从搜索历史中移除",
                                    favoriteSearchesTitle: "收藏",
                                    removeFavoriteSearchButtonTitle: "从收藏中移除",
                                },
                                errorScreen: {
                                    titleText: "无法获取结果",
                                    helpText: "你可能需要检查你的网络连接",
                                },
                                footer: {
                                    selectText: "选择",
                                    navigateText: "切换",
                                    closeText: "关闭",
                                    searchByText: "搜索提供者",
                                },
                                noResultsScreen: {
                                    noResultsText: "无法找到相关结果",
                                    suggestedQueryText: "你可以尝试查询",
                                    openIssueText: "你认为该查询应该有结果？",
                                    openIssueLinkText: "点击反馈",
                                },
                            },
                        },
                    },
                },
            },
        ],

        [
            "@vuepress/plugin-register-components",
            {
                componentsDir: path.resolve(__dirname, "./components"),
            },
        ],
        // only enable shiki plugin in production mode
    ],
});
