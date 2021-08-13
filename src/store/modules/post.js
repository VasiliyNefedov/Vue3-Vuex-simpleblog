export default {
    state: {
        posts: [],
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts
        },
        createPost(state, newPost) {
            state.posts.unshift(newPost)
        }
    },
    actions: {
        async fetchPosts(ctx, limit = 5) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit='+ limit)
            const posts = await res.json()
            // this.posts = posts
            ctx.commit('updatePosts', posts)
            console.log(ctx);
        }
    },
    getters: {
        allPosts(state) {
            return state.posts
        },
        postsCount(state) {
            return state.posts.length
        },
    }
}