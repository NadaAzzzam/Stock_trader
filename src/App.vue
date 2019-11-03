<template>
  <div>
    <app-header></app-header>

    <div class="container">
      <transition 
       mode="out-in"
       enter-active-class="animated fadeIn fast"
       leave-active-class="animated fadeout fast"
       >
              <router-view></router-view>

      </transition>
    </div>
  </div>
</template>

<script>
import Header from "./component/Header";
export default {
  data() {
    return {};
  },
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

