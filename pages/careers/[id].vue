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
      <img src="/images/applymodel.webp" class="w-full h-full absolute top-0 left-0 object-cover" alt="job" />
      <div class="w-full max-w-2xl mx-auto font-ninetea relative bg-transparent">
        <div class="text-[#BB83FF] text-lg font-ninetea mb-1">Ready to Build the Future?</div>
        <div class="text-white font-thin text-2xl font-nyx mb-2 tracking-wider">DROP YOUR DETAILS BELOW.</div>
        <div class="text-center flex gap-5 items-center py-2 rounded-md mb-3">
          <p class="text-sm text-gray-300 font-ninetea">Applying for:</p>
          <p class="text-lg text-white font-ninetea font-semibold tracking-wide">{{ job.title }}</p>
        </div>
        <form @submit.prevent="handleSubmit" class="w-full">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-white text-sm mb-1">First Name *</label>
              <input type="text" v-model="form.firstName" placeholder="Enter Your First Name"
                class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
                :class="{ 'border-red-500': errors.firstName }" />
              <span v-if="errors.firstName" class="text-xs text-red-500 mt-1 block">{{ errors.firstName }}</span>
            </div>
            <div>
              <label class="block text-white text-sm mb-1">Last Name *</label>
              <input type="text" v-model="form.lastName" placeholder="Enter Your Last Name"
                class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
                :class="{ 'border-red-500': errors.lastName }" />
              <span v-if="errors.lastName" class="text-xs text-red-500 mt-1 block">{{ errors.lastName }}</span>
            </div>
            <div>
              <label class="block text-white text-sm mb-1">E Mail *</label>
              <input type="email" v-model="form.email" placeholder="Enter Your Email"
                class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
                :class="{ 'border-red-500': errors.email }" />
              <span v-if="errors.email" class="text-xs text-red-500 mt-1 block">{{ errors.email }}</span>
            </div>
            <div>
              <label class="block text-white text-sm mb-1">Phone Number *</label>
              <div class="flex gap-2 items-center">
                <div class="relative" ref="dropdownRef">
                  <button type="button" @click="isDropdownOpen = !isDropdownOpen"
                    class="px-3 py-2 bg-[#1A1A1A] border border-[#474747] rounded text-white min-w-[90px] flex items-center justify-between focus:outline-none focus:border-[#BB83FF]"
                    :class="{ 'border-red-500': errors.countryCode }">
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
                <input type="tel" v-model="form.phone" placeholder="Enter Your Phone Number"
                  class="flex-1 bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
                  :class="{ 'border-red-500': errors.phone }" />
              </div>
              <span v-if="errors.countryCode" class="text-xs text-red-500 mt-1 block">{{ errors.countryCode }}</span>
              <span v-if="errors.phone" class="text-xs text-red-500 mt-1 block">{{ errors.phone }}</span>
            </div>
            <div>
              <label class="block text-white text-sm mb-1">Current Role</label>
              <input type="text" v-model="form.currentRole" placeholder="Enter Your Current Role"
                class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
                :class="{ 'border-red-500': errors.currentRole }" />
              <span v-if="errors.currentRole" class="text-xs text-red-500 mt-1 block">{{ errors.currentRole }}</span>
            </div>
            <div>
              <label class="block text-white text-sm mb-1">Years of Experience</label>
              <input type="text" v-model="form.experience" placeholder="Enter Years of Experience"
                class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
                :class="{ 'border-red-500': errors.experience }" />
              <span v-if="errors.experience" class="text-xs text-red-500 mt-1 block">{{ errors.experience }}</span>
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-white text-sm mb-1">Additional Information's</label>
            <textarea rows="3" v-model="form.message" placeholder="Enter Your Message"
              class="w-full bg-[#1A1A1A] border border-[#474747] rounded px-3 py-2 text-white focus:outline-none focus:border-[#BB83FF]"
              :class="{ 'border-red-500': errors.message }"></textarea>
            <span v-if="errors.message" class="text-xs text-red-500 mt-1 block">{{ errors.message }}</span>
          </div>
          <div class="mb-4">
            <label class="block text-white text-sm mb-1">Upload Your Resume</label>
            <label for="resume-upload"
              class="block cursor-pointer bg-[#1A1A1A] border border-[#474747] rounded w-full py-6 flex flex-col items-center justify-center text-center relative hover:border-[#BB83FF] transition">
              <Icon name="mdi:upload" class="text-white text-2xl mb-1" />
              <span class="text-white font-ninetea">Upload Your Resume</span>
              <input id="resume-upload" type="file" accept=".pdf" class="hidden"
                @change="handleFileUpload" />
              <span v-if="resumeName" class="block text-xs text-[#BB83FF] mt-2">{{ resumeName }}</span>
            </label>
            <span v-if="errors.resume" class="text-xs text-red-500 mt-1 block">{{ errors.resume }}</span>
            <div class="text-xs text-[#888] px-1 pt-1">Max: 10MB ( PDF only )</div>
          </div>
          <div class="text-xs text-[#888] mb-4">
            The information you submit is processed in accordance with our <a href="#"
              class="underline text-[#BB83FF]">Privacy Policy</a>. By submitting you agree to receive communications from
            TechBank.
          </div>
          <button type="submit"
            class="bg-button-gradient hover:bg-[#8501A6] text-white font-ninetea px-8 py-2 rounded-full flex items-center gap-2 text-base font-semibold shadow w-fit">
            Submit
            <Icon name="mynaui:arrow-long-up-right" class="text-white text-xl" />
          </button>
        </form>
      </div>
    </DrawerModal>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, reactive } from 'vue'
import DrawerModal from '~/components/DrawerModal.vue'

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
const showDrawer = ref(false)
const resumeName = ref('')
const isSubmitting = ref(false)
const submissionStatus = ref(null)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  countryCode: '+91',
  currentRole: '',
  experience: '',
  message: '',
  resume: null
})

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  countryCode: '',
  currentRole: '',
  experience: '',
  message: '',
  resume: ''
})

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
  form.countryCode = country.code
  isDropdownOpen.value = false
}

const handleFileUpload = (event) => {
  const input = event.target
  if (input.files && input.files[0]) {
    const file = input.files[0]
    if (file.size > 10 * 1024 * 1024) {
      errors.resume = 'File size should not exceed 10MB'
      return
    }
    if (file.type !== 'application/pdf') {
      errors.resume = 'Please upload a PDF file'
      return
    }
    form.resume = file
    resumeName.value = file.name
    errors.resume = ''
  }
}

const validateForm = () => {
  let isValid = true
  errors.firstName = !form.firstName ? 'First name is required' : ''
  errors.lastName = !form.lastName ? 'Last name is required' : ''
  errors.email = !form.email ? 'Email is required' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? 'Please enter a valid email' : ''
  errors.phone = !form.phone ? 'Phone number is required' : !/^\d{7,15}$/.test(form.phone) ? 'Enter a valid phone number' : ''
  errors.countryCode = !form.countryCode ? 'Country code is required' : ''
  errors.resume = !form.resume ? 'Resume is required' : ''

  if (errors.firstName || errors.lastName || errors.email || errors.phone || errors.countryCode || errors.resume) {
    isValid = false
  }

  return isValid
}

const handleSubmit = async () => {
  if (!validateForm()) return

  isSubmitting.value = true
  submissionStatus.value = null

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

    const formData = new FormData()
    // Combine first and last name
    formData.append('name', `${form.firstName} ${form.lastName}`)
    formData.append('email', form.email)
    // Combine country code and phone
    formData.append('phone', `${form.countryCode}${form.phone}`)
    formData.append('position', job.value.title)
    formData.append('experience', form.experience)
    formData.append('message', form.message)
    if (form.resume) {
      formData.append('resume', form.resume)
    }

    const response = await fetch('/api/job-application', {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token
      },
      body: formData,
      credentials: 'same-origin'
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to submit application')
    }

    submissionStatus.value = {
      type: 'success',
      message: 'Application submitted successfully!'
    }

    // Reset form
    Object.keys(form).forEach(key => {
      form[key] = key === 'countryCode' ? '+91' : ''
    })
    form.resume = null
    resumeName.value = ''
    Object.keys(errors).forEach(key => {
      errors[key] = ''
    })
  } catch (error) {
    submissionStatus.value = {
      type: 'error',
      message: error.message || 'Failed to submit application. Please try again.'
    }
  } finally {
    isSubmitting.value = false
  }
}

const job = computed(() => {
  return jobs.find(j => j.title.toLowerCase() === route.params.id.toString().toLowerCase()) || jobs[0]
})
</script>