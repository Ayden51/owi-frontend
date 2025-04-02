<script setup lang="ts">
import type { ThankYouData } from "../types/wedding";

const props = defineProps<{
    data: ThankYouData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: ThankYouData = {
    backgroundImageUrl: "/images/background/background-2.png", // Example background from plan
    thankYouText: "Thank You!",
    illustrationUrl: "/images/bride-groom/bride-groom-1.png", // Updated illustration path
    illustrationAlt: "Couple Illustration",
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
}));
</script>

<template>
    <WebSection>
        <AspectRatio :ratio="3 / 4" class="overflow-hidden">
            <NuxtPicture
                :src="data.backgroundImageUrl"
                alt=""
                loading="lazy"
                class="block object-cover w-full h-full pointer-events-none"
                :img-attrs="{ class: 'w-full h-full' }"
            />
            <!-- Top Floral Decorations -->
            <FloralDecoration corner="top-left" image="floral-1" class="w-32 sm:w-48" />
            <FloralDecoration corner="top-right" image="floral-1" class="w-32 sm:w-48" />
            <h2
                class="absolute w-full text-5xl text-center -translate-x-1/2 font-brittany-signature top-20 sm:top-36 left-1/2 text-primary-dark sm:text-7xl"
            >
                {{ data.thankYouText }}
            </h2>
            <NuxtPicture
                :src="data.illustrationUrl"
                :alt="data.illustrationAlt"
                class="absolute left-0 right-0 mx-auto pointer-events-none -bottom-20 sm:-bottom-32"
                loading="lazy"
                :img-attrs="{ class: 'w-[105%] max-w-none' }"
            />
        </AspectRatio>
    </WebSection>
</template>
