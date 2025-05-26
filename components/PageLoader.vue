<template>
  <Transition name="fade">
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900">
      <div class="scanline"></div>
      <div class="noise"></div>
      <div ref="heroRef" class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="relative overflow-hidden">
          <img src="/images/loader-bg.svg" alt="TechBank Logo" width="100%" height="100%"
            class="w-full h-auto object-cover" />
          <div class="absolute w-full h-full flex flex-col items-center justify-center bottom-0 rounded-lg py-6 sm:py-10">
            <div class="w-full max-w-[280px] sm:max-w-sm">
              <h3 ref="headerRef"
                class="text-base sm:text-xl text-[#A4A4A4] text-center mb-4 relative font-nyx tracking-widest">
                Preparing Your Tech Experience...</h3>
              <div class="w-full flex items-center justify-center">
                <img ref="compRef" src="/images/loader.gif" alt="TechBank Animation"
                  class="w-[80px] sm:w-[100px] h-auto object-cover transition-all duration-300" />
              </div>
            </div>
            <p class="mt-2 absolute bottom-8 sm:bottom-16 left-4 sm:left-10 text-5xl sm:text-8xl font-bold text-[#A4A4A4] font-nyx">
              <span ref="percentageRef" class="glitch-text">{{ loadingPercentage }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const nuxtApp = useNuxtApp()
const isLoading = ref(true)
const loadingPercentage = ref(0)
const percentageRef = ref<HTMLElement | null>(null)
let progressInterval: NodeJS.Timeout | null = null
const minLoadingTime = 2000 // Minimum loading time in milliseconds
const startTime = Date.now()
const isInitialLoad = ref(true)

// Function to animate the percentage
const animatePercentage = (newValue: number) => {
  if (percentageRef.value) {
    gsap.to(percentageRef.value, {
      innerText: newValue,
      duration: 0.3,
      snap: { innerText: 1 },
      ease: "power1.out"
    })
  }
}

// Function to start the loading progress
const startLoadingProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }

  loadingPercentage.value = 0
  progressInterval = setInterval(() => {
    if (loadingPercentage.value < 90) {
      const newValue = loadingPercentage.value + Math.floor(Math.random() * 10) + 1
      loadingPercentage.value = newValue
      animatePercentage(newValue)
    }
  }, 200)
}

// Function to complete the loading
const completeLoading = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
  loadingPercentage.value = 100
  animatePercentage(100)
  
  // Ensure minimum loading time
  const elapsedTime = Date.now() - startTime
  const remainingTime = Math.max(0, minLoadingTime - elapsedTime)
  
  setTimeout(() => {
    isLoading.value = false
    isInitialLoad.value = false
  }, remainingTime)
}

// Function to create glitch effect
const createGlitchEffect = () => {
  if (percentageRef.value) {
    gsap.timeline({ repeat: -1 })
      .to(percentageRef.value, {
        duration: 0.1,
        x: () => gsap.utils.random(-3, 3), // Reduced movement for mobile
        y: () => gsap.utils.random(-1, 1), // Reduced movement for mobile
        ease: "none",
        repeat: 3,
        yoyo: true
      })
      .to(percentageRef.value, {
        duration: 0.1,
        opacity: 0.8,
        ease: "none",
        repeat: 1,
        yoyo: true
      })
      .to(percentageRef.value, {
        duration: 0.1,
        x: 0,
        y: 0,
        opacity: 1,
        ease: "none"
      });
  }
}

onMounted(() => {
  if (isInitialLoad.value) {
    startLoadingProgress()
    createGlitchEffect()
  } else {
    isLoading.value = false
  }

  // Listen for page navigation events
  nuxtApp.hook('page:start', () => {
    if (isInitialLoad.value) {
      isLoading.value = true
      startLoadingProgress()
    }
  })

  nuxtApp.hook('page:finish', () => {
    if (isInitialLoad.value) {
      completeLoading()
    }
  })

  // Fallback to ensure loader doesn't get stuck
  setTimeout(() => {
    if (isLoading.value && isInitialLoad.value) {
      completeLoading()
    }
  }, 5000)
})

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Scanline effect */
.scanline {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 50%,
    rgba(0, 0, 0, 0.05) 50%
  );
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 20;
  animation: scanline 8s linear infinite;
}

/* Noise texture */
.noise {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  opacity: 0.05;
  pointer-events: none;
  z-index: 15;
  mix-blend-mode: overlay;
}

@keyframes scanline {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .scanline {
    background-size: 100% 2px; /* Thinner scanlines for mobile */
  }
  
  .noise {
    opacity: 0.03; /* Reduced noise opacity for mobile */
  }
}
</style>