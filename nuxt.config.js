import { withDocus } from 'docus'

export default withDocus({
  buildModules: [
    'vue-plausible/lib/esm'
  ],
  plausible: {
    domain: 'tailwindcss.nuxtjs.org'
  },
  vite: { ssr: true },
  i18n: {
    baseUrl: ({ $docus }) => ($docus && $docus.settings && $docus.settings.url) || '',
    locales: [{
      code: 'en',
      iso: 'en-US',
      file: 'en-US.js',
      name: 'English'
    }],
    defaultLocale: 'zh-cn',
    parsePages: false,
    lazy: true,
    seo: false
  }
})
