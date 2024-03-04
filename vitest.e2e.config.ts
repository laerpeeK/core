// Vite 测试工具的端到端测试配置文件
import { mergeConfig } from 'vitest/config'
import config from './vitest.config'

export default mergeConfig(config, {
  test: {
    include: ['packages/vue/__tests__/e2e/*.spec.ts'],
  },
})
