import {
  ADAPTER_CATEGORY,
  ADAPTER_CATEGORY_TYPE,
  ADAPTER_NAMESPACES,
  AdapterNamespaceType,
  BASE_WALLET_EVENTS,
  BaseWalletAdapter,
  CHAIN_NAMESPACES,
  ChainNamespaceType,
  SafeEventEmitterProvider,
  UserInfo,
  WALLET_ADAPTERS,
  WalletConnectionError,
  WalletNotConnectedError,
  WalletNotReadyError,
} from "@web3auth/base";

class MetamaskAdapter extends BaseWalletAdapter {
  readonly namespace: AdapterNamespaceType = ADAPTER_NAMESPACES.EIP155;

  readonly currentChainNamespace: ChainNamespaceType = CHAIN_NAMESPACES.EIP155;

  readonly walletType: ADAPTER_CATEGORY_TYPE = ADAPTER_CATEGORY.EXTERNAL;

  public connecting: boolean;

  public ready: boolean;

  public connected: boolean;

  public provider: SafeEventEmitterProvider;

  async init(): Promise<void> {
    if (this.ready) return;
    const provider = (window as any).ethereum;
    if (provider && provider.isMetaMask) {
      this.ready = true;
    }
  }

  async connect(): Promise<SafeEventEmitterProvider> {
    return new Promise((resolve, reject) => {
      if (!this.ready) throw new WalletNotReadyError("Metamask extention is not installed");
      this.connecting = true;
      this.emit(BASE_WALLET_EVENTS.CONNECTING);
      try {
        const provider = (window as any).ethereum;
        if (!provider || !provider?.isMetaMask) {
          throw new WalletNotReadyError("Metamask extention is not installed");
        }
        const onConnectHandler = () => {
          if (this.connected && this.provider) resolve(this.provider);
          this.provider = provider;
          this.connected = true;
          this.addEventListeners(provider);
          this.emit(BASE_WALLET_EVENTS.CONNECTED, WALLET_ADAPTERS.METAMASK_WALLET);
          resolve(this.provider);
        };
        provider.on("connect", () => {
          onConnectHandler();
        });
        provider
          .request({ method: "eth_requestAccounts" })
          .then(() => {
            if (provider.isConnected()) {
              onConnectHandler();
            }
            return true;
          })
          .catch((err) => {
            reject(err);
          });
      } catch (error) {
        this.emit(BASE_WALLET_EVENTS.ERRORED, error);
        throw new WalletConnectionError("Failed to login with metamask wallet", error);
      } finally {
        this.connecting = false;
      }
    });
  }

  async disconnect(): Promise<void> {
    if (!this.connected) throw new WalletNotConnectedError("Not connected with wallet");
    this.provider?.removeAllListeners();
    this.connected = false;
    this.emit(BASE_WALLET_EVENTS.DISCONNECTED);
  }

  async getUserInfo(): Promise<Partial<UserInfo>> {
    if (!this.connected) throw new WalletNotConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  private addEventListeners(provider: SafeEventEmitterProvider): void {
    provider.on("disconnect", () => {
      this.connected = false;
      this.emit(BASE_WALLET_EVENTS.DISCONNECTED);
    });
    provider.on("connect", () => {
      this.connected = true;
      this.emit(BASE_WALLET_EVENTS.CONNECTED, WALLET_ADAPTERS.METAMASK_WALLET);
    });
  }
}

export { MetamaskAdapter };