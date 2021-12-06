<template>
    <div class="case">
        <div class="container">
            <Navbar />
            <div class="row">
                <div class="col-md-12 main_text">
                    <h1>Case Studies</h1>
                </div>
                <div class="col-md-12 sub_text">
                    <p>Have a feel of what we could do for you.</p>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-1 work"> All Works </div>
                <div class="col-md-1 Brand"> Branding </div>
                <div class="col-md-1 Web"> Web Design </div>
                <div class="col-md-1 Mobile"> Mobile App </div>
                <div class="col-md-1 Market"> Marketing </div>
            </div>
        </div>
        <Projects />
        <Challenge />
        <Footer />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Challenge from '@/components/Challenge'
import Footer from '@/components/Footer'


export default {
  name: 'About',
  components: {
    Navbar,
    Projects,
    Challenge,
    Footer
  }
}
</script>

<style scoped>

.main_text h1{
  text-align: center;
  font-size:70px;
  font-weight:bold;
  font-family:Arial, Helvetica, sans-serif;
  padding-top:15%;
  padding-bottom:2%; 
}
.sub_text p{
  text-align:center;
  font-size:25px;
  font-family:Arial, Helvetica, sans-serif;
  padding-bottom:20%;
}
/* .content{
  background-color:aliceblue;
  font-size:20px;
  margin-top:5rem;
  padding-left:9rem;
} */
</style>
