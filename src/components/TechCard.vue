<template>
    <div
        class="w-[200px] select-none p-4 h-[200px] relative  glass rounded-lg flex flex-col items-center justify-center">
        <Motion :transform-template="template" :animate="controls" @pan="handlePan" @pan-end="handlePanEnd"
            :style="{ 'backgroundImage': 'url(' + props.image + ')' }" class="card w-full h-full mb-4">

        </Motion>
        <h2 class="text-xl font-bold absolute bottom-0">{{ name }}</h2>

    </div>
</template>

<script setup lang="ts">
import { Motion, useAnimationControls } from 'motion-v'
import type { PanInfo, TransformProperties } from 'motion-v'

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

function handlePanEnd() {
    controls.start({
        rotateY: 0,
        rotateX: 0,
    })
}
const props = defineProps(
    {
        name: String,
        image: String,
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