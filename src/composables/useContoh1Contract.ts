import { BrowserProvider, Contract } from "ethers";
import { ref } from "vue";

const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const CONTRACT_ABI = [
    {
        type: "function",
        name: "makananFavorite",
        stateMutability: "view",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
    },
    {
        type: "function",
        name: "nama",
        stateMutability: "view",
        inputs: [],
        outputs: [{ name: "", type: "string", internalType: "string" }],
    },
    {
        type: "function",
        name: "umur",
        stateMutability: "view",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    },
];

export function useContoh1Contract(connectedWallet: any) {
    const namaOnChain = ref<string | null>(null);
    const loading = ref(false);
    const error = ref<string | null>(null);

    const getContract = async (): Promise<Contoh1Contract> => {
        if (!connectedWallet.value) {
            throw new Error("Wallet belum connect");
        }

        const provider = new BrowserProvider(connectedWallet.value.provider as any);
        const signer = await provider.getSigner();

        return new Contract(
            CONTRACT_ADDRESS,
            CONTRACT_ABI,
            signer
        ) as unknown as Contoh1Contract;
    };

    const readNama = async () => {
        try {
            loading.value = true;
            error.value = null;

            const contract = await getContract();
            const result: string = await contract.nama();
            console.log("nama() result:", result);
            namaOnChain.value = result;
        } catch (e: any) {
            console.error("Error readNama:", e);
            error.value = e?.message ?? String(e);
        } finally {
            loading.value = false;
        }
    };

    return {
        namaOnChain,
        loading,
        error,
        readNama,
    };
}
