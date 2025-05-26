<template>
    <section class="relative h-[90vh] max-h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Carousel -->
        <div class="absolute inset-0 z-0">
            <div
                v-for="(image, index) in carouselImages"
                :key="index"
                class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
            >
                <NuxtPicture
                    :src="image"
                    alt="Wedding background"
                    class="w-full h-full object-cover"
                    loading="eager"
                    format="webp"
                />
            </div>
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/40" />
        </div>

        <!-- Content -->
        <div
            v-motion
            class="relative z-10 container mx-auto px-4 text-center text-white"
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
            <!-- Brand Badge -->
            <div
                v-motion
                class="inline-flex items-center px-6 py-3 bg-pink-600 rounded-full text-white font-semibold text-lg mb-8"
                :initial="{ opacity: 0, scale: 0.8 }"
                :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 400 } }"
            >
                iWedding
            </div>

            <!-- Main Headline -->
            <h1
                v-motion
                class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                :initial="{ opacity: 0, y: 30 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 600 } }"
            >
                {{ data.title }}
            </h1>

            <!-- Subtitle -->
            <p
                v-motion
                class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 800 } }"
            >
                {{ data.subtitle }}
            </p>

            <!-- CTA Button -->
            <div
                v-motion
                class="flex justify-center items-center"
                :initial="{ opacity: 0, y: 20 }"
                :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 1000 } }"
            >
                <Button
                    size="lg"
                    class="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    @click="openZaloContact"
                >
                    {{ data.primaryButtonText }}
                </Button>
            </div>
        </div>

        <!-- Floating Elements -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
            <div
                v-motion
                class="animate-bounce cursor-pointer"
                :initial="{ opacity: 0 }"
                :enter="{ opacity: 1, transition: { duration: 800, delay: 1200 } }"
                @click="scrollToIntroduction"
            >
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </div>

        <!-- Decorative Elements -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl" />
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-rose-500/20 rounded-full blur-xl" />
        <div class="absolute top-1/2 right-20 w-16 h-16 bg-pink-400/20 rounded-full blur-lg" />
    </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";
import type { LandingHeroData } from "@/components/wedding/types";

interface Props {
    data: LandingHeroData;
}

defineProps<Props>();

// Carousel images
const carouselImages = [
    "/images/gallery/save-the-date.jpg",
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-10.jpg",
    "/images/gallery/gallery-15.jpg",
];

const currentImageIndex = ref(0);

// Auto-cycle carousel
onMounted(() => {
    const interval = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % carouselImages.length;
    }, 4000); // Change image every 4 seconds

    onUnmounted(() => {
        clearInterval(interval);
    });
});

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
};

const openZaloContact = () => {
    window.open("https://dub.sh/StudyCare-Zalo", "_blank");
};

const scrollToIntroduction = () => scrollToSection("introduction");
</script>
