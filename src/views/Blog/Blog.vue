<template>
  <div :class="{ ['blog__wrapper']: true, ['blog-loading__wrapper']: isLoading }">
    <v-progress-circular
      class="loading-state"
      :size="70"
      color="purple"
      indeterminate
      v-if="isLoading"
    ></v-progress-circular>
    <div class="d-flex flex-column" v-else>
      <span class="blog__seeMore justify-self-center">See more on: <a href="https://blog.evelynstender.com/">https://blog.evelynstender.com/</a></span>
      <v-container class="d-flex flex-wrap">
        <BlogCard v-for="post in posts" :key="post.cuid" :details="post" />
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BlogCard from "../../components/BlogCard";

export default {
  name: "Blog",
  components: {
    BlogCard
  },
  data() {
    return {
      posts: [],
      isLoading: true
    };
  },
  mounted() {
    this.getBlogData();
  },
  computed: {},
  methods: {
    getBlogData() {
      this.isLoading = true;
      const hashNodeApi = "https://api.hashnode.com/";

      return axios({
        url: "https://api.hashnode.com/",
        method: "post",
        data: {
          query: ` query {
                    user(username: "evelynstender") {
                      publication {
                        posts(page: 0) {
                          title
                          brief
                          slug
                          cuid
                          slug
                          coverImage
                        }
                      }
                    }
                  }`
        }
      })
        .then(result => {
          this.posts = result.data.data.user.publication.posts;
          this.isLoading = false;
          return result;
        })
        .catch(e => {
          return console.error(e);
        });
    }
  }
};
</script>

<style src="./Blog.css" />
