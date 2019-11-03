<template>
  <div class="col-sm-6 col-md-4 mb-5">
    <div class="card border-success">
      <div class="card-header text-light bg-success">
        <h3 class="card-title">{{stock.name}}</h3>
        <small>(price : {{stock.price |currency}} {{stock.quantity}} )</small>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            v-model="quantity"
            :class="{' danger' :insuuffFunds , 'success': !insuuffFunds && quantity != 0 && quantity > 0}"
          />
        </div>
        <div class="text-center">
          <button
            class="btn btn-success"
            @click="buyStock"
            :disabled="insuuffFunds || this.quantity <= 0"
          >{{insuuffFunds ? 'insuufficuienFunds' :'BUY'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insuuffFunds() {
      return this.quantity * this.stock.price > this.funds || this.quantity < 0;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        quantity: this.quantity,
        stockPrice: this.stock.price
      };
      console.log(order);
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>
<style  scoped>
.danger {
  color: #721c24;
  background-color: #f8d7da;
  border-color: #dc3545 !important;
}
.success {
  border-color:#28a745!important;
color: #155724;
    background-color: #d4edda;

}
.form-control:focus {
  border-color: none;
  box-shadow: none;
}
</style>