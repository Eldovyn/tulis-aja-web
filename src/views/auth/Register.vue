<script setup lang="ts">
import Input from '@/components/ui/input/Input.vue';
import Button from '@/components/ui/button/Button.vue';
import Label from '@/components/ui/label/Label.vue';
import { AiOutlineMail } from 'vue-icons-lib/ai';
import { BxSolidLockAlt } from 'vue-icons-lib/bx';
import { CiEyeOff } from 'vue-icons-lib/ci';
import { AiOutlineEye } from 'vue-icons-lib/ai';
import { ref } from 'vue';
import { AiOutlineUser } from 'vue-icons-lib/ai'

const showPassword = ref(false);
const showConfirmPassword = ref(false);

function toggleShowPassword() {
    showPassword.value = !showPassword.value;
}

function toggleShowConfirmPassword() {
    showConfirmPassword.value = !showConfirmPassword.value;
}
</script>

<template>
    <div class="h-screen w-full bg-[#EEF2F5] flex justify-center items-center">
        <form class="bg-white w-[30%] rounded-md p-10 flex flex-col gap-5">
            <div id="header" class="flex flex-col gap-1">
                <h1 class="text-2xl font-bold text-center">Create your account</h1>
                <p class="text-sm text-gray-500 text-center">
                    Sign up to get started
                </p>
            </div>

            <div id="body" class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <Label class="ps-[5%]">Email</Label>
                    <div class="relative w-[90%] mx-auto">
                        <AiOutlineMail class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input type="email" placeholder="Enter your email" class="w-full pl-10" />
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <Label class="ps-[5%]">Username</Label>
                    <div class="relative w-[90%] mx-auto">
                        <AiOutlineUser class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />
                        <Input type="email" placeholder="Enter your username" class="w-full pl-10" />
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
                            <AiOutlineEye v-if="showPassword" class="w-5 h-5" />
                            <CiEyeOff v-else class="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div class="flex flex-col gap-2">
                    <Label class="ps-[5%]">Confirm Password</Label>
                    <div class="relative w-[90%] mx-auto">
                        <BxSolidLockAlt class="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2" />

                        <Input :type="showConfirmPassword ? 'text' : 'password'" placeholder="Confirm your password"
                            class="w-full pl-10 pr-10" />

                        <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            @click="toggleShowConfirmPassword">
                            <AiOutlineEye v-if="showConfirmPassword" class="w-5 h-5" />
                            <CiEyeOff v-else class="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <Button class="w-[90%] mx-auto cursor-pointer">
                    Sign Up
                </Button>
            </div>

            <!-- FOOTER -->
            <div id="footer" class="pe-[5%]">
                <p class="text-end text-sm text-gray-500">
                    Already have an account?
                    <span class="font-semibold hover:underline cursor-pointer text-black">
                        Sign In
                    </span>
                </p>
            </div>
        </form>
    </div>
</template>

<style scoped></style>
