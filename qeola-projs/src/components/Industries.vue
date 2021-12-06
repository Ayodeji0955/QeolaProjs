<template>
  <div class="industries">
    <div class="container">
            <Navbar />
            <div class="row Industries_banner">
                <div class="col-md-12 main_text">
                    <h1><span>Industries We</span>
                        <span>Have Served </span>
                    </h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row text-center first_img">
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
                <div class="col-md-3 startup">
                    <img src='~@/assets/img_2/startup.jpg' class="img-fluid">
                    <p> <span>Venture Building</span></p>
                </div>
            </div>
            <div class="row text-center sec_img">
                <div class="col-md-3 education">
                   <img src='~@/assets/img_2/faith.jpg' class="img-fluid">
                   <p><span class="edu_span"> Faith </span> </p>
                </div>
                <div class="col-md-3 consulting">
                    <img src='~@/assets/img_2/consult.jpg' class="img-fluid">
                    <p><span class="health_span"> Consulting </span></p>
                </div>
                <div class="col-md-3 social">
                    <img src='~@/assets/img_2/social.jpg' class="img-fluid">
                    <p><span> Social Impact</span> </p>
                </div>
                <div class="col-md-3 finance">
                    <img src='~@/assets/img_2/finance.jpg' class="img-fluid">
                    <p> <span>Finance and Insurance</span></p>
                </div>
            </div>
            <div class="row text-center third_img">
                <div class="col-md-3 real_estate">
                   <img src='~@/assets/img_2/real_estate.jpg' class="img-fluid">
                   <p><span class="edu_span"> Real Estate </span> </p>
                </div>
                <div class="col-md-3 talent">
                    <img src='~@/assets/img_2/talent.jpg' class="img-fluid">
                    <p><span class="health_span">Talent Outsourcing</span></p>
                </div>
            </div>
        </div>
        <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'About',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style scoped>
.Industries_banner{
    padding-bottom: 10%;
}
.main_text h1{
  text-align: center;
  font-size:70px;
  font-weight:bold;
  font-family:Arial, Helvetica, sans-serif;
  padding-top:15%;
  padding-bottom:10%; 
}
span{
    display: block;
}
.education img, .health img, .social img{
    width: 40%;
}
.agric img, .real_estate img{
    width:50%;
}
.startup img, .finance img, .talent img{
    width:35%;
}
.consulting img {
    width:30%;
}
.first_img, .sec_img, .third_img{
    padding-bottom: 7%;
}

</style>