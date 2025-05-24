<template>
    <header class="sticky top-0 z-50 bg-white shadow-sm">
        <div class="container px-4 py-4 mx-auto">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center space-x-2">
                    <NuxtLink to="/" class="flex items-center space-x-2">
                        <div class="flex items-center justify-center w-8 h-8 bg-pink-600 rounded-full">
                            <span class="text-sm font-bold text-white">iW</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-lg font-bold leading-none text-pink-600">iWedding</span>
                            <span class="text-xs leading-none text-gray-500">by CTPG</span>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Navigation Menu (Desktop) -->
                <nav class="items-center hidden space-x-8 md:flex">
                    <NuxtLink 
                        to="#features" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                    >
                        Tính năng
                    </NuxtLink>
                    <NuxtLink 
                        to="#showcase" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                    >
                        Mẫu thiệp
                    </NuxtLink>
                    <NuxtLink 
                        to="#benefits" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                    >
                        Ưu điểm
                    </NuxtLink>
                    <NuxtLink 
                        to="#faq" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                    >
                        FAQ
                    </NuxtLink>
                    <NuxtLink 
                        to="#contact" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                    >
                        Liên hệ
                    </NuxtLink>
                </nav>

                <!-- Login Button & Mobile Menu -->
                <div class="flex items-center space-x-4">
                    <Button 
                        variant="outline" 
                        class="text-pink-600 border-pink-600 hover:bg-pink-50"
                    >
                        Đăng nhập
                    </Button>
                    
                    <!-- Mobile Menu Button -->
                    <button 
                        class="p-2 text-gray-700 md:hidden hover:text-pink-600"
                        @click="toggleMobileMenu"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Menu -->
            <div v-if="isMobileMenuOpen" class="pb-4 mt-4 border-t border-gray-200 md:hidden">
                <nav class="flex flex-col pt-4 space-y-4">
                    <NuxtLink 
                        to="#features" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="closeMobileMenu"
                    >
                        Tính năng
                    </NuxtLink>
                    <NuxtLink 
                        to="#showcase" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="closeMobileMenu"
                    >
                        Mẫu thiệp
                    </NuxtLink>
                    <NuxtLink 
                        to="#benefits" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="closeMobileMenu"
                    >
                        Ưu điểm
                    </NuxtLink>
                    <NuxtLink 
                        to="#faq" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="closeMobileMenu"
                    >
                        FAQ
                    </NuxtLink>
                    <NuxtLink 
                        to="#contact" 
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="closeMobileMenu"
                    >
                        Liên hệ
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}

// Close mobile menu when clicking outside
onMounted(() => {
    const handleClickOutside = (event: Event) => {
        const target = event.target as Element
        if (!target.closest('header')) {
            isMobileMenuOpen.value = false
        }
    }
    
    document.addEventListener('click', handleClickOutside)
    
    onUnmounted(() => {
        document.removeEventListener('click', handleClickOutside)
    })
})
</script>
