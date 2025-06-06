<template>
    <WebSection id="cta" class="py-16 bg-white">
        <WebContainer class="flex justify-center">
            <div class="w-full max-w-6xl p-16 text-center bg-gradient-to-b from-pink-500 to-pink-700 rounded-3xl">
                <h2 class="mb-6 text-3xl font-bold text-white md:text-5xl">{{ data.title }}</h2>
                <p class="max-w-4xl mx-auto mb-8 text-xl leading-relaxed text-white opacity-90">{{ data.subtitle }}</p>

                <div class="text-center">
                    <HomeButton type="secondary" v-bind="data.ctaButton" />
                </div>
            </div>
        </WebContainer>
    </WebSection>
</template>

<script setup lang="ts">
import type { LandingCtaData } from "@/components/wedding/types";

interface Props {
    data: LandingCtaData;
}

const { data } = defineProps<Props>();
</script>
