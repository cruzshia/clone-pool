export interface AuthState {
  account: string
  chainId: string
  loginError: boolean
}

export default () =>
  ({
    account: '',
    chainId: '',
    loginError: false
  } as AuthState)
