<template>
  <div class="header-top bg-theme-maroon sm-text-center p-0">
    <b-container>
      <b-row>
        <b-col md="4">
          <div class="widget no-border m-0">
            <ul class="list-inline font-13 sm-text-center mt-1">
              <li class="list-inline-item">
                <a
                  class="text-white"
                  href="#"
                >S.S.S</a>
              </li>
              <li class="text-white list-inline-item">
                |
              </li>
              <li class="list-inline-item">
                <a
                  class="text-white"
                  href="#"
                >Destek</a>
              </li>
              <li class="text-white list-inline-item">
                |
              </li>
              <li class="list-inline-item">
                <a
                  class="text-white"
                  href="#"
                >Giriş Yap</a>
              </li>
            </ul>
          </div>
        </b-col>
        <b-col md="8">
          <div class="widget no-border m-0 mr-15 pull-right flip sm-pull-none sm-text-center">
            <ul class="styled-icons icon-circled icon-sm pull-right sm-text-center mt-1">
              <li class="list-inline-item mr-1">
                <a href="#"><i class="fa fa-facebook text-white" /></a>
              </li>
              <li class="list-inline-item  mr-1">
                <a href="#"><i class="fa fa-twitter text-white" /></a>
              </li>
              <li class="list-inline-item mr-1">
                <a href="#"><i class="fa fa-google-plus text-white" /></a>
              </li>
              <li class="list-inline-item mr-1">
                <a href="#"><i class="fa fa-instagram text-white" /></a>
              </li>
              <li class="list-inline-item">
                <a href="#"><i class="fa fa-linkedin text-white" /></a>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
    name: 'Topbar',
};
</script>

<style scoped>
.mr-1 {
  margin-right: 1rem!important;
}
</style>
