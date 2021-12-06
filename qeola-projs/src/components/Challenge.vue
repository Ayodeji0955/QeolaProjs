<template>
    <div class="challenge">       
        <div class="challengec">
            <div class="challenge_text">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-lg-4 challengec_content"> 
                            <h1> Challengerec </h1>
                            <p><span>ChallengeRec: Creating an Online</span>
                                <span>Presence for a FinTech Recruitment</span>
                                <span>Agency</span>
                            </p>
                            <p><span class="red">See Project &#8594; </span></p>
                        </div>
                        <div class="col-md-8 col-lg-8 trifold_img"> 
                            <img src='~@/assets/img_3/Rectangle 58.jpg' class="img-fluid">
                        </div>
                    </div>
                </div>
            </div>
            <div class="Ro_brand">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-lg-8 challengec_img"> 
                            <img src='~@/assets/img_3/Rectangle 59.jpg' class="img-fluid">
                        </div>
                        <div class="col-md-4 col-lg-4 Ro_brand_content"> 
                            <h1> R.O’s Branding </h1>
                            <p><span>Remi Odunsi is a Nigerian Social</span> 
                                <span>Entrepreneur and Philanthropist, with</span> 
                                <span>business interests in the FMCG,</span>
                                <span>Financial Services (banking and</span> 
                                <span>insurance), and automobile sectors.</span>
                            </p>
                            <p><span class="red">See Project &#8594;</span> </p>
                        </div>
                    </div>
                </div>             
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Challenge',
  components: {
    
  }
}
</script>
<style scoped>
.challenge{
    background-color: aliceblue;
    padding-bottom:10%;
    padding-top:0%
}
.challenge_text{
    padding-bottom:5%;
}
.challengec_content{
    align-self: center;
    text-align:left;
}
.Ro_brand_content{
    align-self: center;
    padding-left:4%;
}

h1 span{
    font-family: Arial, Helvetica, sans-serif;
    font-size:30px;
    font-weight:bold;
    display:block;
}
p span{
    font-family: Arial, Helvetica, sans-serif;
    font-size:20px;
    color:#212121A6;
    display:block;
}
.red{
    color:#FE0072;
    font-size:16px;
}


</style>