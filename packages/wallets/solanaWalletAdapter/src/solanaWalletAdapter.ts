import type { TorusCtorArgs, TorusParams } from "@toruslabs/solana-embed";
import {
  ADAPTER_NAMESPACES,
  AdapterNamespaceType,
  BASE_WALLET_EVENTS,
  BaseWalletAdapter,
  SafeEventEmitterProvider,
  TorusSolanaWalletChainConfig,
  UserInfo,
} from "@web3auth/base";

import type { Torus } from "./interface";

class SolanaWalletAdapter extends BaseWalletAdapter {
  readonly namespace: AdapterNamespaceType = ADAPTER_NAMESPACES.EIP155;

  public connecting: boolean;

  public ready: boolean;

  public connected: boolean;

  public provider: SafeEventEmitterProvider;

  public torusInstance: Torus;

  readonly chainConfig: TorusSolanaWalletChainConfig;

  private torusWalletOptions: TorusCtorArgs;

  private initParams: TorusParams;

  constructor(params: {
    chainConfig: TorusSolanaWalletChainConfig;
    widgetOptions: TorusCtorArgs;
    initParams: TorusParams & Omit<TorusParams, "network">;
  }) {
    super();
    this.torusWalletOptions = params.widgetOptions;
    this.initParams = {
      ...params.initParams,
      network: params.chainConfig,
    };
    this.chainConfig = params.chainConfig;
  }

  async init(params?: TorusParams): Promise<void> {
    if (this.ready) return;
    const { default: TorusSdk } = await import("@toruslabs/solana-embed");
    this.torusInstance = new TorusSdk(this.torusWalletOptions);
    await this.torusInstance.init({ showTorusButton: false, ...this.initParams, ...params });
    this.ready = true;
  }

  async connect(): Promise<void> {
    if (!this.ready) throw new Error("Torus wallet adapter is not ready, please init first");
    this.connecting = true;
    this.emit(BASE_WALLET_EVENTS.CONNECTING);
    try {
      await this.torusInstance.login();
      // TODO: make torus embed provider type compatible with this
      this.provider = this.torusInstance.provider as unknown as SafeEventEmitterProvider;
      this.connected = true;
      this.torusInstance.showTorusButton();
      this.emit(BASE_WALLET_EVENTS.CONNECTED);
    } catch (error) {
      this.emit(BASE_WALLET_EVENTS.ERRORED, error);
      throw error;
    } finally {
      this.connecting = false;
    }
  }

  async disconnect(): Promise<void> {
    if (!this.connected) throw new Error("Not connected with wallet");
    await this.torusInstance.logout();
    this.connected = false;
    this.emit(BASE_WALLET_EVENTS.DISCONNECTED);
  }

  async getUserInfo(): Promise<Partial<UserInfo>> {
    if (!this.connected) throw new Error("Not connected with wallet, Please login/connect first");
    const userInfo = await this.torusInstance.getUserInfo();
    return userInfo;
  }
}

export { SolanaWalletAdapter, TorusCtorArgs, TorusParams };