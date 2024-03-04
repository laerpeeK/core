// Vite 构建工具的单元测试配置文件
import { configDefaults, mergeConfig } from 'vitest/config'
import config from './vitest.config'

export default mergeConfig(config, {
  test: {
    exclude: [...configDefaults.exclude, '**/e2e/**'],
  },
})
