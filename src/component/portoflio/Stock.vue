<template>
  <div class="col-sm-6 col-md-4 mb-3">
    <div class="card border-danger">
      <div class="card-header text-light bg-danger">
        <h3 class="card-title">{{stock.name}}</h3>
        <small>(price : {{stock.price |currency}} | Quantity : {{stock.quantity}} )</small>
      </div>
      <div class="card-body">
        <div class="mb-3">
          <input
            type="number"
            class="form-control"
            v-model="quantity"
            :class="{' danger' :insuuffQuantity , 'success': !insuuffQuantity && quantity != 0 && quantity > 0}"
          />
        </div>
        <div class="text-center">
          <button
            class="btn btn-danger"
            @click="sellStock"
            :disabled="insuuffQuantity || quantity <= 0  "
          >{{insuuffQuantity ?'Not enough Stocks' : 'SELL'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insuuffQuantity() {
      return this.quantity > this.stock.quantity || this.quantity < 0 ;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
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
  border-color: #28a745 !important;
  color: #155724;
  background-color: #d4edda;
}
.form-control:focus {
  border-color: none;
  box-shadow: none;
}
</style>