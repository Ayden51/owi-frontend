<script setup lang="ts">
import type { ThankYouData } from "@/components/wedding/types";

const props = defineProps<{
    data: ThankYouData;
}>();

// Default data (for development/preview, API should provide real data)
const defaultData: ThankYouData = {
    backgroundImageUrl: "/images/background/background-2.png",
    thankYouText: "Thank You!",
    illustrationUrl: "/images/bride-groom/bride-groom-1.png",
    illustrationAlt: "Hình minh họa cặp đôi",
};

// Use provided data merged with defaults
const data = computed(() => ({
    ...defaultData,
    ...props.data,
}));
</script>

<template>
    <WebSection class="px-0 lg:px-0">
        <AspectRatio :ratio="3 / 4" class="overflow-hidden">
            <NuxtPicture
                :src="data.backgroundImageUrl"
                alt=""
                loading="lazy"
                class="block object-cover w-full h-full pointer-events-none"
                :img-attrs="{ class: 'w-full h-full' }"
            />
            <!-- Top Floral Decorations -->
            <Motion is="div" v-motion-w-fade-right-once class="absolute inset-0 pointer-events-none">
                <FloralDecoration corner="top-left" image="floral-1" class="w-32 sm:w-48" />
            </Motion>

            <Motion is="div" v-motion-w-fade-left-once :delay="200" class="absolute inset-0 pointer-events-none">
                <FloralDecoration corner="top-right" image="floral-1" class="w-32 sm:w-48" />
            </Motion>

            <Motion is="div" v-motion-w-fade-down-once :delay="300" class="absolute inset-0 pointer-events-none">
                <h2
                    class="absolute w-full text-5xl text-center -translate-x-1/2 font-brittany-signature top-20 sm:top-36 left-1/2 text-primary-dark sm:text-7xl"
                >
                    {{ data.thankYouText }}
                </h2>
            </Motion>

            <NuxtPicture
                v-motion-w-fade-up-once
                :delay="400"
                :src="data.illustrationUrl"
                :alt="data.illustrationAlt"
                class="absolute left-0 right-0 mx-auto pointer-events-none -bottom-20 sm:-bottom-32"
                loading="lazy"
                :img-attrs="{ class: 'w-[105%] max-w-none' }"
            />
        </AspectRatio>
    </WebSection>
</template>
