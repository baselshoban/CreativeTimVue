<template>
  <nav class="navbar navbar-expand-lg fixed-top nav-down navbar-transparent" color-on-scroll="500">
    <div class="container">
        <div class="navbar-translate">
            <a class="navbar-brand" href="index.html" rel="tooltip" title="Paper Kit 2 PRO" data-placement="bottom" target="_blank">
                <img style="margin-top: -26px;" height="75px" width="65" src="creative/assets/img/intro.png">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" data-nav-image="./assets/img/blurred-image-1.jpg" data-color="orange">
            <ul class="navbar-nav ml-auto">
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="false">
                        Home</a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-danger">

                        <!-- <a href="#features" class="dropdown-item"><i class="nc-icon nc-bullet-list-67"></i>
                            Services
                        </a> -->
                        <router-link to="/#features" class="dropdown-item">
                            <i class="nc-icon nc-bullet-list-67"></i>
                            Services
                        </router-link>
                        <router-link to="/#payment" class="dropdown-item">
                            <i class="nc-icon nc-money-coins"></i>
                            Payment Method
                        </router-link>
                        <router-link to="/#partners" class="dropdown-item">
                            <i class="nc-icon nc-single-02"></i>
                            Partners
                        </router-link>
                    </div>
                </li>
                <li class="nav-item">
                    <router-link to="/about" class="nav-link" id="navbarDropdownMenuLink1">About</router-link>
                </li>
                <li class="nav-item">
                    <a href="#agents" class="nav-link" id="navbarDropdownMenuLink1">
                        Agents
                    </a>

                </li>
                <li class="nav-item">
                    <a href="#news" class="nav-link" id="navbarDropdownMenuLink1" >
                        News
                    </a>

                </li>
                <li class="nav-item">
                    <a href="#policy" class="nav-link" id="navbarDropdownMenuLink1" >
                        Policy
                    </a>

                </li>
                <li class="nav-item">
                    <a class="btn btn-round btn-border" style="background-color:#004578; " href="" target="_blank">
                        <i class="nc-icon nc-cart-simple"></i> Buy Now
                    </a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>

</style>
