<script setup>
import pricing1 from '@/assets/images/pricing/1.png'
import pricing2 from '@/assets/images/pricing/2.png'
import pricing3 from '@/assets/images/pricing/3.png'
import pricing4 from '@/assets/images/pricing/4.png'
import PricingCard from './PricingCard.vue'
</script>

<template>
  <section class="section pricing-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto text-center">
          <h4 class="title text-light">Pricing Plan of a Digital Name Card with Zapkad</h4>
          <p class="desc text-light">
            The cost of getting a digital name card with Zapkad is very small compared to printing
            physical cards.
          </p>
        </div>
        <div class="col-12 mt-5 mt-lg-0">
            <div class="row justify-content-end">

                <PricingCard 
                    title="Web"
                    title2="Version"
                    heading="Free"
                    :count="3"
                    :img="pricing1"
                />
                <PricingCard 
                    title="App"
                    title2="Version"
                    heading="Free"
                    :count="4"
                    :img="pricing2"
                />
                <PricingCard 
                    title="Individual"
                    title2="Premium"
                    heading="USD13.90"
                    :count="5"
                    :img="pricing3"
                />
                <PricingCard 
                    title="Enterprise"
                    title2="Solution"
                    heading="Upon Request"
                    :counts="6"
                    :img="pricing4"
                />
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
