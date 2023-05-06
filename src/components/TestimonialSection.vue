<script setup>
    import { reactive, ref } from 'vue';
    import 'vue3-carousel/dist/carousel.css';
    import { Carousel, Slide } from 'vue3-carousel';
    import testimonial1 from '@/assets/images/testimonial/1.png';
    import testimonial2 from '@/assets/images/testimonial/2.png';
    import testimonial3 from '@/assets/images/testimonial/3.png';
    import testimonial4 from '@/assets/images/testimonial/4.png';
    import testimonial5 from '@/assets/images/testimonial/5.png';

    const testCarousel = ref(null);
    const data = reactive({
        settings: {
            itemsToShow: 5,
            snapAlign: 'center',
        },
        breakpoints: {
            0: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            700: {
                itemsToShow: 3.5,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
        testimonials: [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5]
    })

</script>

<template>
    <section class="section testimonial-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="title">Organisations Using Zapkad Everyday</h2>
                </div>
            </div>
            <div class="row align-items-center mt-5">
                <div class="col-1 text-end">
                    <a href="javascript:void(0)" @click="testCarousel.prev()">
                        <img src="@/assets/images/testimonial/prev.png" alt="Previews" color="arrow__img" />
                    </a>
                </div>
                <div class="col-9 mx-auto">
                    <Carousel ref="testCarousel" v-bind="data.settings" :breakpoints="data.breakpoints" :autoplay="2000" :wrap-around="true">
                        <Slide v-for="testimonial in data.testimonials" :key="testimonial">
                            <div class="carousel__item">
                                <img :src="testimonial" class="img-fluid" alt="" />    
                            </div>
                        </Slide>
                    </Carousel>
                </div>
                <div class="col-1">
                    <a href="javascript:void(0)" @click="testCarousel.next()">
                        <img src="@/assets/images/testimonial/next.png" alt="Next" color="arrow__img" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>