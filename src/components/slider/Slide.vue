<template>
    <div class="container-fluid mt-4 slider">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../../../public/slider/slider1.jpg" class="d-block w-100" alt="..." style="height: 450px;">
                </div>
                <div class="carousel-item">
                    <img src="../../../public/slider/slider2.jpg" class="d-block w-100" alt="..." style="height: 450px;">
                </div>
                <div class="carousel-item">
                    <img src="../../../public/slider/slider3.jpg" class="d-block w-100" alt="..." style="height: 450px;">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>
<script>
export default{
    name: 'Slide'
}
</script>
<style>
.slider{
    margin-left: 40px;
    margin-right: 40px;
}
</style>