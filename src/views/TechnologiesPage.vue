<script setup lang="ts">
import TechCard from '@/components/TechCard.vue';
</script>

<template>
    <div
        class="p-[32px] z-1 relative grow flex flex-wrap gap-14 overflow-y-auto items-start justify-start max-md:justify-center max-md:gap-10">

        <TechCard image="/vue.png" name="Vue"></TechCard>
        <TechCard image="/nuxt.svg" name="Nuxt"></TechCard>
        <TechCard image="/spring.png" name="Spring"></TechCard>
        <TechCard image="/tailwind.png" name="Tailwind"></TechCard>
        <TechCard image="/postgres.png" name="PostgreSQL"></TechCard>
        <TechCard image="/docker.png" name="Docker"></TechCard>
        <TechCard image="/java.png" name="Java"></TechCard>
        <TechCard image="/js.png" name="JS"></TechCard>
        <TechCard image="/ts.png" name="TS"></TechCard>
        <TechCard image="/godot.png" name="Godot"></TechCard>
        <img src="@/assets/icons/Green.svg" draggable="false" class="absolute select-none   opacity-40  -z-1  left-0" />
        <img src="@/assets/icons/Blue.svg" draggable="false" class="absolute select-none    opacity-40 -z-1  right-0" />
    </div>
</template>



<style scoped></style>