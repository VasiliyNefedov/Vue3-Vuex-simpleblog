import { createStore } from 'vuex'
import post from './modules/post.js'

export default createStore({
    modules: {
        post: post
  }
})
