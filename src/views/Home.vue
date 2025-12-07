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
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cards, selectedCard } from '@/stores/card';
import { ref, reactive } from 'vue';
import { BxRegularTrash } from 'vue-icons-lib/bx'

const isOpen = ref(false);
const isSubmitting = ref(false);

const form = reactive({
    title: '',
    note: '',
});

const openDialog = (card?: Card) => {
    if (card) {
        selectedCard.value = card;
        form.title = card.title;
        form.note = card.description;
    } else {
        selectedCard.value = null;
        form.title = '';
        form.note = '';
    }

    isOpen.value = true;
};

const closeDialog = () => {
    isOpen.value = false;
    selectedCard.value = null;
    form.title = '';
    form.note = '';
};

const onSubmit = () => {
    if (isSubmitting.value) return;
    isSubmitting.value = true;

    closeDialog();
    isSubmitting.value = false;
};
</script>

<template>
    <main class="pt-16">
        <div class="min-h-screen w-full">
            <div class="flex justify-between pe-2 ps-6 mt-10">
                <div class="relative w-70">
                    <Input placeholder="Search your notes" class="w-full pl-12" />

                    <CgSearch class="absolute top-3 left-3 translate-y-[-1.2px]" />
                </div>
                <Dialog v-model:open="isOpen">
                    <DialogTrigger asChild>
                        <Button class="flex flex-row gap-5 cursor-pointer" @click="openDialog()">
                            <BxRegularPlus />
                            New Note
                        </Button>
                    </DialogTrigger>

                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>
                                {{ selectedCard ? 'Edit Note' : 'Create New Note' }}
                            </DialogTitle>
                        </DialogHeader>
                        <form class="flex flex-col gap-3" @submit.prevent="onSubmit">
                            <div class="flex flex-col gap-2">
                                <Label class="pe-2">Title</Label>
                                <Input v-model="form.title" placeholder="Note Title" class="w-full" />
                            </div>
                            <div class="flex flex-col gap-2">
                                <Label class="pe-2">Note</Label>
                                <Textarea v-model="form.note" placeholder="Your Note" class="w-full" />
                            </div>
                            <Separator />
                            <div class="flex flex-row justify-between gap-5">
                                <Button variant="destructive" type="button" v-if="selectedCard">
                                    <BxRegularTrash class="mr-3" />
                                    Delete
                                </Button>
                                <div class="flex gap-5 justify-end w-full">
                                    <Button variant="outline" type="button" @click="closeDialog">
                                        Cancel
                                    </Button>
                                    <Button class="flex flex-row" type="submit">
                                        <BxRegularSave class="mr-3" />
                                        Save
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
            <br>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pe-2 ps-6">
                <Card v-for="card in cards" :key="card.id" class="border rounded-lg shadow-sm cursor-pointer"
                    @click="openDialog(card)">
                    <CardHeader>
                        <CardTitle>Card Title {{ card.title }}</CardTitle>
                    </CardHeader>
                    <CardContent class="line-clamp-4">
                        {{ card.description }}
                    </CardContent>
                    <CardFooter class="flex flex-row flex-wrap gap-2">
                        <Badge v-for="tag in card.tags" :key="tag" variant="outline">
                            {{ tag }}
                        </Badge>
                    </CardFooter>
                </Card>
            </div>
            <br>
        </div>
    </main>
</template>

<style scoped></style>