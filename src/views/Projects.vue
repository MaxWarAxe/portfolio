<template>
    <div class="flex flex-row max-md:flex-col">
        <div class="left-panel">

            <div @click="personalInfoOpened = !personalInfoOpened" v-if="!mobileStore.isMobile"
                :class="[personalInfoOpened ? 'opened' : '', 'nav-item', 'h-[48px]', 'flex', 'items-center', 'border-b-[1px]', 'border-[var(--stroke)]']">
                <i
                    :class="[personalInfoOpened ? '' : '-rotate-90', 'transition', 'duration-200', 'ri-arrow-down-s-fill']" />
                технологии
            </div>
            <Motion as="ul" initial="invisible" animate="visible"
                class="flex border-b-[1px] border-[var(--stroke)] flex-col items-center pt-2 pb-2 gap-2 w-full pl-5"
                v-if="personalInfoOpened">
                <div v-if="mobileStore.isMobile">технологии</div>
                <Motion v-for="(folder, index) in infoFolders" @click="selectTech(folder)"
                    class="flex items-center gap-2" :custom="index" :variants="variants"
                    :class="[folder.opened ? 'opened' : '', 'nav-item-mini', 'flex', 'items-center', 'w-full']">
                    <Checkbox :model-value="folder.opened" class="border-[var(--stroke)]"></Checkbox>
                    {{ folder.name }}
                </Motion>
            </Motion>







        </div>
        <div class="flex flex-col grow">
            <nav v-if="!mobileStore.isMobile"
                class=" w-full flex flex-wrap border-b-[1px] border-solid border-[var(--stroke)]">
                <div v-for="folder in infoFolders">
                    <div v-if="folder.opened" :key="folder.name"
                        class="flex cursor-pointer h-[48px] gap-2 flex-row w-fit border-r-[1px]  border-solid border-[var(--stroke)] items-center justify-between px-4"
                        :style="{ 'color': selectedFolder == folder.name ? 'white' : '' }">

                        <div>{{ folder.name }}</div>
                        <div @click="selectTech(folder)">
                            <X class="w-4 h-4 cursor-pointer" />
                        </div>
                    </div>
                </div>

            </nav>
            <div class="flex flex-wrap gap-4 p-4 max-md:items-center max-md:justify-center">
                <ProjectCard v-if="opened.includes('vue') || opened.includes('spring')" name="ИС кинотеатра"
                    image="/cinema.png"
                    description="Cистема позволяет создавать сеансы, добавлять фильмы, смотреть описание фильма, покупать билеты"
                    url="https://github.com/MaxWarAxe/cinema-web-site" video="/cinema_vid.mp4" :index="0" />
                <ProjectCard v-if="opened.includes('vue') || opened.includes('spring')" name="ИС мероприятий"
                    image="/events.png"
                    description="Система объединяет в себе чат, создание и контроль проведения мероприятий, добавление мероприятий в календарь"
                    url="https://gitlab.com/makskriper9/event-web-site" video="/events_vid.mp4" :index="0" />
                <ProjectCard v-if="opened.includes('godot')" name="Gunforce Ultimate 2.0" image="/gunforce.png"
                    description="Многопользовательская игра в режиме deathmatch, все играют за оружие, которое летает по карте от своей отдачи"
                    url="https://gitlab.com/makskriper9/event-web-site" video="/gunforce_vid.mp4" :index="0" />
                <ProjectCard v-if="opened.includes('vue')" name="Канбан доска" image="/kanban.png"
                    description="Доска на подобие trello, позволяет создавать задачи, перемещать их между колонками, добавлять и прикреплять исполнителей"
                    url="https://github.com/MaxWarAxe/kanban-website-practice" video="/kanban_vid.mp4" :index="0" />
            </div>

        </div>



    </div>
</template>

<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { ChevronDown, X } from 'lucide-vue-next';
import { ref } from 'vue'
import { Motion } from 'motion-v'
import { useRouter } from 'vue-router';
import { useMobileStore } from '@/stores/counter';
import ProjectCard from '@/components/ProjectCard.vue';
import type { Variant } from 'motion-v'
import { computed } from 'vue';
const mobileStore = useMobileStore()
const router = useRouter()
const variants: Record<string, Variant | ((custom: number) => Variant)> = {
    invisible: {
        opacity: 0,
        x: -10,
    },
    visible: custom => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.1, duration: .5 },
    }),
}

const personalInfoOpened = ref(true)


const contacts = ref([
    { name: 'makskriper9@gmail.com' },
    { name: '+79046982136' },
    { name: '@MaxNike' }
])
const selectedFolder = ref('')
const infoFolders = ref([
    {
        name: 'vue', opened: true, selected: true
    },
    { name: 'spring', opened: true, selected: true },
    { name: 'godot', opened: true, selected: true },
])

const opened = computed(() => {
    return infoFolders.value.filter(folder => folder.opened).map(folder => folder.name)
})

function selectTech(selectedTech) {
    selectedTech.opened = !selectedTech.opened
    selectedTech.value = !selectedTech.selected
}
</script>

<style scoped>
.left-panel {
    min-width: 242px;
    border-right: 1px solid var(--stroke);
}

.nav-item {
    display: flex;
    cursor: pointer;
    padding: 0px 24px 0px 20px;
    align-items: center;
    transition: 0.2s;
}

.nav-item-mini {
    display: flex;
    cursor: pointer;
    /* padding: 0px 24px 0px 20px; */
    align-items: center;
    transition: 0.2s;
}

.nav-item-mini:hover {
    color: white;
}

.opened {
    color: white;
}

.nav-item:hover {
    color: white;
}
</style>