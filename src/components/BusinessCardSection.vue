<script setup>
import BusinessCard from './BusinessCard.vue';


</script>

<template>
    <section class="section business-section">
        <div class="container">
            <div class="row gy-5">
                <div class="col-12 text-center">
                    <h4 class="title mb-0">NFC Business Cards for Professionals & Companies</h4>
                </div>

                <BusinessCard 
                    title="One Tap" 
                    description="fast and easy collection and sharing of business cards!" 
                    class="onetap" 
                />
                <BusinessCard 
                    title="One Single Database" 
                    description="for all your company’s leads – shared by all personnels in the company! " 
                    class="onsingle" 
                />
                <BusinessCard 
                    title="Easy On The Go" 
                    description="Transform your physical business cards into digital cards easily on the go, no need for paper anymore." 
                    class="easyon" 
                />

            </div>
        </div>
    </section>
</template>