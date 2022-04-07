<template>
  <div id="app">
    <header
      id="header"
      class="header"
    >
      <preloader />
      <topbar />
      <navbar />
    </header>
    <div style="min-height: 750px;">
      <transition
        name="slide"
        mode="out-in"
      >
        <router-view />
      </transition>
    </div>
    <myFooter />
  </div>
</template>

<script>
import topbar from '@/components/shared/Topbar';
import preloader from '@/components/shared/Preloader';
import navbar from '@/components/shared/Header';
import myFooter from '@/components/shared/Footer';

export default {
    name: 'App',
    components: {
        topbar,
        navbar,
        myFooter,
        preloader,
    },
};
</script>

<style>
#app {
}
</style>
