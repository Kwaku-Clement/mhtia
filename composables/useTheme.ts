import { useAppStore } from '~/stores/app'
import { computed } from 'vue'

export const useTheme = () => {
  const appStore = useAppStore()

  const toggleTheme = () => {
    appStore.toggleTheme()
  }

  const isDarkTheme = computed(() => appStore.isDarkTheme)

  return {
    toggleTheme,
    isDarkTheme
  }
}

// Type definition for the composable's return value
export type UseThemeReturn = ReturnType<typeof useTheme>