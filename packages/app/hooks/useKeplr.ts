import { Keplr } from "@keplr-wallet/types";
import { useCallback, useEffect, useState } from "react";

export default function useKeplr() {

  const [keplr, setKeplr] = useState<Keplr>(null)

  const getKeplr = useCallback(async () => {
    if (!typeof window == undefined) {
      alert('Please use keplr extension in Chrome')
      return
    }

    if (!window.keplr) {
      alert("Please install keplr extension");
      return
    }

    if (window.keplr) {
      setKeplr(window.keplr)
      return window.keplr
    }

    if (document.readyState === "complete") {
      setKeplr(window.keplr)
      return window.keplr
    }


    const documentStateChange = (event: Event) => {
      if (
        event.target &&
        (event.target as Document).readyState === "complete"
      ) {
        setKeplr(window.keplr)
        document.removeEventListener("readystatechange", documentStateChange);
        return window.keplr
      }
    };

    document.addEventListener("readystatechange", documentStateChange);

  }, [])

  useEffect(() => {
    if (!typeof window == undefined) {
      alert('Please use keplr extension in Chrome')
      return
    }
    setKeplr(window.keplr)
  }, [])

  const updateKeplr = () => {
    getKeplr().then((k) => {
      if (k) {
        setKeplr(k)
      }
    })
  }

  return { keplr, getKeplr, updateKeplr }
}