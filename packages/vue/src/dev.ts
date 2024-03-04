import { initCustomFormatter } from '@vue/runtime-dom'

/**
 * 开发者模式初始化
 */
export function initDev() {
  if (__BROWSER__) {
    /* istanbul ignore if */
    if (!__ESM_BUNDLER__) {
      console.info(
        `You are running a development build of Vue.\n` +
          `Make sure to use the production build (*.prod.js) when deploying for production.`,
      )
    }

    initCustomFormatter()
  }
}
