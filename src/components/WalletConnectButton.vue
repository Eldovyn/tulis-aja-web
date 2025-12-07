<script setup lang="ts">
import { useOnboard } from "@web3-onboard/vue";

const {
    connectWallet,
    disconnectConnectedWallet,
    connectedWallet,
    connectingWallet,
} = useOnboard();

const connect = async () => {
    await connectWallet();
};

const disconnect = async () => {
    await disconnectConnectedWallet();
};
</script>

<template>
    <div>
        <button v-if="!connectedWallet" type="button" @click="connect">
            <span v-if="connectingWallet">Connecting...</span>
            <span v-else>Connect Wallet</span>
        </button>

        <div v-else>
            <p>Connected: {{ connectedWallet.accounts[0].address }}</p>
            <button type="button" @click="disconnect">
                Disconnect
            </button>
        </div>
    </div>
</template>
