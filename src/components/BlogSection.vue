<script setup>
    import BlogSingle from './BlogSingle.vue';
    import img1 from '@/assets/images/blog-1.jpg';
    import img2 from '@/assets/images/blog-2.jpg';
    import img3 from '@/assets/images/blog-3.jpg';
</script>

<template>
    <section class="section blog-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <h4 class="title">How a Digital Name Card can Boost Performance of Sales</h4>
                    <p class="desc">We have seen it with our own eyes. A well performing digital name card can help boost performance of your sales team. Equip them with the right tools and magic happens!</p>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12 mx-auto">
                    <div class="row mt-4 g-5">
                        <BlogSingle 
                            :img="img1"
                            title="“4 Hours won! On every networking event.”"
                            description="I no longer spend extra time, all contacts are saved as soon as I step out of the event."
                        />
                        <BlogSingle 
                            :img="img2"
                            title="“My company comes off as more responsible.”"
                            description="I no longer spend extra time, all contacts are saved as soon as I step out of the event."
                        />
                        <BlogSingle 
                            :img="img3"
                            title="“50% more lead transformation.”"
                            description="I no longer spend extra time, all contacts are saved as soon as I step out of the event."
                        />
                    </div>
                </div>
            </div>
            
        </div>
    </section>
</template>