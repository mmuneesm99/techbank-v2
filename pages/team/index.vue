<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px] text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl animate-fade-up">Meet the Team Shaping the
                Future.
            </p>
            <h2 
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider">
                TEAMS
            </h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10">
            <div v-for="(member, index) in team" :key="member.id"
                class="relative overflow-hidden h-fit w-full flex flex-col items-center p-6 animate-fade-up"
                :style="{ animationDelay: `${index * 0.1}s` }">
                <img :src="assetPath('/images/team-card.webp')" alt="TechBank" width="100%" height="100%"
                    class="w-full h-full absolute top-0 left-0" />
                <div class="relative text-center h-full w-full group">
                    <img :src="assetPath(member.photo)" :alt="member.name" class="object-cover mb-2  transform transition-transform duration-300 group-hover:scale-105" />
                    <img :src="assetPath('/images/badge.webp')" alt="TechBank Badge" width="100%" height="100%"
                        class="absolute bottom-[80px] w-[80px] -right-4 -rotate-12 group-hover:rotate-0 transition-all duration-300 hover:scale-110" />
                    <div class="absolute bottom-0 bg-gradient-to-t from-[#000] to-transparent left-0 w-full p-4 transform transition-transform duration-300">
                        <h3 class="text-xl tracking-wider text-white leading-none font-nyx">{{ member.name }}</h3>
                        <p class="text-sm text-[#C0C0C0] font-ninetea">{{ member.designation }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const team = ref([])

onMounted(async () => {
    const res = await fetch(assetPath('/team.json'))
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
