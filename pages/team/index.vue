<template>
    <div class="absolute w-full h-full flex  flex-col gap-2 justify-around bottom-0 ">
            <div class="flex items-center justify-center  h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF] blur-[60px] -rotate-[10deg]">
            </div>
            <div class="flex items-center justify-center h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF] blur-[60px] -rotate-[10deg]">
            </div>
            <div class="flex items-center justify-center h-10 bg-gradient-to-l from-[#3A0696] to-[#C740FF] blur-[60px] -rotate-[10deg]">
            </div>
        </div>
    <div class="max-w-7xl mx-auto relative px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-up">Meet the Team Shaping the
                Future.
            </p>
            <h2 
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider">
                TEAMS
            </h2>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-8 gap-2 py-10">
            <div v-for="(member, index) in team" :key="member.id"
                class="relative overflow-hidden h-fit w-full flex flex-col items-center p-6 animate-fade-up"
                :style="{ animationDelay: `${index * 0.1}s` }">
                <img src="/images/team-card.webp" alt="TechBank" width="100%" height="100%"
                    class="w-full h-full absolute top-0 left-0" />
                <div class="relative text-center h-full w-full group">
                    <img :src="member.photo" :alt="member.name" class="object-cover mb-2  transform transition-transform duration-300 group-hover:scale-105" />
                    <img src="/images/badge.webp" alt="TechBank Badge" width="100%" height="100%"
                        class="absolute md:bottom-[80px] bottom-[50px] md:w-[80px] w-[50px] -right-4 -rotate-12 group-hover:rotate-0 transition-all duration-300 hover:scale-110" />
                    <div class="absolute bottom-0 bg-gradient-to-t from-[#000] to-transparent left-0 w-full md:px-4 transform transition-transform duration-300">
                        <h3 class="md:text-xl text-[12px] md:tracking-wider text-white leading-none font-nyx">{{ member.name }}</h3>
                        <p class="md:text-sm text-[9px] text-[#C0C0C0] font-ninetea">{{ member.designation }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div
            class="md:bg-gradient-to-r md:from-[#E476FF82] md:rounded-2xl md:via-[#DD56FF] md:to-[#FFFFFF] md:p-[1px] md:ml-10 mt-20 relative animate-fade-up" style="animation-delay: 0.4s">
            <div
                class="bg-[#010101] flex flex-col md:flex-row md:items-center rounded-2xl relative shadow-lg md:p-4 gap-5 md:gap-0 hover:shadow-[#BB83FF]/20 transition-all duration-300">
                <div class="md:absolute md:-left-10">
                    <nuxt-img src="/images/team-footer-badge.webp"
                        class="md:w-[130px]  -rotate-12 hover:rotate-12 transition-all duration-1000" alt="joinwithus" />
                </div>
                <div class="flex flex-col gap-2 md:pl-20">
                    <span class="text-white text-lg md:text-xl font-ninetea">BUILD THE FUTURE WITH US</span>
                    <p class="text-sm font-ninetea text-[#B3B3B3]">At TechBank, we believe in crafting tech that
                        disrupts.
                        From blockchain protocols to immersive virtual experiences, we're pushing the boundaries of
                        what's possible—and we want bold thinkers, doers, and dreamers to join us.</p>
                </div>
                <div>
                    <nuxt-link to="/careers"
                        class="bg-button-gradient font-ninetea text-white pl-6 pr-2 py-2 whitespace-nowrap flex items-center gap-2 rounded-full hover:bg-gray-700 transform hover:scale-105 transition-all duration-500">
                        Apply Now
                        <span class="bg-white h-8 w-8 flex items-center justify-center ml-0 rounded-full">
                            <Icon name="mynaui:arrow-long-up-right" class="text-[#8501A6] font-bold" />
                        </span>
                    </nuxt-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const team = ref([])

onMounted(async () => {
    const res = await fetch('/team.json')
    team.value = await res.json()
})
</script>

<style scoped>
.animate-fade-in {
    animation: fadeIn 0.8s ease-out;
}

.animate-fade-up {
    animation: fadeUp 0.8s ease-out forwards;
    opacity: 0;
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>