import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptos: Aptos = new Aptos(new AptosConfig({ network: Network.DEVNET }));

const fund_account = async () => {
    const acc: string = (document.getElementById("acc") as HTMLInputElement).value;
    const quan: string = (document.getElementById("quan") as HTMLInputElement).value;

    if (acc == '' || quan == '') return;

    const btn: HTMLInputElement = document.getElementById("btn") as HTMLInputElement;
    btn.disabled = true; btn.classList.add("disabled");

    for (let i = 0; i < parseInt(quan); i++) {
        await aptos.fundAccount({ accountAddress: acc, amount: 100_000_000 }); }

    btn.disabled = false; btn.classList.remove("disabled")
}

export default fund_account;