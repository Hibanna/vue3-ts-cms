import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: string
}
export interface IRootWithModule {
  loginModule: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
