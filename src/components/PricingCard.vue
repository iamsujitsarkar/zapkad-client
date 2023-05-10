<script setup>
    const props = defineProps({
        title: String,
        title2: String,
        heading: String,
        count: Number,
        img: String
    })
</script>

<template>
    <!-- <div class="col-lg-2 col-xxl-2">
        <div class="pricing-card">
            <div class="">
                <img :src="img" class="price__icn mb-2" alt="" />
                <p class=" mb-0">{{ props.title }}</p>
                <p class="">{{ props.title2 }}</p>
                <h6 class="fs-6 fw-bold">{{ props.heading }}</h6>
            </div>

            <div class="mt-5">
                <div v-for="count in counts" :key="count" class="price__chk">
                    <img src="@/assets/images/pricing/check.png" alt="" />
                </div>
            </div>

            <div class="price__btn">
                <a href="#" class="btn bg-white rounded-pill fw-bold text-primary w-100 fw-bold">Sign Up</a>
            </div>
        </div>
    </div> -->

    <div class="col-md-6 col-xl-3">
        <div class="pricing-card card mb-5 mb-lg-0">
            <div class="card-body">
                <div class="">
                    <img :src="img" class="price__icn mb-2" alt="" />
                    <p class=" mb-0">{{ props.title }}</p>
                    <p class="">{{ props.title2 }}</p>
                    <h6 class="fs-6 fw-bold">{{ props.heading }}</h6>
                </div>
                
                <ul class="list-unstyled text-start fs-12 my-4">
                    <li v-for="count in 6" :class="count > props.count && 'close'">
                        <i class="bi fs-18" :class="count > props.count ? 'bi-x':'bi-check'"></i>
                        <span class="ms-1">Personal QR code to scan your business card on virtual backgrounds</span>
                    </li>
                </ul>
                <div class="d-block">
                    <a href="#" class="btn bg-white text-dark w-100">Sign Up</a>
                </div>
            </div>
        </div>
    </div>
    
</template>