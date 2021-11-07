<template>
    <section class="layout">
    <div class="container">
      <div class="card">
        <div class="title">
          <h2>Connexion</h2>
        </div>
        <form action="">
          <input type="text" v-model="user.email" placeholder="adresse mail" />
          <input type="text" v-model="user.password" placeholder="mot de passe" />
          <button type="button" @click="login(user)">Se connecter</button>
        </form>
        <router-link class="redirection" to="/register"
          >Pas de compte ? S'inscrire</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
module.exports = {
  props: {
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login(user) {
      this.$emit("login", user);
    },
  },
};
</script>

<style scoped>



h2 {
  font-family: "Indie Flower", cursive;
  text-align: center;
  font-size: 3rem;
  color: white;
}

article {
  height: auto;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.card {
  padding: 30px;
  min-width: 50rem;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  background: #918e9b;
  border-radius: 30px;
  border: 2px solid grey
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  border: 2px solid white;
  background: transparent;
  color: white;
  margin: 10px;
  border-radius: 50px;
  padding: 10px;
  background-color: none;
}

::placeholder {
    color : white;
    font-size: 15px;
}


button {
  max-width: 8rem;
  border-radius: 20px;
  padding: 5px 15px;
  background-color: dimgray;
  color: white;
  border: 2px solid white;
  font-size: 14px;
  margin: 20px;
}
.redirection {
  display: block;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;
}

.redirection:hover {
  margin-bottom: 0;
}

.redirection:hover::after {
  content: "";
  display: block;
  width: 187px;
  height: 5px;
  background: white;
}
</style>
