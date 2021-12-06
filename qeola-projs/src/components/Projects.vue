<template>
    <div class="projects">
        <div class="eridan_banner">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="col-md-8 col-lg-8 eridan_img"> 
                        <img src='~@/assets/img_1/rectangle_5.png' class="img-fluid">
                    </div>
                    <div class="col-md-4 col-lg-4 eridan_text"> 
                        <h1> Eridan </h1>
                        <p><span>Eridan is a unique venture-building</span>
                           <span>company located in Lagos.</span>
                        </p>
                        <a class="part"><router-link :to="{name: 'Eridan' }" >See Project &#8594;</router-link></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="eridan_banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 col-lg-4 eridan"> 
                        <h1> Trifold App </h1>
                        <p><span>Trifold is an all-encompassing marriage</span>
                           <span>app that gives curated faith-based</span>
                           <span>answers to prevailing issues.</span>
                        </p>
                        <a class="part"><router-link :to="{name: 'Eridan' }" >See Project &#8594;</router-link></a>
                    </div>
                    <div class="col-md-8 col-lg-8 eridan_img"> 
                        <img src='~@/assets/img_1/rectangle_6.jpg' class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <div class="eridan_banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-lg-8 eridan_img"> 
                        <img src='~@/assets/img_1/rectangle_7.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-4 col-lg-4 eridan_text"> 
                        <h1> The Soul Clinic </h1>
                        <p><span>The Soul Clinic is a company created </span>
                            <span>to serve as a funnel for emotional health </span>
                            <span>and mental rejuvenation.</span>
                        </p>
                        <a class="part"><router-link :to="{name: 'Eridan' }" >See Project &#8594;</router-link></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Projects',
  components: {
    
  }
}
</script>

<style scoped>
.projects{
    background-color:aliceblue;
    padding:1rem;
}
p span{
    display:block; 
}
.eridan_banner{
    margin-bottom:5rem;
}
.eridan{
    align-self: center;
}
.eridan_text{
    align-self: center;
    padding-left: 5%;
}
.part, h1, a{
    font-family: Arial, Helvetica, sans-serif;
    text-decoration:none;  
}
p{
    font-size:20px;
    color:#212121A6;
}
a{
    font-size:18px;
    font-weight: bold;
    color:#FE0072;
    text-decoration:none;
}


</style>