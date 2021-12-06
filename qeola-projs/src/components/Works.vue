<template>
  <div class="works">
    
        <div class="container">
                <Navbar />
        </div>
                <div class="row">
                    <div class=" main_text">
                        <h1>Our Clients</h1>
                    </div>
                </div>
       
        <!-- <div class="work_content"> -->
            <div class="container">
                <div class="row">
                    <div class="col-md-1 work"> All Works </div>
                    <div class="col-md-1 Brand"> Branding </div>
                    <div class="col-md-1 Web"> Web Design </div>
                    <div class="col-md-1 Mobile"> Mobile App </div>
                    <div class="col-md-1 Market"> Marketing </div>
                </div>
            </div>
            <div class="container justify-content-center">
                <div class="row work_img align-items-center">
                    <div class="col-md-4 lushly">
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
                </div>
            </div>
            <div class="container justify-content-center">
                <div class="row align-items-center">
                    <div class="col-md-2 adire">
                        <img src='~@/assets/img_4/just_adire.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-2 bramble">
                        <img src='~@/assets/img_4/bramble.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-2 restore">
                        <img src='~@/assets/img_4/restore.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-2 wordmark">
                        <img src='~@/assets/img_4/wordmark.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-4 tsc">
                        <img src='~@/assets/img_4/tsc.jpg' class="img-fluid">
                    </div>
                </div>
            </div>
        <!-- </div> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'Works',
  components: {
    Navbar,
  }
}
</script>

<style scoped>
.work_content {
  /* background-color: teal; */
  padding-bottom:20%;
  
}
  .main_text h1{
  text-align: center;
  font-size:70px;
  font-weight:bold;
  font-family:Arial, Helvetica, sans-serif;
  padding-top:15%;
  padding-bottom:25%; 
}
.work_img{
  padding-bottom:5%;
}
.lushly img, .trifold img, .eridan img{
    width: 80%;
}
.awise_woman img, .elton img{
    width: 50%;
}
.elton img{
    width: 20%;
   
}
.tsc img{
  width: 30%;
}
</style>
