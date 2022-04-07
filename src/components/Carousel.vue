<template>
  <carousel
    class="fullwidth-carousel"
    :autoplay="true"
    :autoplay-timeout="4000"
    :loop="true"
    :items="1"
    :nav="true"
    :dots="false"
  >
    <div
      v-for="index in [ 1, 2, 3 ]"
      :key="index"
      class="item bg-img-cover"
      style="background-image: url('https://placeimg.com/1920/1280/any?1')"
    >
      <div class="display-table">
        <div class="display-table-cell">
          <b-container class="pt-150 pb-150">
            <b-row>
              <b-col
                md="8"
                offset-md="2"
                class="text-center pl-0"
              >
                <div
                  class="inline-block mt-40 pb-60 pl-60 pr-60 pt-40"
                  data-bg-color="rgba(35, 40, 46, 0.6)"
                >
                  <h1 class="text-uppercase color-theme-platinum font-raleway font-weight-800 mb-0 mt-0 font-48">
                    Lorem İpsum
                  </h1>
                  <p class="font-16 color-theme-platinum font-raleway letter-spacing-1 mb-20">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make
                    a type specimen book. It has survived not only five centuries,
                  </p>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </carousel>
</template>

<script>
import carousel from 'vue-owl-carousel';

export default {
    components: {
        carousel,
    },
};
</script>

<style scoped>

</style>
