<template>
  <div class="main-content">
    <section
      id="home"
      class="divider"
    >
      <fullCarousel />
    </section>
  </div>
</template>

<script>
import fullCarousel from '@/components/Carousel';

export default {
    name: 'Home',
    components: {
        fullCarousel,
    },

};
</script>

<style scoped>
.bg-img-cover {
  height: 75vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
