<template>
  <section class="layout">
    <div class="container">
      <div class="card">
        <div class="title">
          <h2>Inscription</h2>
        </div>
        <form action="">
          <input type="text" v-model="newUser.email" placeholder="adresse mail" />
          <input type="text" v-model="newUser.password" placeholder="mot de passe" />
          <input type="text" v-model="newUser.age" placeholder="âge" />
          <select v-model="newUser.status">
            <option value="entreprise">Entreprise</option>
            <option value="particulier">Particulier</option>
          </select>
          <button @click="addUser(newUser)">S'enregistrer</button>
        </form>
        <router-link class="redirection" to="/login"
          >Déjà inscrit ? Se connecter</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
module.exports = {
  props: {},
  data() {
    return {
      newUser: {
        password: "",
        email: "",
        status: "",
        age:"",
      },
    };
  },
  methods: {
    addUser(newUser) {
      this.$emit("add-user", newUser);
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

.container {
  display: flex;
  justify-content: center;
  align-items: top;
}

.card {
  padding: 30px;
  min-width: 50rem;
  margin-top: 200px;
  background: #ffffff;
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
  color:white;
  text-decoration: none;
  margin-bottom: 5px;
}

.redirection:hover {
  margin-bottom: 0;
}

.redirection:hover::after {
  content: "";
  display: block;
  width: 191px;
  height: 5px;
  background: white;
}


</style>


