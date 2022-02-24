import type { OpenLoginOptions } from "@toruslabs/openlogin";
import {
  BaseAdapterConfig,
  BaseDefaultAdapters,
  CHAIN_NAMESPACES,
  CustomChainConfig,
  DefaultAdaptersInitOptions,
  getChainConfig,
  IAdapter,
  mergeDefaultAdapterConfig,
  WALLET_ADAPTER_TYPE,
  WALLET_ADAPTERS,
} from "@web3auth/base";
import cloneDeep from "lodash.clonedeep";
import log from "loglevel";

import { defaultEvmAdaptersConfig } from "./config";

export class EvmDefaultAdapters extends BaseDefaultAdapters {
  constructor() {
    super({ chainNamespace: CHAIN_NAMESPACES.EIP155 });
  }

  async _init(options: DefaultAdaptersInitOptions): Promise<void> {
    // eslint-disable-next-line no-console
    console.log("init opetions", options);
    const optCopy: DefaultAdaptersInitOptions = cloneDeep(options);
    const defaultAdaptersConfig: Record<string, BaseAdapterConfig> = cloneDeep(defaultEvmAdaptersConfig);

    const allDefaultAdapters = [...Object.keys(defaultAdaptersConfig)];
    log.debug("allDefaultAdapters", allDefaultAdapters);

    allDefaultAdapters.forEach((adapterName) => {
      // merge default with passed adapter config.
      mergeDefaultAdapterConfig(adapterName, defaultAdaptersConfig, optCopy.adaptersConfig);

      optCopy.skipAdapters[adapterName] = {
        ...(optCopy.skipAdapters[adapterName] || {}),
        // no need to initialized adapter if it is already initialized by core.
        initializeAdapter: optCopy.skipAdapters[adapterName]?.initializeAdapter !== false,
      };
    });
    log.debug("optCopy", optCopy);

    return super._init(optCopy);
  }

  _getDefaultAdapterModule = async (params: {
    name: WALLET_ADAPTER_TYPE;
    clientId: string;
    customChainConfig: Partial<CustomChainConfig> & Pick<CustomChainConfig, "chainNamespace">;
  }): Promise<IAdapter<unknown>> => {
    const { name, customChainConfig, clientId } = params;
    if (!Object.values(CHAIN_NAMESPACES).includes(customChainConfig.chainNamespace))
      throw new Error(`Invalid chainNamespace: ${customChainConfig.chainNamespace}`);

    const finalChainConfig = {
      ...(getChainConfig(customChainConfig.chainNamespace, customChainConfig?.chainId) as CustomChainConfig),
      ...(customChainConfig || {}),
    };
    if (name === WALLET_ADAPTERS.TORUS_EVM) {
      const { TorusWalletAdapter } = await import("@web3auth/torus-evm-adapter");
      const adapter = new TorusWalletAdapter({ chainConfig: finalChainConfig });
      return adapter;
    } else if (name === WALLET_ADAPTERS.METAMASK) {
      const { MetamaskAdapter } = await import("@web3auth/metamask-adapter");
      const adapter = new MetamaskAdapter({ chainConfig: finalChainConfig });
      return adapter;
    } else if (name === WALLET_ADAPTERS.WALLET_CONNECT_V1) {
      const { WalletConnectV1Adapter } = await import("@web3auth/wallet-connect-v1-adapter");
      const adapter = new WalletConnectV1Adapter({ chainConfig: finalChainConfig });
      return adapter;
    } else if (name === WALLET_ADAPTERS.OPENLOGIN) {
      const { OpenloginAdapter, getOpenloginDefaultOptions } = await import("@web3auth/openlogin-adapter");
      const defaultOptions = getOpenloginDefaultOptions(customChainConfig.chainNamespace, customChainConfig?.chainId);
      const adapter = new OpenloginAdapter({
        ...defaultOptions,
        adapterSettings: { ...defaultOptions.adapterSettings, clientId } as OpenLoginOptions,
      });
      return adapter;
    }
    throw new Error(`Invalid wallet adapter name: ${name}`);
  };
}