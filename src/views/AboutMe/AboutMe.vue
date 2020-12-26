<template>
  <div class="aboutMe">
    <p>Hi, I'm Evelyn 👋</p>
    <p>
      This is my personal website. It's always going to be a working in progress as I learn more
      about front-end 🙃
    </p>
    <p>And here is pictures of my cats to make you feel better!</p>
    <div class="cat__pics">
      <figure>
        <img
          alt="Two cats: Bruno and Merlin"
          src="../../assets/merlin-bruno.jpeg"
          height="500"
          width="375"
        />
        <figcaption>Bruno and Merlin</figcaption>
      </figure>
      <figure>
        <img alt="One cat: Nala" src="../../assets/nala.jpg" height="500" width="375" />
        <figcaption>
          Nala
        </figcaption>
      </figure>
    </div>
    <p>
      This is v1. This will improve with progression for front-end.
    </p>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
};
</script>

<style src="./AboutMe.css" />
