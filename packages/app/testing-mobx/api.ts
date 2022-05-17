import { SHA256 } from "crypto-js";
import { ITx } from "./store";
import { chains, assets } from '@cosmology/cosmos-registry'
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
    return chains.map((i: { chain_id: string; chain_name: any; }) => {
        const currentAsset = assets.find((c: { chain_id: string; }) => c.chain_id === i.chain_id)
        return {
            chain_id: i.chain_id,
            chain_name: i.chain_name,
            imgSrc: currentAsset?.assets[0]?.logo_URIs.png,
        }
    })
}