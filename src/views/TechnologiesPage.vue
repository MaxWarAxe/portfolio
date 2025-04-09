<script setup lang="ts">
import TechCard from '@/components/TechCard.vue';
</script>

<template>
    <div
        class="p-[32px] z-1 relative grow flex flex-wrap gap-14 overflow-y-auto items-start justify-start max-md:justify-center max-md:gap-10">

        <TechCard image="src/assets/static/vue.png" name="Vue"></TechCard>
        <TechCard image="src/assets/static/nuxt.svg" name="Nuxt"></TechCard>
        <TechCard image="src/assets/static/spring.png" name="Spring"></TechCard>
        <TechCard image="src/assets/static/tailwind.png" name="Tailwind"></TechCard>
        <TechCard image="src/assets/static/postgres.png" name="PostgreSQL"></TechCard>
        <TechCard image="src/assets/static/docker.png" name="Docker"></TechCard>
        <TechCard image="src/assets/static/java.png" name="Java"></TechCard>
        <TechCard image="src/assets/static/js.png" name="JS"></TechCard>
        <TechCard image="src/assets/static/ts.png" name="TS"></TechCard>
        <img src="@/assets/icons/Green.svg" draggable="false" class="absolute select-none   opacity-40  -z-1  left-0" />
        <img src="@/assets/icons/Blue.svg" draggable="false" class="absolute select-none    opacity-40 -z-1  right-0" />
    </div>
</template>



<style scoped></style>