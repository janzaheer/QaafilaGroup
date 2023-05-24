<template>
    <div class="header">
        <!-- bg-body-tertiary -->
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top grad">
            <div class="container-fluid">
                <RouterLink class="navbar-brand" to="/">
                    <!-- <h4 class="mt-2 text-warning">Qaafila</h4> -->
                    <img src="../../../assets/Qlogo.png" alt="" style="height: 25px;">
                </RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <RouterLink class="nav-link active" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Ecom
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Amazon</a></li>
                                <li><a class="dropdown-item" href="#">Daraz</a></li>
                                <li><a class="dropdown-item" href="#">Ebay</a></li>
                                <li><a class="dropdown-item" href="#">Shopify</a></li>
                                <li><a class="dropdown-item" href="#">Walmart</a></li>
                                <li><a class="dropdown-item" href="#">Alibaba</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Affiliate Products
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Amazon</a></li>
                                <li><a class="dropdown-item" href="#">Daraz</a></li>
                                <li><a class="dropdown-item" href="#">Ebay</a></li>
                                <li><a class="dropdown-item" href="#">Shopify</a></li>
                                <li><a class="dropdown-item" href="#">Walmart</a></li>
                                <li><a class="dropdown-item" href="#">Alibaba</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Virtual Assistance
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Amazon</a></li>
                                <li><a class="dropdown-item" href="#">Daraz</a></li>
                                <li><a class="dropdown-item" href="#">Ebay</a></li>
                                <li><a class="dropdown-item" href="#">Shopify</a></li>
                                <li><a class="dropdown-item" href="#">Walmart</a></li>
                                <li><a class="dropdown-item" href="#">Alibaba</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Amazon US LLC
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Texas</a></li>
                                <li><a class="dropdown-item" href="#">Wyoming</a></li>
                                <li><a class="dropdown-item" href="#">Missouri</a></li>
                                <li><a class="dropdown-item" href="#">New York</a></li>
                                <li><a class="dropdown-item" href="#">California</a></li>
                                <li><a class="dropdown-item" href="#">Quetta</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Digital Marketing
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Amazon</a></li>
                                <li><a class="dropdown-item" href="#">Daraz</a></li>
                                <li><a class="dropdown-item" href="#">Ebay</a></li>
                                <li><a class="dropdown-item" href="#">Shopify</a></li>
                                <li><a class="dropdown-item" href="#">Walmart</a></li>
                                <li><a class="dropdown-item" href="#">Alibaba</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Construction
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">3 Marla Projects</a></li>
                                <li><a class="dropdown-item" href="#">5 Marla Projects</a></li>
                                <li><a class="dropdown-item" href="#">7 Marla Projects</a></li>
                                <li><a class="dropdown-item" href="#">10 Marla Projects</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">12 Marla & Above Projects</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/about">About Us</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" to="/contact">Contact Us</RouterLink>
                        </li>
                    </ul>
                    <!-- <div class="btn-group probtn">
                        <button class="btn btn-outline-light btn-sm dropdown-toggle px-4" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Atif
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another</a></li>
                            <li><a class="dropdown-item" href="#">Something</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </nav>
    </div>
    <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style>
nav {
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.63);
    -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.63);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.63);
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
}
.grad{
    background-image: linear-gradient(#0d0f13,#344358);
    /* background-color: grey; */
}

.header{
    margin-bottom: 80px;
}
</style>