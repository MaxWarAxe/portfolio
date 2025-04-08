import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useWindowSize } from '@vueuse/core'

export const useMobileStore = defineStore('mobile', () => {
  const { width, height } = useWindowSize()
  const isMobile = computed(() => {
    return width.value < 768
  })

  const isTablet = computed(() => {
    return width.value < 1000
  })

  return { isTablet, isMobile }
})
