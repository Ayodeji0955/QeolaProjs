<template>
  <div class="eridan">
      <div class="eridan_banner">
        <div class="container">
            <Navbar />
                <div class="row">
                    <div class="col-md-12">
                        <h1 class="main_text"> Eridan</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <p class="subtext">Developing a brand identity for a venture builder &#8594;</p>
                    </div>
                </div>
        </div>
      </div>
      <div class="solution_content">
          <div class="container container_content">
            <div class="row ">
                <div class="col-md-12 challenge_main-text ">
                    <h1> The Challenge</h1>
                </div>
                <div class="col-md-12 challenge_sub-text">
                    <p>
                      <span>The company needed a brand identity to reflect its vision,</span>
                      <span>mission and values. It needed design brand strategies</span> 
                      <span>with a long term view.</span>
                    </p>
                </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
                <div class="col-md-12 solution_img">
                      <img src='~@/assets/img_3/Stationary.jpg' class="img-fluid">
                </div>
            </div>
          </div>
      </div>
        <Solution />
        <Visual /> 
        <Identity /> 
        <Colors /> 
        <Strategy />
        <Form /> 
        <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Solution from '@/components/Solution'
import Visual from '@/components/Visual'
import Identity from '@/components/Identity'
import Colors from '@/components/Colors'
import Strategy from '@/components/Strategy'
import Form from '@/components/Form'
import Footer from '@/components/Footer'


export default {
  name: 'Eridan',
  components: {
    Navbar,
    Solution,
    Visual,
    Identity,
    Colors,
    Strategy,
    Form,
    Footer
  }
}
</script>

<style scoped>
.eridan_banner{
    background-image: url('~@/assets/img_3/header_image.jpg');
    height: 700px;
    background-position:center;
    background-size:cover; 
}
h1 {
    margin: 40px 0 0;
    font-size:85px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:white;
    padding-top:10%;
}
p {
    font-size:1.5em;
    color:white;
    padding-top:1rem;
  }
.main_text span{
    font-weight:bold;
} 
span{
    display: block;
}
.challenge_main-text h1{
  /* padding-left:20%; */
  font-size:50px;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
  color:black;
  padding-top:5%;
}
.challenge_sub-text p{
  /* padding-left:20%; */
  padding-bottom: 5%;
  font-size:1.5em;
  color:black;
  padding-top:1rem;
} 
.container_content{
  display: flex;
  justify-content: right;
  align-items: center;
}
</style>