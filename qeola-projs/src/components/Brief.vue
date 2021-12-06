<template>
    <div class="brief">
        <div class="container">
            <div class="row justify-content-center">
                <div class="Col-md-12 main_text">
                    <p><span>We strive to create technological solutions that will help </span>
                        <span>advance our client's business and solve real-life problems. But </span>
                        <span>we go beyond and provide strategic guidance </span> 
                        <span>through advancements in technology.</span>
                    </p>
                </div>
                <div class="col-md-4 sub_text">
                    <p>Send us your brief</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Brief',
  components: {
    
  }
}
</script>

<style scoped>
.brief{
    background-image: url('~@/assets/img_1/Group_8.jpg');
    background-position:center;
    background-size:cover;
}
.main_text p{
    text-align: center;
    font-size:40px;
    color:white;
    padding-top:15%;   
    font-family:Arial, Helvetica, sans-serif;
}
.sub_text p{
    text-align: center;
    font-size:20px;
    color:white;
    padding-top:20%;  
    padding-bottom:15%;
    font-family:Arial, Helvetica, sans-serif;
}
</style>
