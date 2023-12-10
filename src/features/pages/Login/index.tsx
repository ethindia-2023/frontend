import "./index.css";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import React, { useEffect, useState } from "react";
import logo from "assets/download.png";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const navigate = useNavigate();

  useEffect(() => {
    if (isConnected) {
      navigate("/");
    }
  }, [isConnected]);

  return (
    <>
      <div className="login-card">
        <div className="signin-image">
          <figure>
            <img src={logo} alt="logo" height={50} />
          </figure>
        </div>
        <div>
          <p className="signup-image-link">Welcome to Cypher Sight</p>
          <w3m-button />
        </div>{" "}
      </div>
    </>
  );
};

export default Login;
