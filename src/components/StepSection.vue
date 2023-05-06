<script setup>
    import { reactive } from 'vue';
    import step1 from '@/assets/images/step/1.png';
    import step2 from '@/assets/images/step/2.png';
    import step3 from '@/assets/images/step/3.png';

    const steps = reactive([
        {title: 'Step 1', description: 'Sign Up', img: step1},
        {title: 'Step 2', description: 'Scan your card', img: step2 },
        {title: 'Step 3', description: 'You are on! Start networking.', img: step3 },
    ])
</script>

<template>
    <section class="section step-section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="step-card">
                        <div class="row align-items-center h-100">
                            <div class="col-lg-10 mx-auto text-center">
                                <h4 class="title text-light">Automate Sales With Digital Business Cards</h4>
                                <p class="desc text-light">By getting an NFC business card with us, you will get an extremely easy to use application that replaces not only your physical business cards, but also ads on features that will make prospection and lead generation a much easier task. </p>
                                <div class="row mt-5 gy-5">
                                    <div v-for="(step, key) in steps" :key="key" class="col-lg-4 text-center">
                                        <img :src="step.img" class="img-fluid" alt="Step 1" />
                                        <div class="text-white mt-3">
                                            <p class="mb-0">{{ step.title }}</p>
                                            <p class="mb-0">{{ step.description }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>