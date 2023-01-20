import { arraySidebar, HopeThemeSidebarArrayConfig, HopeThemeSidebarGroupItem, objectSidebar, sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/tutor/': [
    {
      text: '指南',
      collapsible: true,
      prefix: '/tutor/basic/',

      children: ['README.md', 'application.md', 'helloworld.md', 'resources.md', 'activity.md', 'service.md', 'boardcast.md', 'content.md', 'fragment.md', 'single-frame.md', 'list-frag.md', 'frag-guodu.md', 'intent-filter.md'],
    },
    {
      text: '界面',
      collapsible: true,
      prefix: '/tutor/interface/',
      children: ['ui.md', 'controls.md', 'events.md', 'styles.md', 'custom-components.md'],
    },
    {
      text: '高级',
      collapsible: true,
      prefix: '/tutor/advanced/',
      children: ['drag-and-drop.md', 'notification.md', 'location.md', 'send-email.md', 'sms.md', 'phone-call.md', 'publish-app.md', 'alert-dialog.md', 'animation.md', 'ring-control.md', 'audio-capture.md', 'bluetooth.md', 'camera.md', 'clipboard.md', 'fonts.md', 'gestures.md', 'image-effects.md', 'internal-storage.md', 'json-parse.md', 'spinner.md', 'localization.md', 'login.md', 'media-player.md', 'multi-touch.md', 'navigation.md', 'network-connection.md', 'php-mysql.md', 'progress-circle.md', 'sensor.md', 'session.md', 'spell-check.md', 'sqlite.md', 'text-to-speech.md', 'xml.md'],
    },
  ],
  '/others/': 'structure',
  '/tips/': 'structure',
  '/kotlin-tutor/': 'structure',
  '/hack/': 'structure',
  '/flutter/': 'structure',
  '/dart/': 'structure',
  '/hybrid/': 'structure',
})
