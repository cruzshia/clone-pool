import { ActionTree } from 'vuex'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'

declare let ethereum: any
const NETWORK_KEY = '_net_pvd_'

export default {
  checkLoginState({ dispatch }) {
    const wallet = localStorage.getItem(NETWORK_KEY)
    wallet && dispatch(`${wallet}`)
  },
  async loginMetamask({ commit }): Promise<void> {
    commit('LOGIN_ERROR', false)
    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' })
      const chainId = ethereum.networkVersion
      localStorage.setItem(NETWORK_KEY, 'loginMetamask')

      ethereum.on('accountsChanged', (accounts: string[]) => commit('ACCOUNT', accounts[0]))
      ethereum.on('chainChanged', (_chainId: number) => window.location.reload())

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
      ethereum = new WalletConnectProvider({
        infuraId: 'd24fd61c09f846e589e0140edac85bd5' // Required
      })
      const accounts = (await ethereum.enable()) as string[]
      localStorage.setItem(NETWORK_KEY, 'loginWalletConnect')
      console.log(accounts)

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
      ethereum = walletLink.makeWeb3Provider(ETH_JSONRPC_URL, CHAIN_ID)
      const accounts = await ethereum.enable()
      localStorage.setItem(NETWORK_KEY, 'loginCoinbaseWallet')
      commit('ACCOUNT', accounts[0])
    } catch {
      commit('LOGIN_ERROR', true)
    }
  },
  logout({ commit }) {
    ethereum?.disconnect?.()
    localStorage.removeItem(NETWORK_KEY)
    commit('ACCOUNT', '')
  }
} as ActionTree<any, {}>
