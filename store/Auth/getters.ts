import { AuthState } from './state'

export default {
  account(state: AuthState): string {
    return state.account
  },
  accountDisplay(state: AuthState): string {
    const { account } = state
    return account ? account.substr(0, 6) + '...' + account.slice(-4) : ''
  },
  chainId(state: AuthState): string {
    return state.chainId
  },
  loginError(state: AuthState): boolean {
    return state.loginError
  }
}
