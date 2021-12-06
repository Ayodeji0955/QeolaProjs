<template>
    <div class="media">
        <div id="media_img">
            <div class="container">
                <div class="main_text">
                    <h1>Media Mention</h1>
                </div>
                <div class="sub_text">
                    <p><span>We have been recognized by various design</span>
                    <span>professional organizations and renowned firms.</span>
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-4 awards">
                        <img src='~@/assets/img_2/awwwards_logo.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-4 guardian">
                        <img src='~@/assets/img_2/the_guardian.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-4 tech_crunch">
                        <img src='~@/assets/img_2/tech_crunch.jpg' class="img-fluid">
                    </div>

                    <div class="col-md-4 bbc">
                        <img src='~@/assets/img_2/bbc.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-4 cbn">
                        <img src='~@/assets/img_2/cbn.jpg' class="img-fluid">
                    </div>
                    <div class="col-md-4 sky">
                        <img src='~@/assets/img_2/sky.jpg' class="img-fluid">
                    </div>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>

export default {
  name: 'Media',
  components: {
    
  }
}
</script>

<style scoped>
.media{
    background-color: #F8F9FF;
    padding-top:7rem;
    padding-bottom:7rem;
}
.main_text h1{
    font-size:54px;
    color:black;  
    font-family:Arial, Helvetica, sans-serif;
    font-weight:bold;
}
.sub_text span{
    display:block;
}
.sub_text p{
    font-size:20px;
    padding-top:2rem;
    padding-bottom:2%;
    margin-top:0rem;
    text-align:left;
    color:#212121A6;
    font-family:Arial, Helvetica, sans-serif;
}
#media_img{
    padding-left:10%;
}
.tech_crunch img, .awards img, .guardian img, .bbc img {
    width:60%;
}
.sky img, .cbn img {
    width:40%;
}
.cbn img {
    width:50%;
}
.tech_crunch img, .award img, .guardian img {
    padding-bottom:10%;
}

</style>
