<template>
    <!-- Hero Section -->
    <div ref="heroRef" class="max-w-7xl mx-auto px-4 pb-0 md:pb-0 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden">
            <img src="/images/hero-bg.svg" alt="TechBank Hero Background - Modern Digital Finance Platform"
                width="100%" height="100%" class="hidden md:block w-full h-auto object-cover rounded-lg shadow-lg"
                loading="eager" />
            <img src="/images/mob-hero-bg.webp" alt="TechBank Mobile Hero Background - Digital Finance Solutions"
                width="100%" height="100%" class="block md:hidden w-full h-auto object-cover rounded-lg shadow-lg"
                loading="eager" />

            <div
                class="absolute bottom-0 w-full h-full flex flex-col items-center justify-end rounded-lg py-4 md:py-10">
                <div class="absolute w-full h-full flex items-center justify-center">
                    <img ref="compRef" src="/images/comp.gif" alt="TechBank Digital Finance Platform Animation"
                        class="w-[200px] sm:w-[180px] md:w-[300px] h-auto object-cover rotate-[20deg] transition-all duration-300" />
                </div>
                <h3 ref="headerRef"
                    class="text-2xl sm:text-3xl md:text-[94px] text-[#000000] font-bold text-center mb-1 md:mb-4 relative font-nyx tracking-wider">
                    Engineering
                </h3>
                <h3 ref="header2Ref"
                    class="text-2xl sm:text-3xl md:text-[94px] md:mt-8 -mt-1 text-[#000000] font-bold text-center mb-2 md:mb-4 relative font-nyx tracking-wider">
                    The Future
                </h3>
                <div
                    class="flex flex-col md:flex-row text-center md:text-left md:mt-4 mt-0 relative items-center md:gap-8 gap-3 max-w-xl px-4">
                    <span
                        class="hero-subtitle text-xs sm:text-sm md:text-[16px] text-[#000000] font-ninetea">Empowering
                        Businesses, Enabling Growth
                        TechBank's Products for Success</span>
                    <button @click="scrollToAbout()"
                        class="bg-button-gradient font-ninetea text-white pl-3 md:pl-6 pr-2 py-2 md:py-2 text-xs md:text-base whitespace-nowrap flex items-center gap-1 md:gap-2 rounded-full hover:bg-gray-700 transition-all duration-300 active:scale-95 touch-manipulation">
                        EXPOLORE
                        <span class="bg-white h-5 w-5 md:h-8 md:w-8 flex items-center justify-center ml-0 rounded-full">
                            <Icon name="mynaui:arrow-long-up-right"
                                class="text-[#8501A6] font-bold text-xs md:text-base" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center py-2">
            <span class="text-white text-xs md:text-sm font-ninetea">+ SCROLL TO EXPOLORE +</span>
        </div>
    </div>

    <!-- About Section -->
    <div
        class="max-w-7xl about-section mx-auto px-4 sm:px-6 grid md:grid-cols-2 items-center grid-cols-1 gap-8 md:gap-20 lg:px-8 py-16 md:py-24 relative overflow-hidden">
        <div class="order-2 md:order-1">
            <img src="/images/about-bg.avifs" alt="TechBank Blockchain Technology Demonstration"
                class="max-w-[300px] w-full sm:max-w-[350px] md:max-w-[400px] h-auto rounded-lg shadow-lg mx-auto" loading="lazy" />
        </div>
        <div class="flex text-block flex-col md:items-start items-center order-1 md:order-2">
            <h2 ref="aboutRef" data-final-text="About"
                class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header font-bold mb-4 md:mb-6 font-nyx tracking-wider">
                About
            </h2>
            <p
                class="about-description text-xs sm:text-sm md:text-[16px] text-[#8D8D8D] font-ninetea text-center md:text-start max-w-2xl mb-6 md:mb-10 text-block">
                TechBank is a blockchain product company creating decentralized tools like TechBank, Dbank, and Dwallet
                to simplify digital finance. We empower users with secure, transparent, and user-friendly solutions for
                managing assets in the Web3 world.
            </p>
            <div class="flex divide-x divide-[#C0C0C03D] w-full justify-center md:justify-start">
                <div class="pr-4 md:pr-8">
                    <h3 class="font-nyx text-2xl sm:text-2xl md:text-[28px] mb-1 md:mb-2">4</h3>
                    <p class="font-ninetea text-xs sm:text-sm md:text-base text-[#C0C0C0]">Products</p>
                </div>
                <div class="px-4 md:px-8">
                    <h3 class="font-nyx text-2xl sm:text-2xl md:text-[28px] mb-1 md:mb-2">2000+</h3>
                    <p class="font-ninetea text-xs sm:text-sm md:text-base text-[#C0C0C0]">Active Users</p>
                </div>
                <div class="pl-4 md:pl-8">
                    <h3 class="font-nyx text-2xl sm:text-2xl md:text-[28px] mb-1 md:mb-2">1M+</h3>
                    <p class="font-ninetea text-xs sm:text-sm md:text-base text-[#C0C0C0]">Downloads</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Products Section -->
    <div class="relative hidden">
        <div class="bg-[#010101]">
            <div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0">
                <img src="/images/product-bg-pattern.webp" alt="TechBank Products Section Background Pattern"
                    width="100%" height="100%" class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
            </div>
        </div>
        <div class="absolute w-full bottom-0 blur-[60px] -rotate-[10deg]">
            <div class="flex items-center justify-center bottom-0 h-10 bg-gradient-to-b from-[#3A0696] to-[#C740FF]">
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 relative sm:px-6 lg:px-8 py-16 md:py-24">
            <div class="text-center">
                <p class="text-xs sm:text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl mb-2 md:mb-3">Innovative
                </p>
                <h2 ref="productsRef" data-final-text="Products"
                    class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header mx-auto mb-4 md:mb-6 font-nyx tracking-wider">
                    Products
                </h2>
                <p
                        class="product-description text-xs sm:text-sm md:text-[16px] text-[#8D8D8D] font-ninetea mx-auto max-w-2xl mb-8 md:mb-12 px-4">
                        Explore our innovative products designed to simplify your digital finance experience.
                    </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div v-for="product in products" :key="product.id"
                    class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] touch-manipulation">
                    <img :src="product.bgImage" :alt="`${product.name} - Background Pattern`" width="100%" height="100%"
                        class="w-full h-auto object-cover rounded-lg shadow-lg" loading="lazy" />
                    <div class="absolute h-full inset-0 p-1 z-10 text-white">
                        <img :src="product.image" :alt="`${product.name} - Digital Finance Interface Preview`"
                            width="100%" height="100%" class="w-full object-cover rounded-lg shadow-lg"
                            loading="lazy" />
                        <div class="flex items-center justify-between relative w-full py-4 md:py-8 px-4">
                            <div>
                                <h2 class="text-2xl sm:text-3xl md:text-[32px] tracking-wide font-nyx mb-2 md:mb-3">{{ product.name }}</h2>
                                <div class="text-block">
                                    <p class="text-xs sm:text-sm md:text-base font-ninetea text-gray-400">{{ product.description }}</p>
                                </div>
                            </div>
                            <nuxt-link :to="product.link"
                                class="bg-purple-600 font-ninetea hover:bg-purple-700 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1 md:gap-2 mr-2 md:mr-6 transition-all duration-300 active:scale-95 touch-manipulation">
                                View
                                <Icon name="pixelarticons:arrow-right"
                                    class="text-white text-lg md:text-2xl -rotate-45" />
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Brands Section -->
    <div class="relative overflow-hidden">
        <div class="bg-[#010101]">
            <div class="absolute inset-0 w-full h-full flex items-center justify-center bottom-0">
                <img src="/images/product-bg-pattern.webp" alt="TechBank Brands Section Background Pattern"
                    width="100%" height="100%" class="w-full h-full object-cover rounded-lg shadow-lg" loading="lazy" />
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div class="text-center">
                <p class="text-xs sm:text-sm md:text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl mb-2 md:mb-3">From One
                    Root, Many
                    Branches</p>
                <h2 data-final-text="Our Connected Brands" ref="brandsRef"
                    class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header mx-auto mb-4 md:mb-6 font-nyx tracking-wider leading-[1.2] md:leading-none">
                    Our Connected Brands
                </h2>
            </div>

            <!-- Mobile View -->
            <div class="md:hidden">
                <ConnectedBrandsSwiper />
            </div>

            <!-- Desktop View -->
            <div class="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-5">
                <div v-for="(brand, index) in brands" :key="index"
                    class="relative overflow-hidden rounded-xl p-[1px] h-fit w-full shadow-lg bg-gradient-to-b from-[#BB83FF] via-[#B1B1B1] to-[#313131] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
                    <div class="bg-[#010101] pt-4 px-4 rounded-xl">
                        <h4 class="text-lg md:text-xl text-white mx-auto font-ninetea">{{ brand.name }}</h4>
                        <p class="text-sm md:text-base mt-2 text-gray-400">{{ brand.description }}</p>
                        <div class="-mt-6 flex items-center gap-5">
                            <a v-for="social in brand.socials" :key="social.platform" :href="social.url" target="_blank"
                                :aria-label="`Visit ${brand.name} ${social.platform} page`"
                                class="transition-transform duration-300 hover:scale-110 active:scale-95 touch-manipulation">
                                <Icon :name="social.icon" class="text-white text-[100px] w-6 mx-auto" />
                            </a>
                        </div>
                        <img :src="brand.image" :alt="`${brand.name} - Connected Brand Platform Preview`" width="100%"
                            height="100%" class="w-full h-auto object-cover rounded-lg shadow-lg mt-4" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Technologies Section -->
    <div class="max-w-7xl mx-auto relative px-4 sm:px-6 py-16 md:py-24 lg:px-8">
        <div class="text-center">
            <h2 ref="technologiesRef" data-final-text="Technologies"
                class="text-2xl sm:text-3xl md:text-[32px] text-[#FFFFFF] scramble-header mx-auto mb-4 md:mb-6 font-nyx tracking-wider leading-[1.2] md:leading-[102px]">
                Technologies
            </h2>
        </div>
        <TechnologySwiper />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin'
import { useHead } from 'nuxt/app'

useHead({
    title: 'Engineering The Future'
})
gsap.registerPlugin(SplitText, ScrambleTextPlugin)

// Type definitions
interface Product {
    id: number
    name: string
    description: string
    image: string
    bgImage: string
    link: string
}

interface Social {
    platform: string
    icon: string
    url: string
}

interface Brand {
    name: string
    description: string
    image: string
    socials: Social[]
}

// Refs with proper typing
const compRef = ref<HTMLImageElement | null>(null)
const heroRef = ref<HTMLDivElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)
const productsRef = ref<HTMLElement | null>(null)
const technologiesRef = ref<HTMLElement | null>(null)
const brandsRef = ref<HTMLElement | null>(null)
const headerRef = ref<HTMLElement | null>(null)
const header2Ref = ref<HTMLElement | null>(null)
const splitTextInstances = ref<SplitText[]>([])

// Data
const products = ref<Product[]>([
    {
        id: 1,
        name: 'DWALLET',
        description: 'TechBank is a blockchain product company creating',
        image: '/images/dwallethome.webp',
        bgImage: '/images/product-card.webp',
        link: '/products/dwallet'
    },
    {
        id: 2,
        name: 'DBANK',
        description: 'TechBank is a blockchain product company creating',
        image: '/images/dbankhome.webp',
        bgImage: '/images/product-card.webp',
        link: '/products/dbank'
    }
])

const brands = ref<Brand[]>([
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
])

// Animation functions
const animateScramble = (el: HTMLElement): void => {
    if (!el || el.classList.contains('scrambling')) return

    el.classList.add('scrambling')
    const finalText = el.dataset.finalText || el.textContent || ''

    gsap.fromTo(el, {
        scrambleText: {
            text: '',
            chars: '!@#$%^&*1234567890',
            revealDelay: 0.5,
            speed: 0.3
        }
    }, {
        duration: 1,
        scrambleText: {
            text: finalText,
            chars: '!@#$%^&*1234567890',
            newClass: 'revealed'
        },
        ease: 'power2.out',
        onComplete: () => el.classList.remove('scrambling')
    })
}

// Event handlers
const handleMouseMove = (e: MouseEvent): void => {
    const comp = compRef.value
    const hero = heroRef.value
    if (!comp || !hero) return

    const rect = hero.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    gsap.to(comp, {
        x: x * 1,
        y: y * 1,
        duration: 10,
        ease: 'power2.out'
    })
}

const handleMouseLeave = (): void => {
    const comp = compRef.value
    if (!comp) return

    gsap.to(comp, {
        x: 0,
        y: 0,
        duration: 10,
        ease: 'power2.out'
    })
}
const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about-section')
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
}
const handlePointerMove = (e: Event): void => {
    const textBlock = document.querySelector('.text-block')
    if (!textBlock) return

    const pointerEvent = e as PointerEvent
    const chars = textBlock.querySelectorAll('.char')

    chars.forEach((char) => {
        const rect = char.getBoundingClientRect()
        const dx = pointerEvent.clientX - (rect.left + rect.width / 2)
        const dy = pointerEvent.clientY - (rect.top + rect.height / 2)
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 100) {
            gsap.to(char, {
                overwrite: true,
                duration: 0.8 - dist / 150,
                scrambleText: {
                    text: char.getAttribute('data-content') || '',
                    chars: '.:',
                    speed: 0.3
                },
                ease: 'none'
            })
        }
    })
}

// Lifecycle hooks
onMounted(() => {
    // Set up intersection observer for scramble headers
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateScramble(entry.target as HTMLElement)
            }
        })
    }, {
        threshold: 0.5
    })

    // Observe headers
    const headers = [headerRef.value, header2Ref.value]
    headers.forEach(header => header && observer.observe(header))
    document.querySelectorAll('.scramble-header').forEach(el => observer.observe(el))

    // Set up event listeners
    const hero = heroRef.value
    if (hero) {
        hero.addEventListener('mousemove', handleMouseMove)
        hero.addEventListener('mouseleave', handleMouseLeave)
    }

    // Initialize text block animation
    const textBlock = document.querySelector('.text-block')
    if (textBlock) {
        const paragraphs = textBlock.querySelectorAll('p')
        paragraphs.forEach(paragraph => {
            const st = new SplitText(paragraph, {
                type: 'chars',
                charsClass: 'char'
            })
            splitTextInstances.value.push(st)

            st.chars.forEach((char) => {
                gsap.set(char, {
                    attr: { 'data-content': char.textContent || '' }
                })
            })
        })

        textBlock.addEventListener('pointermove', handlePointerMove)
    }
})

onUnmounted(() => {
    // Clean up event listeners
    const hero = heroRef.value
    if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove)
        hero.removeEventListener('mouseleave', handleMouseLeave)
    }

    const textBlock = document.querySelector('.text-block')
    if (textBlock) {
        textBlock.removeEventListener('pointermove', handlePointerMove)
    }

    // Clean up SplitText instances
    splitTextInstances.value.forEach(instance => {
        instance.revert()
    })
    splitTextInstances.value = []
})
</script>

<style scoped>
/* Touch device optimizations */
@media (hover: none) {
    .touch-manipulation {
        -webkit-tap-highlight-color: transparent;
    }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* Interactive text effect */
.char {
    display: inline-block;
    position: relative;
    transition: transform 0.3s ease;
}

.text-block {
    position: relative;
    cursor: default;
}

.text-block p {
    position: relative;
    z-index: 1;
}
</style>
