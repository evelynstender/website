<template>
  <div>
    <v-card
      :hover="true"
      class="ma-2 "
      max-width="520"
      height="210"
      elevation="5"
      target="blank" :href="`https://blog.evelynstender.com/${details.slug}`"
    >
      <v-img v-if="details.image" height="250" :src="details.image" />
      <v-card-title> {{ details.title }} </v-card-title>
      <v-card-text> {{ details.brief }} </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {},
  methods: {}
};
</script>

<style src="./BlogCard.css" />
