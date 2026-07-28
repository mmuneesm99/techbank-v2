<template>
  <nav class="bg-gradient-to-b from-black to-transparent fixed font-ninetea w-full text-white z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-5 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center min-w-[180px]">
          <NuxtLink to="/" class="flex items-center">
            <nuxt-img 
              src="/images/logo.svg" 
              alt="TechBank Logo" 
              width="40" 
              height="40" 
              class="h-8 w-8 mr-2"
            />
            <span class="text-xl font-bold text-white">TechBank</span>
          </NuxtLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex flex-1 justify-center">
          <div class="flex items-center space-x-6">
            <NuxtLink 
              to="/" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path === '/' ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Home
            </NuxtLink>
            <div class="h-5 w-px bg-gray-700"></div>
            <NuxtLink 
              to="/products" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path.startsWith('/products') ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Products
            </NuxtLink>
            <div class="h-5 w-px bg-gray-700"></div>
            <NuxtLink 
              to="/team" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path.startsWith('/team') ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Teams
            </NuxtLink>
            <div class="h-5 w-px bg-gray-700"></div>
            <NuxtLink 
              to="/careers" 
              class="px-2 py-1 text-sm font-medium uppercase tracking-wide border-b-2 border-transparent hover:text-purple-400 transition-all duration-200"
              :class="[$route.path.startsWith('/careers') ? 'border-b-2 border-purple-400 text-purple-400' : 'text-white']"
            >
              Career
            </NuxtLink>
          </div>
        </div>

        <!-- Contact Us Button -->
        <div class="hidden md:flex min-w-[180px] justify-end">
          <NuxtLink
            to="/contact"
            class="border border-white text-white px-5 py-1.5 rounded-full text-xs font-medium uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-200"
          >
            Contact Us
          </NuxtLink>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden relative z-10">
          <button 
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center transition-all duration-300"
          >
            <span class="sr-only">Open main menu</span>
            <Icon :name="isMobileMenuOpen ? 'pixelarticons:close' : 'pixelarticons:menu'" class="text-3xl" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div 
      ref="mobileMenu"
      class="md:hidden absolute top-12 right-4"
      :class="{ 'hidden': !isMobileMenuOpen }"
    >
      <div class="relative w-[220px] px-1 px-0 pt-0 pb-0">
        <div class="absolute inset-0 w-full h-full z-0">
          <img :src="assetPath('/images/mob-nav-bg.svg')" alt="Mobile Nav BG" class="w-full h-full object-contain" />
        </div>
        <nav ref="mobileNavLinks" class="relative z-10 flex flex-col gap-2 px-3 py-10">
          <NuxtLink 
            to="/" 
            class="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path === '/' ? 'text-white  bg-[#000000]' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:home-2-bold-duotone" class="text-xl" />
            Home
          </NuxtLink>
          <NuxtLink 
            to="/products" 
            class="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/products') ? 'text-white  bg-[#000000]' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:heart-bold-duotone" class="text-xl" />
            Products
          </NuxtLink>
          <NuxtLink 
            to="/team" 
            class="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/team') ? 'text-white  bg-[#000000]' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:users-group-rounded-bold-duotone" class="text-xl" />
            Teams
          </NuxtLink>
          <NuxtLink 
            to="/careers" 
            class="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/careers') ? 'text-white  bg-[#000000]' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:user-plus-bold-duotone" class="text-xl" />
            Career
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-300"
            :class="[$route.path.startsWith('/contact') ? 'text-white  bg-[#000000]' : 'text-white hover:text-purple-400']"
          >
            <Icon name="solar:letter-bold-duotone" class="text-xl" />
            Contact Us
          </NuxtLink>
        </nav>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const isMobileMenuOpen = ref(false)
const mobileMenu = ref<HTMLElement | null>(null)
const mobileNavLinks = ref<HTMLElement | null>(null)

// Initialize GSAP animation
onMounted(() => {
  if (mobileMenu.value) {
    gsap.set(mobileMenu.value, {
      opacity: 0,
      scale: 0.8,
      transformOrigin: 'top right',
      visibility: 'hidden',
      rotation: -5,
      filter: 'blur(10px)',
      perspective: 1000,
      rotateX: -15,
      rotateY: 15,
      boxShadow: '0 0 0 rgba(147, 51, 234, 0)',
      clipPath: 'circle(0% at top right)'
    })
  }
})

// Watch for mobile menu state changes
watch(isMobileMenuOpen, (newValue) => {
  if (!mobileMenu.value) return

  if (newValue) {
    // Show menu before animation
    gsap.set(mobileMenu.value, { visibility: 'visible' })
    
    // Create a timeline for more complex animation
    const tl = gsap.timeline()
    
    tl.to(mobileMenu.value, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      filter: 'blur(0px)',
      rotateX: 0,
      rotateY: 0,
      boxShadow: '0 0 20px rgba(147, 51, 234, 0.3)',
      clipPath: 'circle(150% at top right)',
      duration: 0.6,
      ease: 'power3.out',
      clearProps: 'visibility'
    })

    // Animate nav links with more complex effects
    if (mobileNavLinks.value) {
      const links = mobileNavLinks.value.children
      gsap.fromTo(links, 
        {
          opacity: 0,
          x: -15,
          scale: 0.95,
          rotation: -2,
          filter: 'blur(5px)',
          rotateX: -10,
          rotateY: 10,
          boxShadow: '0 0 0 rgba(147, 51, 234, 0)',
          clipPath: 'inset(0 100% 0 0)'
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          rotation: 0,
          filter: 'blur(0px)',
          rotateX: 0,
          rotateY: 0,
          boxShadow: '0 0 10px rgba(147, 51, 234, 0.2)',
          clipPath: 'inset(0 0 0 0)',
          duration: 0.4,
          stagger: {
            amount: 0.3,
            from: "start"
          },
          ease: 'power2.out'
        }
      )

      // Add text reveal animation for each link
      Array.from(links).forEach((link, index) => {
        const text = link.textContent
        if (text) {
          link.textContent = ''
          const chars = text.split('')
          const textContainer = document.createElement('span')
          textContainer.style.display = 'inline-block'
          link.appendChild(textContainer)
          
          chars.forEach((char, i) => {
            const span = document.createElement('span')
            span.textContent = char
            span.style.display = 'inline-block'
            span.style.opacity = '0'
            span.style.transform = 'translateY(10px)'
            span.style.margin = '0'
            span.style.padding = '0'
            textContainer.appendChild(span)
            
            gsap.to(span, {
              opacity: 1,
              y: 0,
              duration: 0.2,
              delay: 0.1 * (i + index * 2),
              ease: 'power2.out'
            })
          })
        }
      })
    }
  } else {
    // Close animation with more dramatic effect
    gsap.to(mobileMenu.value, {
      opacity: 0,
      scale: 0.8,
      rotation: 5,
      filter: 'blur(10px)',
      rotateX: 15,
      rotateY: -15,
      boxShadow: '0 0 0 rgba(147, 51, 234, 0)',
      clipPath: 'circle(0% at top right)',
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(mobileMenu.value, { visibility: 'hidden' })
      }
    })
  }
})

// Enhanced hover effect for nav links
onMounted(() => {
  if (mobileNavLinks.value) {
    const links = mobileNavLinks.value.children
    Array.from(links).forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.02,
          x: 5,
          rotateY: 5,
          boxShadow: '0 0 15px rgba(147, 51, 234, 0.3)',
          duration: 0.2,
          ease: 'power2.out'
        })

        // Add particle effect on hover
        const particles = 5
        for (let i = 0; i < particles; i++) {
          const particle = document.createElement('div')
          particle.className = 'absolute w-1 h-1 bg-purple-400 rounded-full'
          particle.style.left = '50%'
          particle.style.top = '50%'
          link.appendChild(particle)

          gsap.to(particle, {
            x: gsap.utils.random(-20, 20),
            y: gsap.utils.random(-20, 20),
            opacity: 0,
            scale: 0,
            duration: 0.5,
            ease: 'power2.out',
            onComplete: () => particle.remove()
          })
        }
      })
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          x: 0,
          rotateY: 0,
          boxShadow: '0 0 10px rgba(147, 51, 234, 0.2)',
          duration: 0.2,
          ease: 'power2.out'
        })
      })
    })
  }
})

// Add click effect for nav links
onMounted(() => {
  if (mobileNavLinks.value) {
    const links = mobileNavLinks.value.children
    Array.from(links).forEach(link => {
      link.addEventListener('click', () => {
        // Create ripple effect
        const ripple = document.createElement('div')
        ripple.className = 'absolute w-4 h-4 bg-purple-400 rounded-full opacity-50'
        ripple.style.left = '50%'
        ripple.style.top = '50%'
        ripple.style.transform = 'translate(-50%, -50%)'
        link.appendChild(ripple)

        // Create timeline for coordinated animations
        const tl = gsap.timeline()
        
        tl.to(ripple, {
          scale: 10,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        }, 0)

        tl.to(link, {
          scale: 0.97,
          duration: 0.15,
          ease: 'power2.in'
        }, 0)

        tl.to(link, {
          scale: 1,
          duration: 0.3,
          ease: 'elastic.out(1, 0.5)'
        }, 0.15)

        // Add subtle glow effect
        tl.to(link, {
          boxShadow: '0 0 20px rgba(147, 51, 234, 0.4)',
          duration: 0.2,
          ease: 'power2.out'
        }, 0)

        tl.to(link, {
          boxShadow: '0 0 10px rgba(147, 51, 234, 0.2)',
          duration: 0.3,
          ease: 'power2.in'
        }, 0.2)

        // Clean up ripple after animation
        tl.call(() => {
          ripple.remove()
        }, null, null, 0.6)

        // Close menu after click animation
        tl.call(() => {
          isMobileMenuOpen.value = false
        }, null, null, 0.4)
      })
    })
  }
})
</script> 