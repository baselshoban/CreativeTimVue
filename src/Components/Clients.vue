<template>
    <div class="our-clients">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-2 col-5" v-for="item in items" :key="item.id">
                    <img :src="item.img" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                items: [
                    {
                        id: 1,
                        img: "creative/assets/img/demo/vodafone.jpg",
                    },
                    {
                        id: 2,
                        img: "creative/assets/img/demo/microsoft.jpg",
                    },
                    {
                        id: 3,
                        img: "creative/assets/img/demo/harvard.jpg",
                    },
                    {
                        id: 4,
                        img: "creative/assets/img/demo/stanford.jpg",
                    },
                ],
            }
        }
    }
</script>

<style>
    
</style>