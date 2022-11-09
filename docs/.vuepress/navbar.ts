import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: '指南',
    icon: 'creative',
    activeMatch: '^/tutor/',
    link: '/tutor/README.md',
  },
  {
    text: '技巧',
    icon: 'config',
    activeMatch: '^/tips/',
    link: '/tips/README.md',
  },
  {
    text: 'hack',
    icon: 'operate',
    activeMatch: '^/hack/',
    link: '/hack/',
  },
  {
    text: 'flutter',
    icon: 'stack',
    activeMatch: '^/flutter/',
    link: '/flutter/',
  },
  {
    text: 'dart',
    icon: 'dart',
    activeMatch: '^/dart/',
    link: '/dart/',
  },
  {
    text: 'kotlin',
    icon: 'kotlin',
    activeMatch: '^/kotlin-tutor/',
    link: '/kotlin-tutor/',
  },
  {
    text: 'uniapp',
    icon: 'kotlin',
    activeMatch: '^/uniapp/',
    link: '/uniapp/',
  },
])
