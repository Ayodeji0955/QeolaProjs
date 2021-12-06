<template>
  <div class="clients">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-md-2 lushly">
                <img src='~@/assets/img/Lushly.jpg' class="img-fluid">
            </div>
            <div class="col-md-2 awise_woman">
                <img src='~@/assets/img/awisewoman.jpg' class="img-fluid">
            </div>
            <div class="col-md-2 trifold">
                <img src='~@/assets/img/Trifold.png' class="img-fluid">
            </div>
            <div class="col-md-2 eridan">
                <img src='~@/assets/img/eridan.jpg' class="img-fluid">
            </div>
            <div class="col-md-2 elton">
                <img src='~@/assets/img/elton.jpg' class="img-fluid">
            </div>
            <div class="col-md-2 sub_text">
                <a class="content"><router-link :to="{name: 'Works' }" >See more clients &#8594; </router-link></a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Clients',
  components: {
    
  }
}
</script>

<style scoped>
/* .container{
    margin-top:2rem;
    padding-left:10%;
} */
a{
    color:#FE0072;
    font-family: Arial, Helvetica, sans-serif;
    font-size:20px;
    text-decoration: none;
}
.lushly img, .trifold img, .eridan img{
    width: 80%;
}
.awise_woman img, .elton img{
    width: 50%;
}


</style>