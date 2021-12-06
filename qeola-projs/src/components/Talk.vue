<template>
  <div class="talk">
    <div class="talk_banner">
      <div class="container talk_content">
        <Navbar />
        <div class="row">
            <div class="col-md-12 main_text">
                <h1>
                  <span>This is your chance to not only build your</span>
                  <span>dreams but build a future. </span>
                </h1>
            </div>
        </div>
      </div>
      <Form />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Form from '@/components/Form'
import Footer from '@/components/Footer'

export default {
  name: 'Talk',
  components: {
    Navbar,
    Form,
    Footer
  }
}
</script>

<style scoped>
.talk_content, .talk_banner {
  padding-bottom:20%;
}
span{
  display:block;
}
  .main_text h1{
  text-align: center;
  font-size:60px;
  font-weight:bold;
  font-family:Arial, Helvetica, sans-serif;
  padding-top:15%;
  padding-bottom:2%; 
}
</style>