<template>
    <Slide />
    <div class="container my-5 homePage">
        <h4 class="text-warning">Categories</h4>
        <div class="row d-flex justify-content-center">
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="border productShadow my-3" value="all-categories" v-on:click="selectALl()">
                    <div class="product ">
                        <div class="p-1">
                            <img src="../../../public/ico/tops.png" class="" alt="..." style="height: 50px;">
                            <h5>All</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 text-center" v-for="items in categoryName"
                :key="items?.id">
                <div class="border productShadow my-3" v-on:click="selectCategory(items)">
                    <div class="product ">
                        <div class="p-1">
                            <img :src="categoryImages(items)" class="" alt="..." style="height: 50px;">
                            <h5>{{ items }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <h2><i class="fa-solid fa-book"></i></h2>
        <h4 class="text-warning">Just For You</h4>
        <div class="text-center m-5" v-if="loading">
            <div class="spinner-border text-success" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
        <div class="row g-2" v-else>
            <div v-for="item in list" :key="item.id" class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div class='border productShadow mb-2'>
                    <div class="product">
                        <div class="text-center mb-1">
                            <RouterLink :to="'/productdetail/' + item.id"><img :src="item.images[0]" alt=''
                                    class="images-class w-100" style="height:150px" /></RouterLink>
                        </div>
                        <div class="p-1">
                            <div class="">
                                <h6 class="text-muted text-wrap">{{ item?.title.substring(0, 15) }}
                                </h6>
                                <span class="">$ {{ item.price }}</span>
                            </div>
                            <div class="mt-1 px-2 d-flex justify-content-between align-items-center">
                                <div class="">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterPage />
</template>
<script>
import axios from 'axios';
import Slide from '../slider/Slide.vue'
import { Products } from '../../services/Products_services'

import {
    RouterLink
} from 'vue-router';
import FooterPage from '../common/footer/FooterPage.vue';
export default {
    name: 'HomePage',
    components: {
        Slide,
        FooterPage
    },
    data() {
        return {
            list: [],
            categoryName: [],
            selectALlCat: [],
            loading: false
        }
    },
    mounted() {
        this.getProducts()
        this.categoryFunction()
    },
    methods: {
        async getProducts() {
            try {
                this.loading = true
                let resp = await Products()
                console.log(resp)
                this.list = resp.products
            } catch (error) {
                console.log(error)
            } finally {
                this.loading = false
            }
        },
        async categoryFunction() {
            let res = await axios.get('https://dummyjson.com/products/categories')
            this.categoryName = res.data
        },
        async selectCategory(i) {
            let response = await axios.get(`https://dummyjson.com/products/category/${i}`)
            this.list = response.data.products

            console.log('select', i)
        },
        categoryImages(category) {
            if (category === 'smartphones') {
                return '../../../dist/ico/mobile.png'
            } else if (category === 'laptops') {
                return '../../../public/ico/laptop.png'
            } else if (category === 'fragrances') {
                return '../../../public/ico/perfume.jpg'
            } else if (category == 'skincare') {
                return '../../../public/ico/skin.png'
            } else if (category == 'groceries') {
                return '../../../public/ico/groceries.png'
            } else if (category == 'home-decoration') {
                return '../../../public/ico/home.png'
            } else if (category == 'furniture') {
                return '../../../public/ico/furniture.png'
            } else if (category == 'womens-dresses') {
                return '../../../public/ico/womens-dresses.png'
            } else if (category == 'womens-shoes') {
                return '../../../public/ico/womens-shoes.png'
            } else if (category == 'mens-shirts') {
                return '../../../public/ico/shirt.png'
            } else if (category == 'mens-shoes') {
                return '../../../public/ico/mens-shoes.png'
            } else if (category == 'mens-watches') {
                return '../../../public/ico/mens-watches.png'
            } else if (category == 'womens-watches') {
                return '../../../public/ico/womens-watches.png'
            } else if (category == 'womens-bags') {
                return '../../../public/ico/bag.png'
            } else if (category == 'womens-jewellery') {
                return '../../../public/ico/womens-jewellery.png'
            } else if (category == 'sunglasses') {
                return '../../../public/ico/sunglasses.png'
            } else if (category == 'automotive') {
                return '../../../public/ico/automotive.png'
            } else if (category == 'motorcycle') {
                return '../../../public/ico/bike.png'
            } else if (category == 'lighting') {
                return '../../../public/ico/lighting.png'
            } else if (category == 'tops') {
                return '../../../public/ico/tops.png'
            }
            return ':'
        },
        selectALl() {
            console.log('--------------11111---0------')
            this.getProducts()
        }

    }
}
</script>

<style>
.productShadow {
    cursor: pointer;
}

.productShadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.homePage {
    min-height: 100%;
}
</style>