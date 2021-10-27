// exports in this file are exposed to the client app via 'iles'
// so the user can do `import { usePage } from 'iles'`

import type { ComponentOptionsWithoutProps } from 'vue'
import type { UserApp, GetStaticPaths } from './shared'

// Generic Types
export type { Router, RouteRecordRaw } from './shared'

// Composables
export { useAppConfig } from './app/composables/appConfig'
export { usePage } from './app/composables/pageData'
export { useFile } from './app/composables/file'
export { useVueRenderer } from './app/composables/vueRenderer'
export { plainText } from './app/renderers/plainText'
export { useRouter, useRoute } from 'vue-router'
export { useHead } from '@vueuse/head'

// Utilities
export { inBrowser } from './app/utils'

export function defineApp (app: UserApp) {
  return app
}

export function definePageComponent<T> (page: ComponentOptionsWithoutProps<T> & { getStaticPaths?: GetStaticPaths<T> }) {
  return page
}

// Components
export * from './app/components'
