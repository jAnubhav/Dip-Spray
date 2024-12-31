import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptos: Aptos = new Aptos(new AptosConfig({ network: Network.DEVNET }));

const funder = async () => {
    await aptos.fundAccount({ 
        accountAddress: "0xcbfce9416602fbe8ebf8c748c472a47e5a2d46174b7ab979f491d2377fca9491", 
        amount: 100_000_000 
    });
};

export default funder;