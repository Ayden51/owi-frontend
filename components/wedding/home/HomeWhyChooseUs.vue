<template>
    <WebSection id="benefits" class="py-16 bg-gradient-to-b from-white to-pink-50">
        <WebContainer>
            <HomeSectionTitle :title="data.title" :subtitle="data.subtitle" />

            <!-- Benefits Grid -->
            <div class="grid max-w-6xl gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
                <Card
                    v-for="(benefit, index) in data.benefits"
                    :key="index"
                    v-motion-w-pop-once
                    :delay="index * 200"
                    class="transition-shadow duration-500 bg-white shadow-lg rounded-2xl hover:shadow-xl group"
                >
                    <CardContent class="flex flex-col items-center p-8">
                        <!-- Benefit Illustration -->
                        <div
                            class="grid w-24 h-24 mb-8 text-pink-500 transition-transform duration-500 transform bg-pink-100 place-items-center rounded-2xl group-hover:scale-110"
                        >
                            <component :is="benefit.icon" :size="48" />
                        </div>

                        <!-- Benefit Content -->
                        <h3 class="mb-2 text-xl font-bold text-center text-gray-800 uppercase">
                            {{ benefit.title }}
                        </h3>
                        <p class="leading-relaxed text-center text-gray-600">
                            {{ benefit.description }}
                        </p>
                    </CardContent>
                </Card>
            </div>

            <!-- CTA Button -->
            <div class="mt-16 text-center">
                <HomeButton v-motion-w-fade-up-once v-bind="data.ctaButton" />
            </div>
        </WebContainer>
    </WebSection>
</template>

<script setup lang="ts">
import type { LandingWhyChooseUsData } from "@/components/wedding/types";

interface Props {
    data: LandingWhyChooseUsData;
}

const { data } = defineProps<Props>();
</script>
