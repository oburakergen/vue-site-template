<template>
  <div class="main-content">
    <section
      class="inner-header divider parallax layer-overlay overlay-dark"
      data-parallax="scroll"
      style="background-image: url('https://placeimg.com/1920/300/any?1') "
    >
      <b-container class="pt-70 pb-70">
        <div class="section-content">
          <b-row>
            <b-col sm="8">
              <h2 class="text-white mt-10">
                İletişim
              </h2>
            </b-col>
            <b-col sm="4">
              <ol class="breadcrumb white mt-10 text-right xs-text-center">
                <li><a href="http://127.0.0.1:8000">Anasayfa</a></li>
                <li class="&quot;active&quot;">
                  <a href="http://127.0.0.1:8000/iletisim">İletişim</a>
                </li>
              </ol>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

    <section class="divider">
      <b-container>
        <b-row class="pt-30">
          <b-col md="4">
            <b-col
              xs="12"
              sm="12"
              md="12"
            >
              <div class="icon-box left media bg-deep p-30 mb-20">
                <a
                  class="media-left pull-left"
                  href="#"
                >
                  <i class="fa fa-info text-theme-colored" />
                </a>
                <div class="media-body">
                  <strong class="text-uppercase">Adres</strong>
                  <p>Şehit Osman Avcı, Eryaman, Malazgirt 1071. Cd. No:50D, 06000 Etimesgut/Ankara</p>
                </div>
              </div>
            </b-col>
            <b-col
              xs="12"
              sm="12"
              md="12"
            >
              <div class="icon-box left media bg-deep p-30 mb-20">
                <a
                  class="media-left pull-left"
                  href="#"
                >
                  <i class="fa fa-phone-square text-theme-colored" /></a>
                <div class="media-body">
                  <strong class="text-uppercase">Telefon Numarası</strong>
                  <p>0544 934 2052</p>
                </div>
              </div>
            </b-col>
            <b-col
              xs="12"
              sm="12"
              md="12"
            >
              <div class="icon-box left media bg-deep p-30 mb-20">
                <a
                  class="media-left pull-left"
                  href="#"
                >
                  <i class="fa fa-whatsapp text-theme-colored" /></a>
                <div class="media-body">
                  <strong class="text-uppercase">Whatsapp</strong>
                  <p>0544 934 2052</p>
                </div>
              </div>
            </b-col>
            <b-col>
              <div class="icon-box left media bg-deep p-30 mb-20">
                <a
                  class="media-left pull-left"
                  href="#"
                >
                  <i class="fa fa-mail-forward text-theme-colored" /></a>
                <div class="media-body">
                  <strong class="text-uppercase">EMAİL ADRES</strong>
                  <p>info@laraplay.com</p>
                </div>
              </div>
            </b-col>
          </b-col>
          <b-col md="8">
            <h3 class="line-bottom mt-0 mb-20">
              Bizimle iletişime Geçin ?
            </h3>
            <p class="mb-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Error optio in quia ipsum quae neque alias eligendi, nulla nisi.
              Veniam ut quis similique culpa natus dolor aliquam officiis ratione
              libero. Expedita asperiores aliquam provident amet dolores.
            </p>
            <!-- Contact Form -->
            <b-form
              id="contact_form"
              name="contact_form"
              class=""
              action="#"
              method="post"
            >
              <b-form-group
                id="input-group-1"
                label="Email adres:"
                label-for="input-1"
                description="Lorem İpsyn."
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  placeholder="email"
                  required
                />
              </b-form-group>

              <b-form-group
                id="input-group-2"
                label="Adınız:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  placeholder="Ad Soyad"
                  required
                />
              </b-form-group>
              <b-button
                type="submit"
                variant="primary"
                class="mt-5"
              >
                Kaydet
              </b-button>
            </b-form>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Divider: Google Map -->
    <section>
      <div class="container-fluid p-0">
        <div class="row">
          <iframe
            title=""
            :src="mapLink"
            width="100%"
            height="450"
            frameborder="0"
            style="border:0"
            allowfullscreen
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d764.'
                + '7898995948378!2d32.71428952687543!3d39.93781959869841!2m3!1f0'
                + '!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d337fcd272503f%'
                + '3A0x52193df18ed215cb!2sBah%C3%A7ekap%C4%B1%2C%202514.%20Sk.%207'
                + '%2C%2006797%20Etimesgut%2FAnkara!5e0!3m2!1str!2str!4v16463108883'
                + '34!5m2!1str!2str',
            form: {
                email: '',
                name: '',
            },
        };
    },
};
</script>

<style scoped>

</style>
