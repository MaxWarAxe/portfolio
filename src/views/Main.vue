<script setup>
import { useParallax } from '@vueuse/core'
import { ref, computed, watch } from 'vue'
import { useMobileStore } from '@/stores/counter';

const mobileStore = useMobileStore()
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
    <div class="flex items-center justify-evenly flex-row z-10 relative">
        <img src="@/assets/icons/Green.svg" class="absolute h-full -z-1 opacity-50" />
        <img src="@/assets/icons/Blue.svg" class="absolute h-full -z-1 opacity-50" />
        <div class="flex flex-col gap-2 w-fit transition duration-300 max-md:text-center">
            <div>Привет 👋, я</div>
            <div class="text-6xl text-[var(--text-selected)] w-fit text-wrap">Максим Киселев</div>
            <div class="text-[var(--indigo)]">> Front-end разработчик</div>
        </div>



        <div v-if="!mobileStore.isTablet" :style="{
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

/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
    transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>