import { App } from 'vue'
import registerPropesties from './register-properties'
export function globalRegister(app: App) {
  app.use(registerPropesties)
}
