<script setup>
import { useParallax } from '@vueuse/core'
import { ref, computed, watch } from 'vue'

const container = ref(null)
const { tilt, roll, source } = useParallax(container)
const tiltReal = ref(0)
const rollReal = ref(0)

function clearTiltAndRoll() {
    tiltReal.value = 0
    rollReal.value = 0
}
let timer = setTimeout(() => {
    clearTiltAndRoll()
}, 1000)
watch(() => (tilt.value + roll.value).toFixed(3), () => {
    // clearTimeout(timer)
    tiltReal.value = tilt.value
    rollReal.value = roll.value
    console.log(tilt.value, roll.value)
    // timer = setTimeout(() => clearTiltAndRoll(), 1000)
})

const SCALE = -50
</script>

<template>
    <div class="flex items-center justify-center flex-row gap-36">
        <div class="flex flex-col gap-2">
            <div>Привет, я</div>
            <div class="text-6xl text-[var(--text-selected)]">Максим Киселев</div>
            <div class="text-[var(--indigo)]">> Front-end разработчик</div>
        </div>

        <div :style="{
            transform: `
                rotateX(${rollReal * SCALE}deg)
                rotateY(${tiltReal * SCALE}deg)
            `
        }" class="photo" ref="container">

        </div>

    </div>
</template>



<style scoped>
.photo {
    width: 379px;
    height: 379px;
    border-radius: 100%;
    background-size: cover;
    background-position: -30px;
    background-size: 600px;
    transition: 0.3s ease-out all;
    border: 1px solid #cdcdcd;
    box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.25);
    background-image: url("/src/assets/static/photo2.jpg");
}
</style>