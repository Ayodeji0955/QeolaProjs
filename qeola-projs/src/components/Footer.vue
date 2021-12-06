<template>
    <div class="footer">
        <div class="footer_content">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="number">
                            <p>Phone</p>
                            <h1>+234 805 176 2471</h1>
                        </div>
                        <div class="address">
                            <p>Address</p>
                            <h1>50, Ogbomoso-Ilorin Road,<br> General, Ogbomoso, Oyo-State.</h1>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="number">
                            <p>Enquiries</p>
                            <h1>consultation@qeola.com</h1>
                        </div>
                        <div class="address_follow">
                            <p>Follow Us</p>
                        <div class="address_social">
                            <span class="behance"><a v-bind:href="behance"><img src='~@/assets/img_4/behance.png' width='20px'></a></span>
                            <span class="IG_logo"><a v-bind:href="instagram"><img src='~@/assets/img_4/IG_logo.png' width='15px'></a></span>
                            <span class="twitter"><a v-bind:href="twitter"><img src='~@/assets/img_4/twitter.png' width='15px'></a></span>
                            <span class="linkedin"><a v-bind:href="linkedin"><img src='~@/assets/img_4/linkedin.png' width='15px'></a></span>
                        </div>
                    </div>
                    </div>
                    <div class="col-md-4">
                        <div class="subscribe">
                            <p>Subscribe to our newsletter</p>   
                        </div>
                        <div class="address"> 
                           <input type="text" name="fname" placeholder="yourname@xyx.comxyz" required/>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="qeola"><p>© 2021 Qeola Limited</p></div>
    </div>
</template>

<script>

export default {
  name: 'Footer',
  components:{
      
  },
  data: {
    behance: 'http://behance.com', 
    instagram: 'http://Instagram.com',
    twitter: 'http://twitter.com',
    linkedin: 'http://linkedin.com'
  }
}
</script>

<style scoped>
.footer{
    background-color: #000103;
}
.footer_content{
    padding-top:10%;
    padding-bottom:5%;
} 
.footer_content h1{
    font-size:17px;
    font-family: Arial, Helvetica, sans-serif;  
    color:white; 
    font-weight:bold;
}
.footer_content p{
    font-size:13px;
    font-family: Arial, Helvetica, sans-serif; 
    color:white;  
}
input[type=text] {
    width:80%;
    padding: 20px 20px;
    margin: 20px 0;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid white;
    border-radius:40px;
}
.number{
    font-size:13px;
    font-family: Arial, Helvetica, sans-serif; 
}
.number{
    font-size:13px;
    font-family: Arial, Helvetica, sans-serif; 
}
.subscribe{
    font-size:13px;
    font-family: Arial, Helvetica, sans-serif; 
}
.twitter, .IG_logo, .linkedin {
    padding-left:1rem;
}
.qeola p{ 
    padding-bottom: 5%;
    margin-bottom: 0%;
    color: #FFFFFFB2;
    text-align:center;
}

</style>
