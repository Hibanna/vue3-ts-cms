import { createStore } from 'vuex'

const store = createStore({
  state: () => {
    return {
      name: 'coder'
    }
  }
})

export default store
