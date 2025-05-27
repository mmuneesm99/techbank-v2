<script setup lang="ts">
const containerReview = ref(null)
const swiper = useSwiper(containerReview, {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 10
    },
    640: {
      slidesPerView: 2.2,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 30
    }
  }
})

const reviews = [
  {
    name: "David Kim",
    company: "Orion Tech",
    image: "/images/placeholder.webp",
    review: "Put your crypto to work and unlock high-yield rewards—up to 300% Dbank makes staking simple, secure, and rewarding."
  },
  {
    name: "Sarah Chen",
    company: "BlockChain Solutions",
    image: "/images/placeholder.webp",
    review: "The most user-friendly crypto platform I've used. The staking rewards are incredible and the security features give me peace of mind."
  },
  {
    name: "Michael Rodriguez",
    company: "Crypto Ventures",
    image: "/images/placeholder.webp",
    review: "Dbank has revolutionized how I manage my crypto portfolio. The yield farming options are diverse and the platform is incredibly intuitive."
  },
  {
    name: "Emma Thompson",
    company: "Digital Assets",
    image: "/images/placeholder.webp",
    review: "As a long-term crypto investor, I appreciate Dbank's focus on security and sustainable yields. The platform is a game-changer."
  },
  {
    name: "James Wilson",
    company: "Tech Innovators",
    image: "/images/placeholder.webp",
    review: "The customer support is exceptional, and the platform's performance is unmatched. Dbank has become my go-to for crypto staking."
  }
]

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<template>
  <div class="mx-auto relative py-8">
    <div class="relative">
      <ClientOnly>
        <swiper-container ref="containerReview" :init="true" class="review-swiper">
          <swiper-slide v-for="(review, index) in reviews" :key="index" 
            class="relative overflow-hidden rounded-2xl shadow-lg bg-[#2B2B2B] h-[220px]">
            <div class="h-full inset-0 p-6 z-10 text-white relative flex flex-col">
              <div class="flex items-center justify-between relative w-full">
                <div class="space-y-4 flex-1">
                  <div class="flex gap-5 items-center">
                    <img loading="lazy" :src="review.image" :alt="review.name" width="100%" height="100%" 
                      class="w-14 h-14 rounded-full object-cover border-2 border-[#BB83FF]" />
                    <div>
                      <h2 class="text-base font-thin font-ninetea text-white">{{ review.name }}</h2>
                      <p class="text-xs font-thin text-[#AD98FF]">{{ review.company }}</p>
                    </div>
                  </div>
                  <p class="text-sm text-white font-thin font-ninetea leading-relaxed line-clamp-4">
                    {{ review.review }}
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
  </div>
  <!-- <div class="swiper-pagination bg-white flex relative z-10 "></div> -->
</template>

<style lang="css">


</style>
