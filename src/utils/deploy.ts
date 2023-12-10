import { BrowserProvider, ContractFactory } from "ethers";
import { RBAC__factory } from "../contracts/factories/RBAC__factory";
import type { Eip1193Provider } from "ethers";

export const deployContract = async (signer: Eip1193Provider) => {
  try {
    const provider = new BrowserProvider(signer);
    const signer2 = await provider.getSigner();
    const contract = await new RBAC__factory(signer2).deploy();
    await contract.waitForDeployment();
    return await contract.getAddress();
  } catch (e) {
    console.log(e);
  }
};
