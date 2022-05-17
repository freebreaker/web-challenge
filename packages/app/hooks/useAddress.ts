import { useCallback, useState } from "react"
import useKeplr from "./useKeplr"

export default function useAddress(initId = '') {

  const [address, setAddress] = useState(initId)

  const { keplr, getKeplr } = useKeplr()

  const getAddress = useCallback(async (chainId: string) => {
    if (!keplr) {
      const k = await getKeplr()
      await k.enable(chainId);
      const key = await k.getKey(chainId)
      return key.bech32Address
    } else {
      await keplr.enable(chainId);
      const key = await keplr.getKey(chainId)
      return key.bech32Address
    }
  }, [keplr])

  const renderAddress = (chainId: string) => {
    getAddress(chainId).then((r) => {
      if (r) {
        setAddress(r)
      }
    })
  }

  const clearAddress = () => {
    setAddress('')
  }

  return {
    address,
    renderAddress,
    clearAddress

  }
}