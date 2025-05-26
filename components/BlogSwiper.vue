<script setup lang="ts">
const containerBlog = ref(null)
const swiper = useSwiper(containerBlog, {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

onMounted(() => {
  console.log(swiper.instance)
})
</script>

<template>
  <div class="max-w-7xl mx-auto relative px-4 py-8">
    <button class="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10" @click="swiper.prev()">
      <Icon name="pixelarticons:chevron-left" class="text-white text-[100px] w-16 mx-auto" />
    </button>
    <div>
      <ClientOnly>
        <swiper-container ref="containerBlog" :init="true">
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <img src="/images/blog-bg-pattern.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-[30px] shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <img src="/images/blog-sample.webp" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg" />
              <div class="flex items-center justify-between relative w-full py-10 px-3">
                <div class="">
                  <h2 class="text-3xl font-ninetea">Smart AI Chatbot</h2>
                  <p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized,
                    AI-driven interactions.
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <img src="/images/blog-bg-pattern.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-[30px] shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <img src="/images/blog-sample.webp" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg" />
              <div class="flex items-center justify-between relative w-full py-10 px-3">
                <div class="">
                  <h2 class="text-3xl font-ninetea">Smart AI Chatbot</h2>
                  <p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized,
                    AI-driven interactions.
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <img src="/images/blog-bg-pattern.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-[30px] shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <img src="/images/blog-sample.webp" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg" />
              <div class="flex items-center justify-between relative w-full py-10 px-3">
                <div class="">
                  <h2 class="text-3xl font-ninetea">Smart AI Chatbot</h2>
                  <p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized,
                    AI-driven interactions.
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg">
            <img src="/images/blog-bg-pattern.svg" alt="TechBank Logo" width="100%" height="100%"
              class="w-full h-auto object-cover rounded-[30px] shadow-lg" />
            <div class="absolute h-full inset-0 p-1 z-10 text-white">
              <img src="/images/blog-sample.webp" alt="TechBank Logo" width="100%" height="100%"
                class="w-full object-cover rounded-lg" />
              <div class="flex items-center justify-between relative w-full py-10 px-3">
                <div class="">
                  <h2 class="text-3xl font-ninetea">Smart AI Chatbot</h2>
                  <p class="text-base mt-2 text-gray-400">Enhance customer engagement with personalized,
                    AI-driven interactions.
                  </p>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </div>
    <button class="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10" @click="swiper.next()">
      <Icon name="pixelarticons:chevron-right" class="text-white text-[100px] w-16 mx-auto" />
    </button>
  </div>
  <!-- <div class="swiper-pagination bg-white flex relative z-10 "></div> -->
</template>

<style lang="css">
swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}
</style>
