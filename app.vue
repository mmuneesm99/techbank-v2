<template>
  <div>
    <PageLoader v-if="isLandingPage && isInitialLoad" />
    <NuxtLayout>
      <Transition name="fade">
        <NuxtPage :key="route.fullPath" />
      </Transition>
    </NuxtLayout>
  </div>
</template>

<script setup>
const route = useRoute()
const isLandingPage = computed(() => route.path === '/')
const isInitialLoad = ref(true)

// Watch for route changes to disable initial load
watch(() => route.path, () => {
  isInitialLoad.value = false
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
