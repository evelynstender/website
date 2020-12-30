<template>
  <div>
    This portifolio is mostly front-end and it contains apps from
    <a href="https://www.frontendmentor.io/challenges" target="_blank" rel="noreferrer"
      >Frontend Mentor</a
    >.

    <div class="challanges">
      <!-- <div> -->
        <VueLinkPreview
          title="aaa"
          description="bbb"
          domain='aaa'
          class="linkPreview"
        />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import VueLinkPreview from '@evelynstender/vue-link-preview';

export default {
  name: 'Portifolio',
  components: {
    VueLinkPreview,
  },
};
</script>

<style src="./Portifolio.css" />
