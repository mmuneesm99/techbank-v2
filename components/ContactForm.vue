<template>
    <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-200">Name</label>
                <input type="text" id="name" v-model="form.name" required
                    class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500">
                <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-200">Email</label>
                <input type="email" id="email" v-model="form.email" required
                    class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500">
                <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
            </div>
        </div>
        <div>
            <label for="phone" class="block text-sm font-medium text-gray-200">Phone (optional)</label>
            <input type="tel" id="phone" v-model="form.phone"
                class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500">
        </div>
        <div>
            <label for="message" class="block text-sm font-medium text-gray-200">Message</label>
            <textarea id="message" v-model="form.message" rows="4" required
                class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"></textarea>
            <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
        </div>
        <div>
            <button type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                :disabled="isSubmitting">
                <span v-if="isSubmitting">Sending...</span>
                <span v-else>Send Message</span>
            </button>
        </div>
        <div v-if="submitStatus" :class="[
            'p-4 rounded-md',
            submitStatus.type === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
        ]">
            {{ submitStatus.message }}
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const errors = reactive({
    name: '',
    email: '',
    message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

const validateForm = () => {
    let isValid = true
    errors.name = ''
    errors.email = ''
    errors.message = ''

    if (!form.name.trim()) {
        errors.name = 'Name is required'
        isValid = false
    }

    if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
    }

    if (!form.message.trim()) {
        errors.message = 'Message is required'
        isValid = false
    }

    return isValid
}

const handleSubmit = async () => {
    if (!validateForm()) return

    isSubmitting.value = true
    submitStatus.value = null

    try {
        const response = await $fetch('/api/contact', {
            method: 'POST',
            body: form
        })

        submitStatus.value = {
            type: 'success',
            message: 'Message sent successfully! We will get back to you soon.'
        }

        // Reset form
        form.name = ''
        form.email = ''
        form.phone = ''
        form.message = ''
    } catch (error: any) {
        submitStatus.value = {
            type: 'error',
            message: error.message || 'Failed to send message. Please try again.'
        }
    } finally {
        isSubmitting.value = false
    }
}
</script> 