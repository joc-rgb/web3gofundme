import WalletConnectProvider from "@walletconnect/web3-provider";
import { sequence } from "0xsequence";
import UAuthSPA from "@uauth/js";
import * as UAuthWeb3Modal from "./UAuthWeb3";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
const uauthOptions = {
  clientID: "dfa3c076-9ec7-4713-bad7-8850f2df88aa",
  redirectUri: "https://liquid721-zee7x8.spheron.app",
  scope: "openid wallet",
};
export const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "95f65ab099894076814e8526f52c9149",
    },
  },

  coinbasewallet: {
    package: CoinbaseWalletSDK,
    options: {
      appName: "GoFundMe",
      infuraId: "95f65ab099894076814e8526f52c9149",
    },
  },
  injected: {
    display: {
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png?20220831120339",
      name: "Metamask",
      description: "Connect with the provider in your Browser",
    },
    package: null,
  },
  "custom-uauth": {
    display: UAuthWeb3Modal.display,
    connector: UAuthWeb3Modal.connector,
    package: UAuthSPA,
    options: uauthOptions,
  },
};
