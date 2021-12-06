<template>
    <div class="industry">
        <p class="content_center"> <router-link :to="{name: 'Case' }" >View more case studies &#8594;</router-link></p>
        <div class="container">
            <h1>Industries we have served</h1>
            <div class="row text-center">
                <div class="col-md-3 education">
                   <img src='~@/assets/img_2/education.jpg' class="img-fluid">
                   <p><span class="edu_span"> Education </span> </p>
                </div>
                <div class="col-md-3 health">
                    <img src='~@/assets/img_2/health.jpg' class="img-fluid">
                    <p><span class="health_span"> Health </span></p>
                </div>
                <div class="col-md-3 agric">
                    <img src='~@/assets/img_2/agriculture.jpg' class="img-fluid">
                    <p><span> Agriculture</span> </p>
                </div>
                <div class="col-md-3 real_estate">
                    <img src='~@/assets/img_2/real_estate.jpg' class="img-fluid">
                    <p> <span>Venture Building</span></p>
                </div>
            </div>
            <div class="red">
                <a class="part"><router-link :to="{name: 'Industries' }">See all industries &#8594;</router-link></a>
            </div>
        </div>
        <div class="form_content">
            <h1> <span>This is your chance to not only build your </span>
                 <span>dreams but build a future. </span> 
            </h1>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Industry',
  components: {
    
  }
}
</script>

<style scoped>
.form_content span{
    display: block;  
}
.form_content h1{
    padding-top:3rem;
    font-size:54px;
    text-align: center;
    font-weight: bold;
    /* padding-bottom:3rem;  */
}
.content_center{
    color:#FE0072;
    font-size:16px;
    text-align:center; 
    padding-bottom:3rem;
    text-decoration:none;
}
h1{
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size:50px;
    padding-bottom:4rem;
}
p{
    font-family: Arial, Helvetica, sans-serif;
    font-size:20px;
    
}
.red{
     text-align: center;
     padding-top:5%;
     padding-bottom:5%;
} 
a{
    font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    text-decoration:none;
    margin:0 auto;
    color:#FE0072; 
}

.education img, .health img{
    width: 40%;
}
.agric img, .real_estate img{
    width:50%;
}
</style>
