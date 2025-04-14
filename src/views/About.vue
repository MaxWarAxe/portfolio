<template>
    <div class="flex flex-row max-md:flex-col">
        <div class="left-panel">

            <div @click="personalInfoOpened = !personalInfoOpened" v-if="!mobileStore.isMobile"
                :class="[personalInfoOpened ? 'opened' : '', 'nav-item', 'h-[48px]', 'flex', 'items-center', 'border-b-[1px]', 'border-[var(--stroke)]']">
                <i
                    :class="[personalInfoOpened ? '' : '-rotate-90', 'transition', 'duration-200', 'ri-arrow-down-s-fill']" />
                информация
            </div>
            <Motion as="ul" initial="invisible" animate="visible"
                class="flex flex-col items-center pt-2 pb-2 gap-2 w-full pl-5"
                v-if="personalInfoOpened && !mobileStore.isMobile">
                <Motion v-for="(folder, index) in infoFolders" @click="openFolder(folder)" :custom="index"
                    :variants="variants"
                    :class="[folder.opened ? 'opened' : '', 'nav-item-mini', 'flex', 'items-center', 'w-full']">
                    <ChevronDown :size="14"
                        :class="[folder.opened ? '' : '-rotate-90', 'transition', 'duration-200']" />
                    <i class="ri-folder-3-fill w-6 h-6 text-blue-400"></i>
                    {{ folder.name }}
                </Motion>
            </Motion>

            <div v-if="mobileStore.isMobile" v-for="info in infoFolders">
                <div v-if="mobileStore.isMobile" @click="openFolder(info)"
                    :class="[info.opened ? 'opened' : '', 'nav-item', 'h-[48px]', 'flex', 'items-center', 'border-t-[1px]', 'border-b-[1px]', 'border-[var(--stroke)]']">
                    <i
                        :class="[info.opened ? '' : '-rotate-90', 'transition', 'duration-200', 'ri-arrow-down-s-fill']" />
                    {{ info.name }}
                </div>
                <BioPage v-if="info.name == 'биография' && info.opened" v-show="info.opened"></BioPage>
                <InterestsPage v-if="info.name == 'интересы' && info.opened" v-show="info.opened"></InterestsPage>
                <EducationPage v-if="info.name == 'образование' && info.opened" v-show="info.opened"></EducationPage>
                <TechnologiesPage v-if="info.name == 'технологии' && info.opened"></TechnologiesPage>
            </div>
            <div @click="contactOpened = !contactOpened"
                :class="[contactOpened ? 'opened' : '', 'nav-item', 'h-[48px]', 'flex', 'items-center', 'border-t-[1px]', 'border-b-[1px]', 'border-[var(--stroke)]']">
                <i :class="[contactOpened ? '' : '-rotate-90', 'transition', 'duration-200', 'ri-arrow-down-s-fill']" />
                контакты
            </div>



            <Motion as="ul" initial="invisible" animate="visible"
                class="flex flex-col items-center pt-2 gap-2 last:mb-2 w-full pl-5" v-if="contactOpened">
                <Motion v-for="(contact, index) in contacts" :custom="index" :variants="variants"
                    :class="['nav-item-mini', 'flex', 'items-center', 'w-full']">
                    {{ contact.name }}
                </Motion>
            </Motion>
        </div>
        <div v-if="!mobileStore.isMobile" class="flex flex-col grow">
            <nav class=" w-full flex flex-wrap border-b-[1px] border-solid border-[var(--stroke)]">
                <div v-for="folder in infoFolders">
                    <div v-if="folder.opened" @click="selectFolder(folder)" :key="folder.name"
                        class="flex cursor-pointer h-[48px] gap-2 flex-row w-fit border-r-[1px]   border-solid border-[var(--stroke)] items-center justify-between px-4"
                        :style="{ 'color': selectedFolder == folder.name ? 'white' : '' }">

                        <div>{{ folder.name }}</div>
                        <div @click="folder.opened = false">
                            <X class="w-4 h-4 cursor-pointer" />
                        </div>
                    </div>
                </div>

            </nav>
            <RouterView v-if="!mobileStore.isMobile" />
        </div>



    </div>
</template>

<script setup lang="ts">
import { ChevronDown, X } from 'lucide-vue-next';
import { ref } from 'vue'
import { Motion } from 'motion-v'
import { useRouter } from 'vue-router';
import { useMobileStore } from '@/stores/counter';
import BioPage from './BioPage.vue';
import InterestsPage from './InterestsPage.vue';
import EducationPage from './EducationPage.vue';
import TechnologiesPage from './TechnologiesPage.vue';
import type { Variant } from 'motion-v'
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
const contactOpened = ref(true)

const bioOpened = ref(false)
const interestsOpened = ref(false)
const educationOpened = ref(false)
const workExperienceOpened = ref(false)

const contacts = ref([
    { name: 'makskriper9@gmail.com' },
    { name: '+79046982136' },
    { name: '@MaxNike' }
])
const selectedFolder = ref('')
const infoFolders = ref([
    {
        name: 'биография', route: '/bio', opened: false, selected: false
    },

    { name: 'образование', route: '/education', opened: false, selected: false },
    { name: 'технологии', route: '/technologies', opened: false, selected: false },
    { name: 'интересы', route: '/interests', opened: false, selected: false },
])

function selectFolder(folder) {
    if (folder.opened) {
        selectedFolder.value = folder.name
        router.push(folder.route)
    } else {
        selectedFolder.value = ''
    }
}

openFolder(infoFolders.value[3])

if (mobileStore.isMobile) {
    personalInfoOpened.value = false
    contactOpened.value = false
}

function openInfoMobile(info) {
    info.opened = !info.opened

}
function openFolder(folder) {
    folder.opened = !folder.opened
    selectFolder(folder)
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