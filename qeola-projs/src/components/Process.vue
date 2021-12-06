<template>
    <div class="process">
        <div class="content">
            <h1>Our Process </h1>
            <p><span>We combine strategic planning, design craftmanship,</span>
               <span>marketing expertise, and coding mastery to create online</span>
               <span>properties with a strong foundation and an eye for innovation.</span>
            </p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-3 brief_card">
                        <!-- <div class="img_brief"> -->
                            <img src='~@/assets/img_1/Vector_2.jpg' width='40px'>
                        <!-- </div> -->
                        <!-- <div class="header_brief"> -->
                            <h2>Your Brief</h2>
                        <!-- </div> -->
                        <!-- <div class="para_brief"> -->
                            <p>We combine strategic<br> planning, design <br>craftmanship</p>
                        <!-- </div>               -->
                </div>
                <div class="col-md-3 build_card">
                        <!-- <div class="img_brief"> -->
                            <img src='~@/assets/img_1/Vector_3.jpg' width='60px'>
                        <!-- </div> -->
                        <!-- <div class="header_brief"> -->
                            <h2>We Build</h2>
                        <!-- </div> -->
                        <!-- <div class="para_brief"> -->
                            <p>We combine strategic <br> planning, design <br> craftmanship</p>
                        <!-- </div> -->
                </div>
                <div class="col-md-3 approve_card">
                        <!-- <div class="img_brief"> -->
                            <img src='~@/assets/img_1/Vector_4.png' width='60px'>
                        <!-- </div> -->
                        <!-- <div class="header_brief"> -->
                            <h2>You Approve</h2>
                        <!-- </div> -->
                        <!-- <div class="para_brief"> -->
                            <span><p>We combine strategic<br> planning, design <br>craftmanship</p></span>
                        <!-- </div> -->
                </div>
                <div class="col-md-3 launch_card">
                        <!-- <div class="img_brief"> -->
                            <img src='~@/assets/img_1/Vector_1.jpg' width='60px'>
                        <!-- </div> -->
                        <!-- <div class="header_brief"> -->
                            <h2>Ready to Launch</h2>
                        <!-- </div> -->
                        <!-- <div class="para_brief"> -->
                            <p>We combine strategic<br> planning, design <br>craftmanship</p>
                        <!-- </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Process',
  components: {

  }
}
</script>

<style scoped>
.process{
    padding-top:5rem;
    padding-bottom: 7rem;
}
.content{
    padding-bottom:3rem;
}
.content h1{
    text-align: center;
    font-weight: bold;
    font-size:54px;
}
.content p{
    text-align: center;
    font-size:20px;
    font-family: Arial, Helvetica, sans-serif;
    color:#212121A6;
    padding-top:2rem;
}
.content span{
    display: block;
}
/* .col-md-3{
    width:20%;
} */
/* .row{
    display:flex;
    justify-content:space-around;
} */
.build_card{
    background-color:white;
    padding:2rem;
    border-radius:10px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-bottom:7px solid #0839D8;
}
.brief_card{
    background-color:white;
    padding:2rem;
    /* margin-left:1rem; */
    border-radius:10px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-bottom:7px solid #0839D8;
}
.approve_card{
    background-color: #0839D8;
    color:white;
    padding:2rem;
    /* margin-left:1rem; */
    border-radius:10px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.launch_card{
    background-color:white;
    padding:2rem;
    /* margin-left:0.5rem; */
    border-radius:10px;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    border-bottom:7px solid #0839D8;
}
.container h2{
    font-size:20px;
    font-weight:bold;
    padding-top:1rem;
    padding-bottom:1rem;
    /* text-align: jsutify; */
}
.container p{
    font-size:20px;
    font-weight: lighter;
    color:#212121A6;
    /* text-align: justify; */
}
.para_brief span p{
    color:white;
    font-weight: lighter;
}

</style>
