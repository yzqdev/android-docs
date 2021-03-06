import { defineUserConfig } from "@vuepress/cli";

import theme from "./themeConfig";
import SearchPlugin from "vuepress2-plugin-full-text-search";
export default defineUserConfig({
    base: "/android-docs/",
    dest: "./dist",
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

                href: `/android-docs/images/android.svg`,
            },
        ],

        [
            "link",
            {
                rel: "stylesheet",
                href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
            },
        ],

        ["meta", { name: "msapplication-TileColor", content: "#3eaf7c" }],
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ],

    // site-level locales config

    lang: "zh-CN",
    title: "安卓学习笔记",
    description: "A simple android tutorial",

    theme: theme,

    plugins: [
        SearchPlugin({
            locales: {
                "/": {
                    placeholder: "搜索文档",
                },
            },
        }),
    ],
});
