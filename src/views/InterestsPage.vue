<template>
    <div class="overflow-auto h-auto flex flex-col grow">
        <div class="p-[32px] ">
            <h1 class="text-4xl font-bold mb-4">Интересы</h1>
            <p class="mb-4 text-lg">Я увлекаюсь программированием, веб-разработкой и новыми технологиями.</p>
            <p class="mb-4 text-lg">Люблю участвовать в хакатонах.</p>
            <p class="mb-4 text-lg">В свободное время я люблю читать книги, изучать новые языки программирования и
                заниматься спортом.</p>
            <p class="text-lg">Также я интересуюсь искусственным интеллектом и машинным обучением.</p>
        </div>
        <div class="p-[32px]">
            <h1 class="text-4xl font-bold mb-4">Хакатоны</h1>
            <p class="mb-4 text-2xl text-blue-500">Чемпионат Липецкой области по алгоритмическому программированию 2023
            </p>
            <p class="mb-4 text-lg text-blue-500">Команда Ctrl Alt Элита: Максим Киселев, Павел Стебенев, Илья Камкин

            </p>
            <p class="mb-4 text-lg text-blue-500">2 место</p>
            <p class="mb-4 text-lg">Здесь я впервые попробовал себя в хакатонах, но после участия я понял -
                соревнования по алгоритмическому
                программированию не мое</p>
            <div class="flex flex-col items-center justify-center w-full">
                <img src="@/assets/static/algosi 2023 sidim.jpg" class="rounded-t-2xl" />
                <img src="@/assets/static/algosi 2023 nagrada.jpg" class="rounded-b-2xl" />
            </div>
        </div>
        <div class="p-[32px]">
            <p class="mb-4 text-2xl text-blue-500">Чемпионат Липецкой области по продуктовому программированию</p>
            <p class="mb-4 text-lg text-blue-500">Команда ANAPA2003: Максим Киселев, Иван Красиков, Сергей Водопьянов,
                Даниил Морозов

            </p>
            <p class="mb-4 text-lg text-blue-500">Тема - приложение для хранения текстовых лекций в Markdown и
                аудиолекций с
                превращением аудио в текст с помощью GPT модели
            </p>
            <p class="mb-4 text-lg text-blue-500">5 место</p>
            <p class="mb-4 text-lg">Здесь я впервые пробую себя в продуктовом программировании и в роли фронтенд
                разработчика на фреймворке vuejs, знакомился с технологией по ходу дела и мне это очень понравилось</p>
            <div class="flex flex-col items-center justify-center w-full">
                <VideoPlayer :fluid="true" class="w-fit" controls src="/first vidos.mp4"></VideoPlayer>
                <img src="@/assets/static/lstu 2024 sidim perdim 4.jpg" class="" />
                <img src="@/assets/static/lstu 2024 wow.jpg" class="" />
                <img src="@/assets/static/lstu 2024 hackaton vistup.jpg" class="rounded-b-2xl" />
            </div>
        </div>

        <div class="p-[32px]">
            <p class="mb-4 text-2xl text-blue-500">Кубок Липецкой области по продуктовому программированию</p>
            <p class="mb-4 text-lg text-blue-500">Команда TOCAMOE4YBCTBO: Максим Киселев, Иван Красиков, Данил Данилов,
                Владимир Холин
            </p>
            <p class="mb-4 text-lg text-blue-500">Тема - приложение для просмотра и покупки авиабилетов с расчетом
                стоимости билетов с помощью
                нейронной сети собственной разработки</p>
            <p class="mb-4 text-lg text-blue-500">6 место</p>
            <p class="mb-4 text-lg">Этот хакатон проходил в ЛМК, организовывала компания ОБУ ИТЦ, было видно, что
                мероприятия организовывалось ответственно и с душой</p>
            <p class="mb-4 text-lg">Автор презентации и дизайна - Данил Данилов @Vuxkhiff</p>
            <div class="flex flex-col items-center justify-center w-full">
                <VideoPlayer poster="/zephyr.png" :fluid="true" class="w-fit" controls src="/zephyr vid.mp4">
                </VideoPlayer>
                <img src="@/assets/static/obu 2024 obsuzhdaem.jpg" class="" />
                <img src="@/assets/static/obu 2024 sidim obsuzhdaem.jpg" class="" />
                <img src="@/assets/static/obu 2024 stoim.jpg" class="" />
                <img src="@/assets/static/obu 2024.jpg" class="rounded-b-2xl" />

            </div>
        </div>

        <div class="p-[32px]">
            <p class="mb-4 text-2xl text-blue-500">Чемпионат России по продуктовому программированию 2024</p>
            <p class="mb-4 text-lg text-blue-500">Команда NotFive: Максим Киселев, Игорь Кретов, Владимир Толстунов,
                Даниил Морозов, Анатолий Целищев
            </p>
            <p class="mb-4 text-lg text-blue-500">Тема - приложение с оффициальными мероприятиями России с учетом
                округов и представителей областей. </p>
            <p class="mb-4 text-lg">Хакатон проходил онлайн и разбивался на этап отборочных 3 дня и финал еще 3 дня,
                очень насыщенный хакатон. Требовалось парсить pdf файл единого календарного плана и показывать в
                приложении в виде клендаря, а также уведомлять пользователей о новых мероприятиях при появлении новой
                версии файла</p>
            <p class="mb-4 text-lg text-blue-500">Финал 14 место</p>
            <div class="flex flex-col items-center justify-center w-full">

                <VideoPlayer poster="/sportix vibe.png" :fluid="true" class="w-fit" controls
                    src="/screen-cast-sportix.mp4"></VideoPlayer>

                <img src="@/assets/static/final 2024 champ.png" class="rounded-b-2xl" />
            </div>
        </div>

        <div class="p-[32px]">
            <p class="mb-4 text-2xl text-blue-500">Чемпионат Липецкой области по продуктовому программированию 2025</p>
            <p class="mb-4 text-lg text-blue-500">Команда NotFive: Максим Киселев, Иван Красиков, Игорь Кретов, Владимир
                Толстунов,
                Даниил Морозов
            </p>
            <p class="mb-4 text-lg text-blue-500">Тема - приложение с формированием индивидуального плана тренировок и
                питания в зависимости от данных пользователя с использованием RAG-метода. Создавать план должна
                нейронная сеть.</p>
            <p class="mb-4 text-lg">Хакатон проходил в ЛГТУ, эти три дня были очень насыщенными и я очень доволен нашим
                результатом.</p>
            <p class="mb-4 text-lg text-blue-500">2 место</p>
            <div class="flex flex-col items-center justify-center w-full">
                <VideoPlayer poster="/sportix vibe 2.png" :fluid="true" class="w-fit" controls src="/kachok.mp4">
                </VideoPlayer>
                <img src="@/assets/static/lstu 2025 stoim.jpg" class="" />
                <img src="@/assets/static/lstu 2025 2 place.jpg" class="rounded-b-2xl" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { VideoPlayer } from '@videojs-player/vue'
const breakpoints = {
    tiny: 300,
    xsmall: 400,
    small: 500,
    medium: 600,
    large: 700,
    xlarge: 800,
    huge: 900
}
</script>

<style scoped></style>