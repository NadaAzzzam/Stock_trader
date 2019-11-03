<template>
  <div>
    <h1 class="text-center text-primary mb-5 mt-3">Trade or View your Portfolio</h1>
    <div class="col-md-4 m-auto mt-5">
      <p
        class="mb-5 alert alert-success text-center text-uppercase font-weight-bold"
      >your funds : {{funds |currency}}</p>
    </div>      
    <hr />

    <div class="row">
      <div class="col-md-6">                    
        <!-- <font-awesome-icon icon="exclamation"/> -->

        <div class="alert alert-danger mt-5">

          <h6 style="text-transform: capitalize;">you may save & load your data!!</h6>
        </div>
      </div>
      <div class="col-md-6">
        <div class="alert alert-danger mt-5">
          <h6 style="text-transform: capitalize;">click on 'end day' to begin a new day!!!</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  }
};
</script>

<style>
</style>