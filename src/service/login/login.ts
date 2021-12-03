import hyRequest from '../index'
import { IAccount, IDataType, ILoginResult } from './types'
enum LoginApi {
  accountLogin = '/login',
  loginUserInfo = '/users/',
  userMenus = '/role/'
}
export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.accountLogin,
    data: account
  })
}
export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.loginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(roleId: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.userMenus + roleId + '/menu/',
    showLoading: false
  })
}
