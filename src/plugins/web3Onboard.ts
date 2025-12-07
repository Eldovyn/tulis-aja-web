import { init } from "@web3-onboard/vue";
import injectedModule from "@web3-onboard/injected-wallets";

const injected = injectedModule();

const rpcUrl = import.meta.env.RPC_URL;

export const web3Onboard = init({
    wallets: [injected],
    chains: [
        {
            id: "0x1",
            token: "ETH",
            label: "Ethereum Hardhat Network",
            rpcUrl,
        },
    ],
});