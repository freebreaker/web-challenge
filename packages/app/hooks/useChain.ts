import { useState } from "react";
import useKeplr from "./useKeplr";

export default function useChain(id = '') {

  const [cid, setCid] = useState(id)

  const { updateKeplr } = useKeplr()

  const setChainId = (chainId: string) => {
    updateKeplr()
    setCid(chainId)
  }

  return { chainId: cid, setChainId }

}