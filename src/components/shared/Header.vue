<template>
  <div
    id="header"
    class="header bg-theme-cultured"
  >
    <b-container>
      <b-row>
        <b-col lg="9">
          <b-navbar toggleable="lg">
            <b-navbar-brand>
              <b-link
                class="navbar-brand logo h3"
                :to="{ name: 'home' }"
              >
                <b-img
                  src="./logo.png"
                  width="106"
                  alt="Logo"
                  loading="lazy"
                />
              </b-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse" />

            <b-collapse
              id="nav-collapse"
              is-nav
            >
              <b-navbar-nav class="ml-auto text-uppercase">
                <b-nav-item
                  v-for="(item,index) in links"
                  :key="index"
                  :to="{name: item.link}"
                  exact
                  exact-active-class="active"
                >
                  {{ item.name }}
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    data() {
        return {
            links: [
                { link: 'home', name: 'Anasayfa' },
                { link: 'about', name: 'Hakkımızda' },
                { link: 'product', name: 'Ürünler' },
                { link: 'blog', name: 'Blog' },
                { link: 'contact', name: 'İletişim' },
            ],
        };
    },
};
</script>

<style scoped>

</style>
