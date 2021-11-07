<template>
<div class="home-container">
      <h1></h1>


      <!-- cards display -->
      <div class="card-cart-container">

          <!-- no result message -->
          <div v-if="filteredList.length == []" class="no-result">
            <h3>Désolé</h3>
            <p>Aucun résultat trouvé</p>
          </div>
        </div>
        <!-- {{liked}} -->

        <!-- cart display -->
        <transition name="cart-anim">
          <div v-if="articles.length > 0" class="shopping-cart" id="shopping-cart">
            <h2>Panier</h2>

            <transition-group name="item-anim" tag="div" class="item-group">
              <div v-for="product, id in articles" class="item" v-bind:key="product.id">

                <div class="img-container">
                  <img v-bind:src='product.img' />
                </div>

                <div class="item-description">
                  <h4>{{ product.description }}</h4>
                  <p>{{ product.price }}€</p>
                </div>

                <div class="item-quantity">
                  <h6>quantité : {{ product.quantity }}</h6>

                  <div class="cart-icons">
                    <button v-on:click="cartPlusOne(product, id)">
                      <i class="fa fa-plus"></i>
                    </button>
                    <button v-on:click="cartMinusOne(product, id)">
                      <i class="fa fa-minus"></i>
                    </button>
                    <button @click="cartRemoveItem(id)">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </transition-group>

            <div class="grand-total">
              <div class="total">
                <h2>Total</h2>
                <h2>{{ cartTotalAmount }} €</h2>
              </div>
              <h6>Total articles : {{ itemTotalAmount }}</h6>
            </div>
            <div class="order-button">
              <button>Commander</button>
            </div>
          </div>
        </transition>
      </div>
</template>

<script>

import {products} from "../../products";

export default {
  name: "ShoppingCart",
  props : {
    articles: []
  },
  data: () => {
    return {
      products,
      searchKey: '',
      liked: [],
      cart: []
    }
  },
  computed: {
    filteredList(){
      return this.products.filter((product) => {
        return product.description.toLowerCase().includes(this.searchKey.toLowerCase());
      })
    },
    cartTotalAmount(){
      let total = 0;
      for (let item in this.cart){
        total = total + (this.cart[item].quantity * this.cart[item].price)
      }
      return total;
    },
    itemTotalAmount(){
      let itemTotal = 0;
      for (let item in this.cart){
        itemTotal = itemTotal + (this.cart[item].quantity);
      }
      return itemTotal;
    }
  },
  methods: {
    addToCart(product){
      // check if already in array
      for (let i = 0; i < this.cart.length; i++){
        if (this.cart[i].id === product.id) {
          return this.cart[i].quantity++
        }
      }
      this.cart.push({
        id: product.id,
        img: product.img,
        description: product.description,
        price: product.price,
        quantity: 1
      })
    },
    cartPlusOne(product, id){
      product.quantity = product.quantity + 1;
      this.$emit('articleplusone', id)
    },
    cartMinusOne(product, id){
      this.$emit('articleminusone', id)
      if (product.quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        product.quantity = product.quantity -1;
      }
    },
    cartRemoveItem(id){
      this.$delete(this.cart, id)
      this.$emit('cartremoveitem', id)
    }
  },
}
</script>

<style scoped>

</style>