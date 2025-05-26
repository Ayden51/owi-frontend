<template>
    <header class="sticky top-0 z-50 bg-white shadow-sm">
        <div class="container px-4 py-4 mx-auto">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <div class="flex items-center space-x-2">
                    <NuxtLink to="/" class="flex items-center space-x-2">
                        <div class="flex items-center justify-center w-8 h-8 bg-pink-600 rounded-full">
                            <span class="text-sm font-bold text-white">eW</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-lg font-bold leading-none text-pink-600">E-Wedding</span>
                            <span class="text-xs leading-none text-gray-500">by CTPG</span>
                        </div>
                    </NuxtLink>
                </div>

                <!-- Navigation Menu (Desktop) -->
                <nav class="items-center justify-center hidden space-x-8 md:flex flex-1">
                    <NuxtLink
                        to="#introduction"
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="smoothScroll('#introduction')"
                    >
                        Tính năng
                    </NuxtLink>
                    <NuxtLink
                        to="#showcase"
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="smoothScroll('#showcase')"
                    >
                        Mẫu thiệp
                    </NuxtLink>
                    <NuxtLink
                        to="#benefits"
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="smoothScroll('#benefits')"
                    >
                        Ưu điểm
                    </NuxtLink>
                    <NuxtLink
                        to="#faq"
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="smoothScroll('#faq')"
                    >
                        FAQ
                    </NuxtLink>
                    <NuxtLink
                        to="#contact"
                        class="text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="smoothScroll('#contact')"
                    >
                        Liên hệ
                    </NuxtLink>
                </nav>

                <!-- Button Group & Mobile Menu -->
                <div class="flex items-center space-x-4">
                    <!-- Desktop Button Group -->
                    <div class="hidden md:flex items-center space-x-3">
                        <Button variant="outline" class="text-pink-600 border-pink-600 hover:bg-pink-50">
                            Đăng nhập
                        </Button>
                        <Button class="bg-pink-600 hover:bg-pink-700 text-white" @click="openZaloContact">
                            Liên hệ
                        </Button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <button class="p-2 text-gray-700 md:hidden hover:text-pink-600" @click="toggleMobileMenu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Off-Canvas Sidebar -->
        <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 md:hidden">
            <!-- Overlay -->
            <div class="fixed inset-0 bg-black bg-opacity-50" @click="closeMobileMenu"/>

            <!-- Sidebar -->
            <div
                class="fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out"
            >
                <!-- Header -->
                <div class="flex items-center justify-between p-6 border-b border-gray-200">
                    <div class="flex items-center space-x-2">
                        <div class="flex items-center justify-center w-8 h-8 bg-pink-600 rounded-full">
                            <span class="text-sm font-bold text-white">eW</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-lg font-bold leading-none text-pink-600">E-Wedding</span>
                            <span class="text-xs leading-none text-gray-500">by CTPG</span>
                        </div>
                    </div>
                    <button class="p-2 text-gray-500 hover:text-gray-700" @click="closeMobileMenu">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <!-- Navigation -->
                <nav class="flex flex-col p-6 space-y-6">
                    <NuxtLink
                        to="#introduction"
                        class="text-lg text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="handleMobileNavClick('#introduction')"
                    >
                        Tính năng
                    </NuxtLink>
                    <NuxtLink
                        to="#showcase"
                        class="text-lg text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="handleMobileNavClick('#showcase')"
                    >
                        Mẫu thiệp
                    </NuxtLink>
                    <NuxtLink
                        to="#benefits"
                        class="text-lg text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="handleMobileNavClick('#benefits')"
                    >
                        Ưu điểm
                    </NuxtLink>
                    <NuxtLink
                        to="#faq"
                        class="text-lg text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="handleMobileNavClick('#faq')"
                    >
                        FAQ
                    </NuxtLink>
                    <NuxtLink
                        to="#contact"
                        class="text-lg text-gray-700 transition-colors duration-200 hover:text-pink-600"
                        @click="handleMobileNavClick('#contact')"
                    >
                        Liên hệ
                    </NuxtLink>
                </nav>

                <!-- Button Group -->
                <div class="absolute bottom-6 left-6 right-6 space-y-3">
                    <Button variant="outline" class="w-full text-pink-600 border-pink-600 hover:bg-pink-50">
                        Đăng nhập
                    </Button>
                    <Button class="w-full bg-pink-600 hover:bg-pink-700 text-white" @click="handleMobileContact">
                        Liên hệ
                    </Button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};

const smoothScroll = (target: string) => {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const openZaloContact = () => {
    window.open("https://dub.sh/StudyCare-Zalo", "_blank");
};

const handleMobileNavClick = (target: string) => {
    smoothScroll(target);
    closeMobileMenu();
};

const handleMobileContact = () => {
    openZaloContact();
    closeMobileMenu();
};

// Close mobile menu when clicking outside
onMounted(() => {
    const handleClickOutside = (event: Event) => {
        const target = event.target as Element;
        if (!target.closest("header") && !target.closest(".fixed.inset-0")) {
            isMobileMenuOpen.value = false;
        }
    };

    document.addEventListener("click", handleClickOutside);

    onUnmounted(() => {
        document.removeEventListener("click", handleClickOutside);
    });
});
</script>
