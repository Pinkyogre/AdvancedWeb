<template>
  <section class="layout">
    <div class="card">
        <h1>AutoCart</h1>
        <p>Le site n°1 de vente de voitures de luxe!</p>
        <h2><router-link to="/cars-list">Trouvez votre future voiture de luxe !</router-link></h2>
    
            
        
    </div>
  </section>
</template>

<style scoped>

.layout{
    background : url(https://voyage-onirique.com/wp-content/uploads/2018/09/WallpaperStudio10bugati-200689-1920x1080.jpg);
    width: 100%;
    height: 1960px;
    background-size: cover;  
}

.card {
    padding: 30px;
    margin: 50px;
    float: left;
    width: 50%;
}

.card h1 {
    font-family: "Indie Flower", cursive;
    font-size: 4em;
    color: white;
    text-align: center;
}

.card p {
    font-family: "Indie Flower", cursive;
    font-size: 2em;
    color: white;
    text-align: center;
}

.card h2 {
    /* display: ;
    max-width: 38rem; */
    margin-top : 30px;
    font-family: "Indie Flower", cursive;
    font-size: 2em;
    text-align: center;
    border-radius: 20px;
    padding: 5px 15px;
    background-color: whitesmoke;
    border: 2px solid white;   
}
</style>