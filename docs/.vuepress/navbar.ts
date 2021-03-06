import { navbar } from "vuepress-theme-hope";

export default navbar([
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
        icon: "operate",
        activeMatch: "^/hack/",
        link: "/hack/",
    },
    {
        text: "flutter",
        icon: "stack",
        activeMatch: "^/flutter/",
        link: "/flutter/",
    },
]);
