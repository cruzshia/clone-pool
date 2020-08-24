import { AuthState } from '@/store/Auth/state';

export default {
  ACCOUNT(state: AuthState, account: string) {
    state.account = account
  },
  CHAIN_ID(state: AuthState, chainId: string) {
    state.chainId = chainId
  },
  LOGIN_ERROR(state: AuthState, error: boolean) {
    state.loginError = error
  },
}