<script setup>
    const props = defineProps({
        title: String,
        title2: String,
        heading: String,
        counts: Number,
        img: String
    })
</script>

<template>
    <div class="col-lg-2 col-xxl-2">
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
    </div>
</template>