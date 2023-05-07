<script setup>
    const props = defineProps({
        title: String,
        description: String,
    })
</script>

<template>
    <div class="col-12">
        <div class="business-card" v-bind="$attrs">
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card-info">
                        <h1 class="fs-1 title">{{ props.title }}</h1>
                        <p class="desc">{{ props.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>