import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
    {
        text: "指南",
        activeMatch: "^/tutor/",
        link: "/tutor/readme.md",
    },
    {
        text: "技巧",
        activeMatch: "^/tips/",
        link: "/tips/readme.md",
    },
    {
        text: "hack",
        activeMatch: "^/hack/",
        link: "/hack/readme.md",
    },

    {
        text: `vuepress文档`,
        children: [
            {
                text: "更新日志",
                link: "https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md",
            },
            {
                text: "v2.x",
                link: "https://v2.vuepress.vuejs.org/",
            },
            {
                text: "v1.x",
                link: "https://v1.vuepress.vuejs.org/",
            },
            {
                text: "v0.x",
                link: "https://v0.vuepress.vuejs.org/",
            },
        ],
    },
];
