
import { updateAppConfig } from '#app'
import { defuFn } from 'D:/ThucTapTotNghiep/NguyenHongNgoan_PC04172/ThoiTrangCaoCapBasic_Website/node_modules/defu/dist/defu.mjs'

const inlineConfig = {}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}



export default /* #__PURE__ */ defuFn(inlineConfig)
