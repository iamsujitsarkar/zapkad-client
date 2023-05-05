<script setup>
    const props = defineProps({
        img: String,
        title: String,
        description: String
    })
</script>
<template>
    <div class="col-xl-6">
        <div class="card border-0 shadow blog-single">
            <div class="card-body p-0">
                <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                        <img :src="props.img" class="img-fluid" alt="...">
                    </div>
                    <div class="flex-grow-1 ms-4">
                        <h5 class="fs-5 text-dark fw-bold">{{ props.title }}</h5>
                        <p>{{ props.description }}</p>
                        <div class="text-end me-4">
                            <a href="#" class="text-primary">Read More</a>
                        </div>
                    </div>
                </div>
                <div class="bg-ovgl"></div>
            </div>
        </div>
    </div>
</template>