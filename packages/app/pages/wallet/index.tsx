import React, { useCallback, useEffect, useState } from 'react';
import { Layout } from '@cosmology/react';
import ConnectWallet from '../../components/wallet-connect/ConnectWallet';
import ChooseCoins from '../../components/coin-choose-list'
import useKeplr from '../../hooks/useKeplr';
import useChain from '../../hooks/useChain';
import useAddress from '../../hooks/useAddress';
import { Observer } from "mobx-react-lite";

export default () => {

  const defaultChainId = 'osmosis-1'

  const { keplr, getKeplr } = useKeplr()

  const { chainId, setChainId } = useChain(defaultChainId)

  const { address, renderAddress } = useAddress()

  const connectAddress = useCallback(async (chainId: string) => {
    if (keplr) {
      renderAddress(chainId)
    } else {
      getKeplr().then((k) => {
        if (k) {
          renderAddress(chainId)
        }
      })
    }
  }, [keplr, getKeplr])

  useEffect(() => {
    if (keplr) {
      window.addEventListener("keplr_keystorechange", () => {
        window.location.reload()
      })
    }
  }, [keplr])

  return <Observer>
    {
      () => <Layout>
        <ConnectWallet address={address} connectAddress={async () => {
          await connectAddress(chainId)
        }} />
        <ChooseCoins
          chooseCoin={(id) => {
            setChainId(id)
            connectAddress(id)
          }} />
      </Layout>
    }

  </Observer>
    ;
};
