import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'urara-demo.netlify.app',
  title: 'Az\'s Blog',
  subtitle: '',
  lang: 'zh-CN',
  description: 'Powered by SvelteKit/Urara',
  author: {
    name: '阿兹',
    avatar: '/assets/maskable@192.png',
    status: '🌸',
    bio: '🐱miao~'
  },
  themeColor: '#3D4451'
}
