<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
    <router-link to="/" class="navbar-brand">Stock Trader</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <!-- <li class="nav-item "> -->
        <router-link to="/portfolio" class="nav-link" exact>Portfolio</router-link>
        <!-- </li> -->
        <!-- <li class="nav-item"> -->
        <router-link to="/stocks" class="nav-link">stocks</router-link>
        <!-- </li> -->
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link"
          @click="endDay"
          style="cursor:pointer;"
          >End Day(Sale)</a>
        </li>
        <li class="nav-item dropdown  " >
          <a
            class="nav-link dropdown-toggle "
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            @click="isDropDownOpen = !isDropDownOpen"
          >Save&Load</a>
          <div class="dropdown-menu "
            :class="{OpenDropDown:isDropDownOpen  }"
           aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveDAte">Save Data</a>
            <a class="dropdown-item" href="#" @click="load">Load Data</a>
          </div>
        </li>

        <li class="nav-item">
          <a class="nav-link font-weight-bold">FUNDS :{{funds | currency}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data(){
    return{
      isDropDownOpen:false,
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    } 
  },
  methods: {
    ...mapActions({
      randomizeStocks:"randomizeStocks",
      fetchData:"load"      
    }

      
      ),
    endDay() {
      this.randomizeStocks();
    },
    saveDAte(){
      const data ={
        funds :this.$store.getters.funds,
        stockPortfolio:this.$store.getters.stockPortfolio,
        stocks:this.$store.getters.stocks,
      };
      this.$http.put('data.json', data);
    },
    load(){
      this.fetchData();
    }
  }
};
</script>

<style scoped>
.OpenDropDown{
  display: block;
}
</style>