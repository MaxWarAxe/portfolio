<template>
    <div class="flex flex-row">
        <div class="left-panel">

            <div @click="personalInfoOpened = !personalInfoOpened"
                :class="[personalInfoOpened ? 'opened' : '', 'nav-item', 'h-[48px]', 'flex', 'items-center', 'border-b-[1px]', 'border-[var(--stroke)]']">
                <i
                    :class="[personalInfoOpened ? '' : '-rotate-90', 'transition', 'duration-200', 'ri-arrow-down-s-fill']" />
                информация
            </div>
            <Motion as="ul" initial="invisible" animate="visible"
                class="flex flex-col items-center pt-2 pb-2 gap-2 w-full pl-5" v-if="personalInfoOpened">
                <Motion v-for="(folder, index) in infoFolders" @click="folder.opened = !folder.opened" :custom="index"
                    :variants="variants"
                    :class="[folder.opened ? 'opened' : '', 'nav-item-mini', 'flex', 'items-center', 'w-full']">
                    <ChevronDown :size="14"
                        :class="[folder.opened ? '' : '-rotate-90', 'transition', 'duration-200']" />
                    <i class="ri-folder-3-fill w-6 h-6 text-blue-400"></i>
                    {{ folder.name }}
                </Motion>
            </Motion>
            <div @click="contactOpened = !contactOpened"
                :class="[contactOpened ? 'opened' : '', 'nav-item', 'h-[48px]', 'flex', 'items-center', 'border-t-[1px]', 'border-b-[1px]', 'border-[var(--stroke)]']">
                <i :class="[contactOpened ? '' : '-rotate-90', 'transition', 'duration-200', 'ri-arrow-down-s-fill']" />
                контакты
            </div>



            <Motion as="ul" initial="invisible" animate="visible"
                class="flex flex-col items-center pt-2 gap-2 w-full pl-5" v-if="contactOpened">
                <Motion v-for="(contact, index) in contacts" :custom="index" :variants="variants"
                    :class="['nav-item-mini', 'flex', 'items-center', 'w-full']">
                    {{ contact.name }}
                </Motion>
            </Motion>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
import { ref } from 'vue'
import { Motion } from 'motion-v'
import type { Variant } from 'motion-v'

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

const personalInfoOpened = ref(false)
const contactOpened = ref(false)
const bioOpened = ref(false)
const interestsOpened = ref(false)
const educationOpened = ref(false)
const workExperienceOpened = ref(false)

const contacts = ref([
    { name: 'makskriper9@gmail.com' },
    { name: '+79046982136' },
    { name: '@MaxNike' }
])

const infoFolders = ref([
    {
        name: 'биография', opened: false, items: {

        }
    },
    { name: 'интересы', opened: false },
    { name: 'образование', opened: false },
    { name: 'технологии', opened: false },
])
</script>

<style scoped>
.left-panel {
    width: 242px;
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