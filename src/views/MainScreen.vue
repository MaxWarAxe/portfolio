<script setup lang="ts">
import { computed } from 'vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useMobileStore } from '@/stores/counter';
import { Menu, X } from 'lucide-vue-next';
import { Motion } from 'motion-v'
import { useNavigationStore } from '@/stores/navigation'
import MobileNavigation from '@/views/MobileNavigation.vue'
const mobileStore = useMobileStore()
const navigationStore = useNavigationStore()
const router = useRouter()


const menuOpened = ref(false)

function openUrl(url) {
	window.open(url, '_blank').focus()
}

</script>

<template>
	<div class="w-full bg-[var(--bg-color)] rounded-lg screen relative">
		<header class="h-[56px] flex items-center border-b-[1px] border-[var(--stroke)] border-solid">
			<div class="nav-item mr-[111px]">maxwaraxe</div>

			<div v-if="!mobileStore.isMobile" v-for="link in navigationStore.links"
				@click="navigationStore.changeRoute(link.name, link.route)"
				:class="[link.opened ? 'nav-picked' : '', 'nav-item', 'border-l-[1px]', link.name == 'contact' ? '' : 'border-r-[1px]', 'border-[var(--stroke)]', 'border-solid', link.name == 'contact' ? 'ml-auto' : '']">
				{{ link.title }}
			</div>

			<Motion :initial="{ scale: 0 }" :animate="{ rotate: 180, scale: 1 }" :transition="{
				type: 'spring',
				stiffness: 260,
				damping: 20,
				delay: 0.0,
			}" @click="menuOpened = true" v-if="!menuOpened && mobileStore.isMobile" class="ml-auto mr-4">
				<Menu class=""></Menu>
			</Motion>
			<Motion :initial="{ scale: 0 }" :animate="{ rotate: 180, scale: 1 }" :transition="{
				type: 'spring',
				stiffness: 260,
				damping: 20,
				delay: 0.0,
			}" @click="menuOpened = false" v-if="menuOpened && mobileStore.isMobile" class="ml-auto mr-4">
				<X class=""></X>
			</Motion>

		</header>
		<MobileNavigation v-model="menuOpened" v-if="menuOpened && mobileStore.isMobile" class="grow" />
		<RouterView v-show="!menuOpened" class="grow"></RouterView>

		<footer class="h-[56px] flex items-center border-t-[1px]  border-[var(--stroke)] border-solid">
			<div class="nav-item border-r-[1px] border-[var(--stroke)] border-solid max-md:grow">соц. сети</div>
			<div class="nav-item border-r-[1px] border-[var(--stroke)] border-solid"
				@click="openUrl('https://t.me/MaxNike')">
				<i class="icon" :style="{ 'mask-image': `url('src/assets/icons/tg.svg')` }" />
			</div>
			<div class="nav-item border-r-[1px] mr-auto max-md:mr-0 border-[var(--stroke)] border-solid"
				@click="openUrl('https://vk.com/maxxwellll')">
				<i class="icon" :style="{ 'mask-image': `url('src/assets/icons/vk.svg')` }" />
			</div>
			<div class="nav-item border-l-[1px] border-[var(--stroke)] border-solid flex flex-row gap-4"
				@click="openUrl('https://github.com/MaxWarAxe')">
				<div v-if="!mobileStore.isMobile">@MaxWarAxe</div>
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

.nav-item:hover i {
	color: white;
	background-color: var(--text-selected);
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