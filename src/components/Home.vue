<template>
  <section class="layout">
    <div class="card">
        <h1>AUTO CART</h1>
        <p>LE PREMIER SITE DE VENTE DE VOITURES DE LUXE</p>
        <h2><router-link to="/cars-list">Trouvez votre voiture de luxe maintenant </router-link></h2>
    
            
        
    </div>
  </section>
</template>

<style scoped>




@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@700&display=swap');

@font-face {
    font-family: "Apex Mk3";
    src: url("../assets/style/ApexMk3/Apex Mk3-Medium.otf") format("otf");
}


.layout{
    background-image : url("../assets/img/car1jpg.jpg");
    width: 100%;
    height: 1940px;
    background-size: cover;
    /*clip-path: polygon(100% 0, 0 100%, 100% 100%);*/
}

.card {
    margin: 50px;
    margin-top: 200px;
    float: left;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.card h1 {
    font-family: 'Cairo', sans-serif;
    font-size: 5em;
    color: rgb(0, 0, 0);
    text-align: start;
}

.card p {
    font-family: 'Cairo', sans-serif;
    font-size: 2em;
    color: rgb(0, 0, 0);
    text-align: center;
}

.card h2 {
    /* display: ;
    max-width: 38rem; */
    margin-top : 40px;
   font-family: 'Cairo', sans-serif;
    font-size: 2em;
    text-align: center;
    border-radius: 20px;
    padding: 5px 15px;
    background-color: rgb(255, 153, 0);
}

.card h2 a {
    text-decoration: none;

}
.card h2:hover {
    background-color: rgb(255, 189, 7);
}

</style>