<template>
    <WebSection as="header" class="sticky top-0 z-50 bg-white shadow-sm">
        <WebContainer class="flex items-center justify-between py-4">
            <!-- Logo -->
            <WebLogo :as="NuxtLink" to="/" />

            <!-- Navigation Menu (Desktop) -->
            <nav class="hidden lg:block">
                <ul class="flex items-center justify-center">
                    <li v-for="(navItem, i) in data.navMenu" :key="i">
                        <NuxtLink
                            class="px-4 py-2 text-gray-700 transition-colors duration-200 hover:text-pink-500"
                            v-bind="reactiveOmit(navItem, 'text')"
                        >
                            {{ navItem.text }}
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <!-- Desktop Button -->
            <HomeButton
                v-bind="data.ctaButton"
                class="hidden px-4 py-2 text-base font-normal rounded-md lg:inline-flex"
            />

            <!-- Mobile Menu Button -->
            <button
                class="p-[0.375rem] text-gray-700 transition-colors duration-500 rounded-md lg:hidden hover:text-pink-500 hover:bg-pink-100"
                aria-label="Mở menu"
                @click="toggleMobileMenu"
            >
                <Menu />
            </button>
        </WebContainer>

        <!-- Mobile Off-Canvas Sidebar -->
        <Transition :css="false" @leave="mobileMenuLeave">
            <div v-if="isMobileMenuOpen" class="fixed inset-0 z-50 lg:hidden">
                <!-- Overlay -->
                <div
                    v-motion-w-fade="'mobileMenuOverlay'"
                    :leave="{
                        opacity: 0,
                        transition: defaultTransition,
                    }"
                    class="fixed inset-0 bg-black bg-opacity-50"
                    aria-hidden="true"
                    @click="toggleMobileMenu"
                />

                <!-- Sidebar -->
                <div
                    v-motion-w-fade-left="'mobileMenu'"
                    :leave="{
                        x: 100,
                        opacity: 0,
                        transition: defaultTransition,
                    }"
                    :delay="100"
                    class="fixed top-0 right-0 flex flex-col w-full bg-white shadow-xl h-dvh max-w-80"
                >
                    <!-- Header -->
                    <div class="flex items-center justify-between p-6 border-b border-gray-200">
                        <WebLogo />

                        <button
                            class="p-2 text-gray-700 transition-colors duration-500 rounded-md hover:text-pink-500 hover:bg-pink-100"
                            aria-label="Đóng menu"
                            @click="toggleMobileMenu"
                        >
                            <X />
                        </button>
                    </div>

                    <!-- Navigation -->
                    <nav class="overflow-auto h-[calc(100dvh-2*88.67px)]">
                        <ul class="py-4">
                            <li v-for="(navItem, i) in data.navMenu" :key="i">
                                <NuxtLink
                                    class="block px-6 py-2 text-lg text-gray-700 transition-colors duration-500 hover:text-pink-500"
                                    v-bind="reactiveOmit(navItem, 'text')"
                                    @click="toggleMobileMenu"
                                >
                                    {{ navItem.text }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>

                    <!-- Button Group -->
                    <div class="p-6 space-y-3 border-t border-gray-200">
                        <HomeButton v-bind="data.ctaButton" class="w-full px-4 py-2 text-base font-normal rounded-md" />
                    </div>
                </div>
            </div>
        </Transition>
    </WebSection>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import { Menu, X } from "lucide-vue-next";
import { reactiveOmit } from "@vueuse/core";
import { defaultTransition } from "@/utils";
import type { LandingHeaderData } from "@/components/wedding/types";

interface Props {
    data: LandingHeaderData;
}

const { data } = defineProps<Props>();

const isMobileMenuOpen = ref(false);
const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const motions = useMotions();
const mobileMenuLeave = (el: Element, done: () => void) => {
    motions.mobileMenuOverlay.leave(done);
    motions.mobileMenu.leave(done);
};

// Close mobile menu when clicking outside
onMounted(() => {
    const handleClickOutside = (event: Event) => {
        const target = event.target as Element;
        if (!target.closest("header") && !target.closest(".fixed.inset-0") && isMobileMenuOpen.value) {
            toggleMobileMenu();
        }
    };

    document.addEventListener("click", handleClickOutside);

    onUnmounted(() => {
        document.removeEventListener("click", handleClickOutside);
    });
});
</script>
