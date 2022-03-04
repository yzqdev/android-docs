import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
    "/tutor/": [
        {
            text: "指南",
            children: [
                "/tutor/readme.md",
                "/tutor/tutor/application.md",
                "/tutor/tutor/helloworld.md",

                "/tutor/tutor/resources.md",
                "/tutor/tutor/activity.md",
                "/tutor/tutor/service.md",
                "/tutor/tutor/boardcast.md",
                "/tutor/tutor/content.md",
                "/tutor/tutor/fragment.md",
                "/tutor/tutor/single-frame.md",
                "/tutor/tutor/list-frag.md",
                "/tutor/tutor/frag-guodu.md",
                "/tutor/tutor/intent-filter.md",
            ],
        },
        {
            text: "界面",
            children: [
                "/tutor/interface/readme.md",
                "/tutor/interface/ui.md",
                "/tutor/interface/controls.md",
                "/tutor/interface/events.md",
                "/tutor/interface/styles.md",
                "/tutor/interface/custom-components.md",
            ],
        },
        {
            text: "高级",
            children: [
                "/tutor/advanced/readme.md",
                "/tutor/advanced/application.md",
                "/tutor/advanced/application.md",
                "/tutor/advanced/application.md",
                "/tutor/advanced/application.md",
                "/tutor/advanced/application.md",
                "/tutor/advanced/application.md",
                "/tutor/advanced/application.md",
                "/tutor/advanced/application.md",
            ],
        },
    ],
    "/tips/": [
        {
            text: "技巧",
            children: ["/tips/as插件.md", "/tips/gradle配置.md", "/tips/常见问题.md", "/tips/androidx迁移.md", "/tips/编译出错常见问题.md", "/tips/常用安卓软件下载.md", "/tips/常用网站.md"],
        },
    ],
};
