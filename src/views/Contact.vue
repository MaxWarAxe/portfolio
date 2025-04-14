<template>
    <div class="flex flex-row max-md:flex-col ">
        <div
            class="flex flex-col grow items-center justify-center gap-4 max-md:border-b-[1px] max-md:border-[var(--stroke)] ">
            имя*
            <Input v-model="name" class="w-[300px] border-[var(--stroke)]" placeholder="//имя" />
            email*
            <Input v-model="email" class="w-[300px] border-[var(--stroke)]" type="email" placeholder="//почта" />
            сообщение*
            <Textarea v-model="message" class="resize-none w-[300px] border-[var(--stroke)]"
                placeholder="//сообщение" />
            <button @click="sendMail"
                :class="['bg-[#45556C]', 'cursor-pointer', 'text-xl', 'rounded-sm', 'p-[10px]', 'text-white', 'hover:bg-gray-700']">отправить</button>
            <Transition name="slide-fade">
                <p v-if="showedMessage != ''">{{ showedMessage }}</p>
            </Transition>
        </div>
        <div class="flex grow flex-row md:border-l-[1px] border-[var(--stroke)] p-4">
            <div class="flex w-fit mr-4 flex-col">
                <div v-for="i in 11" class="flex flex-col ">{{ i }}</div>
            </div>

            <div class="flex  flex-col ">
                <div class="flex flex-row text-white">
                    {{ `<` }} <div class="text-[#1948DB] mr-2">script </div>
                <div class="text-[#F694FF] flex flex-row">setup <div class="text-white">{{ '>' }}</div>
                </div>
            </div>
            <div>{{ 'const message = ref({' }}</div>
            <div class="ml-8 w-[500px] max-xl:w-[300px] overflow-ellipsis whitespace-nowrap overflow-hidden ">
                name:
                "{{ name }}",</div>
            <div class="ml-8 w-[500px] max-xl:w-[300px] overflow-ellipsis whitespace-nowrap overflow-hidden ">
                email:
                "{{ email }}",</div>
            <div class="ml-8 w-[500px] max-xl:w-[300px] overflow-ellipsis whitespace-nowrap overflow-hidden ">
                message: "{{ message }}",</div>
            <div class="ml-8">date: "{{ new Date().toDateString() }}"</div>
            <div>{{ '}' }}</div>
            <div>{{ 'function sendMessage(){' }}</div>
            <div class="ml-8">form.send(message)</div>
            <div>{{ '}' }}</div>
            <div class="text-white flex flex-row">{{ '</' }} <div class="text-[#1948DB]">script</div> {{ '>' }}
        </div>
    </div>
    </div>

    </div>
</template>

<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ref } from 'vue'
import emailjs from 'emailjs-com';

const name = ref('')
const email = ref('')
const message = ref('')
const showedMessage = ref('')
async function sendMail() {
    if (name.value && email.value && message.value) {
        showedMessage.value = '// идет обработка письма...'
        let result = await emailjs.send('service_vcspzno', 'template_xvgrf62', { name: name.value, email: email.value, message: message.value }, 'gvtDXaFD-zF29gxdS')
        console.log(result.status)
        if (result.status == 200)
            showedMessage.value = '// письмо доставлено!'
    } else {
        showedMessage.value = '// введите все поля'
    }
    setTimeout(() => {
        showedMessage.value = ''
    }, 2500)
}

</script>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;

}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
    transform: translateX(-40px);
}

.slide-fade-leave-to {
    transform: translateX(40px);
    opacity: 0;
}
</style>