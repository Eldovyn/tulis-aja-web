import { ref } from "vue";

const namaOnChain = ref<string | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

export {
    namaOnChain,
    loading,
    error
}