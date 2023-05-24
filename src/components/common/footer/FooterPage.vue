<style>
footer {
    box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.63);
    -webkit-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.63);
    -moz-box-shadow: 0px -3px 5px 0px rgba(0, 0, 0, 0.63);
}

.grad {
    background-image: linear-gradient(#0d0f13, #344358);
}

.bio {
    font-size: 15px;
}
</style>
<script>
export default {
    name: 'FooterPage'
}
</script>

<template>
    <div class="container-fluid grad text-white">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 py-5 mt-5 border-top">
            <div class="col mb-3">
                <h3 class="mb-4 text-center">  <img src="../../../assets/Qlogo.png" alt="" style="height: 60px;" /> </h3>
                <p class="text-wrap bio text-light">Qaafila Group LLC is an E-commerce Store whose prime objective is to
                    provide quality and affordable products and services to its customers and maintain a strong and healthy
                    relationship with them.</p>
            </div>
            <div class="col mb-3 text-center">
                <h4>Section</h4>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Home</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Features</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Pricing</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">FAQs</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">About</a></li>
                </ul>
            </div>
            <div class="col mb-3 text-center">
                <h4>About Us</h4>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Careers</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Our Stores</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Our Cares</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Terms & Conditions</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="col mb-3 ">
                <h4>Contact Us</h4>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> info@qaafilagroup.com</a>
                    </li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> +1222345433</a></li>
                    <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-light"> 5900 Balcones Drive STE
                            11230 Austin, TX 78731 USA</a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>