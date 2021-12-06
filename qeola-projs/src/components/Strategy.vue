<template>
    <div class="strategy">
        <div class="strategy_content">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 strategy_main-text">
                        <h1> Web Strategy and Design</h1>
                    </div>
                    <div class="col-md-12 strategy_sub-text">
                        <p>
                        <span>A highly responsive website which aligned with the brand's</span>
                        <span>design policy was developed.</span> 
                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12 strategy_img">
                        <img src='~@/assets/img_3/Mockup.jpg' class="img-fluid">
                    </div>
                </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-2">
                        <div class="prev_proj"><p>&#8592;Previous Project</p></div>
                    </div>
                    <div class="col-md-2 next_proj">
                        <div class="next_proj"><p> Next Project&#8594;</p></div>
                    </div>
                </div>
            </div>
            </div>
            <div class="inspired"><h2>Inspired? Let’s Talk</h2></div>
        </div>
    </div>
</template>

<script>


export default {
  name: 'Strategy',
  components: {

  }
}
</script>

<style scoped>
.strategy{
    padding-top: 5%;
    padding-bottom: 5%;
}
span{
    display: block;
}
.strategy_main-text h1{
    font-size:50px;
    font-family:Arial, Helvetica, sans-serif;
    font-weight: bold;
    color:black;
    padding-top:5%;
}
.strategy_sub-text p{
    padding-bottom: 5%;
    font-size:1.5em;
    color:black;
    padding-top:1%;
} 
.strategy_img{
    padding-bottom: 10%;
}
.text-center{
    align-self: center;
}
.inspired h2{
    padding-top: 10%;
    text-align: center;
    font-weight: bold;
    font-size:40px;
    font-family:Arial, Helvetica, sans-serif;   
}
</style>