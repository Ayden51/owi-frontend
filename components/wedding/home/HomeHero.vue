<template>
    <WebSection class="relative flex items-center justify-center overflow-hidden h-[calc(100dvh-68px)] max-h-[56rem]">
        <!-- Background Carousel -->
        <div class="absolute inset-0 z-0">
            <NuxtPicture
                v-for="(image, index) in data.carouselImages"
                :key="index"
                class="absolute inset-0 transition-opacity duration-500 ease-in-out"
                :class="{ 'opacity-100': currentImageIndex === index, 'opacity-0': currentImageIndex !== index }"
                loading="eager"
                :preload="index === 0"
                :img-attrs="{ class: 'w-full h-full object-cover' }"
                v-bind="reactiveOmit(image, 'width', 'height', 'class', 'imgAttrs')"
            />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/60" />
        </div>

        <!-- Content -->
        <WebContainer class="relative z-10 flex flex-col items-center text-center text-white">
            <!-- Main Headline -->
            <h1
                v-motion-w-fade-up-once
                class="mb-6 font-bold uppercase text-4xl/tight md:text-6xl/tight lg:text-7xl/tight"
                :delay="400"
            >
                {{ data.title }}
            </h1>

            <!-- Brand Badge -->
            <p
                v-motion-w-pop-once
                class="px-6 py-2 mb-8 text-2xl font-semibold text-white bg-pink-500 lg:px-10 lg:py-4 md:text-4xl lg:text-5xl rounded-2xl -order-1"
            >
                {{ data.badge }}
            </p>

            <!-- Subtitle -->
            <p v-motion-w-fade-up-once :delay="800" class="max-w-3xl mx-auto mb-12 text-xl leading-relaxed md:text-2xl">
                {{ data.subtitle }}
            </p>

            <!-- CTA Button -->
            <HomeButton v-motion-w-fade-up-once :delay="400" v-bind="data.ctaButton" type="secondary" class="text-xl" />
        </WebContainer>

        <!-- Floating Elements -->
        <div class="absolute z-10 transform -translate-x-1/2 bottom-10 left-1/2">
            <div v-motion-w-fade-once :delay="1200" class="text-white animate-bounce">
                <MoveDown />
            </div>
        </div>
    </WebSection>
</template>

<script setup lang="ts">
import { MoveDown } from "lucide-vue-next";
import { reactiveOmit } from "@vueuse/core";
import type { LandingHeroData } from "@/components/wedding/types";

interface Props {
    data: LandingHeroData;
}

const { data } = defineProps<Props>();

const currentImageIndex = ref(0);

// Auto-cycle carousel
onMounted(() => {
    const intervalTime = 4000;
    const interval = setInterval(() => {
        currentImageIndex.value = (currentImageIndex.value + 1) % data.carouselImages.length;
    }, intervalTime);

    onUnmounted(() => {
        clearInterval(interval);
    });
});
</script>
