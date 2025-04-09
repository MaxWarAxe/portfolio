<script setup lang="ts">
import MainScreen from '@/views/MainScreen.vue'
</script>

<template>
	<div class="app flex">
		<MainScreen class="flex grow" />
	</div>
</template>

<style scoped>
.app {
	width: 100vw;
	min-height: 100vh;
	height: 100%;
	max-height: auto;
	display: flex;
	padding: 5%;
}
</style>
