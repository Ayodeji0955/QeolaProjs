<template>
  <div class="identity">
    <div class="container">
        <div class="row">
          <div class="col-md-6">
             <img src='~@/assets/img_3/hand_img.jpg' class="img-fluid">
          </div>
          <div class="col-md-6">
            <img src='~@/assets/img_3/person_img.jpg' class="img-fluid">
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
              <h1 class="main_text">Visual Identity</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="sub_text">
              <span>A logo was created for the company. This was translated into corporate</span>
              <span>function materials and visual identity standards and guidelines</span>
              <span>A visual identity policy document was also developed.</span>
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Identity',
  components: {

  }
}
</script>

<style scoped>
.identity{
    padding-top: 10%;
    padding-bottom:5%;
}
h1 {
    font-size:50px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:black;
    padding-top:10%;
}  
p {
    font-size:1.5em;
    color:black;
    padding-top:1rem;
  }
.sub_text span{
    display: block;
}
</style>