<template>
  <div class="logo">
    <div class="banner">
        <div class="container">
          <Navbar />
            <div class="row">
              <div class="col-md-12">
                  <h1 class="main_text"> <span> We Will Make Your </span> <span> Brand Visible </span></h1>
                  <!-- <h1 class="main_text"> <span> We Will Make Your </span> <span> Brand Visible </span></h1> -->
                  <!-- <button onclick="show = !show">switch</button> -->
              </div>
              <div class="col-md-12">
                  <p class="subtext">See the clients we have served &#8594;</p>
              </div>
          </div>
        </div>
    </div>
    <div class="others">
        <Clients />
        <Projects />
        <Industry />
        <Form />
        <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Clients from '@/components/Clients'
import Projects from '@/components/Projects'
import Industry from '@/components/Industry'
import Form from '@/components/Form'
import Footer from '@/components/Footer'

export default {
  name: 'Logo',
  components: {
    Navbar,
    Clients,
    Projects,
    Industry,
    Form,
    Footer
  },
  data:{
    show: true,
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
   margin:0px;
 }
.banner{
    background-image: url('~@/assets/img/Image.png');
    height: 700px;
    background-position:center;
    background-size:cover; 
}
h1 {
    padding-top:10%;
    font-size:85px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:white;
}
p {
    font-size:1.5em;
    color:white;
    padding-top:2%;
  }
.main_text span{
    display:block;
}
a{
  text-decoration:none;
  color:black;
}
</style>
