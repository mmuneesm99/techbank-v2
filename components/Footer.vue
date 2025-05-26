<template>
    <footer class="py-8 relative overflow-hidden bg-[#010101]">
        
        <nuxt-img src="/images/footer-pattern.svg" alt="TechBank Footer" width="100%" height="100%"
            class="w-full absolute h-auto object-contain  bottom-0 shadow-lg" />
        <div class="container relative mx-auto max-w-7xl px-4 py-10">

            <div class="grid md:grid-cols-2 gap-8 ">
                <div class="flex flex-col gap-5 items-start mb-8">
                    <nuxt-img src="/images/logo-footer.svg" alt="TechBank Logo" width="100%" height="100%"
                        class="h-10 mb-4" />
                    <p class="text-white max-w-xs text-xl font-nyx">Relax, we get you and we've got you.</p>
                    <nuxt-link to="/contact" class="text-white mt-4 px-5 py-1 rounded-full ring-1 ring-white">Contact</nuxt-link>
                </div>
                <div>
                    <div class="w-full flex justify-end items-center hidden md:block">
                        <a class="text-white text-right" href="mailto:h@example.com">hr@techbank.com</a>
                    </div>
                    <div class="grid grid-cols-2 gap-8 relative md:mt-8 ">
                        <div class="flex flex-col gap-4 justify-end">
                            <ul class="flex flex-col gap-2">
                                <li v-for="item in navigationItems" :key="item.name">
                                    <nuxt-link :to="item.path" class="text-white hover:text-white">
                                        {{ item.name }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="text-white flex flex-col md:items-end items-left text-left gap-2">
                                <li class="underline">Offices</li>
                                <li>Infopark</li>
                                <li>Kochi - Kerala</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-between flex-col md:divide-y-0 divide-y divide-[#FBFDFF26] md:flex-row items-center text-white">
                <div class=" flex items-center justify-center md:justify-start gap-5 w-full">
                    <a href="https://linkedin.com/company/techbank" target="_blank" aria-label="Visit our LinkedIn page">
                        <Icon name="ph:linkedin-logo" class="text-white text-[100px] w-6 mx-auto" />
                    </a>
                    <a href="https://instagram.com/techbank" target="_blank" aria-label="Visit our Instagram page">
                        <Icon name="ph:instagram-logo" class="text-white text-[100px] w-6 mx-auto" />
                    </a>
                    <a href="https://twitter.com/techbank" target="_blank" aria-label="Visit our Twitter page">
                        <Icon name="hugeicons:new-twitter" class="text-white text-[100px] w-6 mx-auto" />
                    </a>
                    <a href="https://youtube.com/@techbank" target="_blank" aria-label="Visit our YouTube channel">
                        <Icon name="teenyicons:youtube-outline" class="text-white text-[100px] w-6 mx-auto" />
                    </a>
                </div>
                <div class="hidden text-center md:block w-full flex justify-center">
                    <p >&copy; {{ new Date().getFullYear() }} TechBank. All rights reserved.</p>
                </div>
                <div class="flex items-center gap-5 md:justify-end justify-center w-full -mt-5 md:mt-0 py-3 md:py-0">
                    <nuxt-link to="/privacy-policy" class="text-white">Privacy Policy</nuxt-link>
                    <nuxt-link to="/terms-and-conditions" class="text-white">Terms & Conditions</nuxt-link>
                </div>
                <p class="block md:hidden pt-3">&copy; {{ new Date().getFullYear() }} TechBank. All rights reserved.</p>

            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
// Navigation items for regular users
const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Team', path: '/team' },
    { name: 'Career', path: '/careers' },
    { name: 'Contact', path: '/contact' }
]


// Handle logout

</script>