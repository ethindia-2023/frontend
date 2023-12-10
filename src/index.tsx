import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app";
import reportWebVitals from "./reportWebVitals";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = "bbdd4a3fe72a0865c541fc75cf67c0b7";

const sepoliaScroll = {
  chainId: 534351,
  name: "Scroll Testnet",
  currency: "ETH",
  explorerUrl: "https://sepolia.scrollscan.dev",
  rpcUrl: "https://sepolia-rpc.scroll.io",
};

const mantleTest = {
  chainId: 5001,
  name: "Mantle Testnet",
  currency: "MTN",
  explorerUrl: "https://sepolia.scrollscan.dev",
  rpcUrl: "https://rpc.testnet.mantle.xyz",
};

// 3. Create modal
const metadata = {
  name: "Cypher Sight",
  description: "My Website description",
  url: "https://mywebsite.com",
  icons: ["https://avatars.mywebsite.com/"],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [sepoliaScroll, mantleTest],
  projectId,
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
