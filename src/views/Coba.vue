<script setup lang="ts">
import WalletConnectButton from '@/components/WalletConnectButton.vue';
import { useContoh1Contract } from '@/composables/useContoh1Contract';
import { useOnboard } from '@web3-onboard/vue';

const {
    connectedWallet,
} = useOnboard();

const {
    namaOnChain,
    loading,
    error,
    readNama,
} = useContoh1Contract(connectedWallet);
</script>


<template>
    <WalletConnectButton />
    <div style="margin-top: 1rem;" v-if="connectedWallet">
        <button type="button" @click="readNama" :disabled="loading">
            {{ loading ? "Reading..." : "Read from contract" }} </button>
        <p v-if="namaOnChain">Nama dari contract: {{ namaOnChain }}</p>
        <p v-if="error" style="color: red">Error: {{ error }}</p>
    </div>
</template>