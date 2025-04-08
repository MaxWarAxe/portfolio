<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation';
const navigationStore = useNavigationStore()
const emits = defineEmits(['changeRoute'])

function changeRoute(name: string, route: string) {
    emits('changeRoute')
    navigationStore.changeRoute(name, route)
}
</script>

<template>
    <div class="w-full h-full bg-[var(--bg-color)] flex flex-col pt-2 items-center">
        <div class="mb-4">навигация</div>
        <div v-for="link in navigationStore.links" @click="changeRoute(link.name, link.route)"
            :class="[link.opened ? 'nav-picked' : '', 'w-full', 'p-2', 'items-center', 'flex-col', 'flex', 'nav-item', link.name == 'contact' ? 'border-b-[1px]' : '', 'border-t-[1px]', 'border-[var(--stroke)]', 'border-solid']">
            {{ link.title }}
        </div>
    </div>
</template>

<style scoped>
.nav-item {
    display: flex;
    cursor: pointer;
    align-items: center;
    transition: 0.2s;
}

.nav-item:hover {
    color: white;
}

.nav-item:hover i {
    color: white;
    background-color: var(--text-selected);
}

.nav-picked {
    position: relative;
    color: var(--text-selected);
    transition: 0.2s;
}
</style>