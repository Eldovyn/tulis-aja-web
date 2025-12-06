<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { BxRegularPlus } from 'vue-icons-lib/bx';
import { CgSearch } from 'vue-icons-lib/cg';
</script>

<template>
    <div class="h-screen w-full">
        <div class="flex justify-between pe-6 ps-6 mt-10">
            <div class="relative w-70">
                <Input placeholder="Search your notes" class="w-full pl-12" />

                <CgSearch class="absolute top-3 left-3 translate-y-[-1.2px]" />
            </div>
            <Button class="flex flex-row gap-5">
                <BxRegularPlus />
                New Note
            </Button>
        </div>
    </div>
</template>

<style scoped></style>