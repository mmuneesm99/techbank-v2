<template>
  <div class="image-container" :class="containerClass">
    <!-- Loading Placeholder -->
    <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-[#1A1A1A] rounded-lg">
      <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
    </div>
    
    <!-- Blurred Low Quality Image -->
    <img
      v-if="lowQualitySrc"
      :src="lowQualitySrc"
      :alt="alt"
      class="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
      :class="imageClass"
    />
    
    <!-- Main Image -->
    <img
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :quality="quality"
      :placeholder="placeholder"
      @load="onImageLoad"
      @error="onImageError"
      class="transition-opacity duration-300"
      :class="[
        imageClass,
        { 'opacity-0': isLoading },
        { 'opacity-100': !isLoading }
      ]"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: '100%'
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  quality: {
    type: Number,
    default: 80
  },
  placeholder: {
    type: Boolean,
    default: true
  },
  lowQualitySrc: {
    type: String,
    default: ''
  },
  imageClass: {
    type: String,
    default: 'w-full h-full object-cover'
  },
  containerClass: {
    type: String,
    default: ''
  }
})

const isLoading = ref(true)
const error = ref(null)

const onImageLoad = () => {
  isLoading.value = false
}

const onImageError = (e) => {
  error.value = 'Error loading image'
  isLoading.value = false
  console.error('Image error:', e)
}
</script>

<style scoped>
.image-container {
  /* width: 100%; */
  height: 100%;
  overflow: hidden;
}
</style> 