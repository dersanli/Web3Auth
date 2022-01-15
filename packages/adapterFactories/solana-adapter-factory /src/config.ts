import { AdapterConfig, SOLANA_ADAPTERS } from "@web3auth/base";

export const defaultSolanaDappAdaptersConfig: Record<string, AdapterConfig> = {
  [SOLANA_ADAPTERS.TORUS_SOLANA]: {
    label: "Torus Solana Wallet",
    showOnModal: true,
    showOnMobile: true,
    showOnDesktop: true,
  },
  [SOLANA_ADAPTERS.OPENLOGIN]: {
    label: "OpenLogin",
    showOnModal: true,
    showOnMobile: true,
    showOnDesktop: true,
  },
  [SOLANA_ADAPTERS.PHANTOM]: {
    label: "Phantom",
    showOnModal: true,
    showOnMobile: true,
    showOnDesktop: true,
  },
};

export const defaultSolanaWalletAdaptersConfig: Record<string, AdapterConfig> = {
  [SOLANA_ADAPTERS.OPENLOGIN]: {
    label: "OpenLogin",
    showOnModal: true,
    showOnMobile: true,
    showOnDesktop: true,
  },
};