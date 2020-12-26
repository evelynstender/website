<template>
  <div>
    This portifolio is mostly front-end and it contains apps from
    <a href="https://www.frontendmentor.io/challenges" target="_blank" rel="noreferrer"
      >Frontend Mentor</a
    >.

    <div class="challanges">
      <div>
        <LinkPreview
          url="https://front-end-mentor-vert-sigma.vercel.app/profile-card-component"
          max-width="500px"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LinkPreview from '@ashwamegh/vue-link-preview';

export default {
  name: 'Portifolio',
  components: {
    LinkPreview,
  },
};
</script>

<style src="./Portifolio.css" />
