<template>
  <div class="navbar-nav navbar-expand-lg navbar-light">
            <nav class="navbar">
                <a class="navbar-brand" href="#">
                    <router-link to="/"><img src='~@/assets/img/part.png' alt="HTML5 Icon" width='120px'></router-link>
                </a>
               
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#" ><router-link to="/about"> About Us </router-link></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"><router-link to="/case"> Case Studies</router-link></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"><router-link to="/talk"> Talk to Us</router-link></a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#"><router-link to="/menu"> Menu ☰</router-link></a>
                        </li>
                    </ul>
            </nav>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  name: 'Logo',
  components: {
    Logo,
  },
  data:{
    About: 'Lets go there',
  },
  methods: {
    toggle: function(){
      this.About;
    }
  }
}
</script>

<style scoped>
  .navbar {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration:none;
  color:white;
}
a:hover {
    color: #FE0072;
}

/* .nav {
  padding: 0px;
} */

/* .nav a {
  font-weight: bold;
  text-decoration:none;
  color: white;
}

.nav a.router-link-exact-active {
  color: black;
} */

</style>