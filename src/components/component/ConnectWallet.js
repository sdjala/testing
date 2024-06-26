import {
  useMetamask,
  useNetwork,
  useAddress,
  useDisconnect,
} from '@thirdweb-dev/react';

export const ConnectWallet = () => {
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();
  const address = useAddress();
  const network = useNetwork();

  // If a wallet is connected, show address, chainId and disconnect button
  if (address) {
    return (
      <div>
        Address: {address}
        <br />
        Chain ID: {network[0].data.chain && network[0].data.chain.id}
        <br />
        <button onClick={disconnectWallet}>Disconnect</button>
      </div>
    );
  }

  // If no wallet is connected, show connect wallet options
  return (
    <div>
      <button className="mx-4 myButton myBule text-white px-3 xl:px-6" onClick={() => connectWithMetamask()}>Connect MetaMask</button>
    </div>
  );
};