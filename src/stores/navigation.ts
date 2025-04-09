import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('nav', () => {
  const router = useRouter()

  const links = ref([
    { name: 'main', title: 'главная', route: '/', opened: true },
    { name: 'about', title: 'обо мне', route: '/about', opened: false },
    { name: 'projects', title: 'проекты', route: '/projects', opened: false },
    { name: 'contact', title: 'contact me :)', route: '/contact', opened: false },
  ])
  const lastLink = ref(links.value[0])

  async function changeRoute(name: string, routeToPush: string) {
    lastLink.value = links.value.find((link) => link.opened == true)
    links.value.forEach((link) => {
      link.name == name ? (link.opened = true) : (link.opened = false)
    })
    router.push(routeToPush)
  }

  return { links, changeRoute, lastLink }
})
