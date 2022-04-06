import type { NavbarConfig } from "@vuepress/theme-default";

export const navbar = [
    {
        text: "指南",
        icon: "creative",
        activeMatch: "^/tutor/",
        link: "/tutor/readme.md",
    },
    {
        text: "技巧",
        icon: "config",
        activeMatch: "^/tips/",
        link: "/tips/readme.md",
    },
    {
        text: "hack",
        activeMatch: "^/hack/",
        link: "/hack/readme.md",
    },
];
