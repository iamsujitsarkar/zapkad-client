import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMobileMenuStore = defineStore('navbar', () => {

  const isShow = ref(false)

  const doubleCount = computed(() => count.value * 2)

  const show = () => isShow.value = true
  const hide = () => isShow.value = false

  return { isShow, show, hide }
})
