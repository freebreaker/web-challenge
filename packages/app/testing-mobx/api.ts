import { SHA256 } from "crypto-js";
import { ITx } from "./store";
import { chains } from '@cosmology/cosmos-registry'
import { assets } from '@cosmology/core'
export const getData = () => {
    return new Promise<Array<ITx>>((resolve, reject) => {
        setTimeout(() => {
            resolve([{
                hash: SHA256('memo').toString(),
                memo: 'memo',
                created: new Date(),
                status: 0
            }]);
        }, 2300);
    });
}

export const getChains = () => {
    return chains.map((i: { chain_id: string; chain_name: any; pretty_name: string }) => {
        const currentAsset = assets.find((c: { name: string; }) => c.name === i.pretty_name)
        return {
            chain_id: i.chain_id,
            chain_name: i.chain_name,
            imgSrc: currentAsset?.logo_URIs.png,
        }
    })
}