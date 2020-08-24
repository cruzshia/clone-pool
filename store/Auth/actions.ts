import { ActionTree } from 'vuex'
import Web3 from 'web3'
import WalletConnectProvider from '@walletconnect/web3-provider';
import WalletLink from 'walletlink';

declare const ethereum: any

export default {
  async loginMetamask({ commit }): Promise<void> {
    commit('LOGIN_ERROR', false)
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const chainId = ethereum.networkVersion

      commit('ACCOUNT', accounts[0])
      commit('CHAIN_ID', chainId)
    } catch (error) {
      commit('LOGIN_ERROR', true)
      console.log('error', error)
    }
  },
  async loginWalletConnect({ commit }): Promise<void> {
    commit('LOGIN_ERROR', false)
    try {
      const provider: any = new WalletConnectProvider({
        infuraId: 'd24fd61c09f846e589e0140edac85bd5' // Required
      });
      const accounts = await provider.enable();
      console.log(accounts);
      
      commit('ACCOUNT', accounts[0])
    } catch (error) {
      console.log('error', error)
      commit('LOGIN_ERROR', true)
    }
  },
  async loginCoinbaseWallet({ commit }): Promise<void> {
    commit('LOGIN_ERROR', false)
    try {
      const ETH_JSONRPC_URL = 'https://mainnet.infura.io/v3/d24fd61c09f846e589e0140edac85bd5'
      const CHAIN_ID = 1
      const walletLink = new WalletLink({
        appName: 'Cream'
      })
      const ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)
      const accounts = await ethereum.enable()
      commit('ACCOUNT', accounts[0])
    } catch {
      commit('LOGIN_ERROR', true)
    }
  },
  logout({ commit }) {
    commit('ACCOUNT', '')
  }
} as ActionTree<any, {}>