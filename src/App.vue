<template>
  <div id="app">
    <PostForm/>
    <hr>
    <h2>total: {{postsCount}}</h2>
    <div class='post' v-for="post in allPosts" :key="post.id">
      <h3>{{post.title}}</h3>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import PostForm from "@/components/PostForm";

export default {
  name: 'App',
  components: {PostForm},
  computed: mapGetters(['allPosts', 'postsCount']),
  methods: mapActions(['fetchPosts']),
  async mounted() {
    this.fetchPosts();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 500px;
}
.post {
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-bottom: 1rem;
}
</style>
