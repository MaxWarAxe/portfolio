<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const links = [
	{ name: 'main', route: '/' },
	{ name: 'about', route: 'about' },
	{ name: 'projects', route: 'projects' },
	{ name: 'contact', route: 'contact' },
]

function changeRoute(name: string) {
	navName.value = name
	router.push(links.filter((link) =>
		link.name == navName.value
	)[0].route)
}
const navName = ref('main')
function openUrl(url) {
	window.open(url, '_blank').focus()
}
</script>

<template>
	<div class="h-full w-full bg-[var(--bg-color)] rounded-lg screen">
		<header class="h-[56px] flex items-center border-b-[1px] border-[var(--stroke)] border-solid">
			<div class="nav-item mr-[48px]">maxwaraxe</div>

			<div @click="changeRoute('main')"
				:class="[navName == 'main' ? 'nav-picked' : '', 'nav-item', 'border-l-[1px]', 'border-r-[1px]', 'border-[var(--stroke)]', 'border-solid']">
				главная
			</div>
			<div @click="changeRoute('about')"
				:class="[navName == 'about' ? 'nav-picked' : '', 'nav-item', 'border-r-[1px]', 'border-[var(--stroke)]', 'border-solid']">
				обо мне
			</div>
			<div @click="changeRoute('projects')"
				:class="[navName == 'projects' ? 'nav-picked' : '', 'nav-item', 'mr-auto', 'border-r-[1px]', 'border-[var(--stroke)]', 'border-solid']">
				проекты
			</div>
			<div @click="changeRoute('contact')"
				:class="[navName == 'contact' ? 'nav-picked' : '', 'border-l-[1px]', 'nav-item', 'border-[var(--stroke)]', 'border-solid']">
				contact me
			</div>
		</header>

		<RouterView class="grow"></RouterView>

		<footer class="h-[56px] flex items-center border-t-[1px] border-[var(--stroke)] border-solid">
			<div class="nav-item border-r-[1px] border-[var(--stroke)] border-solid">соц. сети</div>
			<div class="nav-item border-r-[1px] border-[var(--stroke)] border-solid"
				@click="openUrl('https://t.me/MaxNike')">
				<i class="icon" :style="{ 'mask-image': `url('src/assets/icons/tg.svg')` }" />
			</div>
			<div class="nav-item border-r-[1px] mr-auto border-[var(--stroke)] border-solid"
				@click="openUrl('https://vk.com/maxxwellll')">
				<i class="icon" :style="{ 'mask-image': `url('src/assets/icons/vk.svg')` }" />
			</div>
			<div class="nav-item border-l-[1px] border-[var(--stroke)] border-solid flex flex-row gap-4"
				@click="openUrl('https://github.com/MaxWarAxe')">
				@MaxWarAxe
				<i class="icon" :style="{ 'mask-image': `url('src/assets/icons/gh.svg')` }" />
			</div>
		</footer>
	</div>
</template>

<style scoped>
.screen {
	display: flex;
	flex-direction: column;
	border: solid 1px;
	border-color: var(--stroke);
}

.icon {
	fill: red;
	color: red;
	width: 24px;
	height: 24px;
	mask-size: cover;
	background-color: var(--text);
	transition: 0.2s;
}

.icon:hover {
	background-color: var(--text-selected);
}

.nav-item {
	display: flex;
	cursor: pointer;
	padding: 0px 24px 0px 20px;
	align-items: center;
	height: 100%;
	transition: 0.2s;
}

.nav-item:hover {
	color: white;
}

.nav-picked {
	position: relative;
	color: var(--text-selected);
}

.nav-picked::after {
	content: '';
	width: 100%;
	height: 5px;
	position: absolute;
	bottom: 0px;
	left: 0px;
	background-color: #FFB86A;
	animation-duration: 0.3s;
	animation-name: appear;
}

@keyframes appear {
	from {
		scale: 0 100%;
		/* rotate: 0deg; */
	}

	to {
		scale: 100% 100%;
		/* rotate: 360deg */
	}
}
</style>