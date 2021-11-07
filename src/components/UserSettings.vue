<template>
  <section class="layout">
    <div class="card">
      <h1>A propos de nous : </h1>
      <h2>AutoCart est un site web conçu pour aider les clients à trouver facilement la voiture de leurs rêves, l'obtenir rapidement et à prix abordable, le tout par livraison dans un panier pouvant contenir d'autres voitures.</h2>
      <h3>Les fonctionnalités proposées par notre site sont les suivantes : <br> <br> Sur la page d'accueil, il vous est possible de choisir un modèle véhicule dans la liste par défaut et de l'ajouter à votre panier. <br> <br> Le ou les ajouts de véhicules s'afficheront sur la droite de la page avec le prix, la quantité et le prix total. <br> <br> Si vous souhaitez rechercher un modèle de véhicule en particulier, il est possible de le faire via la fonction rechercher avec la barre de recherche disponible en haut à gauche, afin de filtrer votre recherches.</h3>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserSettings"
}
</script>

<style scoped>
.layout{
    background-image : url("https://media.gqmagazine.fr/photos/5f7194a67a7a800f4016b39d/master/w_3000,h_2000,c_limit/Large-12016-McLarenshybridHyper-GTincorporatesground-breakingtechnologyok.jpg");
    width: 100%;
    height: 1940px;
    background-size: cover;
    /*clip-path: polygon(100% 0, 0 100%, 100% 100%);*/
}

.card {
    margin: 50px;
    margin-top: 200px;
    float: left;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.card h1{
  color : whitesmoke;
  font-size: 4em;
  padding: auto;
  text-decoration: underline ghostwhite; 
}

.card h2{
  color : whitesmoke;
  font-size: 2em; 
  padding: 6rem 0 0 2.4rem;
}

.card h3{
  color : whitesmoke;
  font-size: 2em; 
  padding: 6rem 0 0 2.4rem;
}
</style>