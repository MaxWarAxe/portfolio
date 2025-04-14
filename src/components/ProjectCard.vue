<template>
    <div class="w-[407px] max-md:w-[300px] max-md:h-[364px] select-none h-[364px] relative  flex flex-col">
        <div class="text-blue-500  text-xl flex gap-2 w-full rounded-2xl">
            <div class="w-max">Проект {{ props.index }}</div>
            <div class="text-[var(--text)] text-xl flex gap-2">// {{ props.name }}</div>
        </div>
        <div
            class="w-[407px] max-md:w-[300px] max-md:h-[300px] rounded-2xl h-[324px] select-none  relative  glass flex flex-col items-center justify-center">

            <Dialog>
                <DialogTrigger
                    class="w-[407px] max-md:w-[300px] max-md:h-[300px]  rounded-2xl h-[324px] select-none  relative  glass flex flex-col items-center justify-center">
                    <div :style="{ 'background-image': 'url(' + props.image + ')' }"
                        class="image hover:opacity-50 cursor-pointer w-full h-full rounded-t-2xl flex relative">
                        <MonitorPlay
                            class="grow transition duration-200 opacity-0 max-md:opacity-100 hover:opacity-100 w-full h-full absolute">
                        </MonitorPlay>
                    </div>
                </DialogTrigger>
                <DialogContent class="min-w-3/4 bg-[var(--bg-color)]">
                    <DialogHeader>
                        <DialogDescription>
                            <VideoPlayer :fluid="true" class="w-fit" controls :src="props.video"></VideoPlayer>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <h2 class=" bg-[var(--back-bg)] w-full relative h-[200px] p-4">
                {{ props.description }}
            </h2>
            <div class="rounded-b-2xl bg-[var(--back-bg)] w-full relative p-5">
                <button @click="openInNewTab"
                    class="bg-[#45556C] cursor-pointer rounded-sm p-[5px] text-white absolute bottom-4 left-4">репозиторий</button>

            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { Motion, useAnimationControls } from 'motion-v'
import type { PanInfo, TransformProperties } from 'motion-v'
import { ref } from 'vue'
import { useMobileStore } from '@/stores/counter';
import { MonitorPlay } from 'lucide-vue-next';
import { VideoPlayer } from '@videojs-player/vue'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'

const opened = ref(false)

const mobileStore = useMobileStore()

function template({ rotateY, rotateX }: TransformProperties) {
    return `perspective(500px) rotateX(${rotateX}) rotateY(${rotateY})`
}

const controls = useAnimationControls()
function handlePan(_: PointerEvent, info: PanInfo) {
    controls.set({
        rotateY: info.offset.x / 2,
        rotateX: -info.offset.y / 2,
    })
}

function openInNewTab() {
    const url = props.url;
    if (url) {
        const newTab = window.open(url, '_blank');
        newTab?.focus();
    }

}

function handlePanEnd() {
    controls.start({
        rotateY: 0,
        rotateX: 0,
    })
}
const props = defineProps(
    {
        name: String,
        index: Number,
        image: String,
        url: String,
        video: String,
        description: String,
    })
</script>

<style scoped>
.glass {
    /* Эффект размытия */
    backdrop-filter: blur(44px);
    -webkit-backdrop-filter: blur(44px);

    box-shadow:
        /* Нижний и правый эффект глубины */
        inset -0.75px -0.5px rgba(255, 255, 255, 0.1),
        /* Верхний и левый эффект глубины */
        inset +0.75px +0.5px rgba(255, 255, 255, 0.025),
        /* Эффект тени */
        3px 2px 10px rgba(0, 0, 0, 0.25),
        /* Короткий подповерхностный эффект */
        inset 0px 0px 10px 5px rgba(255, 255, 255, 0.025),
        /* Длинный подповерхностный эффект */
        inset 0px 0px 40px 5px rgba(255, 255, 255, 0.025);
}

.image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.card {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;

    &:active {
        cursor: grab;
    }
}
</style>