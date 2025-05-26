<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:px-8">
        <div class="text-center">
            <p class="text-[16px]  text-[#BB83FF] mx-auto font-ninetea text-center max-w-2xl">BUILD THE FUTURE WITH US
            </p>
            <h2 ref="blogsRef" data-final-text="Blogs"
                class="text-[40px] md:text-[86px] scramble-header text-[#FFFFFF] mx-auto -mt-2 font-nyx tracking-wider leading-[102px]">
                Blogs
            </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
            <div class="relative overflow-hidden rounded-lg h-fit w-full shadow-lg" v-for="item in 9" :key="item">
                <img src="/images/blog-bg-pattern.svg" alt="TechBank Logo" width="100%" height="100%"
                    class="w-full h-auto object-cover rounded-[30px] shadow-lg" />
                <div class="absolute h-full inset-0 p-1 z-10 text-white">
                    <img src="/images/blog-sample.webp" alt="TechBank Logo" width="100%" height="100%"
                        class="w-full object-cover rounded-lg" />
                    <div class="flex items-center justify-between relative w-full py-10 px-3">
                        <div class="">
                            <h2 class="text-3xl font-ninetea">Smart AI Chatbot</h2>
                            <p class="text-base mt-2 text-gray-400">Enhance customer engagement with
                                personalized,
                                AI-driven interactions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>