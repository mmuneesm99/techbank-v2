<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-16 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Left Section with Video -->
            <div class="bg-[#140028] rounded-2xl relative overflow-hidden flex h-fit flex-col items-center">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full absolute object-cover" />
                <div class="absolute -bottom-10 filter blur-[10px] left-0 w-full h-full bg-gradient-to-t from-[#fff] via-[#9334F8] to-transparent">
                </div>
                <div class="relative md:py-20 py-10 px-10 h-fit">
                    <h4 class="text-white text-xl md:text-3xl font-nyx text-center mb-2">Let's connect and create the
                        next big thing in tech</h4>
                    <div class="flex items-center justify-center bottom-0 w-full px-10 md:py-10 right-0">
                        <!-- <video autoplay loop muted playsinline
                            class="object-contain w-full hover:skew-x-2 hover:skew-y-2 transition-all duration-1000">
                            <source src="/videos/interactive-keyboard.webm" type="video/webm">
                        </video> -->
                        <video autoplay loop muted playsinline
                            class="object-contain w-full hover:skew-x-2 hover:skew-y-2 transition-all duration-1000">
                            <source src="/videos/interactive-keyboard.webm" type="video/webm">
                        </video>
                    </div>
                </div>
            </div>

            <!-- Right Section with Form -->
            <div class="w-full md:p-8">
                <p class="text-[#BB83FF] text-sm font-ninetea mb-2 tracking-widest">BUILD THE FUTURE WITH US</p>
                <h2 class="text-3xl md:text-4xl font-nyx text-white mb-8 tracking-wide">CONTACT US</h2>
                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-ninetea text-white mb-2">Name<span class="text-[#BB83FF]">*</span></label>
                        <input 
                            type="text" 
                            id="name" 
                            v-model="form.name"
                            placeholder="Enter Your Name"
                            class="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-[#BB83FF] placeholder-gray-400"
                            required
                        />
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-ninetea text-white mb-2">Email<span class="text-[#BB83FF]">*</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            v-model="form.email"
                            placeholder="Enter Email"
                            class="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-[#BB83FF] placeholder-gray-400"
                            required
                        />
                    </div>
                    <div>
                        <label for="phone" class="block text-sm font-ninetea text-white mb-2">Phone Number<span class="text-[#BB83FF]">*</span></label>
                        <div class="flex items-center gap-2">
                            <div class="relative" ref="dropdownRef">
                                <button 
                                    type="button" 
                                    @click="isDropdownOpen = !isDropdownOpen"
                                    class="px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-[#BB83FF] min-w-[120px] flex items-center justify-between"
                                >
                                    <div class="flex items-center gap-2">
                                        <Icon :name="`flagpack:${selectedCountry.flag}`" class="w-5 h-5" />
                                        <span>{{ selectedCountry.code }}</span>
                                    </div>
                                    <Icon 
                                        name="heroicons:chevron-down"
                                        class="w-4 h-4 transition-transform duration-200"
                                        :class="{ 'rotate-180': isDropdownOpen }" 
                                    />
                                </button>

                                <!-- Dropdown Menu -->
                                <Transition 
                                    enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0"
                                >
                                    <div 
                                        v-if="isDropdownOpen"
                                        class="absolute z-10 mt-1 w-full bg-[#1A1A1A] rounded-lg shadow-lg border border-[#3B2A5A] overflow-hidden"
                                    >
                                        <div class="py-1 max-h-60 overflow-auto">
                                            <button 
                                                v-for="country in countries" 
                                                :key="country.code"
                                                @mousedown="selectCountry(country)"
                                                class="w-full px-4 py-2 text-left text-white hover:bg-[#3B2A5A] flex items-center gap-2 transition-colors duration-150"
                                                :class="{ 'bg-[#3B2A5A]': country.code === selectedCountry.code }"
                                            >
                                                <Icon :name="`flagpack:${country.flag}`" class="w-5 h-5" />
                                                <span>{{ country.code }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                            <input 
                                type="tel" 
                                id="phone" 
                                v-model="form.phone"
                                placeholder="Enter 10 digits"
                                class="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-[#BB83FF] placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-ninetea text-white mb-2">Message<span class="text-[#BB83FF]">*</span></label>
                        <textarea 
                            id="message" 
                            v-model="form.message"
                            rows="4" 
                            placeholder="Write your message"
                            class="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-[#BB83FF] placeholder-gray-400"
                            required
                        ></textarea>
                    </div>
                    <div class="flex justify-start">
                        <NuxtTurnstile v-model="turnstileToken" />
                    </div>
                    <div>
                        <button 
                            type="submit"
                            class="bg-button-gradient text-white px-8 py-3 rounded-full font-ninetea text-base flex items-center gap-2 hover:opacity-90 transition-all shadow-lg"
                            :disabled="isSubmitting || !turnstileToken"
                        >
                            <span v-if="isSubmitting">Sending...</span>
                            <span v-else>Send Message</span>
                            <Icon v-if="!isSubmitting" name="pixelarticons:arrow-right" class="text-white text-xl -rotate-45" />
                        </button>
                    </div>
                    <div v-if="error" class="text-red-500 text-center mt-4">
                        {{ error }}
                    </div>
                    <div v-if="success" class="text-green-500 text-center mt-4">
                        {{ success }}
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useCookie } from 'nuxt/app'

interface Country {
    code: string
    flag: string
    name: string
}

interface FormData {
    name: string
    email: string
    phone: string
    message: string
}

const form = ref<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const isSubmitting = ref(false)
const error = ref('')
const success = ref('')
const isDropdownOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const turnstileToken = ref('')

const countries: Country[] = [
    { code: '+91', flag: 'in', name: 'India' },
    { code: '+1', flag: 'us', name: 'United States' },
    { code: '+44', flag: 'gb', name: 'United Kingdom' },
    { code: '+61', flag: 'au', name: 'Australia' },
    { code: '+86', flag: 'cn', name: 'China' }
]

const selectedCountry = ref<Country>(countries[0])

const selectCountry = (country: Country): void => {
    selectedCountry.value = country
    isDropdownOpen.value = false
}

onClickOutside(dropdownRef, () => {
    isDropdownOpen.value = false
})

const validateForm = (): boolean => {
    let isValid = true
    error.value = ''

    if (!form.value.name.trim()) {
        error.value = 'Name is required'
        isValid = false
    }

    if (!form.value.email.trim()) {
        error.value = 'Email is required'
        isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        error.value = 'Please enter a valid email address'
        isValid = false
    }

    if (!form.value.phone.trim()) {
        error.value = 'Phone number is required'
        isValid = false
    } else if (!/^\d{7,15}$/.test(form.value.phone)) {
        error.value = 'Please enter a valid phone number'
        isValid = false
    }

    if (!form.value.message.trim()) {
        error.value = 'Message is required'
        isValid = false
    }

    return isValid
}

const resetForm = (): void => {
    form.value = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
    error.value = ''
    success.value = ''
    turnstileToken.value = ''
}

const handleSubmit = async (): Promise<void> => {
    if (!validateForm()) return
    if (!turnstileToken.value) {
        error.value = 'Please complete the Turnstile verification'
        return
    }

    isSubmitting.value = true
    error.value = ''
    success.value = ''

    try {
        // First get CSRF token
        const csrfResponse = await fetch('/api/csrf', {
            method: 'GET',
            credentials: 'same-origin'
        })
        
        if (!csrfResponse.ok) {
            throw new Error('Failed to get CSRF token')
        }

        const { token } = await csrfResponse.json()

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': token
            },
            body: JSON.stringify({
                name: form.value.name,
                email: form.value.email,
                phone: `${selectedCountry.value.code}${form.value.phone}`,
                message: form.value.message,
                turnstileToken: turnstileToken.value
            }),
            credentials: 'same-origin'
        })

        if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.message || 'Failed to send message')
        }

        const data = await response.json()
        success.value = data.message || 'Message sent successfully! We will get back to you soon.'
        resetForm()
    } catch (err: any) {
        error.value = err.message || 'Failed to send message. Please try again.'
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
/* Custom scrollbar for dropdown */
.max-h-60::-webkit-scrollbar {
    width: 6px;
}

.max-h-60::-webkit-scrollbar-track {
    background: #1A1A1A;
}

.max-h-60::-webkit-scrollbar-thumb {
    background: #3B2A5A;
    border-radius: 3px;
}

.max-h-60::-webkit-scrollbar-thumb:hover {
    background: #4B3A6A;
}

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
</style>