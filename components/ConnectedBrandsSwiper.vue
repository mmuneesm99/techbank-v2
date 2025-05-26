<template>
  <div class="mx-auto relative py-8">
    <div>
      <ClientOnly>
        <swiper-container ref="containerBrands" :init="true">
          <swiper-slide v-for="brand in brands" :key="brand.name" 
            class="relative overflow-hidden rounded-xl p-[1px] h-fit w-full shadow-lg bg-gradient-to-b from-[#BB83FF] via-[#B1B1B1] to-[#313131]">
            <div class="bg-[#010101] pt-4 px-4 rounded-xl">
              <h4 class="text-xl text-white mx-auto font-ninetea">{{ brand.name }}</h4>
              <p class="text-base mt-2 text-gray-400">{{ brand.description }}</p>
              <div class="-mt-6 flex items-center gap-5">
                <a v-for="social in brand.socials" :key="social.platform" 
                   :href="social.url" 
                   target="_blank" 
                   :aria-label="`Visit ${brand.name} ${social.platform} page`">
                  <Icon :name="social.icon" class="text-white text-[100px] w-6 mx-auto" />
                </a>
              </div>
              <img :src="brand.image" :alt="brand.name" width="100%" height="100%"
                class="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
    <!-- Navigation Buttons -->
    <div class="flex items-center absolute top-1/2 -translate-y-1/2 w-full justify-between z-10 gap-4 mt-8">
      <button @click="swiper.prev()" class="px-0">
        <Icon name="pixelarticons:chevron-left" class="text-white text-5xl" />
      </button>
      <button @click="swiper.next()" class="px-0">
        <Icon name="pixelarticons:chevron-right" class="text-white text-5xl" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const containerBrands = ref(null)

const swiper = useSwiper(containerBrands, {
  slidesPerView: 1.1,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  cache: true,
  watchSlidesProgress: true,
  observer: true,
  observeParents: true,
  preloadImages: true,
  updateOnImagesReady: true,
})

const brands = [
  {
    name: 'BLUE TIGERS',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/bluetigers.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/blue-tigers' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/blue_tigers' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/blue_tigers' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@blue_tigers' }
    ]
  },
  {
    name: 'KOCHI BLUE TIGERS',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/kochibluetigers.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/kochi-blue-tigers' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/kochi_blue_tigers' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/kochi_blue_tigers' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@kochi_blue_tigers' }
    ]
  },
  {
    name: 'BLUE TIGERS LONDON',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/bluetigerslondon.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/blue-tigers-london' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/blue_tigers_london' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/blue_tigers_london' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@blue_tigers_london' }
    ]
  },
  {
    name: 'BLUE TIGERS',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/bluetigers.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/blue-tigers' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/blue_tigers' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/blue_tigers' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@blue_tigers' }
    ]
  },
  {
    name: 'KOCHI BLUE TIGERS',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/kochibluetigers.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/kochi-blue-tigers' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/kochi_blue_tigers' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/kochi_blue_tigers' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@kochi_blue_tigers' }
    ]
  },
  {
    name: 'BLUE TIGERS LONDON',
    description: 'Enhance customer engagement with personalized, AI-driven interactions.',
    image: '/images/bluetigerslondon.webp',
    socials: [
      { platform: 'LinkedIn', icon: 'ph:linkedin-logo', url: 'https://linkedin.com/company/blue-tigers-london' },
      { platform: 'Instagram', icon: 'ph:instagram-logo', url: 'https://instagram.com/blue_tigers_london' },
      { platform: 'Twitter', icon: 'hugeicons:new-twitter', url: 'https://twitter.com/blue_tigers_london' },
      { platform: 'YouTube', icon: 'teenyicons:youtube-outline', url: 'https://youtube.com/@blue_tigers_london' }
    ]
  }
]
</script> 