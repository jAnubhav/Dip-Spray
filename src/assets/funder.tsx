import React, { useState } from "react";
import { Aptos, AptosConfig, Network } from "@aptos-labs/ts-sdk";

const aptos: Aptos = new Aptos(new AptosConfig({ network: Network.DEVNET }));

const isHex = (val: string): boolean => /^(0x|0X)?[a-fA-F0-9]+$/.test(val);

export const Variables = () => {
    const [ acc_input, set_acc ] = useState<string>("");
    const [ quan_input, set_quan ] = useState<number>(1);
    const [ btn_state, set_btn ] = useState<string>("disabled");

    const update_acc = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let val: string = e.target.value; set_acc(val);

        if (val.startsWith("0x") && val.length == 66 && isHex(val)) {
            set_btn("active"); } else set_btn("disabled");
    };
    
    const update_quan = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let val: number = parseInt(e.target.value); if (val != 10 && val % 10 == 0) val /= 10; 
        else if (val > 10) val %= 10; else if (isNaN(val)) val = 1; set_quan(val);
    };

    
    const fund_account = async () => {
        set_btn("disabled");

        for (let i = 0; i < quan_input; i++) await aptos.fundAccount(
            { accountAddress: acc_input, amount: 100_000_000 });

        set_btn("active");
    };

    return { update_acc, update_quan, fund_account, acc_input, quan_input, btn_state };
};