<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div class="bg-[#140028] rounded-2xl relative overflow-hidden flex flex-col items-center">
                <nuxt-img src="/images/product-bg-pattern.webp" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-full absolute object-cover" />
                <div
                    class="absolute -bottom-10 filter blur-[10px] left-0 w-full h-full bg-gradient-to-t from-[#fff] via-[#9334F8]  to-transparent">
                </div>
                <div class="relative md:pt-20 pt-10 px-10 flex flex-col items-center justify-around h-full">
                    <h4 class="text-white text-xl md:text-3xl font-nyx text-center mb-2">Let's connect and create the
                        next big thing in tech</h4>
                    <video autoplay loop muted playsinline preload="auto" class="object-contain w-full"
                        poster="/images/interactivekeyboard.webp">
                        <source src="/videos/interactive-keyboard.webm" type="video/webm">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div class="w-full  md:p-8">
                <p class="text-[#BB83FF] text-sm font-ninetea mb-2 tracking-widest">BUILD THE FUTURE WITH US</p>
                <h2 class="text-3xl md:text-4xl font-nyx text-white mb-8 tracking-wide">CONTACT US</h2>
                <form @submit="onSubmit" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-ninetea text-white mb-2">Name<span
                                class="">*</span></label>
                        <input type="text" id="name" :value="name"
                            @input="(e) => nameChange(formatName(e.target.value))" @blur="nameBlur"
                            @keypress="handleKeyPress" placeholder="Enter Your Name (letters only)"
                            class="w-full px-4 py-3 bg-[#1A1A1A]  rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-gray-400"
                            :class="{ 'border-red-500': nameError && nameMeta.touched }">
                        <span v-if="nameError && nameMeta.touched" class=" text-sm mt-1">{{ nameError
                        }}</span>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-ninetea text-white mb-2">Email<span
                                class="">*</span></label>
                        <input type="email" id="email" :value="email" @input="emailChange" @blur="emailBlur"
                            @keypress="handleKeyPress" placeholder="Enter Email"
                            class="w-full px-4 py-3 bg-[#1A1A1A]  rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-gray-400"
                            :class="{ 'border-red-500': emailError && emailMeta.touched }">
                        <span v-if="emailError && emailMeta.touched" class=" text-sm mt-1">{{ emailError
                        }}</span>
                    </div>
                    <div>
                        <label for="phone" class="block text-sm font-ninetea text-white mb-2">Phone Number<span
                                class="">*</span></label>
                        <div class="flex items-center gap-2">
                            <div class="relative" ref="dropdownRef">
                                <button type="button" @click="isDropdownOpen = !isDropdownOpen" @blur="countryCodeBlur"
                                    class="px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-purple-500 min-w-[120px] flex items-center justify-between"
                                    :class="{ 'border-red-500': countryCodeError && countryCodeMeta.touched }">
                                    <div class="flex items-center gap-2">
                                        <Icon :name="`flagpack:${selectedCountry.flag}`" class="w-5 h-5" />
                                        <span>{{ selectedCountry.code }}</span>
                                    </div>
                                    <Icon name="heroicons:chevron-down"
                                        class="w-4 h-4 transition-transform duration-200"
                                        :class="{ 'rotate-180': isDropdownOpen }" />
                                </button>

                                <!-- Dropdown Menu -->
                                <Transition enter-active-class="transition duration-100 ease-out"
                                    enter-from-class="transform scale-95 opacity-0"
                                    enter-to-class="transform scale-100 opacity-100"
                                    leave-active-class="transition duration-75 ease-in"
                                    leave-from-class="transform scale-100 opacity-100"
                                    leave-to-class="transform scale-95 opacity-0">
                                    <div v-if="isDropdownOpen"
                                        class="absolute z-10 mt-1 w-full bg-[#1A1A1A] rounded-lg shadow-lg border border-[#3B2A5A] overflow-hidden">
                                        <div class="py-1 max-h-60 overflow-auto">
                                            <button v-for="country in countries" :key="country.code"
                                                @mousedown="selectCountry(country)"
                                                class="w-full px-4 py-2 text-left text-white hover:bg-[#3B2A5A] flex items-center gap-2 transition-colors duration-150"
                                                :class="{ 'bg-[#3B2A5A]': country.code === selectedCountry.code }">
                                                <Icon :name="`flagpack:${country.flag}`" class="w-5 h-5" />
                                                <span>{{ country.code }}</span>
                                            </button>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                            <input type="tel" id="phone" :value="phone"
                                @input="(e) => phoneChange(formatPhoneNumber(e.target.value))" @blur="phoneBlur"
                                @keypress="handleKeyPress" placeholder="Enter 10 digits"
                                class="w-full px-4 py-3 bg-[#1A1A1A] rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-gray-400"
                                :class="{ 'border-red-500': phoneError && phoneMeta.touched }">
                        </div>
                        <span v-if="phoneError && phoneMeta.touched" class=" text-sm mt-1">
                            {{ phoneError }}
                        </span>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-ninetea text-white mb-2">Message</label>
                        <textarea id="message" :value="message" @input="messageChange" @blur="messageBlur"
                            @keypress="handleKeyPress" rows="4" placeholder="Write your message"
                            class="w-full px-4 py-3 bg-[#1A1A1A]  rounded-lg text-white focus:outline-none focus:border-purple-500 placeholder-gray-400"
                            :class="{ 'border-red-500': messageError && messageMeta.touched }"></textarea>
                        <span v-if="messageError && messageMeta.touched" class=" text-sm mt-1">{{
                            messageError }}</span>
                    </div>

                    <div class="flex justify-start mb-4">
                        <NuxtTurnstile v-model="turnstileToken" @verify="onVerify" @error="onError"
                            @expire="onExpire" />
                    </div>

                    <div class="flex justify-start">
                        <button type="submit"
                            class="bg-button-gradient text-white px-8 py-3 rounded-full font-ninetea text-base flex items-center gap-2 hover:opacity-90 transition-all shadow-lg"
                            :disabled="loading || !turnstileToken">
                            <span v-if="loading">Sending...</span>
                            <span v-else>Send Message</span>
                            <Icon v-if="!loading" name="pixelarticons:arrow-right"
                                class="text-white text-xl -rotate-45" />
                        </button>
                    </div>
                    <div v-if="error" class=" text-center mt-4">
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

<script setup>
import axios from 'axios'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { computed, watch, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

const schema = yup.object({
    name: yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .test('no-numbers', 'Name cannot contain numbers', value => !/\d/.test(value))
        .test('no-special-chars', 'Name cannot contain special characters', value => !/[^A-Za-z\s]/.test(value)),
    email: yup.string().required('Email is required').email('Please enter a valid email'),
    countryCode: yup.string().required('Country code is required'),
    phone: yup.string()
        .required('Phone number is required')
        .matches(/^\d{10}$/, 'Phone number must be 10 digits'),
    message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
})

const { handleSubmit, values, errors, resetForm, validate } = useForm({
    validationSchema: schema,
    initialValues: {
        name: '',
        email: '',
        phone: '',
        countryCode: '+91',
        message: '',
        subject: 'Contact Form Inquiry'
    }
})

const {
    value: name,
    errorMessage: nameError,
    handleBlur: nameBlur,
    handleChange: nameChange,
    meta: nameMeta
} = useField('name')

const {
    value: email,
    errorMessage: emailError,
    handleBlur: emailBlur,
    handleChange: emailChange,
    meta: emailMeta
} = useField('email')

const {
    value: phone,
    errorMessage: phoneError,
    handleBlur: phoneBlur,
    handleChange: phoneChange,
    meta: phoneMeta
} = useField('phone')

const {
    value: countryCode,
    errorMessage: countryCodeError,
    handleBlur: countryCodeBlur,
    handleChange: countryCodeChange,
    meta: countryCodeMeta
} = useField('countryCode')

const {
    value: message,
    errorMessage: messageError,
    handleBlur: messageBlur,
    handleChange: messageChange,
    meta: messageMeta
} = useField('message')

const countries = [
    { code: '+91', flag: 'in', name: 'India' },
    { code: '+1', flag: 'us', name: 'United States' },
    { code: '+44', flag: 'gb', name: 'United Kingdom' },
    { code: '+61', flag: 'au', name: 'Australia' },
    { code: '+86', flag: 'cn', name: 'China' }
]

const isDropdownOpen = ref(false)
const selectedCountry = computed(() => {
    return countries.find(c => c.code === countryCode.value) || countries[0]
})

const selectCountry = (country) => {
    countryCodeChange(country.code)
    isDropdownOpen.value = false
}

const dropdownRef = ref(null)
onClickOutside(dropdownRef, () => {
    isDropdownOpen.value = false
})

const formatName = (value) => {
    if (!value) return value
    return value.replace(/[^A-Za-z\s]/g, '')
}

const formatPhoneNumber = (value) => {
    if (!value) return value
    return value.replace(/\D/g, '').slice(0, 10)
}

watch(() => countryCode.value, () => {
    phone.value = ''
})

const handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
        event.preventDefault()
        const result = await validate()
        if (result.valid) {
            onSubmit()
        }
    }
}

const loading = ref(false)
const error = ref('')
const success = ref('')
const turnstileToken = ref('')

const onVerify = (token) => {
    turnstileToken.value = token
}

const onError = () => {
    turnstileToken.value = ''
}

const onExpire = () => {
    turnstileToken.value = ''
}

const onSubmit = handleSubmit(async (values) => {
    if (!turnstileToken.value) {
        // This could be a general form error or a specific field error if you add a Turnstile field to your schema
        submissionStatus.value = { type: 'error', message: 'Please complete the Turnstile verification.' };
        return
    }
    loading.value = true
    error.value = ''
    success.value = ''

    try {
        // First verify the Turnstile token
        const csrfResponse = await fetch('/api/csrf', {
            method: 'GET',
            credentials: 'same-origin'
        })

        if (!csrfResponse.ok) {
            throw new Error('Failed to get CSRF token')
        }

        const { token } = await csrfResponse.json()

        // If verification successful, submit the form
        const response = await axios.post('/api/contact', {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
            phone: `${values.countryCode}${values.phone}`,
            turnstileToken: turnstileToken.value
        }, {
            headers: {
                'X-CSRF-Token': token
            },
            credentials: 'same-origin'
        })

        if (response.data.message) {
            success.value = 'Message sent successfully!'
            resetForm()
            turnstileToken.value = ''
        } else {
            error.value = response.data.error || 'Failed to send message. Please try again.'
        }
    } catch (err) {
        error.value = err.response?.data?.error || 'An error occurred. Please try again later.'
    } finally {
        loading.value = false
    }
})
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
</style>