import { withDocus } from 'docus'

export default withDocus({
  buildModules: [
    'vue-plausible/lib/esm'
  ],
  plausible: {
    domain: 'help.mujicv.com'
  },
  vite: { ssr: true },
  i18n: {
    baseUrl: ({ $docus }) => ($docus && $docus.settings && $docus.settings.url) || '',
    locales: [{
      code: 'zh-CN',
      iso: 'zh-CN',
      file: 'zh-CN.js',
      name: '中文'
    }],
    defaultLocale: 'zh-CN',
    parsePages: false,
    lazy: true,
    seo: false
  },
})
