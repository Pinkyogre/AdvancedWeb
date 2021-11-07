<template>
  <div id="app">
    <nav>
      <div class="nav-container">
        <div id="logo">
          <router-link to="/">
            <img src="./assets/img/logo.jpg" alt="logo" />
          </router-link>
        </div>

        <ul id="icons">
          <li>
            <router-link to="/user-settings">
              <i class="fas fa-user"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/shopping-cart">
              <i class="fas fa-shopping-cart"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/login">
              <img src="./assets/img/Deconnexion.png" alt="logo" />
            </router-link>
          </li>
        </ul>
      </div>
    </nav>



    <router-view 
    :articles="articles"
    @addarticle="addArticle"
    @articleminusone="cartMinusOne"
    @articleplusone="cartPlusOne"
    @cartremoveitem="cartRemoveItem"
    ></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  data: () => {
    return {
      articles: []
    }

  },

  methods: {
    addArticle(e) {
      this.articles.push(e);
      console.log(this.articles)
    },
    cartMinusOne(id){
      let index = this.articles.findIndex(e => {e.id == id});
      if (this.articles[index].quantity == 1) {
        this.cartRemoveItem(id);
      } else {
        
        this.articles[index].quantity--;

      }
    },
    cartPlusOne(id){
      let index = this.articles.findIndex(e => {e.id == id});
      this.articles[index].quantity++;
    },
     cartRemoveItem(id){
      let index = this.articles.findIndex(e => {e.id == id});
      this.articles.splice(index,1);
    }
  }
}
</script>

<style>
@import './assets/style/style.css';
</style>
