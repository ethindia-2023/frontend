import "./index.css";
import React, { useEffect, useState } from "react";
import { SafeAuthPack, SafeAuthInitOptions } from "@safe-global/auth-kit";

interface AuthKitSignInData {
  eoa: string;
  safes?: string[];
}

const Login: React.FC = () => {
  const [safeAuthPack, setSafeAuthPack] = useState<SafeAuthPack | null>(null);
  const [, setAuthKitSignData] = useState<AuthKitSignInData | null>(null);

  const initialize = async () => {
    const safeAuthInitOptions: SafeAuthInitOptions = {
      enableLogging: true,
      showWidgetButton: false,
      chainConfig: {
        chainId: "0x64",
        rpcTarget: "https://gnosis.drpc.org",
      },
    };

    const safeAuthPack = new SafeAuthPack();
    await safeAuthPack.init(safeAuthInitOptions);
    setSafeAuthPack(safeAuthPack);
  };

  useEffect(() => {
    initialize();
  });

  const login = async () => {
    const authKitSignData = await safeAuthPack!.signIn();
    if (authKitSignData !== null) {
      setAuthKitSignData(authKitSignData);
    }
    console.log(authKitSignData);
  };

  return (
    <>
      <button onClick={login}>Login</button>
    </>
  );
};

export default Login;
