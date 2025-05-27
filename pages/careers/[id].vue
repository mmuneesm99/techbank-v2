<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
    <div class="mb-8 flex items-center font-ninetea gap-2">
      <NuxtLink to="/careers"
        class="flex items-center gap-2 text-xs text-white bg-[#232323] px-4 py-2 rounded-full font-ninetea hover:bg-[#1A1A1A] transition shadow">
        <Icon name="mdi:arrow-left" class="text-lg" />
        Back
      </NuxtLink>
    </div>
    <div class="max-w-4xl mx-auto">
      <div>
        <span class="text-[#888] text-xs">HOME / </span>
        <span class="text-xs text-[#888] uppercase tracking-wider">Career</span>
        <span class="text-[#888] text-xs"> / </span>
        <span class="text-xs text-white uppercase tracking-wider">{{ job.title }}</span>
      </div>
      <div class="flex flex-col gap-5 mb-6 mt-5">
        <h1 class="text-2xl md:text-3xl font-ninetea text-white uppercase tracking-wide">{{ job.title }}</h1>
        <div class="flex gap-2">
          <button
            class="bg-transparent border border-white text-white px-4 py-2 rounded-full flex items-center gap-2 font-ninetea text-xs hover:bg-[#1A1A1A] transition shadow">
            <Icon name="pixel:share" class="text-lg" />
            Share
          </button>
          <button
            class="bg-button-gradient text-white px-8 py-2 rounded-full flex items-center gap-2 font-ninetea text-base font-semibold shadow"
            @click="showDrawer = true">
            Apply
            <Icon name="pixelarticons:arrow-right" class="text-white text-xl -rotate-45" />
          </button>
        </div>
      </div>
      <div class=" rounded-xl mb-6">
        <div class="flex items-center gap-2 mb-4">
          <Icon name="pixel:info-circle" class="text-white" />
          <h2 class="text-white font-ninetea text-xl tracking-wide">ABOUT</h2>
        </div>
        <div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]"></div>
        <div class="flex flex-wrap gap-2 mt-5 mb-4">
          <span class="flex items-center gap-1 bg-[#120033] text-white text-xs px-3 py-1 rounded-full font-ninetea">
            <Icon name="mingcute:flash-fill" class="text-white text-base" /> {{ job.experience }}+ Years Experience
          </span>
          <span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea">
            <Icon name="mdi:map-marker" class="text-white text-base" /> {{ job.location }}
          </span>
          <span class="flex items-center gap-1 bg-[#232323] text-white text-xs px-3 py-1 rounded-full font-ninetea">
            <Icon name="mdi:clock-outline" class="text-white text-base" /> {{ job.time }}
          </span>
        </div>
        <p class="text-[#C0C0C0] font-ninetea text-sm">{{ job.description }}</p>
      </div>
      <div class="">
        <div class="flex items-center gap-2 mb-4">
          <Icon name="pixelarticons:bullseye-arrow" class="text-white" />
          <h2 class="text-white font-ninetea text-xl tracking-wide">REQUIREMENTS</h2>
        </div>
        <div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]"></div>
        <ul class="text-[#C0C0C0] font-ninetea text-base space-y-2 mt-5">
          <li v-for="(item, idx) in job.requirements" :key="idx" class="flex items-start gap-2">
            <Icon name="pixelarticons:sun" class="text-white text-base mt-0.5" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
      <div v-if="job.responsibilities.length > 0" class="">
        <div class="flex items-center gap-2 mb-4 mt-5">
          <Icon name="pixelarticons:bullseye-arrow" class="text-white" />
          <h2 class="text-white font-ninetea uppercase text-xl tracking-wide">responsibilities</h2>
        </div>
        <div class="h-[1px] w-full max-w-2xl bg-gradient-to-r from-[#D9D9D9] to-[#73737300]"></div>
        <ul class="text-[#C0C0C0] font-ninetea text-base space-y-2 mt-5">
          <li v-for="(item, idx) in job.responsibilities" :key="idx" class="flex items-start gap-2">
            <Icon name="pixelarticons:sun" class="text-white text-base mt-0.5" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
    <DrawerModal v-model="showDrawer">
      <img loading="lazy" src="/images/applymodel.webp" class="w-full h-full absolute top-0 left-0 object-cover" alt="job" />
      <form class="w-full max-w-2xl mx-auto font-ninetea relative bg-transparent" @submit.prevent="submitApplication">
        <div class="text-[#BB83FF] text-lg font-ninetea mb-1">Ready to Build the Future?</div>
        <div class="text-white font-thin text-2xl font-nyx mb-6 tracking-wider">DROP YOUR DETAILS BELOW.</div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-white text-sm mb-1">First Name *</label>
            <input type="text" v-model="firstName" @blur="firstNameBlur" placeholder="Enter Your First Name"
              class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
              :class="{ 'border-red-500': firstNameError }" />
            <span v-if="firstNameError" class="text-xs text-red-500 mt-1 block">{{ firstNameError }}</span>
          </div>
          <div>
            <label class="block text-white text-sm mb-1">Last Name *</label>
            <input type="text" v-model="lastName" @blur="lastNameBlur" placeholder="Enter Your Last Name"
              class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
              :class="{ 'border-red-500': lastNameError }" />
            <span v-if="lastNameError" class="text-xs text-red-500 mt-1 block">{{ lastNameError }}</span>
          </div>
          <div>
            <label class="block text-white text-sm mb-1">E Mail *</label>
            <input type="email" v-model="email" @blur="emailBlur" placeholder="Enter Your Email"
              class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
              :class="{ 'border-red-500': emailError }" />
            <span v-if="emailError" class="text-xs text-red-500 mt-1 block">{{ emailError }}</span>
          </div>
          <div>
            <label class="block text-white text-sm mb-1">Phone Number *</label>
            <div class="flex gap-2 items-center">
              <div class="relative" ref="dropdownRef">
                <button type="button" @click="isDropdownOpen = !isDropdownOpen" @blur="countryCodeBlur"
                  class="px-3 py-2 bg-[#1A1A1A] border border-[#474747] rounded text-white min-w-[90px] flex items-center justify-between focus:outline-none focus:border-[#BB83FF]"
                  :class="{ 'border-red-500': countryCodeError }">
                  <div class="flex items-center gap-2">
                    <Icon :name="`flagpack:${selectedCountry.flag}`" class="w-5 h-5" />
                    <span>{{ selectedCountry.code }}</span>
                  </div>
                  <Icon name="heroicons:chevron-down" class="w-4 h-4 transition-transform duration-200"
                    :class="{ 'rotate-180': isDropdownOpen }" />
                </button>
                <Transition enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0">
                  <div v-if="isDropdownOpen"
                    class="absolute z-10 mt-1 w-full bg-[#1A1A1A] rounded-lg shadow-lg border border-[#3B2A5A] overflow-hidden">
                    <div class="py-1 max-h-60 overflow-auto">
                      <button v-for="country in countries" :key="country.code" @mousedown="selectCountry(country)"
                        class="w-full px-4 py-2 text-left text-white hover:bg-[#3B2A5A] flex items-center gap-2 transition-colors duration-150"
                        :class="{ 'bg-[#3B2A5A]': country.code === selectedCountry.code }">
                        <Icon :name="`flagpack:${country.flag}`" class="w-5 h-5" />
                        <span>{{ country.code }}</span>
                      </button>
                    </div>
                  </div>
                </Transition>
              </div>
              <input type="tel" v-model="phone" @blur="phoneBlur" placeholder="Enter Phone Number"
                class="flex-1 bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
                :class="{ 'border-red-500': phoneError }" />
            </div>
            <span v-if="countryCodeError" class="text-xs text-red-500 mt-1 block">{{ countryCodeError }}</span>
            <span v-if="phoneError" class="text-xs text-red-500 mt-1 block">{{ phoneError }}</span>
          </div>
          <div>
            <label class="block text-white text-sm mb-1">Current Role</label>
            <input type="text" v-model="currentRole" @blur="currentRoleBlur" placeholder="Enter Your Current Role"
              class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
              :class="{ 'border-red-500': currentRoleError }" />
            <span v-if="currentRoleError" class="text-xs text-red-500 mt-1 block">{{ currentRoleError }}</span>
          </div>
          <div>
            <label class="block text-white text-sm mb-1">Years of Experience</label>
            <input type="text" v-model="experience" @blur="experienceBlur" placeholder="Enter Years of Experience"
              class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
              :class="{ 'border-red-500': experienceError }" />
            <span v-if="experienceError" class="text-xs text-red-500 mt-1 block">{{ experienceError }}</span>
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm mb-1">Additional Information's</label>
          <textarea rows="3" v-model="message" @blur="messageBlur" placeholder="Enter Your Message"
            class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
            :class="{ 'border-red-500': messageError }"></textarea>
          <span v-if="messageError" class="text-xs text-red-500 mt-1 block">{{ messageError }}</span>
        </div>
        <div class="mb-4">
          <label class="block text-white text-sm mb-1">Upload Your Resume</label>
          <label for="resume-upload"
            class="block cursor-pointer bg-[#1A1A1A] border border-[#474747] rounded w-full py-6 flex flex-col items-center justify-center text-center relative hover:border-[#BB83FF] transition">
            <Icon name="mdi:upload" class="text-white text-2xl mb-1" />
            <span class="text-white font-ninetea">Upload Your Resume</span>
            <input id="resume-upload" type="file" accept=".pdf,.doc,.docx,.png,.jpeg,.jpg" class="hidden"
              @change="onFileChange" />
            <span v-if="resumeName" class="block text-xs text-[#BB83FF] mt-2">{{ resumeName }}</span>
          </label>
          <span v-if="resumeError" class="text-xs text-red-500 mt-1 block">{{ resumeError }}</span>
          <div class="text-xs text-[#888] px-1 pt-1">Max: 10MB ( Type : pdf, doc, png, jpeg, docx )</div>
        </div>
        <div class="text-xs text-[#888] mb-4">
          The information you submit is processed in accordance with our <nuxt-link to="/privacy-policy"
            class="underline text-[#BB83FF]">Privacy Policy</nuxt-link> and By submitting you agree to receive communications from
          TechBank.
        </div>
        <div class="flex mb-4">
          <NuxtTurnstile v-model="turnstileToken" @verify="onVerify" @error="onError" @expire="onExpire" />
        </div>
        <div class="flex flex-col sm:flex-row items-center gap-4">
          <button type="submit"
            class="bg-button-gradient hover:bg-[#8501A6] text-white font-ninetea px-8 py-2 rounded-full flex items-center gap-2 text-base font-semibold shadow w-full sm:w-fit"
            :disabled="loading || !turnstileToken">
            <span v-if="loading">Sending...</span>
            <span v-else>Submit</span>
            <Icon v-if="!loading" name="pixelarticons:arrow-right" class="text-white text-xl -rotate-45" />
          </button>
          <div v-if="success" class="text-green-400 text-sm text-center sm:text-left">
            {{ success }}
          </div>
          <div v-if="error" class="text-red-400 text-sm text-center sm:text-left">
            {{ error }}
          </div>
        </div>
      </form>
    </DrawerModal>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import DrawerModal from '~/components/DrawerModal.vue'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import axios from 'axios'

const jobs = [
  {
    title: "Blockchain Lead",
    openings: "1",
    experience: '5',
    location: "Kochi",
    time: "Full Time",
    isNew: true,
    description: "We're on the hunt for a Blockchain Lead Developer who's ready to push boundaries! 🔗🚀 If you're all about building cutting-edge decentralized solutions and want to be part of an innovative, fun team, we'd love to hear from you. Hit us up!",
    responsibilities: [
    ],
    requirements: [
      "Experience : 5+ years in Blockchain and Node.js development.",
      "Required Skills : Web3, Solidity, Node.js, EVM-based chains.",
      "Knowledge in : React / Vue, Golang.",
      "Experience with DeFi projects - Uniswap Protocols."
    ]
  },
  {
    title: "Content Writer",
    openings: "1",
    experience: '3',
    location: "Kochi",
    time: "Full Time",
    isNew: true,
    description: "We're looking for a Content Writer who can craft engaging and high-quality content! ✍️✨ If you have a knack for research, creating compelling articles, scripts, and social media posts—and anchoring skills as a bonus—we want you on our team! 🚀 Hit us up!",
    responsibilities: [
    ],
    requirements: [
      "Write engaging and high-quality content.",
      "Research and create compelling articles, scripts, and social media posts.",
      "Knowledge of anchoring skills is an added advantage.",
    ]
  },
  {
    title: "Content Creator",
    openings: "1",
    experience: '3',
    location: "Kochi",
    time: "Full Time",
    isNew: true,
    description: "We're on the lookout for a Content Creator & Presenter who can plan, script, and deliver high-quality videos! 🎥✨ If you're confident on camera and can present fluently in English & Malayalam, we want you on our team. 🚀 Let's create something amazing—hit us up!",
    responsibilities: [
    ],
    requirements: [
      "Plan, Script, Present high quality videos.",
      "Confidently Present on camera.",
      "Handle English & Malayalam Presentation Videos.",
    ]
  },
  {
    title: "Jr. Graphic Designer",
    openings: "1",
    experience: '0-2',
    location: "Kochi",
    time: "Full Time",
    isNew: true,
    description: "We're on the lookout for a Content Creator & Presenter who can plan, script, and deliver high-quality videos! 🎥✨ If you're confident on camera and can present fluently in English & Malayalam, we want you on our team. 🚀 Let's create something amazing—hit us up!",
    responsibilities: [
    ],
    requirements: [
      "Proficiency in Adobe Photoshop, Illustrator, and basic knowledge of After Effects or Premiere Pro is a plus.",
      "Basic understanding of design principles, color theory, and typography.",
      "Ability to take direction and work collaboratively in a fast-paced environment.",
      "Strong attention to detail and creativity.",
      "Portfolio showcasing previous work (even academic or freelance projects).",
    ]
  }
]

const route = useRoute()
const job = jobs[parseInt(route.params.id, 10) - 1]

const showDrawer = ref(false)
const resumeName = ref('')
const resumeFile = ref(null)
const loading = ref(false)
const error = ref('')
const success = ref('')
const schema = yup.object({
  firstName: yup.string().required('First name is required').matches(/^[A-Za-z\s]+$/, 'Only alphabets allowed'),
  lastName: yup.string().required('Last name is required').matches(/^[A-Za-z\s]+$/, 'Only alphabets allowed'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  countryCode: yup.string().required('Country code is required'),
  phone: yup.string().required('Phone number is required').matches(/^\d{7,15}$/, 'Enter a valid phone number'),
  currentRole: yup.string(),
  experience: yup.string(),
  message: yup.string(),
  resume: yup.mixed().required('Resume is required').test('fileSize', 'File too large', value => !value || (value && value.size <= 10 * 1024 * 1024)).test('fileType', 'Unsupported file type', value => !value || (value && [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'image/png',
    'image/jpeg'
  ].includes(value.type)))
})

const { handleSubmit, errors, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    currentRole: '',
    experience: '',
    message: '',
    resume: null
  }
})

const { value: firstName, errorMessage: firstNameError, handleBlur: firstNameBlur } = useField('firstName')
const { value: lastName, errorMessage: lastNameError, handleBlur: lastNameBlur } = useField('lastName')
const { value: email, errorMessage: emailError, handleBlur: emailBlur } = useField('email')
const { value: countryCode, errorMessage: countryCodeError, handleBlur: countryCodeBlur } = useField('countryCode')
const { value: phone, errorMessage: phoneError, handleBlur: phoneBlur } = useField('phone')
const { value: currentRole, errorMessage: currentRoleError, handleBlur: currentRoleBlur } = useField('currentRole')
const { value: experience, errorMessage: experienceError, handleBlur: experienceBlur } = useField('experience')
const { value: message, errorMessage: messageError, handleBlur: messageBlur } = useField('message')
const { value: resume, errorMessage: resumeError } = useField('resume')

const onFileChange = (e) => {
  const file = e.target.files[0]
  resumeName.value = file ? file.name : ''
  resumeFile.value = file
  resume.value = file
}

const countries = [
  { code: '+91', flag: 'in', name: 'India' },
  { code: '+1', flag: 'us', name: 'United States' },
  { code: '+44', flag: 'gb', name: 'United Kingdom' }
]

const dropdownRef = ref(null)
const isDropdownOpen = ref(false)
const selectedCountry = ref(countries[0])

const selectCountry = (country) => {
  selectedCountry.value = country
  countryCode.value = country.code
  isDropdownOpen.value = false
}

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

const submitApplication = async () => {
  if (!turnstileToken.value) {
    submissionStatus.value = { type: 'error', message: 'Please complete the Turnstile verification.' };
    return
  }
  error.value = ''
  success.value = ''
  loading.value = true

  const formData = new FormData()
  formData.append('name', `${firstName.value} ${lastName.value}`)
  formData.append('email', email.value)
  formData.append('phone', `${countryCode.value}${phone.value}`)
  formData.append('currentRole', currentRole.value)
  formData.append('experience', experience.value)
  formData.append('message', message.value)
  formData.append('position', job.title)
  formData.append('resume', resumeFile.value)
  formData.append('turnstileToken', turnstileToken.value)

  try {
    const csrfResponse = await fetch('/api/csrf', {
      method: 'GET',
      credentials: 'same-origin'
    })
    if (!csrfResponse.ok) {
      throw new Error('Failed to get CSRF token')
    }
    const { token } = await csrfResponse.json()

    const response = await axios.post('/api/job-application', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'X-CSRF-Token': token // Include CSRF token in the request headers
      },
      credentials: 'same-origin'
    })

    if (response.data.success) {
      success.value = 'Application submitted successfully! Closing form...'
      setTimeout(() => {
        resetForm()
        turnstileToken.value = '' // Reset Turnstile token
        resumeName.value = '' // Clear resume name display
        showDrawer.value = false
        success.value = '' // Clear success message after closing
      }, 2500) // Close after 2.5 seconds
    } else {
      error.value = response.data.error || 'Failed to submit application. Please try again.'
    }
  } catch (err) {
    error.value = err.response?.data?.error || 'An error occurred. Please try again later.'
  } finally {
    loading.value = false
  }
}
</script>