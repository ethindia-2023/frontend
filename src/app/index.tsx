import "./index.css";
import React, { useEffect, useState } from "react";
import {
  SafeAuthPack,
  SafeAuthConfig,
  SafeAuthInitOptions,
} from '@safe-global/auth-kit'

const App: React.FC = () => { 
  const [safeAuthPack, setSafeAuthPack] = useState<SafeAuthPack | null>(null);

  const initialize = async () => {
    const safeAuthInitOptions: SafeAuthInitOptions = {
      enableLogging: true,
      showWidgetButton: false,
      chainConfig: {
        chainId: '0x64',
        rpcTarget: 'https://gnosis.drpc.org'
      },
    }

    const safeAuthPack = new SafeAuthPack();
    await safeAuthPack.init(safeAuthInitOptions);
    setSafeAuthPack(safeAuthPack);
  }

  useEffect(() => {
    initialize();
  });

  const login = async () => { 
    const authKitSignData = await safeAuthPack!.signIn();
    console.log(authKitSignData);
  }

  return (
    <>
      <button onClick={login}>Login</button>
    </>
  )
};

export default App;
