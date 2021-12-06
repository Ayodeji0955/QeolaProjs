<template>
    <div class="form">
        <div class="container container_content ">
            <div class="row d-flex justify-content-around">
                <div class="col-md-5 form_content">
                    <label for="fname">Email Address*</label>
                    <input type="text" id="fname" name="fname" placeholder="youremail@domain.com" required/>
                </div>
                <div class="col-md-5 form_content">
                    <label for="fname">Name*</label>
                    <input type="text" id="fname" name="fname" placeholder="Chukuema Adekunle" required/>   
                </div>
                <div class="col-md-5  form_content">
                   <label for="fname">Phone Number*</label>
                    <input type="text" id="lname" name="lname" placeholder="" required/>
                </div>
                <div class="col-md-5 form_content"><span>
                    <label for="fname">Project Type*</label></span>
                    <select type="text" id="lname" name="lname" placeholder="Make your selection">  
                        <option value="usa"></option>
                        <option value="usa"></option>
                        <option value="usa"></option> 
                    </select>
                </div> 
            </div>
        </div>
        <div class="container container_content">
            <div class="row d-flex justify-content-center">
                 <div class="col-md-11 form_brief"> 
                    <label for="fname">Project Brief*</label>
                    <input type="text" id="fname" name="fname" placeholder="Tell us about your project, the more details the better or attach a file containing your brief" required/>  
                </div>
             </div>    
        </div> 
        <div class="btn_form">
                    <button class="button button3">Send us a brief </button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Form',
  components: {
    
  }
}
</script>

<style scoped>
.form_content{
    padding-top:0rem;
    padding-bottom:5rem; 
}
h1{
    font-size:54px;
    text-align: center;
    font-weight: bold;
}
.container_content{
    font-size:25px;
    font-family: Arial, Helvetica, sans-serif; 
}
#fname{
    font-size:16px;
    font-family: Arial, Helvetica, sans-serif; 
    color:#212121A6;
    padding-top:2rem;
}
#lname{
    padding-top:1rem;
}
span label{
    font-size:25px;
    font-family: Arial, Helvetica, sans-serif; 
    padding-bottom:0.4rem;
}
input[type=text] {
    width:100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
}
select {
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid black;
}

.btn_form{
    margin-top:0.9rem;
	display: flex;
    padding-top:3rem;
    padding-bottom:5rem;
}
.button {
    background-color: #FE0072;
    border: none;
    color: white;
    padding: 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius:40px;
    
} 
.button3{
    padding-left: 0;
    padding-right: 0;
    width: 60%;
    margin:auto;
}   

</style>
