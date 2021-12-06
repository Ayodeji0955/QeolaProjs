<template>
  <div class="solution eridan_img">
    <div class="container">
      <Navbar />
        <div class="row">
          <div class="col-md-12">
              <h1 class="main_text">The Solution</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="subtext">
              <span>Brand Strategy</span>
              <span> Visual Identity</span>
              <span> Web Strategy and Design</span>
            </p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Solution',
  components: {

  }
}
</script>

<style scoped>
.solution{
   padding-top:10%;
   padding-bottom: 5%;
}
h1 {
    font-size:50px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:black;
}  
p {
    font-size:1.5em;
    color:black;
    padding-top:1rem;
  }
.subtext span{
    display: block;
}
</style>