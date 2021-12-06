<template>
  <div class="about">
       <div class="container link">
          <Navbar />
        <div class="row row-cols-1">
          <div class="col header">
            <h1><span>Qeola exists to make</span> <span>you look your best!</span></h1>
          </div>
          <div class="col sub_text">
            <p><span>We are a full-service creative digital agency that helps SMBs take</span>
              <span>advantage of technology and use it to drive business growth. </span>
              <span>We combine strategic planning, design craftmanship, marketing expertise, and coding </span>
              <span>mastery to create online properties with a strong foundation and an eye for innovation.</span>
            </p>
          </div>
          <div class="col brief">
            <p>Send us your brief</p>
          </div>
        </div>
        <Process />
      </div>
      <Brief />
      <Media />
      <Footer/>
     <!-- </div> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Process from '@/components/Process'
import Brief from '@/components/Brief'
import Media from '@/components/Media'
import Footer from '@/components/Footer'

export default {
  name: 'About',
  components: {
    Navbar,
    Process,
    Brief,
    Media,
    Footer
  }
}
</script>

<style scoped>
.header span{
 display: block;
 text-align:center;
}

.header h1{
  font-size:70px;
  font-family: Arial, Helvetica, sans-serif; 
  font-weight: bold;
  padding-bottom:3rem;
  padding-top:5rem;
}
.sub_text span{
  display: block; 
  text-align:center;
}
.sub_text p{
  font-size:25px;
  font-family: Arial, Helvetica, sans-serif; 
  padding-bottom:3rem;
}
.brief p{
  font-size: 20px;
  text-align:center;
}
.link {
    color: black;
}
</style>