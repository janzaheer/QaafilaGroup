<script>
import 'vue-inner-image-zoom/lib/vue-inner-image-zoom.css';
import InnerImageZoom from 'vue-inner-image-zoom';
import FooterPage from '../common/footer/FooterPage.vue';
import axios from 'axios';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export default {
    name: 'ProductDetail',
    components: {
        FooterPage,
        'inner-image-zoom': InnerImageZoom
    },

    data() {
        return {
            list: [],
            imge: [], // for single slider images
            selectSliderImage: this.list?.images && this.list?.images[0]
        }
    },
    methods: {
        async getProducts() {
            let res = await axios.get('https://dummyjson.com/products/' + this.$route.params.id)
            console.log(res.data)
            this.list = res.data
            this.imge = res.data.images
        },
        selectimage(i) {
            this.selectSliderImage = i
            console.log('sss', this.selectSliderImage = i)
        }
    },
    mounted() {

        console.log(this.$route.params.id)
        this.getProducts();

    }

}
</script>

<style>

.desc {
    margin-top: 30px;
}

.img {
    margin-top: 20px;
}

.PageHeight {
    min-height: 100vh;
}

.single_product {
    width: 98%;
    background-color: #e5e5e5;
    padding-left: 16px !important;
    padding-top: 16px !important;
    padding-bottom: 16px !important;
    margin-top: 200px !important;
}

</style>

<template>
    <div class="container PageHeight">
        <div class="single_product bg-white border rounded shadow-sm">
            <div class="row detail-height ">
                <div class="col-md-12 col-lg-6 text-center">
                    <div class="">
                        <!-- <div class="d-flex align-items-start flex-column mb-3" style="height: 200px;">
                            <div class="mt-5 mb-1">
                                <button type="button" class="btn btn-outline-warning me-1">Buy on <img
                                        src="../../../public/icons/a.png" alt="" height="30px" /></button>
                            </div>
                            <div class="mb-1">
                                <button type="button" class="btn btn-outline-warning btn-sm me-1">Buy on <img
                                        src="../../../public/icons/d.png" alt="" height="30px" /></button>
                            </div>
                            <div class="mb-1">
                                <button type="button" class="btn btn-outline-warning btn-sm me-1">Buy on <img
                                        src="../../../public/icons/e.png" alt="" height="40px" /></button>
                            </div>
                            <div class="mb-1">
                                <button type="button" class="btn btn-outline-warning btn-sm me-1">Buy on <img
                                        src="../../../public/icons/ali.png" alt="" height="30px" /></button>
                            </div>
                            <div class="">
                                <button type="button" class="btn btn-outline-warning btn-sm">Buy on <img
                                        src="../../../public/icons/s.png" alt="" height="20px" /></button>
                            </div>
                        </div> -->
                        <div class="img">
                            <div class="imageHeight">
                                <inner-image-zoom
                                    :src="selectSliderImage ? selectSliderImage : list.images && list?.images[0]"
                                    :zoomSrc="selectSliderImage ? selectSliderImage : list.images && list?.images[0]"
                                    :zoomScale="2" zoomType="hover" />
                            </div>
                            <div class="d-flex justify-content-center mt-3">
                                <div class="thumbnail text-center mx-1" v-for="items in imge">
                                    <img :src="items" class="img-thumbnail" style="height: 50px; width: 60px;"
                                        v-on:click="selectimage(items)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="mt-2 text-center">
                        <button type="button" class="btn btn-outline-warning btn-sm me-1">Buy on <img
                                src="../../../public/icons/a.png" alt="" height="30px" />
                        </button>
                        <button type="button" class="btn btn-outline-warning btn-sm me-1">Buy on <img
                                src="../../../public/icons/d.png" alt="" height="30px" />
                        </button>
                        <button type="button" class="btn btn-outline-warning btn-sm me-1">Buy on <img
                                src="../../../public/icons/e.png" alt="" height="30px" />
                        </button>
                        <button type="button" class="btn btn-outline-warning btn-sm me-1">Buy on <img
                                src="../../../public/icons/ali.png" alt="" height="30px" />
                        </button>
                        <button type="button" class="btn btn-outline-warning btn-sm">Buy on <img
                                src="../../../public/icons/s.png" alt="" height="30px" />
                        </button>
                    </div>
                    <div class="desc">
                        <h2>{{ list?.title }}</h2>
                        <h5>$ {{ list?.price }}</h5>
                        <p class="text-warning"> Brand {{ list?.brand }}</p>
                        <p>Stock ({{ list?.stock }})</p>
                        <p>{{ list?.description }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <FooterPage />
</template>
