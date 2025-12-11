<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import Button from '@/components/ui/button/Button.vue';
import Label from '@/components/ui/label/Label.vue';
import { AiOutlineMail, AiOutlineEye } from 'vue-icons-lib/ai'
import { BxSolidLockAlt } from 'vue-icons-lib/bx'
import { ref } from 'vue';
import { CiEyeOff } from 'vue-icons-lib/ci'

const showPassword = ref(false);

function toggleShowPassword() {
    showPassword.value = !showPassword.value;
}
</script>

<template>
    <div class="h-screen w-full bg-[#EEF2F5] flex justify-center items-center">
        <form action="" class="bg-white w-[30%] rounded-md p-10 flex flex-col gap-5">
            <div id="header" class="flex flex-col gap-1">
                <h1 class="text-2xl font-bold text-center">Back to what matters</h1>
                <p class="text-sm text-gray-500 text-center">Sign in to your account to continue</p>
            </div>
            <div id="body" class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <Label class="ps-[5%]">Email</Label>
                    <div class="relative w-[90%] mx-auto">
                        <AiOutlineMail class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input placeholder="Enter your email" class="w-full pl-10" />
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <Label class="ps-[5%]">Password</Label>

                    <div class="relative w-[90%] mx-auto">
                        <BxSolidLockAlt class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />

                        <Input :type="showPassword ? 'text' : 'password'" placeholder="Enter your password"
                            class="w-full pl-10 pr-10" />

                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            @click="toggleShowPassword">
                            <AiOutlineEye class="w-5 h-5" v-if="showPassword" />
                            <CiEyeOff class="w-5 h-5" v-else />
                        </button>
                    </div>

                    <p class="w-[90%] mx-auto text-right -mt-1">
                        <span class="text-blue-500 cursor-pointer text-sm hover:underline">
                            Forgot Password?
                        </span>
                    </p>
                </div>


                <Button class="w-[90%] mx-auto cursor-pointer">Login</Button>
            </div>

            <div id="footer" class="pe-[5%]">
                <p class="text-end text-sm text-gray-500">Don't have an account? <span
                        class="font-semibold hover:underline cursor-pointer text-black">Sign Up</span>
                </p>
            </div>
        </form>
    </div>
</template>

<style scoped></style>