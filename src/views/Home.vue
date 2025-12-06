<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button';
import { BxRegularPlus } from 'vue-icons-lib/bx';
import { CgSearch } from 'vue-icons-lib/cg';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { BxRegularSave } from 'vue-icons-lib/bx';
</script>

<template>
    <div class="h-screen w-full">
        <div class="flex justify-between pe-6 ps-6 mt-10">
            <div class="relative w-70">
                <Input placeholder="Search your notes" class="w-full pl-12" />

                <CgSearch class="absolute top-3 left-3 translate-y-[-1.2px]" />
            </div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button class="flex flex-row gap-5 cursor-pointer">
                        <BxRegularPlus />
                        New Note
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Create New Note</DialogTitle>
                    </DialogHeader>
                    <form action="" class="flex flex-col gap-3">
                        <div class="flex flex-col gap-2">
                            <Label class="pe-2">Title</Label>
                            <Input placeholder="Note Title" class="w-full" />
                        </div>
                        <div class="flex flex-col gap-2">
                            <Label class="pe-2">Title</Label>
                            <Textarea placeholder="Your Note" class="w-full" />
                        </div>
                        <Separator />
                        <div class="flex flex-row justify-end gap-5">
                            <Button variant="outline">Cancel</Button>
                            <Button class="flex flex-row">
                                <BxRegularSave class="mr-3" />
                                Save
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    </div>
</template>

<style scoped></style>